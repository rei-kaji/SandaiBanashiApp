import React, { useState, useEffect } from "react";
import { getSandaiBanashies } from "../utils/firebase/getSandaiBanashies";

const DEFAULT_OUTPUT = {
  isLoading: true,
  sandaiBanashies: [],
};

const SandaiBanashi = () => {
  const [output, setOutput] = useState(DEFAULT_OUTPUT);
  useEffect(() => {
    const getData = async () => {
      const sandaiBanashies = await getSandaiBanashies();
      setOutput({ isLoading: false, sandaiBanashies });
    };
    getData();
  }, []);

  const { isLoading, sandaiBanashies } = output;

  return (
    <>
      {sandaiBanashies.map((sandaiBanashi) => (
        <h1>{sandaiBanashi.author}</h1>
      ))}
    </>
  );
};

export default SandaiBanashi;
