import React from 'react';
import './Catalog.css';

const Catalog = () => {
  // Sample data with 6 rows
  const data = [
    { sno: 1, bookName: 'Book One', renewalDate: '2024-08-01', returnDate: '2024-08-15', fine: '$0' },
    { sno: 2, bookName: 'Book Two', renewalDate: '2024-07-15', returnDate: '2024-07-30', fine: '$5' },
    { sno: 3, bookName: 'Book Three', renewalDate: '2024-06-01', returnDate: '2024-06-15', fine: '$2' },
    { sno: 4, bookName: 'Book Four', renewalDate: '2024-05-20', returnDate: '2024-06-05', fine: '$0' },
    { sno: 5, bookName: 'Book Five', renewalDate: '2024-04-10', returnDate: '2024-04-25', fine: '$3' },
    { sno: 6, bookName: 'Book Six', renewalDate: '2024-03-01', returnDate: '2024-03-15', fine: '$1' },
  ];

  // Calculate total fine
  const totalFine = data.reduce((sum, item) => sum + parseFloat(item.fine.replace('$', '')), 0);

  return (
    <div className='catalog-container'>
        <h2>Catalog</h2>
        <br />
      <div className='catalog-main'>
        <table className='catalog-table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Book Name</th>
              <th>Renewal Date</th>
              <th>Return Date</th>
              <th>Fine</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.sno}>
                <td>{item.sno}</td>
                <td>{item.bookName}</td>
                <td>{item.renewalDate}</td>
                <td>{item.returnDate}</td>
                <td>{item.fine}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='total-fine-card'>
          <h3>Total Fine</h3>
          <p>${totalFine.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default Catalog;
