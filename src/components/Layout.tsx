export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-between h-screen min-h-dvh]">
      {children}
      <div className="w-full h-[10%] bg-red-500">Footer</div>
    </div>
  );
};
