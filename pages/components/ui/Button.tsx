export const Button = ({ onClick, children, className = "" }: any) => (
  <button
    onClick={onClick}
    className={`px-2 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${className}`}
  >
    {children}
  </button>
);
