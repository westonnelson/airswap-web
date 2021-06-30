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

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

function App() {
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
          drawer={
            <div className="max-w-sm flex flex-col">
              <nav className="flex justify-between my-14">
                <span>Learn</span>
                <span>Participate</span>
                <span>Develop</span>
                <span>Analyze</span>
              </nav>
              <article className="flex flex-col flex-1 justify-around py-14">
                <div>
                  <h1>Built by a brilliant community</h1>
                  <p>
                    Token holders decide what to build and work together to get
                    it done.
                  </p>
                  {/* <Button intent="neutral">Learn more ⭢</Button> */}
                </div>
                <div>
                  <h1>
                    Secure swaps,
                    <br /> no slippage,
                    <br /> worry free.
                  </h1>
                  <p>
                    Fight back against MEV with the purest peer-to-peer
                    decentralized exchange.
                  </p>
                </div>
              </article>
            </div>
          }
          main={
            <div className="flex items-center justify-center">
              <img src={widgetBgLight} alt="airswap widget background"></img>
            </div>
          }
          overlay={<div>overlay content</div>}
        />
      </Suspense>
    </Web3ReactProvider>
  );
}

export default App;
