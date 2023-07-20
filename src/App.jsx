import { BrowserRouter as Router } from "react-router-dom";
import Form from "./components/Form";
import Table from "./components/Table";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <div className="flex flex-col md:flex-row w-full p-3 gap-3 items-start justify-center">
          <Form />
          <Table />
        </div>
      </ProductProvider>
    </Router>
  );
};

export default App;
