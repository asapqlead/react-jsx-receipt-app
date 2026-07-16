import React from 'react';
import ReceiptHeader from './ReceiptHeader';
import ReceiptLineItem from './ReceiptLineItem';
import ReceiptFooter from './ReceiptFooter';

function Receipt({ data }) {
  const { store, items, payment } = data;

  // Calculate subtotal from items
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  const taxRate = 0.08;
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount;

  return (
    <div className="receipt">
      <ReceiptHeader
        storeName={store.name}
        storeAddress={store.address}
        storePhone={store.phone}
        date={store.date}
        receiptNumber={store.receiptNumber}
      />

      <div className="receipt-items">
        <div className="items-header">
          <span>Item</span>
          <span>Price</span>
        </div>
        {items.map((item, index) => (
          <ReceiptLineItem
            key={index}
            name={item.name}
            quantity={item.quantity}
            unitPrice={item.unitPrice}
          />
        ))}
      </div>

      <ReceiptFooter
        subtotal={subtotal}
        taxRate={taxRate}
        taxAmount={taxAmount}
        total={total}
        paymentMethod={payment.method}
        cardLastFour={payment.cardLastFour}
      />
    </div>
  );
}

export default Receipt;
