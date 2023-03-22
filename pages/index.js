import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import ClothingCard from "@/components/Clothing";
import marshmallow_dos from "../images/marshmallow_dos.PNG";
import marshmallow_face from "../images/marshmallow_face.PNG";
import logo_vert from "../images/logo_rose.png";
import logo_rose from "../images/logo_vert.png";
import tshirt from "../images/111.svg";
import TShirt from "@/components/Fade";
import TShirtCard from "@/components/Fade";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <Header></Header>
      </Head>
      <main style={{ marginTop: "40px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TShirtCard></TShirtCard>
          <TShirtCard></TShirtCard>
          <TShirtCard></TShirtCard>
          <TShirtCard></TShirtCard>
        </div>
      </main>
    </>
  );
}
