import { useRouter } from 'next/router';

export default function CTAButton({ isComplete, next, children }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center mb-4">
      <button
        onClick={() => isComplete && router.push(next)}
        className={`mt-8 w-72 h-16 rounded-full shadow-lg ${
          isComplete ? "bg-white text-black" : "bg-white/30 text-black/30"
        } text-xl font-semibold`}
        disabled={!isComplete}
      >
        {children}
      </button>
      <p className="text-white text-xs mt-4">powered by Friends & Family</p>
    </div>
  );
}
