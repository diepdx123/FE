import React, { useEffect, useState } from "react";

function Banner() {
  const images = [
    "https://picsum.photos/id/237/1440/600",
    "https://i.vietgiaitri.com/2021/8/11/huong-dan-cach-lam-doi-cho-ngon-tai-nha-chuan-nhat-bat-bai-971-5951659.jpg",
    "https://dienmaythucpham.com/wp-content/uploads/2022/11/thit-cho-lam-mon-gi-ngon-1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Chuyển ảnh mỗi 3 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default Banner;

// function Banner() {
//   return (
//     <div>
//       <img
//         src="https://picsum.photos/id/237/1440/600"
//         alt=""
//         className="w-full"
//       />
//     </div>
//   );
// }

// export default Banner;
