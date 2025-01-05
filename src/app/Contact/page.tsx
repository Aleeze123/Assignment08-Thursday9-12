"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Your message has been sent!');
  };
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg mt-16">
      <div className="flex items-center justify-center mb-8">
        <div className="w-1/4 border-b-2 border-gray-300"></div>
        <h1 className="text-5xl font-bold mx-4 text-center">Get In Touch</h1>
        <div className="w-1/4 border-b-2 border-gray-300"></div>
      </div>
      <p className="text-lg text-center mb-8">Send us your questions, comments, or suggestions!</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Subject:</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-white focus:border-white"
            rows={4}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="inline-flex justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
export default Contact;
