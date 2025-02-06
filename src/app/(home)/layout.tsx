import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <HomeLayout>
      <main>{children}</main>
    </HomeLayout>
  );
};

export default Layout;