import Image from "next/image";
import * as LoginImg from './assets/login/login.svg';
import { Poppins } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "./ui/navbar";
import Link from "next/link";


const ImageLogin = () => {
  return (
    <Image
      src={LoginImg}
      alt="404"
      width={250}
      height={250}
    />
  )
}

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})


export default function Home() {
  return (
    <div className={poppins.className}>
      <Navbar
        nav_one="Home"
        nav_second="About Us"
        nav_third="News"
        nav_fourth="Contact Us"
      />
      <form className="flex h-screen w-screen justify-center mt-6">
        <div className="flex flex-row w-9/12 bg-violet-50 border-slate-400 h-96 rounded-2xl shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]">
          <div className="flex w-6/12 justify-center">
            <ImageLogin></ImageLogin>
          </div>
          <div className="flex w-6/12  justify-center text-center items-center bg-purple-700 rounded-l-3xl rounded-r-2xl">
            <div className="flex flex-col w-full ml-5 font-bold ">
              <h1 className="text-slate-200 drop-shadow-md text-5xl">LOGIN</h1>
              <p className="text-sm mt-6 text-slate-100">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              <span className="w-full justify-center flex">
                <input className="w-3/6 h-8 flex align-center rounded-md mt-4 bg-slate-100 text-slate-400 p-3 placeholder-slate-400 focus:outline-0 focus:shadow-[rgba(0,0,0,0.35)_0px_5px_15px]" placeholder="email"></input>
              </span>
              <span className="w-full justify-center flex">
                <input className="w-3/6 h-8 flex align-center rounded-md mt-4 bg-slate-100 text-slate-400 p-3 placeholder-slate-400 focus:outline-0 focus:shadow-[rgba(0,0,0,0.35)_0px_5px_15px]" placeholder="password"></input>
              </span>
              <div className="flex justify-center items-center">
                <button className="flex mt-4 p-3 border-1 rounded-full w-24 bg-slate-400 text-8 h-10 text-center items-center justify-center hover:text-white hover:border-1 hover:border-black hover:bg-black"><Link href="./pages/dashboard">Sign-In</Link></button>
              </div>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}
