import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#262626] text-white pt-16 pb-8">
        <div className="max-w-screen-xl m-auto grid grid-cols-4 gap-8 mb-16 px-8">
          <div className="space-y-4">
            <Link to="#">
              <img src="/logo.svg" alt="logo" />
            </Link>
            <p className="text-sm">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Sitemap</h3>
            <ul className="space-y-2">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Shop</Link>
              </li>
              <li>
                <Link to="">About</Link>
              </li>
              <li>
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link to="">Payment Options</Link>
              </li>
              <li>
                <Link to="">Returns</Link>
              </li>
              <li>
                <Link to="">Payment Options</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-xl">Location</h3>
            <ul className="space-y-2">
              <li>
                <Link to="">support@euphoria.in</Link>
              </li>
              <li>
                <Link to="">Ahmedabad Main Road</Link>
              </li>
              <li>
                <Link to="">Udaipur, India- 313002</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="mx-8" />
        <p className="text-center mt-8 ">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
