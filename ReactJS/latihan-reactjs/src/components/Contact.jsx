import React, { useState } from "react";
import {Container, Form, FormGroup, Label, Input, Button,} from "reactstrap";

const Contact = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // mencegah reload halaman

    // Tampilkan alert setelah submit
    alert("Pesan berhasil dikirim!\n\n" +
          `Nama: ${nama}\nEmail: ${email}\nPesan: ${pesan}`);

    // Reset form
    setNama("");
    setEmail("");
    setPesan("");
  };

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: "calc(100vh - 56px)" }}
    >
      <h2 className="mb-4">Hubungi Kami</h2>
      <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "500px" }}>
        <FormGroup>
          <Label for="nama">Nama</Label>
          <Input
            type="text"
            id="nama"
            placeholder="Masukkan nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Masukkan email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="pesan">Pesan</Label>
          <Input
            type="textarea"
            id="pesan"
            placeholder="Masukkan pesan"
            rows={5}
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            required
          />
        </FormGroup>
        <Button color="primary" block type="submit">
          Kirim
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
