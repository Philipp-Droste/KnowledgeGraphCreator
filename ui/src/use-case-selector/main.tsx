import React from "react";
import { createRoot } from "react-dom/client";

import "@neo4j-ndl/base/lib/neo4j-ds-styles.css";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <div className="flex flex-col min-h-screen gap-4 max-w-[1000px] w-[80%] mx-auto mt-4 ">
      <h1 className="text-4xl font-bold text-center">Knowledge Graph Creator</h1>
      <div className="flex flex-col w-full gap-4 px-10">
        <a
          href="use-cases/chat-with-kg/index.html"
          className="inline-block px-6 py-2 text-white bg-primary-500 border border-primary-500 rounded hover:bg-primary-700 active:bg-primary-800"
        >
          Chat With KG
        </a>
        <a
          href="use-cases/unstructured-import/index.html"
          className="inline-block px-6 py-2 text-white bg-primary-500 border border-primary-500 rounded hover:bg-primary-700 active:bg-primary-800"
        >
          Unstructured Import
        </a>
      </div>
    </div>
  </React.StrictMode>
);
