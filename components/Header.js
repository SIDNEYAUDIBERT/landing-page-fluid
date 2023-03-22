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
        justifyContent: "space-between",
      }}
    >
      <div>
        <FaBeer style={{ backgroundColor: "black" }} />
      </div>
      <div>
        <Image src={logo_noir} alt="Logo noir" width={100} height={60} />
      </div>
      <div>
        <Image src="" alt="Logo du panier" />
      </div>
    </header>
  );
}

export default Header;
