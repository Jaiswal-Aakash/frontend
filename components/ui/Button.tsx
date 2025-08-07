export const Button = ({ onClick, children, className = "", variant = "primary", size = "md" }: any) => {
  const baseClasses = "rounded font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    secondary: "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500"
  };
  
  const sizeClasses = {
    xs: "px-1 py-0.5 text-[6px] sm:text-[8px] md:text-[10px]",
    sm: "px-2 py-1 text-[8px] sm:text-[10px] md:text-xs",
    md: "px-3 py-2 text-sm sm:text-base md:text-lg",
    lg: "px-4 py-2 text-base sm:text-lg md:text-xl"
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      {children}
    </button>
  );
};
