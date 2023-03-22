import Image from "next/image";

function ClothingCard({ name, price, image }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "15px",
        backgroundColor: "green",
        marginLeft: "5px",
      }}
    >
      <Image
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
      />
      <div>
        <p>{name}</p>
        <p>{price} euros khoya</p>
      </div>
    </div>
  );
}

export default ClothingCard;
