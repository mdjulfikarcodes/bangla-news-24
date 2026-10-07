
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-[#C10007]">
        404
      </h1>

      <h2 className="text-2xl font-bold">
        Page Not Found
      </h2>

      <p className="text-gray-500">
        দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি।
      </p>

      <Link
        href="/"
        className="btn bg-[#C10007] text-white"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;

