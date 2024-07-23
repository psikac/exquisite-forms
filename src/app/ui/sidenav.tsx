import Link from "next/link";

export default function SideNav() {
  return (
    <div className=" flex h-full flex-col px-3 py-4 md:px-2 ">
      <div className="py-2 bg-indigo-200 text-center">Home</div>
      <Link
        href={"/forms/guess-form"}
        className="text-indigo-600 text-xl hover:text-indigo-300 delay-100 transition"
      >
        Guess Form
      </Link>
      <Link
        href={"/forms/number-form"}
        className="text-indigo-600 text-xl hover:text-indigo-300 delay-100 transition"
      >
        Number Form
      </Link>
    </div>
  );
}
