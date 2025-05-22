import React, { useState } from 'react';

const Register: React.FC = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    passwordHash: '',
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        alert('Registration failed');
        return;
      }
      alert('Registration successful!');
    } catch (error) {
      alert('An error occurred');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" value={form.username} onChange={handleChange} placeholder="Username" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required type="email" />
      <input name="passwordHash" value={form.passwordHash} onChange={handleChange} placeholder="Password" required type="password" />
      <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
