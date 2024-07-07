import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import FooterBg from "../assets/website/coffee-footer.jpg";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Testimoni",
    link: "/#testimoni",
  },
  {
    title: "Produk",
    link: "/#produk",
  },

];

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};
const Footer = () => {
  return (
    <div style={bgImage} className=" text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-30 pt-6">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive">
              Baro cafe
            </a>
            <p className="  pt-4">
              Nikmat Kopi dengan keindahan view muria,Kami mengundang Anda untuk bergabung dengan kami di Baro Cafe dan menikmati pengalaman kopi yang istimewa. Apakah Anda seorang pecinta kopi yang bersemangat atau hanya ingin bersantai di tempat yang menyenangkan dengan teman-teman, kami siap menyambut Anda dengan senyuman hangat dan secangkir kopi yang nikmat.
            </p>
            
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-80">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block hover:scale-105 duration-200"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto md:pl-20">
              <h1 className="text-xl font-semibold sm:text-left mb-3">
                Address
              </h1>
              <div>
                <p className="mb-3">Karang Bener, Kec. Bae, Kab. Kudus</p>
                

                {/* social links */}
                <div className="flex items-center gap-3 mt-7">
                  <a href="https://www.instagram.com/ridho.novan?igsh=MXE1dGY4ZnNtbXM2NQ%3D%3D&utm_source=qr">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="https://www.facebook.com/ridho.i.750?mibextid=LQQJ4d">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
