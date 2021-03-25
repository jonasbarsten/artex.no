import React from "react";
import SecureNav from "./SecureNav.js";

import "materialize-css/dist/css/materialize.min.css";

export const SecureLayout = ({ content }) => (
  <div>
    <SecureNav />

    <main>{content}</main>
  </div>
);
