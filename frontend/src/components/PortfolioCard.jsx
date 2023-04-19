import { Link } from "react-router-dom";

function PortfolioCard({ title, desc, image, index }) {
  return (
    <li className="relative bg-gray-100 w-60 h-72 rounded-xl">
      <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
        <img
          className="w-full h-full object-cover rounded-t-xl"
          src={`${process.env.PUBLIC_URL}/${image}`}
          alt="Project"
        />
      </div>
      <div className="text-xl font-bold mt-2 mx-2">{title}</div>
      <div className="mt-2 mx-2">{desc}</div>
      <Link
        to={`/portfolio/${index}?title=${title}&desc=${desc}&image=${image}`}
      >
        <button className="absolute bottom-0 right-0 m-4 px-4 py-2 rounded-full bg-white">
          보기
        </button>
      </Link>
    </li>
  );
}

export default PortfolioCard;
