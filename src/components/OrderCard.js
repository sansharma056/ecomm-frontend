import { Link } from "react-router-dom";

const OrderCard = ({
  purchasedAt,
  id,
  orderLines,
  orderStatus,
  address: { street, city, state, pincode },
}) => {
  function getTotal() {
    return orderLines.reduce(
      (prev, cur) => prev + cur.product.details.price,
      0
    );
  }

  function parseDate(date) {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  return (
    <div className="flex w-5/6 flex-col border">
      <div className="flex bg-gray-100 p-4">
        <div className="text-sm text-zinc-700">
          <p className="font-semibold">Order Placed</p>
          <p>{parseDate(purchasedAt)}</p>
        </div>
        <div className="ml-14 text-sm text-zinc-700">
          <p className="font-semibold">Total</p>
          <p> ₹ {new Intl.NumberFormat("en-IN").format(getTotal())}</p>
        </div>
        <div className="ml-14 text-sm text-zinc-700">
          <p className="font-semibold">Order Status</p>
          <p className="capitalize">{orderStatus.toLowerCase()}</p>
        </div>
        <div className="ml-14 text-sm text-zinc-700">
          <p className="font-semibold">Shipping Details</p>
          <p className="capitalize">
            {street}, {city}, {state} - {pincode}
          </p>
        </div>
        <p className="ml-auto text-sm text-zinc-700">
          <span className="font-semibold">Order</span> #{id}
        </p>
      </div>
      <div className="mt-4">
        {orderLines.map((orderLine) => (
          <div key={orderLine.id} className="flex items-center border-b p-4">
            <Link to={`../product/${orderLine.productId}`}>
              <img
                className="h-32 w-32 object-contain"
                src={orderLine.product.details.imageURL}
                alt={`${orderLine.product.details.name}'s image`}
              />
            </Link>
            <Link to={`../product/${orderLine.productId}`}>
              <p className="ml-10 w-96">{orderLine.product.details.name}</p>
            </Link>
            <p className="ml-40">{orderLine.quantity}</p>
            <p className="ml-auto">
              ₹{" "}
              {new Intl.NumberFormat("en-IN").format(
                orderLine.product.details.price * orderLine.quantity
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
