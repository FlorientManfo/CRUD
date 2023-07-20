import { createContext, useEffect, useState } from "react";
import api from "../services/api";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const asyncGetAll = () => {
    api.getAllProducts().then((data) => {
      setProducts(data.rows);
    });
  };

  const asyncSearch = (name) => {
    if (name == "") {
      asyncGetAll();
      return;
    }
    api.findProductByName(name).then((res) => {
      if (res.count != 0) {
        setProducts(res.rows);
      }
    });
  };

  const asyncDelete = (id) => {
    api.deleteProduct(id).then((res) => {
      api.getAllProducts().then((data) => {
        setProducts(data.rows);
      });
    });
    asyncGetAll();
  };

  const asyncCreate = (product) => {
    api.createProduct(product).then((result) => {
      alert(JSON.stringify(result));
    });
    asyncGetAll();
  };

  const asyncUpdate = (products) => {
    api.updateProduct(products).then((result) => {
      alert(JSON.stringify(result));
    });
    asyncGetAll();
  };

  useEffect(() => {
    asyncGetAll();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        products,
        asyncSearch,
        asyncDelete,
        asyncCreate,
        asyncUpdate,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
