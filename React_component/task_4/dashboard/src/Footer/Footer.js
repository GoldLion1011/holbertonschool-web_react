import React from "react";
import "./Footer.css";
import { checkIsIndex, getFooterCopy, getFullYear } from "../utils/utils";


const Footer = () => (
  <div className="App-footer">
    <p>Copyright {getFullYear()} - {getFooterCopy(checkIsIndex())}</p>
  </div>
);

export default Footer;
