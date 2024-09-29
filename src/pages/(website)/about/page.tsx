import React from "react";
import Banner from "../../../components/Banner";
import { SiTransmission } from "react-icons/si";
import { FaRoad } from "react-icons/fa";
import { TiHeartFullOutline } from "react-icons/ti";

const AboutPage = () => {
  return (
    <div>
      <Banner />

      <main>
        <section className="flex py-16 grid grid-cols-3">
          <div className="max-w-screen-xl m-auto text-center mx-12 flex flex-col items-center">
            <div className="mb-4" style={{ width: "100px", height: "100px" }}>
              <SiTransmission style={{ width: "100%", height: "100%" }} />
            </div>
            <div>
              <h3 className="font-bold text-2xl">OUR MISSION</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>

          <div className="max-w-screen-xl m-auto text-center mx-12 flex flex-col items-center">
            <div className="mb-2" style={{ width: "100px", height: "100px" }}>
              <FaRoad style={{ width: "100%", height: "100%" }} />
            </div>
            <div>
              <h3 className="font-bold text-2xl py-4 ">OUR VISION</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>

          <div className="max-w-screen-xl m-auto text-center mx-12 flex flex-col items-center">
            <div className="mb-1" style={{ width: "100px", height: "100px" }}>
              <TiHeartFullOutline style={{ width: "100%", height: "100%" }} />
            </div>
            <div>
              <h3 className="font-bold text-2xl py-4 ">OUR VALUES</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-4 md:mx-16">
          <div className="grid grid-cols-2 md:grid-cols-2 w-full gap-6 mx-auto">
            <div className="w-full">
              <img
                src="https://static.kinhtedothi.vn/w960/images/upload/2021/12/26/thit-cho-trung-quoc-benh-dai.jpg"
                alt=""
                className="w-full h-[408px] object-cover"
              />
            </div>
            <div className="pt-8 ml-2">
              <h2 className="font-bold text-[32px]">ABOUT FURNIRO COMPANY</h2>
              <p className="font-normal mt-4 text-[18px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="font-normal mt-2 text-[18px]">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </section>

        <section className="my-16 ">
          <div className="mb-4 mx-96 ">
            <h2 className="font-bold text-[32px] text-center ">
              WE CREATE NATURAL WOOD FURNITURE AS WELL AS HIGH-QUALITY
            </h2>
          </div>
          <div className="grid grid-cols-4 mx-16 ">
            <div className="overflow-hidden">
              <img
                src="https://imgs.vietnamnet.vn/Images/2013/04/16/15/20130416152419-an-th-t-cho.jpg"
                alt=""
                className="w-[1280px] h-[390px] object-cover hover:scale-125 duration-1000"
              />
            </div>

            <div className="overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="https://tieudung.kinhtedothi.vn/upload_images/images/2017/01/12/tiet-canh.jpg"
                  alt=""
                  className="w-[1280px] h-[390px] object-cover hover:scale-125 duration-1000"
                />
              </div>
            </div>

            <div className="overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="https://product.hstatic.net/200000254773/product/mam_tom_1_7bd2b183d25c47afad36fd2d05c6b71e_master.png"
                  alt=""
                  className="w-[1280px] h-[390px] object-cover hover:scale-125 duration-1000"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="overflow-hidden">
                <img
                  src="https://medlatec.vn/media/22531/content/la-mo-long-chua-benh-duong-ruot-3.jpg"
                  alt=""
                  className="w-[1280px] h-[390px] object-cover hover:scale-125 duration-1000"
                />
              </div>
            </div>
            <div className="overflow-hidden">
              {/* <img src="./assets/images/about5.png" alt="" className="hover:scale-125 duration-1000 "> */}
            </div>

            <div className="overflow-hidden">
              {/* <img src="./assets/images/about6.png" alt="" className="hover:scale-125 duration-1000 "> */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
