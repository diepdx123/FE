import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  interface Tinh {
    name: string;
    id: string;
  }

  interface Huyen {
    name: string;
    id: string;
  }
  interface Xa {
    name: string;
    id: string;
  }

  const [provinces, setProvince] = useState<Tinh[]>([]);
  const [selectedProvinceId, setSelectedProvinceId] = useState<string | null>(
    null
  );
  const [districts, setDistricts] = useState<Huyen[]>([]);
  const [selectedTownId, setSelectedTownId] = useState<string | null>(null);
  const [town, setTown] = useState<Xa[]>([]);

  useEffect(() => {
    fetch(`https://esgoo.net/api-tinhthanh/1/0.htm`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error === 0) {
          const res = data.data.map((item: Tinh) => ({
            id: item.id,
            name: item.name,
          }));
          setProvince(res);
        } else {
          console.error("Error fetching data:", data.error_text);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    if (selectedProvinceId) {
      fetch(`https://esgoo.net/api-tinhthanh/2/${selectedProvinceId}.htm`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error === 0) {
            const res = data.data.map((item: Huyen) => ({
              id: item.id,
              name: item.name,
            }));
            setDistricts(res);
          } else {
            console.error("Error fetching data:", data.error_text);
          }
        })
        .catch((error) => console.error("Error:", error));
    }
  }, [selectedProvinceId]);

  const handleIdProvince = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinveId = e.target.value;
    console.log("id ting", provinveId);
    setSelectedProvinceId(provinveId);
  };

  useEffect(() => {
    if (selectedTownId) {
      fetch(`https://esgoo.net/api-tinhthanh/3/${selectedTownId}.htm`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error === 0) {
            console.log(data.data, 1111111);
            const res = data.data.map((item: Xa) => ({
              id: item.id,
              name: item.name,
            }));
            setTown(res);
          } else {
            console.error("Error fetching data:", data.error_text);
          }
        });
    }
  }, [selectedTownId]);

  const handleIdTown = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const townId = e.target.value;
    console.log("id huyen:", townId);
    setSelectedTownId(townId);
  };

  return (
    <div>
      <section className="max-w-screen-xl mx-auto">
        <h1 className="font-semibold text-[40px] mt-16 mb-8 px-4 ml-20">
          Billing details
        </h1>
        <div className="max-w-screen-lg mx-auto grid grid-cols-2 gap-10 mb-16">
          <div>
            <form action="">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstname" className="font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="border border-solid border-neutral-300 block w-full outline-none p-2 mt-2"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="font-medium mb-2">
                    {" "}
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="border border-solid border-neutral-300 block w-full outline-none p-2 mt-2"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label htmlFor="district" className="font-medium">
                  tinh
                </label>
                <label htmlFor="province" className="font-medium"></label>
                <div className="p-2 border border-solid border-neutral-300 mt-2">
                  <select
                    name="province"
                    id=""
                    className="block w-full"
                    onChange={handleIdProvince}
                  >
                    <option value="" className="hidden">
                      Chon Tinh Cua Ban
                    </option>
                    {provinces.map((province) => (
                      <option key={province.id} value={province.id}>
                        {province.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="district" className="font-medium">
                  huyen
                </label>
                <div className="p-2 border border-solid border-neutral-300 mt-2">
                  <select
                    name="district"
                    id="district"
                    className="block w-full "
                    onChange={handleIdTown}
                  >
                    <option value="" className="hidden">
                      Chon huyen cua ban
                    </option>

                    {districts.map((district) => (
                      <option key={district.id} value={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="town" className="font-medium">
                  xa
                </label>
                <div className="p-2 border border-solid border-neutral-300 mt-2">
                  <select name="town" id="town" className="block w-full">
                    <option value="" className="hidden">
                      Chon xa cua ban
                    </option>

                    {town.map((town) => (
                      <option key={town.id} value={town.id}>
                        {town.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="street-address" className="font-medium">
                  Street address
                </label>
                <input
                  type="text"
                  name="street-address"
                  className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2"
                />
              </div>

              <div className="mt-8">
                <label htmlFor="zip-code" className="font-medium">
                  ZIP code
                </label>
                <input
                  type="text"
                  name="zip-code"
                  className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2"
                />
              </div>
              <div className="mt-8">
                <label htmlFor="phone" className="font-medium">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2"
                />
              </div>
              <div className="mt-8">
                <label htmlFor="email" className="font-medium">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  className="block w-full p-2 border border-solid border-neutral-300 outline-none mt-2"
                />
              </div>
            </form>
          </div>
          {/* End form */}
          <div>
            <p className="*:font-semibold *:text-2xl flex justify-between">
              <span>Product</span>
              <span>Subtotal</span>
            </p>
            <p className="flex justify-between mt-4">
              <span className="text-neutral-500">
                Asgaard sofa{" "}
                <strong className="font-medium text-black">X1</strong>
              </span>
              <span className="font-medium">25.000.000đ</span>
            </p>
            <p className="flex justify-between mt-4">
              <span>Subtotal</span>
              <span className="font-medium">25.000.000đ</span>
            </p>
            <p className="flex justify-between mt-4 text-yellow-500">
              <span>Total</span>
              <span className="font-bold text-xl text-[#B88E2F">
                25.000.000đ
              </span>
            </p>
            <hr className="my-8 border-[#A3A3A3]" />
            <div>
              <div>
                <input type="radio" name=" payment-method" id="" />
                <span className="font-medium ml-2">Direct Bank Transfer</span>
              </div>
              <p className="text-[#A3A3A3 mt-3]">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </p>
              <div className="my-4">
                <input type="radio" name=" payment-method" id="" />
                <span className="font-medium ml-2 text-[#A3A3A3]">
                  ATM Bank Transfer
                </span>
              </div>
              <div>
                <input type="radio" name=" payment-method" id="" />
                <span className="font-medium ml-2 text-[#A3A3A3]">
                  Cash On Delivery
                </span>
              </div>
            </div>
            {/* end payment method*/}
            <p className="text-[#262626]">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-semibold">privacy policy</span>.
            </p>
            <div className="text-center mt-8">
              <Link
                to=""
                className="border border-solid border-yellow-500 text-yellow-500  inline-block text-center py-2 px-24 hover:bg-yellow-600 hover:text-white"
              >
                Place order
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentPage;
