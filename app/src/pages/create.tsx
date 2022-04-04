import type { NextPage } from "next";
import { useState, useRef } from "react";
import Head from "next/head";
import { NavBar } from "../components/NavBar";
import FundCreationForm from "../views/Fund/fundCreationForm";

import { SolanaTweeterView } from "../views";

const Create: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Tweeter!</title>
        <meta name="description" content="This site will fly high 🦤" />
      </Head>
      <NavBar />
      <FundCreationForm />
    </div>
  );
};

export default Create;
