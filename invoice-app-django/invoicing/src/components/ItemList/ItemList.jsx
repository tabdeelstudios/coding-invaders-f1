export default function ItemList({ invoice, items }) {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Invoice No</th>
            <th scope="col">Description</th>
            <th scope="col">Rate</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((i) => (
              <tr>
                <th>{invoice.invoice_id}</th>
                <td>{i.desc}</td>
                <th>{i.rate}</th>
                <td>{i.quantity}</td>
                <td>{i.rate * i.quantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
