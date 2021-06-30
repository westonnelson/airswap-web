const InformationFrame = () => {
  return (
    <div className="max-w-sm flex flex-col">
      <nav className="flex justify-between my-14">
        <span>Learn</span>
        <span>Participate</span>
        <span>Develop</span>
        <span>Analyze</span>
      </nav>
      <article className="flex flex-col flex-1 justify-around py-14">
        <div>
          <h3 className="mb-5">Built by a brilliant community</h3>
          <p>
            Token holders decide what to build and work together to get it done.
          </p>
          {/* <Button intent="neutral">Learn more ⭢</Button> */}
        </div>
        <div>
          <h3 className="mb-5">
            Secure swaps,
            <br /> no slippage,
            <br /> worry free.
          </h3>
          <p>
            Fight back against MEV with the purest peer-to-peer decentralized
            exchange.
          </p>
        </div>
      </article>
    </div>
  );
};

export default InformationFrame;
