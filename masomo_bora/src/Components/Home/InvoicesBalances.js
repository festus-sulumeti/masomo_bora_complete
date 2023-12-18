// InvoicesBalances.js
import React from 'react';
import '../../Style/Home/InvoicesBalances.css';

const InvoicesBalances = () => {
  return (
    <div className="invoices-balances-container">
      <h1>Invoices Balances</h1>
      <div className="invoices-list">
        <div className="invoice-item">
          <p className="invoice-number">Invoice #001</p>
          <p className="invoice-amount">$1,000.00</p>
        </div>
        <div className="invoice-item">
          <p className="invoice-number">Invoice #002</p>
          <p className="invoice-amount">$1,500.00</p>
        </div>
        <div className="invoice-item">
          <p className="invoice-number">Invoice #003</p>
          <p className="invoice-amount">$750.00</p>
        </div>
        {/* Add more invoice items as needed */}
      </div>
    </div>
  );
};

export default InvoicesBalances;
