import classNames from "classnames";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";
import { Link, useRouteMatch } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import LearnContent from "./pages/learn";

type NavLocation = "learn" | "participate" | "develop" | "analyze";

const content: Record<NavLocation, FunctionComponent> = {
  learn: LearnContent,
  participate: () => <div>Participate</div>,
  develop: LearnContent,
  analyze: () => <div>Analyze</div>,
};

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
    section?: NavLocation;
  }>();

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
      <AnimatePresence exitBeforeEnter>
        <motion.article
          initial={{ opacity: 0, x: "150%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: "150%" }}
          key={section || "learn"}
          className="flex flex-col flex-1 justify-around py-14 w-96"
        >
          {content[section || "learn"]({})}
        </motion.article>
      </AnimatePresence>
    </div>
  );
};

export default InformationFrame;
