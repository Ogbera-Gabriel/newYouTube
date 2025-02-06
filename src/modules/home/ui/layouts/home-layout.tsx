type HomeLayoutProps = {
  children: React.ReactNode;
};

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

