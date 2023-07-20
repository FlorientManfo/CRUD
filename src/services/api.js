import axios from "axios";

class ProductApi {
  constructor() {
    this.baseUrl = "http://localhost:8080/product";
  }

  getAllProducts = async () => {
    return await axios
      .get(`${this.baseUrl}/get`)
      .then((res) => res.data)
      .catch((err) => err);
  };

  findProductByName = async (name) => {
    return await axios
      .get(`${this.baseUrl}/get?name=${name}`)
      .then((res) => res.data)
      .catch((err) => err);
  };

  deleteProduct = async (id) => {
    return await axios
      .delete(`${this.baseUrl}/delete/${id}`)
      .then((res) => res.data)
      .catch((err) => err);
  };

  createProduct = async (product) => {
    return await axios
      .post(`${this.baseUrl}/create`, product)
      .then((res) => res.data)
      .catch((err) => err);
  };

  updateProduct = async (product) => {
    return await axios
      .put(`${this.baseUrl}/update/${product.id}`, product)
      .then((res) => res.data)
      .catch((err) => err);
  };
}

export default new ProductApi();
