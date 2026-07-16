import React from "react";
import {createRoot} from "react-dom/client";
import Receipt from "./components/Receipt";
import data from "./data/receiptData.json";

const root = createRoot(document.getElementById("root"));
root.render(<Receipt data={data} />);
