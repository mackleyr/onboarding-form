export default function HeroText({ children }) {
  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-3xl font-semibold text-white mb-4 text-center">
        {children}
      </h1>
    </div>
  );
}
