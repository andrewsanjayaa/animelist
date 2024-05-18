import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex sm:flex-row flex-col justify-between md:items-center p-4 gap-4">
        <Link className="font-bold text-white text-2xl" href="/">
          Anime List
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
