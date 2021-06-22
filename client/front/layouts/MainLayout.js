import React from "react";

import MainNav from "./MainNav.js";
import MainFooter from "./MainFooter.js";

export const MainLayout = ({ content }) => (
  <div className="main-layout">
    <main>{content}</main>
    <div>
      <MainFooter />
    </div>
  </div>
);
