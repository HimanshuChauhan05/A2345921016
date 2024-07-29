import React, {useState, useEffect} from "react";
import { getProducts } from "../HandleAPI/api";
// import Link for



function Allproducts() {

//     const [products, setProducts] = useState([]);
//   const [filters, setFilters] = useState({
//     company: 'AMZ',
//     category: 'Laptop',
//     minPrice: 1,
//     maxPrice: 10000,
//     topN: 10,
//   });
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const data = await getProducts(
//         filters.company,
//         filters.category,
//         filters.topN,
//         filters.minPrice,
//         filters.maxPrice
//       );
//       setProducts(data);
//     };
//     fetchProducts();
//   }, [filters, page]);

  return <>

  <Nav/>

  <div className="w-[80%] p-10 pt-[5%] flex flex-wrap gap-6 overflow-x-hidden overflow-y-auto ">

      {filteredproduct && filteredproduct.map((product, index) => (
          <Link key={product.id}
            to={`/Details/${product.id}`}
            className="card p-2 border shadow rounded-md w-[18%] h-[35vh] flex flex-col justify-center items-center"
          >


              <div className="hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-5" 
                  style={{backgroundImage:`url(${product.image})`}}>
              </div>
              <h1>{product.title}</h1>
              
          </Link>
      ))}
  
      
  </div>
</>
}

export default Allproducts;
