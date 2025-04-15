import React from 'react';
import { Container, Button } from 'reactstrap';
import banner from '../assets/banner.png';

const Home = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #141e30, #243b55)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem"
      }}
    >
      <Container className="text-center">
        <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
          Selamat Datang di Website Latihan
        </h1>
        <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
          Kami membangun website modern dengan teknologi terkini.
        </p>
        <img
          src={banner}
          alt="Banner"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            marginBottom: "2rem"
          }}
        />
        <div>
          <Button color="light" outline size="lg">
            Mulai Sekarang
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
