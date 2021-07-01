import classNames from "classnames";
import { useTranslation } from "react-i18next";
import { Link, useRouteMatch } from "react-router-dom";
import Switch, { Case, Default } from "react-switch-case";

const generatePath = (
  section: string,
  senderToken?: string,
  signerToken?: string
) => {
  let path = "/";
  if (section) path += `${section}/`;
  if (signerToken) {
    path += senderToken
      ? `/${senderToken}/${signerToken}`
      : `/-/${signerToken}`;
  } else if (senderToken) {
    path += `/${senderToken}/`;
  }
  return path;
};

const InformationFrame = () => {
  const match = useRouteMatch<{
    senderToken?: string;
    signerToken?: string;
    section?: string;
  }>();

  type NavLocation = "learn" | "participate" | "develop" | "analyze";

  const { t } = useTranslation(["information"]);

  const allLocations: NavLocation[] = [
    "learn",
    "participate",
    "develop",
    "analyze",
  ];

  const { section, senderToken, signerToken } = match.params;

  return (
    <div className="max-w-sm flex flex-col">
      <nav className="flex justify-between my-14">
        {allLocations.map((loc) => (
          <Link
            key={`informationFrameNav_${loc}`}
            to={generatePath(loc, senderToken, signerToken)}
            className={classNames({
              "text-primary": section === loc || (loc === "learn" && !section),
            })}
          >
            {/* @ts-ignore dynamic key */}
            {t(`information:nav_${loc}`)}
          </Link>
        ))}
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
