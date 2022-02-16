import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
export const NavBar = () => (

    <div className="flex space-x-7 items-center justify-start pl-4 pr-8 pt-2.5 pb-3 bg-gray-800 rounded-bl-2xl rounded-br-2xl">
    <img className="w-64 h-full" src="https://suplar.com/wp-content/uploads/2021/10/SuplarLogoFooterSmaller.png" />
    <input className="flex space-x-3 items-center justify-start pl-4 pr-20 pt-3.5 pb-2.5 border-2 rounded-full bg-gray-800 border-gray-500 text-xl text-white text-opacity-30" placeholder="Search, funds" style={{width: 662, height: 52,}}/>
    {/* <p className="text-xl font-solid leading-none text-white"></p> */}
    {/* <input className="input bg-transparent text-xl text-white text-opacity-30" placeholder="Search, funds" style={{width: 529.03, height: 28,}}/> */}
{/* </div> */}
    <a className="w-44 h-9 text-xl font-extrabold text-center text-white" href="#">Create Fund</a>
    <a className="w-44 h-9 text-xl font-extrabold text-center text-white" href="#">My Library</a>
    <div className="w-66 h-21">
      <div className="flex items-center justify-center flex-1 h-full px-7 py-4 bg-gray-800 border-2 rounded-full border-pink-600">
      <WalletMultiButton className="btn btn-ghost" />
      </div>
    </div>
  </div>
  
  );
  