// // import React, { useState, useEffect } from 'react';
// // import './NewCollections.css';
// // import Item from '../Items/Item.jsx';

// // const NewCollections = () => {
// //   const [new_collection, setNew_collection] = useState([]);

// //   useEffect(() => {
// //     const fetchNewCollections = async () => {
// //       try {
// //         const response = await fetch('https://e-commerce-prt4.onrender.com/newcollections');
// //         const data = await response.json();
// //         setNew_collection(data);
// //       } catch (error) {
// //         console.error("Failed to fetch new collections:", error);
// //       }
// //     };

// //     fetchNewCollections();
// //   }, []);

// //   return (
// //     <div id="newcollections">
// //  <div className='newcollections'>
// //       <h1>NEW COLLECTIONS</h1>
// //       <hr />
// //       <div className="collections">
// //         {new_collection.map((item, i) => (
// //           <Item
// //             key={i}
// //             id={item.id}
// //             name={item.name}
// //             image={item.image}
// //             new_price={item.new_price}
// //             old_price={item.old_price}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //     </div>
   
// //   );
// // };

// // export default NewCollections;
// import React, { useEffect, useState } from 'react'
// import './NewCollections.css'
// import Item from '../Items/Item'

// const NewCollections = () => {
//   const [newCollection, setNewCollection] = useState([]);

//   useEffect(() => {
//     fetch('https://e-commerce-prt4.onrender.com/newcollections')
//       .then((response) => response.json())
//       .then((data) => {
//         const updatedData = data.map(item => ({
//           ...item,
//           image: item.image.replace('http://localhost:4000', 'https://e-commerce-prt4.onrender.com')
//         }));
//         setNewCollection(updatedData);
//       });
//   }, []);

//   return (
//     <div className='new-collections'>
//       <h1>NEW COLLECTIONS</h1>
//       <hr />
//       <div className="collections">
//         {newCollection.map((item, i) => (
//           <Item
//             key={i}
//             id={item.id}
//             name={item.name}
//             image={item.image}
//             new_price={item.new_price}
//             old_price={item.old_price}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewCollections;
import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import Item from '../Items/Item'

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch('https://e-commerce-prt4.onrender.com/newcollections')
      .then((response) => response.json())
      .then((data) => {
        const updatedData = data.map(item => ({
          ...item,
          image: item.image.replace('http://localhost:4000', 'https://e-commerce-prt4.onrender.com')
        }));
        setNewCollection(updatedData);
      });
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newCollection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
