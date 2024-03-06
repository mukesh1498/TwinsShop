const CartItem = require("../modals/cartItem_modal");
const userService = require("../services/user_service.js");

async function updateCartItem(userId, cartItemId, cartItemData) {
  try {
    const item = await findCartItemById(cartItemId);
    if (!item) {
      throw new Error("cart item not found : ", cartItemId);
    }
    const user = await userService.findUserById(item.userId);
    if (!user) {
      throw new Error("User not found : ", userId);
    }
    if (user._id.toString() === userId.toString()) {
      item.quantity = cartItemData.quantity;
      item.price = quantity * item.product.discountedPrice;
      item.discountedPrice = item.quantity * item.product.discountedPrice;
      const updatedCartItem = await item.save();
      return updatedCartItem;
    } else {
      throw new Error("you can't  update this cart item");
    }
  } catch (error) {
    console.log(`Error in updating the Cart Item: ${error.message}`);
  }
}
async function removedCartItem(userId, cartItemId) {
  const cartItem = await findCartItemById(cartItem);
  const user = await userService.findUserById(userId);

  if (user._id.toString() === cartItem.userId.toString()) {
    await CartItem.findByIdAndDelete(cartItemId);
  }
  throw new Error("you cant remve another user's Item");
}

async function findCartItemById(cartItemId) {
  const cartItem = await findCartItemById(cartItemId);
  if (cartItem) {
    return cartItem;
  }else{
    throw new Error("cartItem not found with id", cartItem)
  }
}

module.exports={
    updateCartItem,
    removedCartItem,
    findCartItemById
}
