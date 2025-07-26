const Button = ({ variant = 'default', size = 'md', className = '', children, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    default: 'bg-gray-900 text-white hover:bg-gray-800 border-transparent',
    outline: 'border-gray-300 text-gray-900 bg-transparent hover:bg-gray-100',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 border-transparent'
  };
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  return (
    <button
      className={`${baseClasses} ${variants[variant] ?? ''} ${sizes[size] ?? ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
export default Button;
