import { Link } from "react-router-dom";

const CategoryCard = ({ name, itemCount, slug, imgURL }) => {
  return (
    <div className="bg-gray-50 p-8 hover:bg-indigo-50">
      <Link to={`products/${slug}`}>
        <div className="flex h-56 items-center justify-center">
          <img
            className="h-4/5"
            src={imgURL}
            alt={`${name} category's image`}
          />
        </div>
        <div>
          <p className="mb-1 text-2xl font-semibold">{name}</p>
          <p className="text-xs text-gray-700">{itemCount} item(s)</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
