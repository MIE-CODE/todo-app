import React, { useState } from "react";
import todo from "./components/images/unsplash_qWFMm1iRJkM.png";
import logo from "./components/images/logo.png";
import { BiUserCircle } from "react-icons/bi";
import { IoIosCheckmark } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Login = () => {
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleCheck = () => {
    if (!check) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);

    console.log(e);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.log(error);
    }
    console.log(password, email);
  };
  return (
    <div className="flex w-[1040px] mx-auto mt-[88px] shadow-xl shadow-black/10">
      <div className="flex items-center w-[437px] h-[647px] bg-no-repeat bg-contain bg-[url('./components/images/login-design.png')] pl-[10px]">
        <div>
          {" "}
          <img src={todo} alt="images" />
          <p className="flex flex-col items-center text-[36px] font-bold text-white ">
            Do something great<span className="text-[#68D75F]">Today</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-col  items-center">
          <img src={logo} alt="logo" />
          <p className="text-[32px] font-medium">
            Welcome! pls log in to your page
          </p>
        </div>
        <form
          className="flex flex-col gap-6 mt-[52px] "
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-1 text-2xl   px-[10px] text-white bg-[#356631] rounded-[20px] h-11">
            <BiUserCircle />
            <input
              onChange={handleEmail}
              className=" w-full text-base font-medium bg-transparent outline-none placeholder:text-white"
              type="text"
              name="username"
              placeholder="User"
              required
            />
          </div>
          <div className="flex items-center gap-1 text-2xl   px-[10px] text-white bg-[#356631] rounded-[20px] h-11">
            <BiUserCircle />
            <input
              onChange={handlePassword}
              className=" w-full text-base font-medium bg-transparent outline-none placeholder:text-white"
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete=""
            />
          </div>
          <div className="flex justify-between text-[#D9D9D9]">
            <div
              onClick={handleCheck}
              className="flex items-center gap-1  active:text-[#b5b2b2] trasition duration-300 ease-in-out  cursor-pointer"
            >
              <div className="relative ">
                <MdOutlineCheckBoxOutlineBlank />
                {check ? <IoIosCheckmark className="absolute top-0" /> : ""}
              </div>
              Remember
            </div>{" "}
            <a
              className="hover:text-[#b5b2b2] active:text-[#D9D9D9] trasition duration-300 ease-in-out "
              href="#/"
            >
              Forgot password?
            </a>{" "}
          </div>
          <button className="  border text-[20px] text-[#2C46D4] border-[#2C46D4] active:bg-[#2C46D4]/10 rounded-[20px] h-[39px] w-[352px] mx-auto text-center transition duration-200 ease-in-out ">
            Sign Up
          </button>
        </form>
        <div className="flex  justify-center items-center gap-6 mt-5 text-black/50 font-medium">
          <div className=" h-[1px] w-[40%] bg-[#D9D9D9]"></div>
          <p>OR</p>
          <div className=" h-[1px] w-[40%] bg-[#D9D9D9]"></div>
        </div>
        <div className="flex  justify-center gap-6 mt-8">
          <div className=" w-[50px] h-[50px] bg-[url('./components/images/gmail.png')] hover:scale-[0.95] active:scale-[1.0] transition duration-300"></div>
          <div className=" w-[50px] h-[50px] bg-[url('./components/images/x.png')] hover:scale-[0.95] active:scale-[1.0] transition duration-300"></div>
          <div className=" w-[50px] h-[50px] bg-[url('./components/images/facebook.png')] hover:scale-[0.95] active:scale-[1.0] transition duration-300"></div>{" "}
        </div>
        <div className="flex flex-col w-[427px] gap-6  mx-auto mt-4 text-center">
          <p>
            By continuing with Geogle, X or Faccebook you agreed to the
            company’s{" "}
            <a className="text-[#BF1C1C] hover:underline" href="#/">
              terms of services
            </a>{" "}
            and{" "}
            <a className="text-[#BF1C1C] hover:underline" href="#/">
              privacy policy.
            </a>
          </p>
          <p>
            Already have an account?{" "}
            <a className="text-[#BF1C1C] hover:underline" href="#/">
              Log in.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
