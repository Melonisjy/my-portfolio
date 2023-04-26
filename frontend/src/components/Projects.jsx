import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

function Projects() {
  return (
    <ul className="flex justify-center items-center gap-12 mt-32 ">
      <li className="relative bg-gray-100 w-52 h-60 rounded-xl shadow-md shadow-slate-600 duration-500 hover:scale-[1.1]">
        <div className="text-gray-700 text-lg font-semibold mt-2 mx-2 font-koreanHeader">
          머신러닝을 이용한
          <br /> 식단관리 앱
        </div>
        <div className="text-xs text-gray-500 mt-2 mx-2 font-koreanHeader">
          🏆 2020-2학기 전공 소모임
          <br /> 장려상 수상
        </div>
        <div className="text-xs text-gray-800 mt-12 mx-2 font-light font-display">
          Android Stuido / Python /<br /> AWS EC2 / MySQL
        </div>
        <Link to="https://github.com/dkekzhs/SmartProjectApp" target="_blank">
          <div className="absolute bottom-0 right-0 m-4 px-4 py-2 opacity-70 hover:opacity-100">
            <BsGithub size={28} />
          </div>
        </Link>
      </li>
      <li className="relative bg-gray-100 w-52 h-60 rounded-xl shadow-md shadow-slate-600 duration-500 hover:scale-[1.1]">
        <div className="text-gray-700 text-lg font-semibold mt-2 mx-2 font-koreanHeader">
          블록체인 기반
          <br /> 기부 플랫폼
        </div>
        <div className="text-xs text-gray-500 mt-2 mx-2 font-koreanHeader">
          🏆 2022-1학기 캡스톤 디자인 경진대회 최우수상 수상
        </div>
        <div className="text-xs text-gray-800 mt-12 mx-2 font-light font-display">
          Solidity / Unity / Web3.js / Html / CSS / JS
        </div>
        <Link to="https://github.com/6uamy/P2D" target="_blank">
          <div className="absolute bottom-0 right-0 m-4 px-4 py-2 opacity-70 hover:opacity-100">
            <BsGithub size={28} />
          </div>
        </Link>
      </li>
      <li className="relative bg-gray-100 w-52 h-60 rounded-xl shadow-md shadow-slate-600 duration-500 hover:scale-[1.1]">
        <div className="text-gray-700 text-lg font-semibold mt-2 mx-2 font-koreanHeader">
          뉴럴네트워크를 이용한
          <br /> 물리 계층 보안 광전송 기술
        </div>
        <div className="text-xs text-gray-500 mt-2 mx-2 font-koreanHeader">
          🏆 제 31회 광자기술 학술회의 <br />
          우수 논문상 수상
        </div>
        <div className="text-xs text-gray-800 mt-12 mx-2 font-light font-display">
          Python / Matlab
        </div>
      </li>
    </ul>
  );
}
export default Projects;
