export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-2xl font-semibold transition duration-300 hover:scale-105 ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
}
