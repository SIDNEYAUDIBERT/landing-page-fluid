import tshirt from "../images/111.svg";
import back from "../images/222.svg";
import Image from "next/image";
import React, { useState } from "react";
import recto from "../images/recto.png";
import verso from "../images/verso.png";

const TShirtCard = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ position: "relative" }}
    >
      <Image
        src={recto}
        alt="T-Shirt Front"
        style={{
          width: "400px",
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
          width: "400px",
          height: "400px",
          marginLeft: "2px",
          borderRadius: "10px",
          backgroundColor: "#AEEBDB",
          opacity: isHovering ? 1 : 0,
          transition: "opacity 0.2s ease-in-out",
        }}
      />
    </div>
  );
};

export default TShirtCard;
