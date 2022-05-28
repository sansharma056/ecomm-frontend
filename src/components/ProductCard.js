import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, imgURL }) => {
  return (
    <div className="shadow-md  sm:m-2 md:w-1/2 lg:w-1/5">
      <Link to={`../product/${id}`}>
        <div className="flex h-72 items-center justify-center bg-gray-100">
          <div className="flex-column flex h-56 items-center justify-center">
            <img src={imgURL} alt={`${name}'s image`} className="h-4/5" />
          </div>
        </div>
        <div className="mb-4 mt-4 flex flex-col items-center justify-center p-2">
          <p className="text mb-1 text-center">{name}</p>
          <p className="font-semibold text-gray-700">
            ₹ {new Intl.NumberFormat("en-IN").format(price)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
