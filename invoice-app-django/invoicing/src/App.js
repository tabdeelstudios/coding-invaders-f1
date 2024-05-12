import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InvoiceList from "./components/InvoiceList/InvoiceList";
import InvoiceForm from "./components/InvoiceForm/InvoiceForm";
import InvoiceItems from "./components/InvoiceItems/InvoiceItems";
import ItemForm from "./components/ItemForm/ItemForm";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<InvoiceList />}></Route>
          <Route path="/newInvoice" element={<InvoiceForm />}></Route>
          <Route path="/:id" element={<InvoiceItems />}></Route>
          <Route path="/:id/newItem" element={<ItemForm />}></Route>
          {/* Custom Functionality - Admin Only*/}
          <Route path="/:id/deleteInvoice" element={<DeleteInvoice />}></Route>
          {/* Custom Functionality - All Users*/}
          <Route path="/:id/editInvoice" element={<EditInvoice />}></Route>
          <Route path="/:id/:itemId/editItem" element={<EditItem />}></Route>
          <Route
            path="/:id/:itemID/deleteItem"
            element={<DeleteItem />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
