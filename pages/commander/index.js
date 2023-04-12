import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import recto from "../../images/recto.png";
import verso from "../../images/verso.png";

const Commander = () => {
  return (
    <div>
      <Head>
        <Header></Header>
      </Head>
      <main>
        <div
          style={{
            backgroundColor: "black",
            minHeight: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
           
              justifyContent: "space-around",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "150px",
                }}
              >
                <Image
                  src={recto}
                  alt="T-Shirt Front"
                  style={{
                    width: "400px",
                    height: "400px",
                   
                    borderRadius: "10px",
                    backgroundColor: "#AEEBDB",
                    transition: "opacity 0.2s ease-in-out",
                    marginBottom: "10px",
                  }}
                />
                <Image
                  src={verso}
                  alt="T-Shirt Front"
                  style={{
                    width: "400px",
                    height: "400px",
                    marginLeft: "2px",
                    borderRadius: "10px",
                    backgroundColor: "#AEEBDB",
                    transition: "opacity 0.2s ease-in-out",
                  }}
                />
              </div>
            </div>
            <div
              style={{
                marginTop: "150px",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "35px",
                  textAlign: "center",
                }}
              >
                T-shirt
              </p>
              <div
                style={{
                  width: "600px",
                  height: "1px",
                  backgroundColor: "white",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    color: "white",
                    justifyContent: "space-between",
                    marginTop: "50px",
                    fontSize: "1.5rem",
                  }}
                >
                  <p>Prix</p>
                  <p>56,67 €</p>
                </div>
                <h1 style={{ color: "white", textAlign: "center" }}>
                  Commandez
                </h1>

                <div
                  style={{
                    backgroundColor: "white",
                    width: "100%",
                    height: "600px",
                    borderRadius: "10px",
                    marginTop: "30px",
                  }}
                >
                   
                  <div
                    style={{
                      width: "600px",
                      height: "1px",
                      backgroundColor: "black",
                      marginTop: "65px",
                    }}
                  ></div>
                  <div style={{display:'flex',  flexDirection: "column",marginTop: "35px", marginLeft:"100px"}}>
                  <p style={{fontWeight: 'bold', fontSize: "1.2em"}}>Nom </p>
                  <input
                    type="text"
                    style={{
                      padding: "12px",
                      border: "1px solid #bdbdbd",
                      borderRadius: "4px",
                      outline: "none",
                      fontSize: "16px",
                      color: "#333",
                      width: "80%",
                      backgroundColor: "#fff",
                      marginTop: "10px  10px"
                      
                    }}
                  />
                    </div>
                    <div style={{display:'flex',  flexDirection: "column",marginTop: "35px", marginLeft:"100px"}}>
                  <p style={{fontWeight: 'bold', fontSize: "1.2em"}}>Email </p>
                  <input
                    type="text"
                    style={{
                      padding: "12px",
                      border: "1px solid #bdbdbd",
                      borderRadius: "4px",
                      outline: "none",
                      fontSize: "16px",
                      color: "#333",
                      width: "80%",
                      backgroundColor: "#fff",
                      marginTop: "10px  10px"
                      
                    }}
                  />
                    </div>
                    <div style={{display:'flex',  flexDirection: "column",marginTop: "35px", marginLeft:"100px"}}>
                  <p style={{fontWeight: 'bold', fontSize: "1.2em"}}>Adresse </p>
                  <input
                    type="text"
                    style={{
                      padding: "12px",
                      border: "1px solid #bdbdbd",
                      borderRadius: "4px",
                      outline: "none",
                      fontSize: "16px",
                      color: "#333",
                      width: "80%",
                      backgroundColor: "#fff",
                      marginTop: "10px  10px"
                      
                    }}
                  />
                    </div>
                    <div style={{display:'flex',  flexDirection: "column",marginTop: "35px", marginLeft:"100px"}}>
                  <p style={{fontWeight: 'bold', fontSize: "1.2em"}}>Numéro téléphone </p>
                  <input
                    type="text"
                    style={{
                      padding: "12px",
                      border: "1px solid #bdbdbd",
                      borderRadius: "4px",
                      outline: "none",
                      fontSize: "16px",
                      color: "#333",
                      width: "80%",
                      backgroundColor: "#fff",
                      marginTop: "10px  10px"
                      
                    }}
                  />
                    </div>
                    <div style={{display:'flex',  flexDirection: "column",marginTop: "35px", marginLeft:"100px"}}>
                    <div style={{width: "400px", height: "20px"}}>
                    <button style={{width: "100%", padding: "20px", borderRadius: "10px", backgroundColor: "#AEEBDB", border: "2px solid #AEEBDB", color: 'white'}}>Suivant</button>
 </div>
                    </div>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Commander;
