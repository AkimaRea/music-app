import { AllTracks } from "@/pages";
import { FavouriteTracks } from "@/pages/favourite-tracks/FavouriteTracks";
import { RouterPaths } from "@/shared/constants/router-paths";
import { ctx } from "@/shared/store/store";
import { connectLogger } from "@reatom/framework";
import { useAtom } from "@reatom/npm-react";
import { useLaunchParams } from "@telegram-apps/sdk-react";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { launchParamsAtom } from "../domain/user/user";
import { ToastContainer } from "react-toastify";

connectLogger(ctx);

export const App = () => {
  const [, setLaunchParams] = useAtom(launchParamsAtom);
  const lp = useLaunchParams();

  useEffect(() => {
    setLaunchParams(lp);
  }, []);

  return (
    <AppRoot>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path={RouterPaths.AllTracks}
            element={<AllTracks />}
          />
          <Route
            path={RouterPaths.FavouriteTracks}
            element={<FavouriteTracks />}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </AppRoot>
  );
};
