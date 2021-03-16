import React from "react";
import SecureNav from "./SecureNav.js";

export const SecureLayout = ({ content }) => (
  <div>
    <SecureNav />

    <main>{content}</main>
  </div>
);
