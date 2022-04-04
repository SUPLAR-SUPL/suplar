import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { PublicKey } from "@solana/web3.js";
import { TokenListProvider, TokenInfo } from "@solana/spl-token-registry";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";

// import { useJupiter } from "@jup-ag/react-hook";
import {
  CHAIN_ID,
  INPUT_MINT_ADDRESS,
  OUTPUT_MINT_ADDRESS,
} from "../../constants";

// import styles from "./JupiterForm.module.css";
import FeeInfo from "./FeeInfo";

// interface IJupiterFormProps {}
// type UseJupiterProps = Parameters<typeof useJupiter>[0];

const FundCreationForm: FunctionComponent = (props) => {
  const options = [
    { label: "Apple 🍇", value: "grapes" },
    { label: "Facebook 🥭", value: "mango" },
    { label: "IBM 🍓", value: "strawberry" },
    { label: "Google 🍉", value: "watermelon" },
    { label: "Microsoft 🍐", value: "pear", disabled: true },
    { label: "Suplar 🍎", value: "apple" },
    { label: "Nvidia 🍊", value: "tangerine" },
    { label: "Sony 🍍", value: "pineapple" },
    { label: "Toyota 🍑", value: "peach" },
  ];

  const [selected, setSelected] = useState([]);

  const loading = false;
  const wallet = useWallet();
  const { connection } = useConnection();
  const [tokenMap, setTokenMap] = useState<Map<string, TokenInfo>>(new Map());

  const [formValue, setFormValue] = useState({
    amount: 1 * 10 ** 6, // unit in lamports (Decimals)
    inputMint: new PublicKey(INPUT_MINT_ADDRESS),
    outputMint: new PublicKey(OUTPUT_MINT_ADDRESS),
    slippage: 1, // 0.1%
  });

  const [inputTokenInfo, outputTokenInfo] = useMemo(() => {
    return [
      tokenMap.get(formValue.inputMint?.toBase58() || ""),
      tokenMap.get(formValue.outputMint?.toBase58() || ""),
    ];
  }, [formValue.inputMint?.toBase58(), formValue.outputMint?.toBase58()]);

  useEffect(() => {
    new TokenListProvider().resolve().then((tokens) => {
      const tokenList = tokens.filterByChainId(CHAIN_ID).getList();

      setTokenMap(
        tokenList.reduce((map, item) => {
          map.set(item.address, item);
          return map;
        }, new Map())
      );
    });
  }, [setTokenMap]);

  const amountInDecimal = useMemo(() => {
    return formValue.amount * 10 ** (inputTokenInfo?.decimals || 1);
  }, [inputTokenInfo, formValue.amount]);

  //   const { routeMap, allTokenMints, routes, loading, exchange, error, refresh } =
  //     useJupiter({
  //       ...formValue,
  //       amount: amountInDecimal,
  //     });

  //   const validOutputMints = useMemo(
  //     () => routeMap.get(formValue.inputMint?.toBase58() || "") || allTokenMints,
  //     [routeMap, formValue.inputMint?.toBase58()]
  //   );

  // ensure outputMint can be swapable to inputMint
  useEffect(() => {
    // if (formValue.inputMint) {
    //   const possibleOutputs = routeMap.get(formValue.inputMint.toBase58());
    //   if (
    //     possibleOutputs &&
    //     !possibleOutputs?.includes(formValue.outputMint?.toBase58() || "")
    //   ) {
    //     setFormValue((val) => ({
    //       ...val,
    //       outputMint: new PublicKey(possibleOutputs[0]),
    //     }));
    //   }
    // }
  }, [formValue.inputMint?.toBase58(), formValue.outputMint?.toBase58()]);

  return (
    <div className="max-w-full md:max-w-lg m-auto items-center justify-center min-h-screen p-16 bg-slate-200">
      <h1 className="my-10 font-medium text-3xl sm:text-4xl font-black">
        Create Fund
      </h1>

      <form>
        {/* <pre>{JSON.stringify(selected)}</pre> */}

        <div className="relative z-50 mb-6 w-full group">
          <MultiSelect
            className="text-gray-900 bg-transparent"
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy={"Select"}
          />
          {/* <input
            type="email"
            name="floating_asset"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-600 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_asset"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Choose Asset
          </label> */}
        </div>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
              placeholder=" "
              maxLength={4}
              required
            />
            <label
              htmlFor="floating_last_name"
              className="absolute text-sm text-white-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Symbol
            </label>
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="number"
            name="floating_price"
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-pink-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_price"
            className="absolute text-sm text-white-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-pink-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Starting Price
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FundCreationForm;

// import "./styles.css";

// export default function App() {

//   return (
//     <div>
//       <h1>Select Fruits</h1>
//       <pre>{JSON.stringify(selected)}</pre>
//       <MultiSelect
//         options={options}
//         value={selected}
//         onChange={setSelected}
//         labelledBy={"Select"}
//       />
//     </div>
//   );
// }
