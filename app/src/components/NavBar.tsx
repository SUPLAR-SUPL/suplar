import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
export const NavBar = () => (

  <div className="navbar bg-gray-800 rounded-bl-2xl rounded-br-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <label className="btn btn-ghost lg:hidden" tabIndex={0}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
        <a href="#">Create Fund</a>
        </li>
        <li>
        <a href="#">My Library</a>
        </li>
      </ul>
    </div>
    <a className="">
    <img className="w-64 h-full" src="https://suplar.com/wp-content/uploads/2021/10/SuplarLogoFooterSmaller.png" />
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
  <div className="form-control">
<input type="text" placeholder="Search" className="input border-2 rounded-full bg-gray-800 border-gray-500 text-xl text-white text-opacity-30"/>
</div>
  </div>
  <div className="navbar-end">
  <a className="w-44 h-9 text-xl font-extrabold text-center text-white hidden lg:flex" href="#">Create Fund</a>
  <a className="w-44 h-9 text-xl font-extrabold text-center text-white hidden lg:flex" href="#">My Library</a>
  <div className="flex-none px-7 py-4 bg-gray-800 border-2 rounded-full border-pink-600">
      <WalletMultiButton className="btn btn-ghost" />
    </div>
  </div>
</div>


  );
  