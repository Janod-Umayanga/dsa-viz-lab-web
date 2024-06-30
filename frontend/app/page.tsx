'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/data').then((response) => response.json()).then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1 className="mt-10 mb-10 justify-center flex space-x-5 font-sans text-4xl font-bold">
        <div className="text-[#66A8B5]">WELCOME TO</div><div className="text-[#DADB82]">DSA-VIZ-LAB</div>
      </h1>
      <div className="flex space-x-2">
        <div className="text-[#66A8B5]">Backend API:</div>{data ? <div className="text-[#DADB82]">{JSON.stringify(data)}</div> : <div className="text-[#DADB82]">Loading...</div>}
      </div>
    </div>
  );
}
