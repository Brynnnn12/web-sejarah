import Link from "next/link";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

const socials = [
  { icon: <FaFacebookF />, path: "https://www.facebook.com" },
  { icon: <FaInstagram />, path: "https://www.instagram.com" },
  { icon: <FaTwitter />, path: "https://twitter.com" },
  { icon: <FaGoogle />, path: "https://plus.google.com" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      <p className="text-black font-semibold my-4">Share this article on:</p>
      <div className="flex space-x-4">
        {socials.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
