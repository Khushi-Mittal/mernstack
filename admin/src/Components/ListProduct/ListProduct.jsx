// // import React, { useEffect, useState } from "react";
// // import "./ListProduct.css";
// // import cross_icon from '../Assets/cross_icon.png'
// // import { backend_url, currency } from "../../App";

// // const ListProduct = () => {
// //   const [allproducts, setAllProducts] = useState([]);

// //   const fetchInfo = () => {
// //     fetch(`${backend_url}/allproducts`)
// //       .then((res) => res.json())
// //       .then((data) => setAllProducts(data))
// //   }

// //   useEffect(() => {
// //     fetchInfo();
// //   }, [])

// //   const removeProduct = async (id) => {
// //     await fetch(`${backend_url}/removeproduct`, {
// //       method: 'POST',
// //       headers: {
// //         Accept: 'application/json',
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify({ id: id }),
// //     })

// //     fetchInfo();
// //   }

// //   return (
// //     <div className="listproduct">
// //       <h1>All Products List</h1>
// //       <div className="listproduct-format-main">
// //         <p>Products</p> <p>Title</p> <p>Old Price</p> <p>New Price</p> <p>Category</p> <p>Remove</p>
// //       </div>
// //       <div className="listproduct-allproducts">
// //         <hr />
// //         {allproducts.map((e, index) => (
// //           <div key={index}>
// //             <div className="listproduct-format-main listproduct-format">
// //               <img className="listproduct-product-icon" src={backend_url + e.image} alt="" />
// //               <p className="cartitems-product-title">{e.name}</p>
// //               <p>{currency}{e.old_price}</p>
// //               <p>{currency}{e.new_price}</p>
// //               <p>{e.category}</p>
// //               <img className="listproduct-remove-icon" onClick={() => { removeProduct(e.id) }} src={cross_icon} alt="" />
// //             </div>
// //             <hr />
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ListProduct;

import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../Assets/cross_icon.png";
import { backend_url, currency } from "../../App";


const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // const fetchInfo = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(`${backend_url}/allproducts`);

  //     if (!response.ok) {
  //       throw new Error(`Failed to fetch products: ${response.statusText}`);
  //     }

  //     const data = await response.json();
  //     setAllProducts(data);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };

  const fetchInfo = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${backend_url}/allproducts`);
      console.log(backend_url);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.statusText} (status: ${response.status})`);
      }
  
      const data = await response.json();
      setAllProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(`Error fetching products: ${error.message}`);
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      const response = await fetch(`${backend_url}/removeproduct`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) {
        throw new Error(`Failed to remove product: ${response.statusText}`);
      }

      fetchInfo(); // Refresh the product list after removing a product
    } catch (error) {
      console.error("Error removing product:", error);
      alert("Failed to remove product.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p> <p>Title</p> <p>Old Price</p> <p>New Price</p> <p>Category</p> <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((e, index) => (
          <div key={index}>
            <div className="listproduct-format-main listproduct-format">
              <img
                className="listproduct-product-icon"
                src={`${backend_url}${e.image}`}
                alt=""
              />
              <p className="cartitems-product-title">{e.name}</p>
              <p>
                {currency}
                {e.old_price}
              </p>
              <p>
                {currency}
                {e.new_price}
              </p>
              <p>{e.category}</p>
              <img
                className="listproduct-remove-icon"
                onClick={() => removeProduct(e.id)}
                src={cross_icon}
                alt="Remove"
              />
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;

// import React, { useEffect, useState } from "react";
// import "./ListProduct.css";
// import cross_icon from '../Assets/cross_icon.png'
// import { backend_url, currency } from "../../App";

// const ListProduct = () => {
//   const [allproducts, setAllProducts] = useState([]);

//   const fetchInfo = () => {
//     fetch(`${backend_url}/allproducts`)
//       .then((res) => res.json())
//       .then((data) => setAllProducts(data))
//   }

//   useEffect(() => {
//     fetchInfo();
//   }, [])

//   const removeProduct = async (id) => {
//     await fetch(`${backend_url}/removeproduct`, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ id: id }),
//     })

//     fetchInfo();
//   }

//   return (
//     <div className="listproduct">
//       <h1>All Products List</h1>
//       <div className="listproduct-format-main">
//         <p>Products</p> <p>Title</p> <p>Old Price</p> <p>New Price</p> <p>Category</p> <p>Remove</p>
//       </div>
//       <div className="listproduct-allproducts">
//         <hr />
//         {allproducts.map((e, index) => (
//           <div key={index}>
//             <div className="listproduct-format-main listproduct-format">
//               <img className="listproduct-product-icon" src={backend_url + e.image} alt="" />
//               <p className="cartitems-product-title">{e.name}</p>
//               <p>{currency}{e.old_price}</p>
//               <p>{currency}{e.new_price}</p>
//               <p>{e.category}</p>
//               <img className="listproduct-remove-icon" onClick={() => { removeProduct(e.id) }} src={cross_icon} alt="" />
//             </div>
//             <hr />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ListProduct;
