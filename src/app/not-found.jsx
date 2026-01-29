"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#111B3C] ">
      <div className="text-center bg-white/20 backdrop-blur-md rounded-3xl p-16 shadow-lg">
        <h1 className="text-9xl font-extrabold text-white drop-shadow-lg animate-pulse">
          404
        </h1>
        <p className="text-xl text-white/90 mt-6 mb-8">Oops! Page Not Found</p>
        <Link
          href="/"
          className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
