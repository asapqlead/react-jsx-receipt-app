import React from 'react';
import Receipt from './components/Receipt';
import './App.css';

// Sample receipt data
const receiptData = {
  store: {
    name: "React Grocery Mart",
    address: "#278H, Street 201R, Kroalkor Village, Sangkat Kilometer 6, Khan Russey Keo, Phnom Penh, Cambodia",
    phone: "(555) 123-4567",
    date: "July 16, 2026 — 9:30 AM",
    receiptNumber: "RCT-2026-00482"
  },
  items: [
    { name: "Organic Bananas", quantity: 2, unitPrice: 1.29 },
    { name: "Whole Wheat Bread", quantity: 1, unitPrice: 3.49 },
    { name: "Almond Milk (64oz)", quantity: 1, unitPrice: 4.99 },
    { name: "Free-Range Eggs (12ct)", quantity: 1, unitPrice: 5.79 },
    { name: "Avocado", quantity: 3, unitPrice: 1.50 },
    { name: "Greek Yogurt", quantity: 2, unitPrice: 2.99 },
    { name: "Ground Coffee (12oz)", quantity: 1, unitPrice: 9.99 }
  ],
  payment: {
    method: "Visa",
    cardLastFour: "4821"
  }
};

function App() {
  return (
    <div className="App">
      <h2 className="app-title">React JSX Receipt</h2>
      <Receipt data={receiptData} />
    </div>
  );
}

export default App;
