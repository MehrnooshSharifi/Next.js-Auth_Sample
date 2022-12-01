import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
const Header = () => {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <div className="bg-white w-full shadow-lg ">
      <nav className=" text-xs md:text-base flex justify-between md:py-4 md: mb-6 max-w-screen-xl mx-auto">
        <h1 className=" hidden md:block font-bold">
          <a href="#">TodoList App using Next.js & TailwindCSS</a>
        </h1>
        <ul className={`flex items-center gap-x-6 ${status==="loading" && !session ? "opacity-0" : "opacity-100"}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/protected-ssr">protected-ssr</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          {!session && status!=="loading" && (
            <li>
              <button onClick={() => signIn("github")}>Sign in</button>
            </li>
          )}
          {session && (
            <li>
              <button onClick={() => signOut()}>Sign Out</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
