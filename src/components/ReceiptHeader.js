import React from 'react';

function ReceiptHeader({ storeName, storeAddress, storePhone, date, receiptNumber }) {
  return (
    <div className="receipt-header">
      <h1 className="store-name">{storeName}</h1>
      <p className="store-address">{storeAddress}</p>
      <p className="store-phone">{storePhone}</p>
      <div className="receipt-meta">
        <span className="receipt-date">{date}</span>
        <span className="receipt-number">Receipt #{receiptNumber}</span>
      </div>
      <div className="receipt-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
    </div>
  );
}

export default ReceiptHeader;
