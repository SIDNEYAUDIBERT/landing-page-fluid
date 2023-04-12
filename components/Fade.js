import tshirt from "../images/111.svg";
import back from "../images/222.svg";
import Image from "next/image";
import React, { useState } from "react";
import recto from "../images/recto.png";
import verso from "../images/verso.png";
import { useRouter } from "next/router";

const TShirtCard = () => {
  const [isHovering, setIsHovering] = useState(false);
  const router = useRouter();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleRedirect = () => {
    router.push("/commander");
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        position: "relative",
        height: "470px",
        backgroundColor: "#AEEBDB",
        borderRadius: "10px",
      }}
    >
      <Image
        src={recto}
        alt="T-Shirt Front"
        style={{
          width: "350px",
          height: "400px",
          marginLeft: "2px",
          borderRadius: "10px",
          backgroundColor: "#AEEBDB",
          opacity: isHovering ? 0 : 1,
          transition: "opacity 0.2s ease-in-out",
        }}
      />
      <Image
        src={verso}
        alt="T-Shirt Back"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "350px",
          height: "400px",
          marginLeft: "2px",
          borderRadius: "10px",
          backgroundColor: "#AEEBDB",
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
        }}
      />
      <div style={{ borderRadius: "10px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px",
          }}
        >
          <div>
            <p style={{ fontWeight: "bold" }}>T_shirt</p>
            <p style={{ marginTop: "10px" }}> 60 €</p>
          </div>
          <div
            style={{
              borderRadius: "5px",
              border: "1px solid white",
              padding: "10px",
            }}
          >
            <button
              style={{
                border: "none",
                background: "none",
                color: "black",
                cursor: "pointer",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onClick={handleRedirect}
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtCard;
