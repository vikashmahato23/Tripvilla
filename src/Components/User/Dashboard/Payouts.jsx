import React from "react";
import { Footer } from "./Footer";
import style from "./Properties.module.css";

export const Payouts = () => {
  return (
    <div>
      <div>
        <div style={{ padding: 10, marginTop: "3%" }}>
          <p style={{ fontSize: "1.5rem" }}>Sorry there are no payouts</p>
        </div>
        <Footer />
      </div>
    </div>
  );
};
