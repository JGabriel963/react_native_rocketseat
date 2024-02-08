import "@radix-ui/themes/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme>
      <App />
      <Toaster richColors />
    </Theme>
  </React.StrictMode>
);
