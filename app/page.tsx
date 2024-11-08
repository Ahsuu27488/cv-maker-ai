// import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl mb-4">
          Welcome to <span className="text-[rgb(63,140,143)]">ProFile Pro</span>
        </h1>
        <p className="text-lg text-gray-600 md:text-xl mb-8">
          Create a professional resume effortlessly with easy-to-fill forms. Let’s get started on building your career!
        </p>
        <Link href="/form">
          <button className="inline-block px-8 py-3 text-lg font-medium text-white bg-[rgb(63,140,143)] rounded-lg hover:bg-blue-400 transition-colors duration-300 shadow-lg">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}