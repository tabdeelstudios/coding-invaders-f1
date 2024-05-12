import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'
import './InvoiceForm.css'

export default function InvoiceForm() {
  const [newInvoice, setNewInvoice] = useState({})
  const navigate = useNavigate()

  function handleSubmit() {
    newInvoice.items = []
    fetch('http://127.0.0.1:8000/api/invoices/new', {
      method: 'POST',
      body: JSON.stringify(newInvoice),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => navigate('/'))
  }

  return (
    <div className="container">
      <Navbar />
      <div className="mb-3">
        <label hmlFor="name" className="form-label">
          Client Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={newInvoice.client_name}
          onInput={(e) => {
            setNewInvoice({ ...newInvoice, client_name: e.target.value })
          }}
        ></input>
      </div>
      <div className="mb-3">
        <label hmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          value={newInvoice.date}
          onInput={(e) => {
            setNewInvoice({
              ...newInvoice,
              date: e.target.value,
            })
          }}
        ></input>
      </div>

      <button className="btn btn-primary" type="button" onClick={handleSubmit}>
        Create Invoice
      </button>
    </div>
  )
}
