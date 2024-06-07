import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center w-full px-4 mt-4">
      <ChevronLeftIcon className="w-8 h-8 text-white cursor-pointer" onClick={() => router.back()} />
      <img
        src="https://via.placeholder.com/50"
        alt="Profile"
        className="rounded-full border-2 border-white w-12 h-12"
      />
    </div>
  );
}
