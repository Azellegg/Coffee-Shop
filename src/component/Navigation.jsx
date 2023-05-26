import React from "react";

const Navigation = () => {
  return (
    <>
      {/* Navigation */}
      <div className="flex items-center pl-[70px] pt-[35px] pr-[70px] justify-between">
        {/* Logo Icon Coffee Brain */}
        <div className="flex items-center">
          <img src="asset/logo.svg" alt="Coffee Brain" className="w-[45px]" />
          <div className="text-white text-[20px] pl-[15px] font-bold">
            Coffee Brain
          </div>
        </div>

        {/* List */}
        <div className="mr-[40px]">
          <div className="flex items-center">
            <ul className="text-white text-[18px] font-light flex items-center gap-[40px] text-center">
              <li className="hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">
                <a href="/Service">Services</a>
              </li>
              <li className="hover:text-amber-700 active:text-amber-700 focus:outline-none focus:ring">
                <a href="/Shop">Shop</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Navigation */}

        {/* Cart */}
        <div className="flex items-center gap-x-20">
          <a href="/Cart">
            <img
              src="asset/Cart.svg"
              alt="Cart"
              className="w-[25px] cursor-pointer"
            />
          </a>
          {/* Sign Up n Sing In */}
          <a href="/Register">
            <div className="bg-white w-[40px] h-[40px] rounded-[100px] flex items-center justify-center gap-[10px] text-[14px] cursor-pointer">
              <img src="asset/User.svg" alt="User" />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
