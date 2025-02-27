import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { retrieveLaunchParams } from "@telegram-apps/sdk-react";

import { init } from "@/init.ts";
import "@/shared/styles/styles.scss";

// Mock the environment in case, we are outside Telegram.
import "./mockEnv.ts";
import { App } from "./app/App.tsx";
import { reatomContext } from "@reatom/npm-react";
import { ctx } from "./shared/store/store.ts";

const root = ReactDOM.createRoot(document.getElementById("root")!);

// Configure all application dependencies.
init(retrieveLaunchParams().startParam === "debug" || import.meta.env.DEV);

root.render(
  <StrictMode>
    <reatomContext.Provider value={ctx}>
      <App />
    </reatomContext.Provider>
  </StrictMode>
);
