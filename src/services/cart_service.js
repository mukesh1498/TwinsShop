const Cart = require("../modals/cart_modal");
const CartItem = require("../modals/cartItem_modal");
const Product = require("../modals/product_modal");

async function createCart(user) {
  try {
    if (!user) {
      throw new Error("User object is required to create a cart");
    }

    const cart = new Cart({ user });
    const createdCart = await cart.save();

    return createdCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findUserCart(userId) {
  try {
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      throw new Error("Cart not found for the user");
    }

    let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
    cart.cartItems = cartItems;

    let totalPrice = 0;
    let totalDiscountedPrice = 0;
    let totalItem = 0;

    for (let cartItem of cart.cartItems) {
      totalPrice += cartItem.price;
      totalDiscountedPrice += cartItem.discountedPrice;
      totalItem += cartItem.quantity;
    }

    cart.totalPrice = totalPrice;
    cart.totalItem = totalItem;
    cart.discount = totalDiscountedPrice;

    return cart;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addCartItem(userId, req) {
  try {
    let cart = await Cart.findOne({ user: userId });
    let product = await Product.findById(req.productId); // Corrected this line

    const isPresent = await CartItem.findOne({
      cart: cart._id,
      product: product._id,
      userId,
    });
    if (!isPresent) {
      const cartItem = new CartItem({
        product: product._id,
        cart: cart._id,
        quantity: 1,
        userId,
        price: product.price,
        size: req.size,
        discountedPrice: product.discountedPrice,
      });

      const createdCartItem = await cartItem.save();
      cart.cartItems.push(createdCartItem);
      await cart.save();
      return "Item added to cart";
    } else {
      return "Item already present in the cart";
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = { createCart, findUserCart, addCartItem };

// const Cart = require("../modals/cart_modal");
// const CartItem = require("../modals/cartItem_modal");
// const Product = require("../modals/product_modal");

// async function createCart(user) {
//   try {
//     if (!user) {
//       throw new Error("User object is required to create a cart");
//     }

//     const cart = new Cart({ user });
//     const createdCart = await cart.save();

//     return createdCart;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

// async function findUserCart(userId) {
//   try {
//     let cart = await Cart.findOne({ user: userId });
//     let cartItems = await CartItem.find({ cart: cart._id }).populate("product");
//     cart.cartItems = cartItems;

//     let totalPrice = 0;
//     let totalDiscountedPrice = 0;
//     let totalItem = 0;

//     for (let cartItem of cart.cartItems) {
//       totalPrice += cartItem.price;
//       totalDiscountedPrice += cartItem.discountedPrice;
//       totalItem += cartItem.quantity;
//     }
//     cart.totalPrice = totalPrice;
//     cart.totalItem = totalItem;
//     cart.discount = totalDiscountedPrice;

//     return cart;
//   } catch (error) {
//     throw new Error(error.message)
//   }
// }
// async function addCartItem(userId,req){
//   try {

//     let cart = await Cart.findOne({user:userId});
//     let product = await Product.findById({req.productId});
//  const isPresent = await CartItem.findOne({cart:cart._id, product:product._id,userId});
//    if(!isPresent){
//     const cartItem = new CartItem({
//       product:product._id,
//       cart:cart._id,
//       quantity:1,
//       userId,
//       price: product.price,
//       size:req.size,
//       discountedPrice:product.discountedPrice
//     })

//     const createdCartItem = await cartItem.save();
//     cart.cartItems.push(createdCartItem);
//     await cart.save();
//     return "Item added to cart";
//    }
// } catch (error) {
//     throw new Error(error.message);
//   }
// }
// module.exports = { createCart,findUserCart, addCartItem};
