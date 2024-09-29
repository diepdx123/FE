import { AiFillTikTok } from "react-icons/ai";
import { CiShare2 } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import Banner from "../../../components/Banner";

const ContactPage = () => {
  return (
    <div>
      <Banner />
      <section className="flex py-16">
        <div className="max-w-screen-xl m-auto grid grid-cols-3 gap-8">
          <div className="flex items-start justify-center ml-20">
            <span className="material-symbols-outlined py-4 px-4 inline-block text-[#CA8A04] font-bold border-2 border-[#CA8A04]">
              <FaMapLocation />
            </span>
            <div className="ml-4">
              <h3 className="font-semibold text-2xl py-4">ADDRESS</h3>
              <p className="text-[#71717A]">
                60/850 Đường Láng, Láng Thượng, Đống Đa, Hà Nội
              </p>
            </div>
          </div>

          <div className="flex items-start justify-center">
            <span className="material-symbols-outlined py-4 px-4 inline-block text-[#CA8A04] font-bold border-2 border-[#CA8A04]">
              <IoMdContact />
            </span>
            <div className="ml-4">
              <h3 className="font-semibold text-xl py-4">CONTACT DETAILS</h3>
              <p className="text-[#71717A]">info@furniro.com</p>
              <p className="text-[#71717A] text-xl font-bold">02056278686</p>
            </div>
          </div>

          <div className="flex items-start justify-center">
            <span className="material-symbols-outlined py-4 px-4 inline-block text-[#CA8A04] font-bold border-2 border-[#CA8A04]">
              <CiShare2 />
            </span>
            <div className="ml-4">
              <h3 className="font-semibold text-xl py-4">SOCIAL NETWORKS</h3>
              <div className="flex text-[#71717A] gap-4">
                <div>
                  <FaFacebook style={{ width: "35px", height: "35px" }} />
                </div>
                <div>
                  <FaInstagram style={{ width: "35px", height: "35px" }} />
                </div>
                <div>
                  <AiFillTikTok style={{ width: "35px", height: "35px" }} />
                </div>
                <div>
                  <FaTwitter style={{ width: "35px", height: "35px" }} />
                </div>
                <div>
                  <FaYoutube style={{ width: "35px", height: "35px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl grid grid-cols-2 mx-auto">
        <div>
          <img src="https://picsum.photos/704/516/?grayscale" alt="" />
        </div>
        <div className="bg-neutral-100 pt-16 pl-8">
          <h2 className="font-semibold text-[20px]">Contact</h2>
          <p className="font-bold text-[40px] "> CONNECT WITH US NOW</p>
          <div>
            <form action="">
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <input
                    type="text"
                    id="firstname"
                    className="w-full p-2 border-0 outline-none"
                    placeholder="First Name"
                  />
                  <div className="border-b border-[#A3A3A3]"></div>
                </div>
                <div>
                  <input
                    type="text"
                    id="lastname"
                    className="w-full p-2 border-0 outline-none"
                    placeholder="Last Name"
                  />
                  <div className="border-b border-[#A3A3A3]"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-2">
                <div>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border-0 outline-none"
                    placeholder="Email"
                  />
                  <div className="border-b border-[#A3A3A3]"></div>
                </div>
                <div>
                  <input
                    type="tel"
                    id="phonenumber"
                    className="w-full p-2 border-0 outline-none"
                    placeholder="Phone Number"
                  />
                  <div className="border-b border-[#A3A3A3]"></div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-2">
                <div>
                  <textarea
                    id="message"
                    className="w-full p-2 border-0 outline-none h-24"
                    placeholder="Message"
                  ></textarea>
                  <div className="border-b border-[#A3A3A3]"></div>
                </div>
              </div>
              <div className="flex justify-start mt-4">
                <button
                  type="submit"
                  className="flex items-center bg-[#CA8A04] text-[#FFFFFF] py-2 px-4"
                >
                  <img
                    src="./assets/images/fa_send-o.png"
                    alt=""
                    className="mr-2"
                  />
                  Send Information
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
