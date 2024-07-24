import Link from "next/link";

export default function SideNav() {
  return (
    <div className=" flex h-full flex-col">
      <div className="py-2 bg-indigo-200 text-center text-2xl">Menu</div>
      <ul className="mx-2">
        <li>
          <Link
            href={"/forms/guess-form"}
            className="text-indigo-600 text-xl hover:text-indigo-300 delay-50 transition"
          >
            Guess Form
          </Link>
        </li>
        <li>
          <Link
            href={"/forms/number-form"}
            className="text-indigo-600 text-xl hover:text-indigo-300 delay-50 transition"
          >
            Number Form
          </Link>
        </li>
      </ul>
    </div>
  );
}
