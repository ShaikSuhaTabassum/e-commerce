// // import React, { useEffect, useState } from 'react';
// // import './ListProduct.css';
// // import cross_icon from '../../assests/cross_icon.png';

// // const ListProduct = () => {
// //   const [allproducts, setAllProducts] = useState([]);

// //   const fetchInfo = async () => {
// //     const res = await fetch('https://e-commerce-n6ap.onrender.com/allproducts');
// //     const data = await res.json();
// //     console.log(data);
// //     setAllProducts(data);
// //   };

// //   useEffect(() => {
// //     fetchInfo();
// //   }, []);

// //   const handleDelete = async (id) => {
// //     const confirmDelete = window.confirm("Are you sure you want to delete this product?");
// //     if (!confirmDelete) return;

// //     try {
// //       const res = await fetch("https://e-commerce-o99z.onrender.com/deleteproduct", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json"
// //         },
// //         body: JSON.stringify({ id })
// //       });

// //       const data = await res.json();
// //       if (data.success) {
// //         setAllProducts((prev) => prev.filter((item) => item.id !== id));
// //       } else {
// //         alert("Failed to delete product");
// //       }
// //     } catch (error) {
// //       console.error("Error deleting product:", error);
// //       alert("Error deleting product");
// //     }
// //   };

// //   return (
// //     <div className='listproduct'>
// //       <h1>All Products List</h1>
// //       <div className="listproduct-format-main">
// //         <p>Products</p>
// //         <p>Title</p>
// //         <p>Old Price</p>
// //         <p>New Price</p>
// //         <p>Category</p>
// //         <p>Remove</p>
// //       </div>
// //       <div className="listproduct-allproducts">
// //         <hr />
// //         {allproducts.map((product, index) => (
// //           <div key={index} className="listproduct-format-main listproduct-format">
// //             <img
// //   src={product.image.startsWith('http') ? product.image : `http://localhost:4000/images/${product.image}`}
// //   alt={product.name}
// //   style={{ width: "80px", height: "80px", objectFit: "cover" }}
// // />

// //             <p>{product.name}</p>
// //             <p>${product.old_price}</p>
// //             <p>${product.new_price}</p>
// //             <p>{product.category}</p>
// //             <img
// //               src={cross_icon}
// //               alt="Remove"
// //               className="listproduct-remove-icon"
// //               onClick={() => handleDelete(product.id)}
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListProduct;
// import React, { useEffect, useState } from 'react';
// import './ListProduct.css';
// import cross_icon from '../../assests/cross_icon.png';

// const ListProduct = () => {
//   const [allproducts, setAllProducts] = useState([]);

//   const fetchInfo = async () => {
//     try {
//       const res = await fetch('https://e-commerce-prt4.onrender.com/allproducts');
//       const data = await res.json();
//       console.log(data);
//       setAllProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this product?");
//     if (!confirmDelete) return;

//     try {
//       const res = await fetch("https://e-commerce-prt4.onrender.com/deleteproduct", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ id })
//       });

//       const data = await res.json();
//       if (data.success) {
//         setAllProducts((prev) => prev.filter((item) => item.id !== id));
//       } else {
//         alert("Failed to delete product");
//       }
//     } catch (error) {
//       console.error("Error deleting product:", error);
//       alert("Error deleting product");
//     }
//   };

//   return (
//     <div className='listproduct'>
//       <h1>All Products List</h1>
//       <div className="listproduct-format-main">
//         <p>Product</p>
//         <p>Title</p>
//         <p>Old Price</p>
//         <p>New Price</p>
//         <p>Category</p>
//         <p>Remove</p>
//       </div>
//       <div className="listproduct-allproducts">
//         <hr />
//         {allproducts.map((product, index) => (
//           <div key={index} className="listproduct-format-main listproduct-format">
//             <img
//   src={
//     product.image.includes("localhost")
//       ? product.image.replace("http://localhost:4000", "https://e-commerce-prt4.onrender.com")
//       : product.image
//   }
//   alt={product.name}
//   style={{ width: "80px", height: "80px", objectFit: "cover" }}
// />


//             <p>{product.name}</p>
//             <p>${product.old_price}</p>
//             <p>${product.new_price}</p>
//             <p>{product.category}</p>
//             <img
//               src={cross_icon}
//               alt="Remove"
//               className="listproduct-remove-icon"
//               onClick={() => handleDelete(product.id)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListProduct;
import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assests/cross_icon.png';
import { useNavigate } from 'react-router-dom';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  const fetchInfo = async () => {
    try {
      const res = await fetch('https://e-commerce-prt4.onrender.com/allproducts');
      const data = await res.json();
      console.log(data);
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      const res = await fetch("https://e-commerce-prt4.onrender.com/deleteproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      });

      const data = await res.json();
      if (data.success) {
        setAllProducts((prev) => prev.filter((item) => item.id !== id));
      } else {
        alert("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Error deleting product");
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-product/${id}`);
  };

  return (
    <div className='listproduct'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Actions</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <div key={index} className="listproduct-format-main listproduct-format">
            <img
              src={
                product.image.includes("localhost")
                  ? product.image.replace("http://localhost:4000", "https://e-commerce-prt4.onrender.com")
                  : product.image
              }
              alt={product.name}
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />

            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => handleEdit(product.id)}
                style={{
                  padding: '5px 10px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Edit
              </button>

              <img
                src={cross_icon}
                alt="Remove"
                className="listproduct-remove-icon"
                onClick={() => handleDelete(product.id)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;

