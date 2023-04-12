import Link from "next/link";
import Image from "next/image";
import logo_noir from "../images/logo_noir.png";
import { FaBeer } from "react-icons/fa";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ marginTop: "10px" }}>
        <Image src={logo_noir} alt="Logo noir" width={100} height={60} />
      </div>
    </header>
  );
}

export default Header;
