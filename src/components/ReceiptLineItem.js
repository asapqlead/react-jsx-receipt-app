import React from 'react';

function ReceiptLineItem({ name, quantity, unitPrice }) {
  const totalPrice = (quantity * unitPrice).toFixed(2);

  return (
    <div className="receipt-line-item">
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-qty">x{quantity}</span>
      </div>
      <div className="item-pricing">
        <span className="item-unit-price">@${unitPrice.toFixed(2)}</span>
        <span className="item-total-price">${totalPrice}</span>
      </div>
    </div>
  );
}

export default ReceiptLineItem;
