import React from 'react';

function ReceiptFooter({ subtotal, taxRate, taxAmount, total, paymentMethod, cardLastFour }) {
  return (
    <div className="receipt-footer">
      <div className="receipt-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
      <div className="receipt-summary">
        <div className="summary-line">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-line">
          <span>Tax ({(taxRate * 100).toFixed(1)}%)</span>
          <span>${taxAmount.toFixed(2)}</span>
        </div>
        <div className="receipt-divider-thin">──────────────────────────────</div>
        <div className="summary-line total-line">
          <span>TOTAL</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <div className="receipt-divider">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
      <div className="payment-info">
        <p>Paid with {paymentMethod} ending in {cardLastFour}</p>
      </div>
      <div className="receipt-thank-you">
        <p>Thank you for your purchase!</p>
      </div>
    </div>
  );
}

export default ReceiptFooter;
