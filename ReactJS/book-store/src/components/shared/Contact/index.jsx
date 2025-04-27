import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan berhasil dikirim!');
    setForm({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form onSubmit={handleSubmit} className="card p-4 shadow-sm rounded-3">
            <div className="mb-3">
              <label htmlFor="name" className="form-label fw-bold">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label fw-bold">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                placeholder="Type your message here..."
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
