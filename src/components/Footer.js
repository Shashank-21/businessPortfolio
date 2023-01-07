import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import {
  AiFillPhone,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  const socialMediaHandles = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/shashank-b-r-36a244a6",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/excelirate/",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/Shashank-21",
    },
  ];
  return (
    <div className="bg-blue-100">
      <div className="p-5 w-full flex flex-row justify-around items-start">
        <div className="flex flex-col justify-around items-center ">
          <h4 className="text-xl bold">Quick Links:</h4>
          <Link to="/about" className="text-xl pt-3">
            About
          </Link>
          <Link to="/services" className="text-xl pt-3">
            Services
          </Link>
          <Link to="/contact" className="text-xl pt-3">
            Contact Me
          </Link>
        </div>
        <div>
          <div className="text-xl text-center bold">Profile Links:</div>
          <div className="text-2xl flex flex-row justify-center items-center pt-3">
            {socialMediaHandles.map((handle, i) => {
              return (
                <a
                  className="mx-3 p-3 cursor-pointer"
                  href={handle.link}
                  key={i}
                >
                  {handle.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-xl bold">Contact me:</h4>
          <div className="flex flex-row justify-start text-xl items-center pt-3">
            <AiFillPhone className="mr-5 text-2xl" />
            <AiOutlineWhatsApp className="mr-5 text-2xl" />
            +91-7349172510
          </div>
          <div className="flex flex-row justify-start text-xl items-center pt-3">
            <AiOutlineMail className="mr-5 text-2xl" />
            shashank@excelirate.net
          </div>
        </div>
      </div>
      <div className="w-full text-md flex flex-row justify-center items-center py-5">
        <AiOutlineCopyrightCircle className="text-lg mr-3" />
        2023 Excelirate. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
