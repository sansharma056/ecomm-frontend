export function handleQuantityChange(
  change,
  purchaseLimit,
  quantity,
  setQuantity
) {
  if (change === "+" && quantity != purchaseLimit) {
    setQuantity(quantity + 1);
  } else if (change === "-" && quantity > 1) {
    setQuantity(quantity - 1);
  }
}
