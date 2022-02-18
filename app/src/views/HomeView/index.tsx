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
      <NavBar />
      {/* <div className="container mx-auto max-w-6xl p-8 2xl:px-0">
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
                    Hello Sloan World!
                  </h1>
                  <p className="mb-5">
                    This scaffold includes awesome tools for rapid development
                    and deploy dapps to Solans: Next.JS, TypeScript,
                    TailwindCSS, Daisy UI.
                  </p>
                  <p className="mb-5">
                    Sollana wallet adapter is connected and ready to use.
                  </p>
                  <p>
                    {publicKey ? (
                      <>Your address: {publicKey.toBase58()}</>
                    ) : null}
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
                <li className="mb-5">
                  <Link href="/mint">
                    <a className="text-4xl font-bold hover:underline">
                      🍬 -- Candy Machine Mint UI
                    </a>
                  </Link>
                </li>
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
      </div> */}

      {/* <div className="container mx-auto max-w-6xl p-8 2xl:px-0"> */}

      <div>
        {/* component */}
        <div className="flex h-screen bg-base-100 px-6">
          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="flex h-full">
              <main className="flex flex-col w-full bg-base-100 overflow-x-hidden overflow-y-auto mb-14">
                <div className="flex w-full mx-auto px-6 py-8">
                  <div className="flex flex-col w-full h-full text-gray-900 text-xl">
                    <div className="card card-side shadow-xl flex w-full max-w-xl h-60 items-center justify-center mx-auto text-white bg-gray-800  border-gray-600 mb-6">
                      <figure>
                        <img
                          src="https://api.lorem.space/image/movie?w=200&h=280"
                          alt="Movie"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">goog25-aapl25-sp50</h2>
                        <p>Click the button to Join the fund on Jetflix app.</p>
                        <div className="justify-end card-actions">
                          <button className="btn btn-primary">
                            Join the fund
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card card-side shadow-xl flex w-full max-w-xl h-60 items-center justify-center mx-auto text-white bg-gray-800  border-gray-600 mb-6">
                      <figure>
                        <img
                          src="https://api.lorem.space/image/movie?w=200&h=280"
                          alt="Movie"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">goog25-aapl25-sp50</h2>
                        <p>Click the button to Join the fund on Jetflix app.</p>
                        <div className="justify-end card-actions">
                          <button className="btn btn-primary">
                            Join the fund
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card card-side shadow-xl flex w-full max-w-xl h-60 items-center justify-center mx-auto text-white bg-gray-800  border-gray-600 mb-6">
                      <figure>
                        <img
                          src="https://api.lorem.space/image/movie?w=200&h=280"
                          alt="Movie"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">goog25-aapl25-sp50</h2>
                        <p>Click the button to Join the fund on Jetflix app.</p>
                        <div className="justify-end card-actions">
                          <button className="btn btn-primary">
                            Join the fund
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card card-side shadow-xl flex w-full max-w-xl h-60 items-center justify-center mx-auto text-white bg-gray-800  border-gray-600 mb-6">
                      <figure>
                        <img
                          src="https://api.lorem.space/image/movie?w=200&h=280"
                          alt="Movie"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">goog25-aapl25-sp50</h2>
                        <p>Click the button to Join the fund on Jetflix app.</p>
                        <div className="justify-end card-actions">
                          <button className="btn btn-primary">
                            Join the fund
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card card-side shadow-xl flex w-full max-w-xl h-60 items-center justify-center mx-auto text-white bg-gray-800  border-gray-600 mb-6">
                      <figure>
                        <img
                          src="https://api.lorem.space/image/movie?w=200&h=280"
                          alt="Movie"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">goog25-aapl25-sp50</h2>
                        <p>Click the button to Join the fund on Jetflix app.</p>
                        <div className="justify-end card-actions">
                          <button className="btn btn-primary">
                            Join the fund
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
              <nav className="hidden lg:block flex w-1/4 h-full bg-gray-600 rounded-3xl border-black py-8 shadow-xl">
                <div className="w-full flex mx-auto px-6 py-8">
                  <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl">
                    <div className="p-4 max-w-md text-white bg-gray-600 rounded-3xl border-gray-600 py-8 shadow-xl rounded-lg border shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                      <h3 className="mb-3 text-base font-bold text-gray-100 lg:text-2xl dark:text-white">
                        Funds Joined
                      </h3>
                      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        Connect with one of our available wallet providers or
                        create a new one.
                      </p>
                      <ul className="my-4 space-y-3">
                        <li>
                          <a
                            href="#"
                            className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-500 rounded-lg hover:bg-gray-800 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                          >
                            <span className="flex-1 ml-3 whitespace-nowrap w-40 h-12 text-3xl font-extrabold text-white">
                              SUPL XYZ <br />
                              <p className="text-xs font-normal">400 members</p>
                            </span>
                            <br />
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                              Popular
                              <span className="text-red-500">▲ 2.48%</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-500 rounded-lg hover:bg-gray-800 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                          >
                            <span className="flex-1 ml-3 whitespace-nowrap w-40 h-12 text-3xl font-extrabold text-white">
                              SUPL XYZ <br />
                              <p className="text-xs font-normal">400 members</p>
                            </span>
                            <br />
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                              Popular
                              <span className="text-red-500">▲ 2.48%</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-500 rounded-lg hover:bg-gray-800 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                          >
                            <span className="flex-1 ml-3 whitespace-nowrap w-40 h-12 text-3xl font-extrabold text-white">
                              SUPL XYZ <br />
                              <p className="text-xs font-normal">400 members</p>
                            </span>
                            <br />
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                              Popular
                              <span className="text-red-500">▲ 2.48%</span>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-500 rounded-lg hover:bg-gray-800 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                          >
                            <span className="flex-1 ml-3 whitespace-nowrap w-40 h-12 text-3xl font-extrabold text-white">
                              SUPL XYZ <br />
                              <p className="text-xs font-normal">400 members</p>
                            </span>
                            <br />
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                              Popular
                              <span className="text-red-500">▲ 2.48%</span>
                            </span>
                          </a>
                        </li>

                        <h3 className="py-9 text-base font-bold text-gray-100 lg:text-2xl dark:text-white">
                          Watchlist
                        </h3>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                          Connect with one of our available wallet providers or
                          create a new one.
                        </p>
                        <li>
                          <a
                            href="#"
                            className="flex items-center p-3 text-base font-bold text-gray-900 bg-gray-500 rounded-lg hover:bg-gray-800 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                          >
                            <span className="flex-1 ml-3 whitespace-nowrap w-40 h-12 text-3xl font-extrabold text-white">
                              SUPL XYZ <br />
                              <p className="text-xs font-normal">400 members</p>
                            </span>
                            <br />
                            <span className="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                              Popular
                              <span className="text-red-500">▲ 2.48%</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div>
                        <a
                          href="#"
                          className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
                        >
                          Why do I need to connect with my wallet?
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  ::-webkit-scrollbar {\n    width: 5px;\n    height: 5px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: linear-gradient(13deg, #7bcfeb 14%, #e685d3 64%);\n    border-radius: 10px;\n  }\n  ::-webkit-scrollbar-thumb:hover {\n    background: linear-gradient(13deg, #c7ceff 14%, #f9d4ff 64%);\n  }\n  ::-webkit-scrollbar-track {\n    background: #ffffff;\n    border-radius: 10px;\n    box-shadow: inset 7px 10px 12px #f0f0f0;\n  }\n",
          }}
        />
      </div>

      {/* </div> */}
    </>
  );
};
