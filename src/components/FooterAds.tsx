import { BsCheck2Square } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";

const FooterAds = () => {
  return (
    <div>
      <section className="bg-[#FFF7ED] py-16 mt-16 h-[186px] ">
        <div className="max-w-screen-xl grid grid-cols-4 gap-8 ">
          <div className="flex gap-5 ml-[90px]">
            <div className="" style={{ width: "42px", height: "48px" }}>
              <TfiCup style={{ width: "100%", height: "100%" }} />
            </div>
            <div>
              <h3 className="font-semibold text-xl">High Quality</h3>
              <p className="text-[#898989]">Crafted from top materials</p>
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="" style={{ width: "42px", height: "48px" }}>
              <MdSupportAgent style={{ width: "100%", height: "100%" }} />
            </div>

            <div>
              <h3 className="font-semibold text-xl">24 / 7 Support</h3>
              <p className="text-[#898989]">Dedicated support</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="" style={{ width: "42px", height: "48px" }}>
              <BsCheck2Square style={{ width: "100%", height: "100%" }} />
            </div>

            <div>
              <h3 className="font-semibold text-xl">Warranty Protection</h3>
              <p className="text-[#898989]">Over 2 years</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="" style={{ width: "42px", height: "48px" }}>
              <FaShippingFast style={{ width: "100%", height: "100%" }} />
            </div>
            <div>
              <h3 className="font-semibold text-xl">Free Shipping </h3>
              <p className="text-[#898989]">Order over 150 $</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterAds;
