import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { useAlert } from "react-alert";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const alert = useAlert();
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
    api.deleteProduct(id).then((result) => {
      asyncGetAll();
      alert.show(result.message);
    });
    asyncGetAll();
  };

  const asyncCreate = (product) => {
    api.createProduct(product).then((result) => {
      alert.show(result.message);
      asyncGetAll();
    });
    asyncGetAll();
  };

  const asyncUpdate = (product) => {
    api.updateProduct(product).then((result) => {
      alert.show(result.message);
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
