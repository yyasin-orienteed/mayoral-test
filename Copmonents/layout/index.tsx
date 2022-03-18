import React, { FC } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.PropsWithChildren<{}>;
}
const index: FC<Props> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default index;
