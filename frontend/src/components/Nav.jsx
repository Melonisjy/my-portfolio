import { BsGithub } from "react-icons/bs";
import { SiVelog, SiTistory } from "react-icons/si";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="absolute top-96 flex flex-col gap-6 ml-8">
      <Link to="https://github.com/Melonisjy" target="_blank">
        <div>
          <BsGithub size={28} />
        </div>
      </Link>
      <Link to="https://velog.io/@meloncoder" target="_blank">
        <div>
          <SiVelog size={28} />
        </div>
      </Link>
      <Link to="https://melon-is-jy.tistory.com/" target="_blank">
        <div>
          <SiTistory size={28} />
        </div>
      </Link>
    </div>
  );
};

export default Nav;
