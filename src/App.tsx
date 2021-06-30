import { Suspense } from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { Orders } from "./features/orders/Orders";
import { Wallet } from "./features/wallet/Wallet";
import { Transactions } from "./features/transactions/Transactions";
import Balances from "./features/balances/Balances";
import "./i18n/i18n";
import DarkModeSwitch from "./components/DarkModeSwitch/DarkModeSwitch";
import DrawerLayout from "./components/DrawerLayout/DrawerLayout";
import Button from "./components/Button/Button";
import widgetBgLight from "./assets/widget-backgrounds/widget-bg-light.png";
import widgetBgDark from "./assets/widget-backgrounds/widget-bg-dark.png";
import airswapLogoWhite from "./assets/airswap-logos/characters-white.svg";
import airswapLogoBlack from "./assets/airswap-logos/characters-black.svg";
import InformationFrame from "./features/information/InformationFrame";
import Card from "./components/Card/Card";
import useIsDarkMode from "./Hooks/useIsDarkMode";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
  const isDarkMode = useIsDarkMode();
  console.log(isDarkMode);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {/* Suspense needed here for loading i18n resources */}
      <Suspense fallback={"Loading..."}>
        {/* <div className="flex flex-col items-center">
          <Wallet />
          <Orders />
          <Transactions />
          ☠️ Use at your own risk
          <Balances />
          <DarkModeSwitch className="m-4" />
        </div> */}
        <DrawerLayout
          drawer={<InformationFrame />}
          main={
            <div className="flex items-center justify-center">
              <div
                className="relative p-9 bg-no-repeat bg-cover rounded-sm"
                style={{
                  width: "34.5rem",
                  height: "36.5rem",
                  backgroundImage: `url(${
                    isDarkMode ? widgetBgDark : widgetBgLight
                  })`,
                }}
              >
                <Card className="w-full h-full">
                  <h4>Swap now</h4>
                </Card>
              </div>
            </div>
          }
          overlay={
            <div>
              <img
                src={isDarkMode ? airswapLogoWhite : airswapLogoBlack}
                alt="AirSwap Logo"
                className="absolute top-12 left-16 w-40"
              />
              <DarkModeSwitch className="absolute top-14 right-10" />
            </div>
          }
        />
      </Suspense>
    </Web3ReactProvider>
  );
}

export default App;
