import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";

const socials = [
  {
    id: 2,
    icon: <FaGithub />,
    link: "#0",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "#0",
  },
  {
    id: 7,
    icon: <FaSkype />,
    link: "#0",
  },
  {
    id: 7,
    icon: <FaTwitter />,
    link: "#0",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="samirvbodhe" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Doting Father Sam</h1>
        <p className="text-sm text-gray-400 mb-3">
          Frontend Web Developer at Self-Employed
        </p>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
        Enthusiastic, Energetic and Self-Employed Web developer to create beautiful, powerful User Experiences. When not busy, he plays Soccer, BasketBall with his son, and reads him stories while tucking him in bed. He believes in sharing and caring over `every`thing.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-blue-100 rounded text-blue-800 flex items-center justify-center hover:text-white hover:bg-blue-600"
      >
        {icon}
      </a>
    </li>
  );
};
