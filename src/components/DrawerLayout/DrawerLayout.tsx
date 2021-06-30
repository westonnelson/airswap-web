import classNames from "classnames";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export type DrawerLayoutProps = {
  main: React.ReactNode;
  drawer: React.ReactNode;
  overlay: React.ReactNode;
};

const DrawerLayout = ({ main, drawer, overlay }: DrawerLayoutProps) => {
  const [drawerOpen, setdrawerOpen] = useState<boolean>(true);

  return (
    <div
      className={classNames(
        "w-screen h-screen relative",
        "bg-white dark:bg-black"
      )}
    >
      <section
        className={classNames(
          "w-2/3 flex flex-row justify-center",
          "absolute top-0 bottom-0 left-0 z-0"
        )}
      >
        {main}
      </section>
      <section
        className={classNames(
          "w-1/3 flex flex-row justify-center",
          "absolute right-0 top-0 bottom-0 z-10",
          "bg-gray-200 dark:bg-gray-800"
        )}
      >
        {drawer}
      </section>
      <section className={classNames("absolute inset-0 z-30")}>
        {overlay}
      </section>
    </div>
  );
};

export default DrawerLayout;
