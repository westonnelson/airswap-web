import classNames from "classnames";
import { useRouteMatch } from "react-router-dom";
import Switch, { Case, Default } from "react-switch-case";

const InformationFrame = () => {
  const match = useRouteMatch<{
    senderToken?: string;
    signerToken?: string;
    section?: string;
  }>();

  const { section, senderToken, signerToken } = match.params;

  return (
    <div className="max-w-sm flex flex-col">
      <nav className="flex justify-between my-14">
        <span
          className={classNames({
            "text-primary": section === "learn" || !section,
          })}
        >
          Learn
        </span>
        <span
          className={classNames({ "text-primary": section === "participate" })}
        >
          Participate
        </span>
        <span className={classNames({ "text-primary": section === "develop" })}>
          Develop
        </span>
        <span className={classNames({ "text-primary": section === "analyze" })}>
          Analyze
        </span>
      </nav>
      <Switch condition={section}>
        <Case value="learn">
          <article className="flex flex-col flex-1 justify-around py-14">
            <div>
              <h3 className="mb-5">Built by a brilliant community</h3>
              <p>
                Token holders decide what to build and work together to get it
                done.
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
                Fight back against MEV with the purest peer-to-peer
                decentralized exchange.
              </p>
            </div>
          </article>
        </Case>
        <Default>
          <article className="flex flex-col flex-1 justify-around py-14">
            <div>
              <h3 className="mb-5">{section}</h3>
            </div>
          </article>
        </Default>
      </Switch>
    </div>
  );
};

export default InformationFrame;
