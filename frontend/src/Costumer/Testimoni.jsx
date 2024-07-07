import React, { useState, useEffect } from "react";
import axios from "axios";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get("http://localhost:5000/testimoni");
      setTestimonialData(response.data);
    } catch (error) {
      console.error("Error fetching testimonials: ", error);
    }
  };

  return (
    <div className="py-10 mb-10" id="testimoni">
      <div className="container">
        <div className="mb-10">
          <h1 className="text-center text-4xl font-bold font-cursive">
            Kata Pelanggan
          </h1>
          <button className="bg-gradient-to-r to-secondary border-2 border-primary hover:scale-105 duration-200 text-black py-2 px-4 rounded-full">
            <a href="https://wa.me/6281386834077">Komentar </a>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <h2 className="text-xl font-bold mb-2">{testimonial.name}</h2>
              <p className="text-gray-600">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
