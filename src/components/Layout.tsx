import { ReactNode } from "react";
import TopBar from "./TopBar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex h-full w-full flex-col pt-20">
      <TopBar />
      <div className="flex h-full w-full overflow-y-auto overflow-x-hidden px-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
