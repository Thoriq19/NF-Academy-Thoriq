import React from 'react';
import { Container } from 'reactstrap';
import banner from '../assets/banner.png'; // 

const Home = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", margin: 0, padding: 0 }}
    >
      <div className="text-center w-100">
        <h1>Selamat Datang di website latihan saya</h1>
        <p>saya membangun web modern dengan teknologi terkini.</p>
        <img 
          src={banner} 
          alt="Banner" 
          style={{ maxWidth: "75%", height: "auto", marginTop: "20px" }} 
        />
      </div>
    </Container>
  );
};

export default Home;
