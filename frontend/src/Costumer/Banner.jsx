import React, { useState, useEffect } from "react";
import BannerImg from "../assets/coffee-white.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import axios from "axios";

const Banner = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState(""); // State untuk menyimpan teks dari endpoint /text

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/massage");
        // Mengambil hanya teks dari respons dan mengatur pesan
        const messageTexts = response.data.map((message) => message.text);
        setMessages(messageTexts);
      } catch (error) {
        console.error("Error fetching messages: ", error);
      }
    };

    fetchMessages();

    // Setel interval untuk mengubah pesan setiap 3 detik
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    // Bersihkan interval pada pembongkaran komponen
    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    const fetchText = async () => {
      try {
        const response = await axios.get("http://localhost:5000/text");
        setText(response.data.content);
      } catch (error) {
        console.error("Error fetching text: ", error);
      }
    };

    fetchText();
  }, []);

  return (
    <>
      <span id="about"></span>
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Image section */}
            <div data-aos="zoom-in">
              <img
                src={BannerImg}
                alt="biryani img"
                className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
              />
            </div>
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-cursive"
              >
                BARO CAFE
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5"
              >
                {text} {/* Tampilkan teks di sini */}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-5">
                  <div data-aos="fade-up" className="flex items-center gap-3">
                    <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                    <span>Nyaman dan Aman</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex items-center gap-3"
                  >
                    <IoFastFood className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-100 " />
                    <span>Hot Coffee</span>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="flex items-center gap-3"
                  >
                    <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                    <span>Cold Coffee</span>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="border-l-4 border-primary/50 pl-6 space-y-2"
                >
                  <h1 className="text-2xl font-semibold font-cursive ">
                    Message
                  </h1>
                  {/* Menampilkan pesan yang diatur oleh messageIndex */}
                  <p className="text-sm text-gray-500">
                    {messages.length > 0 && messages[messageIndex]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
