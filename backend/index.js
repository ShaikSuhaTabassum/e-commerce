const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const bcrypt = require("bcrypt");

app.use(express.json());

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


mongoose.connect("mongodb+srv://suhatabassum0786:Suha7868@cluster0.4hoyc6f.mongodb.net/")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.use('/images', express.static(path.join(__dirname, 'upload/images')));

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });

app.post("/upload", upload.single('product'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, error: "No file uploaded" });
  }

  const imageURL = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`;

  res.json({
    success: true,
    image_url: imageURL
  });
});

const Product = mongoose.model("Product", {
  id: { type: Number, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true },
});

app.post('/addproduct', async (req, res) => {
  const products = await Product.find({});
  const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  try {
    const product = new Product({
      id,
      name: req.body.name,
      image: req.body.image,
      category: req.body.category,
      new_price: req.body.new_price,
      old_price: req.body.old_price,
    });

    await product.save();
    console.log("Product Saved:", product);

    res.json({ success: true, name: req.body.name });
  } catch (err) {
    console.error("Error saving product:", err);
    res.status(500).json({ success: false, error: "Product save failed" });
  }
});

app.post('/deleteproduct', async (req, res) => {
  const { id } = req.body;

  try {
    const deletedProduct = await Product.findOneAndDelete({ id });
    if (!deletedProduct) {
      return res.status(404).json({ success: false, error: "Product not found" });
    }

    res.json({ success: true, message: `Product with id ${id} deleted` });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ success: false, error: "Product delete failed" });
  }
});

app.get('/allproducts', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ success: false, error: "Failed to fetch products" });
  }
});

const Users = mongoose.model("Users", {
  name: { type: String },
  email: { type: String, unique: true },
  password: { type: String },
  cartData: { type: Object },
  date: { type: Date, default: Date.now },
});

app.post('/signup', async (req, res) => {
  const existingUser = await Users.findOne({ email: req.body.email });
  if (existingUser) {
    return res.status(400).json({
      success: false,
      error: "Email already registered."
    });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');
  res.json({ success: true, token });
});

app.post('/login', async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });

  if (user && req.body.password === user.password) {
    const token = jwt.sign({ user: { id: user.id } }, 'secret_ecom');
    return res.json({ success: true, token });
  }

  return res.json({ success: false, error: "Invalid credentials" });
});

app.get('/newcollections', async (req, res) => {
  const products = await Product.find({});
  const newcollection = products.slice(-8);
  res.send(newcollection);
});

app.get('/popularinwomen', async (req, res) => {
  try {
    const products = await Product.find({
      category: { $regex: /^women$/i }
    });

    const popular_in_women = products.slice(0, 4);
    res.json(popular_in_women);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send({ errors: 'Please authenticate using a valid token' });
  }

  try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ errors: 'Invalid token' });
  }
};
app.post('/addtocart', fetchUser, async (req, res) => {
  const userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send('Added');
});

app.post('/removefromcart', fetchUser, async (req, res) => {
  const userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0) {
    userData.cartData[req.body.itemId] -= 1;
  }
  await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send('Removed');
});

app.post('/getcart', fetchUser, async (req, res) => {
  const userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});
app.post('/clearcart', fetchUser, async (req, res) => {
  try {
    const userData = await Users.findOne({ _id: req.user.id });

    // Reset cartData to 0 for all product IDs
    let newCart = {};
    for (let i = 0; i < 300; i++) {
      newCart[i] = 0;
    }

    userData.cartData = newCart;

    await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: newCart });

    res.json({ success: true, message: "Cart cleared" });
  } catch (err) {
    console.error("Error clearing cart:", err);
    res.status(500).json({ success: false, error: "Failed to clear cart" });
  }
});




app.listen(port, (error) => {
  if (!error) {
    console.log(`Server Running at http://localhost:${port}`);
  } else {
    console.error("Error starting server:", error);
  }
});
