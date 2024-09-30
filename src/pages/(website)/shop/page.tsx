import React from "react";
import Banner from "../../../components/Banner";
import { Link } from "react-router-dom";

const ShopPage = () => {
  return (
    <div>
      <Banner />

      <main>
        <section className=" max-w-6xl mx-auto grid grid-cols-12 gap-8 mt-16">
          <div className="col-span-3">
            <h2 className="font-semibold text-xl mb-4">Categories</h2>
            <ul>
              <li className="text-yellow-600 font-medium mb-2">
                <Link to="#">Cafe Chair</Link>
              </li>
              <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600">
                <Link to="#">Sofa</Link>
              </li>
              <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600">
                <Link to="#">Lamp</Link>
              </li>
              <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600">
                <Link to="#">Carpet</Link>
              </li>
              <li className="font-medium text-[#737373] mb-2 hover:text-yellow-600">
                <Link to="#">Cabinet</Link>
              </li>
              <li className="font-medium text-[#737373]  hover:text-yellow-600">
                <Link to="#">Tea table</Link>
              </li>
            </ul>
          </div>
          {/*End Categories*/}
          <div className=" col-span-9 ">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="overflow-hidden">
                  <Link to="#">
                    <img
                      src="./product.jpg"
                      alt=""
                      className="hover:scale-125 duration-1000 "
                    />
                  </Link>
                </div>
                <div className="bg-[#F5F5F5] p-4">
                  <Link to="#">
                    <h3 className="font-semibold text-xl">Syltherine</h3>
                  </Link>
                  <p className="text-[#898989] text-base mt-1 mb-2">
                    Stylish cafe chair
                  </p>
                  <p className="font-semibold text-xl text-red-600 mb-3">
                    2.500.000đ
                  </p>
                  <Link to="/cart">
                    <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="overflow-hidden">
                  <Link to="#">
                    <img
                      src="./product.jpg"
                      alt=""
                      className="hover:scale-125 duration-1000 "
                    />
                  </Link>
                </div>
                <div className="bg-[#F5F5F5] p-4">
                  <Link to="#">
                    <h3 className="font-semibold text-xl">Leviosa</h3>
                  </Link>
                  <p className="text-[#898989] text-base mt-1 mb-2">
                    Stylish cafe chair
                  </p>
                  <p className="font-semibold text-xl text-red-600 mb-3">
                    1.800.000đ
                  </p>
                  <Link to="/cart">
                    <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="overflow-hidden">
                  <Link to="#">
                    <img
                      src="./product.jpg"
                      alt=""
                      className="hover:scale-125 duration-1000 "
                    />
                  </Link>
                </div>
                <div className="bg-[#F5F5F5] p-4">
                  <Link to="#">
                    <h3 className="font-semibold text-xl">Lolito</h3>
                  </Link>

                  <p className="text-[#898989] text-base mt-1 mb-2">
                    Luxury big sofa
                  </p>
                  <p className="font-semibold text-xl text-red-600 mb-3">
                    2.000.000đ
                  </p>
                  <Link to="/cart">
                    <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="overflow-hidden">
                  <Link to="#">
                    <img
                      src="./product.jpg"
                      alt=""
                      className="hover:scale-125 duration-1000 "
                    />
                  </Link>
                </div>
                <div className="bg-[#F5F5F5] p-4">
                  <h3 className="font-semibold text-xl">Respira</h3>
                  <p className="text-[#898989] text-base mt-1 mb-2">
                    Outdoor bar table and stool
                  </p>
                  <p className="font-semibold text-xl text-red-600 mb-3">
                    4.500.000đ
                  </p>
                  <Link to="/cart">
                    <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="overflow-hidden">
                  <Link to="#">
                    <img
                      src="./product.jpg"
                      alt=""
                      className="hover:scale-125 duration-1000 "
                    />
                  </Link>
                </div>
                <div className="bg-[#F5F5F5] p-4">
                  <Link to="#">
                    <h3 className="font-semibold text-xl">Syltherine</h3>
                  </Link>
                  <p className="text-[#898989] text-base mt-1 mb-2">
                    Stylish cafe chair
                  </p>
                  <p className="font-semibold text-xl text-red-600 mb-3">
                    2.500.000đ
                  </p>
                  <Link to="/cart">
                    <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="overflow-hidden">
                  <Link to="#">
                    <img
                      src="./product.jpg"
                      alt=""
                      className="hover:scale-125 duration-1000 "
                    />
                  </Link>
                </div>
                <div className="bg-[#F5F5F5] p-4">
                  <Link to="#">
                    <h3 className="font-semibold text-xl">Leviosa</h3>
                  </Link>
                  <p className="text-[#898989] text-base mt-1 mb-2">
                    Stylish cafe chair
                  </p>
                  <p className="font-semibold text-xl text-red-600 mb-3">
                    1.800.000đ
                  </p>
                  <Link to="/cart">
                    <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="overflow-hidden">
                  <Link to="#">
                    <img
                      src="./product.jpg"
                      alt=""
                      className="hover:scale-125 duration-1000 "
                    />
                  </Link>
                </div>
                <div className="bg-[#F5F5F5] p-4">
                  <Link to="#">
                    <h3 className="font-semibold text-xl">Lolito</h3>
                  </Link>
                  <p className="text-[#898989] text-base mt-1 mb-2">
                    Luxury big sofa
                  </p>
                  <p className="font-semibold text-xl text-red-600 mb-3">
                    2.000.000đ
                  </p>
                  <Link to="/cart">
                    <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="overflow-hidden">
                  <Link to="#">
                    <img
                      src="./product.jpg"
                      alt=""
                      className="hover:scale-125 duration-1000 "
                    />
                  </Link>
                </div>
                <div className="bg-[#F5F5F5] p-4">
                  <h3 className="font-semibold text-xl">Respira</h3>
                  <p className="text-[#898989] text-base mt-1 mb-2">
                    Outdoor bar table and stool
                  </p>
                  <p className="font-semibold text-xl text-red-600 mb-3">
                    4.500.000đ
                  </p>
                  <Link to="/cart">
                    <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <div className="overflow-hidden">
                  <Link to="#">
                    <img
                      src="./product.jpg"
                      alt=""
                      className="hover:scale-125 duration-1000 "
                    />
                  </Link>
                </div>
                <div className="bg-[#F5F5F5] p-4">
                  <Link to="#">
                    <h3 className="font-semibold text-xl">Syltherine</h3>
                  </Link>
                  <p className="text-[#898989] text-base mt-1 mb-2">
                    Stylish cafe chair
                  </p>
                  <p className="font-semibold text-xl text-red-600 mb-3">
                    2.500.000đ
                  </p>
                  <Link to="/cart">
                    <button className=" border border-solid border-yellow-700 text-yellow-700 w-full fomt-semibold text-base-16 py-2 hover:bg-yellow-700 hover:text-white">
                      Add to cart
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/*End product*/}
            <div className="mt-8">
              <Link
                to="#"
                className="mr-2 py-2 px-4 bg-yellow-600 inline-block text-white font-bold rounded-md"
              >
                1
              </Link>
              <Link
                to="#"
                className="mr-2 py-2 px-4 bg-[#A3A3A3] inline-block text-white font-bold rounded-md"
              >
                2
              </Link>
              <Link
                to="#"
                className="mr-2 py-2 px-4 bg-[#A3A3A3] inline-block text-white font-bold rounded-md"
              >
                3
              </Link>
              <Link
                to="#"
                className="mr-2 py-2 px-4 bg-[#A3A3A3] inline-block text-white font-bold rounded-md"
              >
                Next
              </Link>
            </div>
            {/*End Pagination*/}
          </div>
        </section>
        <section className="bg-[#FFF7ED] py-16 mt-16">
          <div className="max-w-screen-xl m-auto grid grid-cols-4">
            <div className="flex gap-5">
              <img src="./assets/images/quality.png" alt="" />
              <div>
                <h3 className="font-semibold text-xl">High Quality</h3>
                <p className="text-[#898989]">Crafted from top materials</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="./assets/images/support.png" alt="" />
              <div>
                <h3 className="font-semibold text-xl">24 / 7 Support</h3>
                <p className="text-[#898989]">Dedicated support</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="./product" alt="" />
              <div>
                <h3 className="font-semibold text-xl">Warranty Protection</h3>
                <p className="text-[#898989]">Over 2 years</p>
              </div>
            </div>
            <div className="flex gap-5">
              <img src="./product" alt="" />
              <div>
                <h3 className="font-semibold text-xl">Free Shipping </h3>
                <p className="text-[#898989]">Order over 150 $</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShopPage;
