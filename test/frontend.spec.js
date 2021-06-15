const puppeteer = require("puppeteer")
const dappeteer = require("dappeteer")

let browser, metamask, page;
// react app localhost configurations
const DAPP_URL = "http://localhost:3000";
const DEFAULT_METAMASK_OPTIONS = { gasLimit: 6654755 }

async function main() {
    // INIT
    const browser = await dappeteer.launch(puppeteer)
    console.log('here 1')
    const metamask = await dappeteer.getMetamask(browser)
    console.log('here 2')

    // create or import an account
    await metamask.createAccount() 
    // await metamask.importAccount('already turtle birth enroll since...')
    console.log('here 3')

    // // you can change the network if you want
    // // await metamask.switchNetwork('ropsten')

    // go to a dapp and do something that prompts MetaMask to confirm a transaction
    const page = await browser.newPage()
    await page.goto(DAPP_URL)
    const connectWalletButton = await page.$('#connect-wallet')
    await connectWalletButton.click()
}
  
main();
