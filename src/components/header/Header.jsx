import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/download (15).png";
function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: ".5rem",
            borderRadius: "5px",
          }}
          onClick={()=> setMenuOpened (true)}
        >
          <img
            src={Bars}
            alt=""
            className="Bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={()=>setMenuOpened(false)}>Home</li>
          <li onClick={()=>setMenuOpened(false)}>Programs</li>
          <li onClick={()=>setMenuOpened(false)}>Why us</li>
          <li onClick={()=>setMenuOpened(false)}>Plans</li>
          <li onClick={()=>setMenuOpened(false)}>Testimonils</li>
        </ul>
      )}
    </div>
  );
}

export default Header;
