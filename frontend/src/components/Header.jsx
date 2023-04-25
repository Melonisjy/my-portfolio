import { MdEmail, MdInsertDriveFile, MdPerson } from "react-icons/md";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-transparent h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between mt-8 items-center font-normal font-body text-stone-700">
        <div className="flex flex-row items-center gap-2 ml-20">
          <MdEmail size={28} />
          dhy2458@gmail.com
        </div>

        <ul className="flex text-xs md:text-base gap-2 md:gap-8 mr-20">
          <Link to="/project">
            <li className="flex flex-row items-center">
              <MdInsertDriveFile size={28} />
              Projects
            </li>
          </Link>
          <li className="flex flex-row items-center">
            <MdPerson size={28} />
            Resume
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
