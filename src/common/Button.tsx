export const Button = ({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick}
      className="w-full h-12 px-4 py-2 font-medium text-white rounded-md bg-primary-500 hover:phover-500"
    >
      {children}
    </button>
  );
};
