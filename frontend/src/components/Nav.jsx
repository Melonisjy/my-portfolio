import { BsGithub } from "react-icons/bs";
import { SiVelog, SiTistory } from "react-icons/si";

const Nav = () => {
  return (
    <div className="absolute top-96 flex flex-col gap-6 ml-8">
      <div>
        <BsGithub size={28} />
      </div>
      <div>
        <SiVelog size={28} />
      </div>
      <div>
        <SiTistory size={28} />
      </div>
    </div>
  );
};

export default Nav;
