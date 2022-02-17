import Link from "next/link";
import { FC } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { SuplarLogo } from "components";
import { NavBar } from "components/NavBar";
import styles from "./index.module.css";

export const HomeView: FC = ({}) => {
  const { publicKey } = useWallet();

  const onClick = () => {};

  return (
<>
  <NavBar/>
    <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
      <div className={styles.container}>
        <div className="navbar mb-2 shadow-lg bg-gray-800 rounded-bl-2xl rounded-br-2xl text-neutral-content">
          <div className="flex-none">
            <button className="btn btn-square btn-ghost">
              <span className="text-4xl">🦤</span>
            </button>
          </div>
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">Suplar</span>
          </div>
          <div className="flex-none px-7 py-4 bg-gray-800 border-2 rounded-full border-pink-600">
            <WalletMultiButton className="btn btn-ghost" />
          </div>
        </div>


      
        <div className="text-center pt-2">
          <div className="hero min-h-16 py-4">
            <div className="text-center hero-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold">
                  Hello Sloan 
                  {/* <SuplarLogo/>  */}
                  World!
                </h1>
                <p className="mb-5">
                  This scaffold includes awesome tools for rapid development and
                  deploy dapps to Solans: Next.JS, TypeScript, TailwindCSS,
                  Daisy UI.
                </p>
                <p className="mb-5">
                  Sollana wallet adapter is connected and ready to use.
                </p>
                <p>
                  {publicKey ? <>Your address: {publicKey.toBase58()}</> : null}
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h1 className="mb-5 pb-8 text-5xl">Templates:</h1>
            <ul className="text-left leading-10">
              <li className="mb-5">
                <Link href="/gallery">
                  <a className="text-4xl font-bold hover:underline">
                    🏞 -- NFT Gallery
                  </a>
                </Link>
              </li>
              {/* <li className="mb-5">
                <Link href="/mint">
                  <a className="text-4xl font-bold hover:underline">
                    🍬 -- Candy Machine Mint UI
                  </a>
                </Link>
              </li> */}
              <li>
                <Link href="/tweeter">
                  <a className="mb-5 text-4xl font-bold hover:underline">
                    🐦 -- Solana Tweeter
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="relative bg-gray-800 rounded-3xl border-black" style={{width: 1002, height: 273,}}>
    <p className="w-72 h-9 absolute text-xl font-extrabold text-white" style={{left: 233.19, top: 38.01,}}>Suplar #011</p>
    <p className="w-72 h-9 absolute text-xl font-extrabold text-white" style={{left: 233.19, top: 38.01,}}>Suplar #011</p>
    <p className="w-72 h-8 absolute text-xl font-extrabold text-white" style={{left: 233, top: 208,}}>goog25-aapl25-sp50</p>
    <p className="w-8 h-8 absolute text-xl font-light text-center text-white" style={{left: 862.49, top: 34.63,}}>321 </p>
    <div className="relative absolute -space-x-4" style={{width: 285.81, height: 62.15, left: 233.19, top: 110.85,}}>
        <img className="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
        <img className="relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
        <img className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
    </div>
    <div className="w-52 h-14 absolute" style={{left: 748.45, top: 197.62,}}>
        <div className="flex items-center justify-center flex-1 h-full px-4 py-4 bg-gray-800 border-2 rounded-full border-pink-600">
            <p className="flex-1 h-full text-xl font-medium text-center text-white">Join the fund</p>
        </div>
    </div>
</div>





{/* <div className="container mx-auto max-w-6xl p-8 2xl:px-0"> */}
      <div className="grid grid-cols-6 gap-4">
  <div className="col-span-4 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4...">

  <div className="card lg:card-side shadow-xl bg-gray-800 rounded-3xl border-black">
        <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="relative absolute -space-x-4" style={{width: 285.81, height: 62.15, left: 233.19, top: 110.85,}}>
          <img className="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
          <img className="relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
          <img className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
      </div>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>

  </div>
  <div className="col-span-2 sm:col-span-6 md:col-span-6 lg:col-span-2 xl:col-span-2...">

  <div className="bg-gray-600 rounded-3xl border-black py-8" style={{width: 464, height: 855,}}>
<p className="w-72 h-9 text-4xl font-extrabold text-white">Fund Joined</p>
<div className="transform -rotate-1 bg-black bg-opacity-20 border-gray-400" style={{width: 418.02, height: 1,}}/>

<div className="relative" style={{width: 412, height: 74,}}>
    <div className="relative w-12 h-12 absolute" style={{left: 257.76, top: 2.50,}}>
        <div className="w-full h-full bg-yellow-400 bg-opacity-20 rounded-full"/>
    </div>
    <p className="w-20 h-8 absolute right-0 top-0 text-3xl font-medium text-white">1.6%</p>
    <p className="w-40 h-12 absolute left-0 top-0 text-3xl font-extrabold text-white">SUPL XYZ</p>
    <p className="w-72 h-8 absolute left-0 bottom-0 text-xl text-gray-400">400 members</p>
</div>


<p className="w-72 h-9 text-4xl font-extrabold text-white mt-8">Watch List<br/></p>
<div className="relative" style={{width: 412, height: 74,}}>
    <div className="relative w-12 h-12 absolute" style={{left: 257.76, top: 2.50,}}>
        <div className="w-full h-full bg-yellow-400 bg-opacity-20 rounded-full"/>
    </div>
    <p className="w-20 h-8 absolute right-0 top-0 text-3xl font-medium text-white">1.6%</p>
    <p className="w-40 h-12 absolute left-0 top-0 text-3xl font-extrabold text-white">SUPL KDO</p>
    <p className="w-72 h-8 absolute left-0 bottom-0 text-xl text-gray-400">400 members</p>
</div>


</div>


  </div>
</div>




<div className="flex flex-col lg:grid lg:gap-4 2xl:gap-6 lg:grid-cols-4 2xl:row-span-2 2xl:pb-8 ml-2 pt-4 px-6">
        {/* Beginning of the component about Daniel Clifford */}
        <div className="bg-indigo-600 lg:order-1 lg:row-span-1 2xl:row-span-1 lg:col-span-3 rounded-lg shadow-xl mb-5 lg:mb-0">
          <div className="mx-6 my-8 2xl:mx-10">
            <img className="w-8 md:w-9 lg:w-10 2xl:w-20 h-8 md:h-9 lg:h-10 2xl:h-20 rounded-full border-2 ml-1 lg:ml-3 2xl:ml-0 md:-mt-1 2xl:-mt-4" src="https://images.pexels.com/photos/3775534/pexels-photo-3775534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 -mt-8 md:-mt-10 lg:-mt-11 2xl:-mt-20 2xl:mx-8">Daniel Clifford</h1>
            <h2 className="text-white text-opacity-50 text-xs md:text-base 2xl:text-2xl pl-12 lg:pl-16 2xl:pl-20 2xl:my-2 2xl:mx-8">Verified Graduate</h2>
          </div>
          <div className="-mt-6 relative">
            <p className="text-white text-xl 2xl:text-4xl font-bold px-7 lg:px-9 2xl:pt-6 2xl:mx-2">I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</p>
            <br />
            <p className="text-white text-opacity-50 font-medium md:text-sm 2xl:text-3xl px-7 lg:px-9 mb-3 2xl:pb-8 2xl:mx-2">“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”</p>
          </div>
        </div>
        {/* Ending of the component about Daniel Clifford */}
        {/* Beginning of the component about Jonathan Walters */}
        <div className="bg-gray-900 lg:order-2 lg:row-span-1 2xl:row-span-1 lg:col-span-1 rounded-lg shadow-xl pb-4 mb-5 lg:mb-0">
          <div className="mx-8 2xl:mx-10 my-10">
            <img className="w-8 md:w-9 2xl:w-20 h-8 md:h-9 2xl:h-20 rounded-full border-2 -ml-1 -mt-2 lg:-mt-4" src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <h1 className="text-white text-xs md:text-base 2xl:text-2xl pl-11 md:pl-12 2xl:pl-24 -mt-8 md:-mt-10 2xl:-mt-16">Jonathan Walters</h1>
            <h2 className="text-white text-xs md:text-base 2xl:text-2xl text-opacity-50 pl-11 md:pl-12 2xl:pl-24">Verified Graduate</h2>
          </div>
          <div className="-mt-8 mx-1 lg:mx-2">
            <p className="text-white text-lg lg:text-xl 2xl:text-4xl font-semibold pt-1 px-6 2xl:px-8 lg:pl-5 lg:pr-8">The team was very supportive and kept me motivated</p>
            <br />
            <p className="text-white text-opacity-50 font-medium md:text-sm 2xl:text-3xl pl-6 lg:pl-5 pr-4 -mt-1 lg:mt-6 2xl:mt-2 2xl:px-8">“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
          </div>
        </div>
        
      </div>

      
    
{/* </div> */}


    </>
  );
};
