import { FaCalendarAlt } from "react-icons/fa";
import Banner from "../../../components/Banner";
import FooterAds from "../../../components/FooterAds";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Banner />
      <main>
        <section className="max-w-6xl mx-auto mt-16">
          <div className="flex justify-between items-center mb-4">
            <h2 className="fomt-semibold text-[40px]">New Products</h2>
            <Link
              to="#"
              className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500 "
            >
              View all products
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-8">
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
                  <h3 className="font-semibold text-xl">Syltherine</h3>
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
                  <h3 className="font-semibold text-xl">Syltherine</h3>
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
                <Link to="">
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
          </div>
        </section>
        {/*End New Product*/}
        <section className="max-w-6xl mx-auto mt-16">
          <div className="flex justify-between items-center mb-4">
            <h2 className="fomt-semibold text-[40px]">Gallery</h2>
            <Link
              to=""
              className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500 "
            >
              View all gallery
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <img src="./product.jpg" alt="" />
            <img src="./product.jpg" alt="" />
            <img src="./product.jpg" alt="" />
            <img src="./product.jpg" alt="" />
            <img src="./product.jpg" alt="" />
            <img src="./product.jpg" alt="" />
          </div>
        </section>
        {/*End Gallery*/}
        <section className="max-w-6xl mx-auto mt-16">
          <div className="flex justify-between items-center mb-4">
            <h2 className="fomt-semibold text-[40px]">News</h2>
            <Link
              to="#"
              className="border border-solid border-yellow-500 px-4 py-2 font-semibold text-base text-yellow-500 "
            >
              View all news
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div>
              <Link to="#">
                <div>
                  <img src="./product.jpg" alt="" />
                </div>
              </Link>
              <div>
                <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1">
                  <div className="mr-2">
                    <FaCalendarAlt />
                  </div>
                  27/09/2024
                </p>
                <h3 className="font-semibold text-xl mb-3">
                  A bedroom must have something like this
                </h3>
                <Link
                  to=""
                  className="text-red-600 fomt-semibold text-base flex items-center"
                >
                  Xem chi tiết ➜
                </Link>
              </div>
            </div>
            <div>
              <Link to="#">
                <div>
                  <img src="./product.jpg" alt="" />
                </div>
              </Link>
              <div>
                <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1">
                  <div className="mr-2">
                    <FaCalendarAlt />
                  </div>
                  27/09/2024
                </p>
                <h3 className="font-semibold text-xl mb-3">
                  A bedroom must have something like this
                </h3>
                <Link
                  to=""
                  className="text-red-600 fomt-semibold text-base flex items-center"
                >
                  Xem chi tiết ➜
                </Link>
              </div>
            </div>
            <div>
              <Link to="#">
                <div>
                  <img src="./product.jpg" alt="" />
                </div>
              </Link>
              <div>
                <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1">
                  <div className="mr-2">
                    <FaCalendarAlt />
                  </div>
                  27/09/2024
                </p>
                <h3 className="font-semibold text-xl mb-3">
                  A bedroom must have something like this
                </h3>
                <Link
                  to=""
                  className="text-red-600 fomt-semibold text-base flex items-center"
                >
                  Xem chi tiết ➜
                </Link>
              </div>
            </div>
            <div>
              <Link to="#">
                <div>
                  <img src="./product.jpg" alt="" />
                </div>
              </Link>
              <div>
                <p className="text-[#9CA3AF] font-semibold text-SM flex items-center mt-4 mb-1">
                  <div className="mr-2">
                    <FaCalendarAlt />
                  </div>
                  27/09/2024
                </p>
                <h3 className="font-semibold text-xl mb-3">
                  A bedroom must have something like this
                </h3>
                <Link
                  to=""
                  className="text-red-600 fomt-semibold text-base flex items-center"
                >
                  Xem chi tiết ➜
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/*End News*/}
      </main>

      <FooterAds />
    </div>
  );
}

export default HomePage;
