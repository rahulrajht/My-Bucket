export const data = {
  cartItems: [],
  wishList: [],
  filteredData: []
};

const SET_NEW_DATA = "setNewData";
const SET_CART_ITEMS = "setCartItems";
const ADD_CART_ITEM = "addCartItem";
const INC_QTY = "incQty";
const DEC_QTY = "decQty";
const REMOVE_CART_ITEM = "removeCartItem";
const ADD_WISHLIST_ITEM = "addWishlistItem";
const REMOVE_WISHLIST_ITEM = "removeWishlistItem";
const SET_WISHLIST_ITEMS = "setWishlistItems";
const HIGH_TO_LOW = "highToLow";
const LOW_TO_HIGH = "lowToHigh";

export function reducer(
  state,
  {
    type,
    id,
    items,
    filteredData,
    fetchedCartItems,
    fetchedWishlist,
    newCartItems
  }
) {
  const { cartItems, wishList } = state;
  switch (type) {
    case INC_QTY:
      return {
        ...state,
        cartItems: cartItems.map((items) => {
          return items._id === id
            ? { ...items, count: items.count + 1 }
            : items;
        })
      };
    case DEC_QTY:
      if (items.count === 1) {
        return {
          ...state,
          cartItems: cartItems.filter((items) => items._id !== id)
        };
      }
      return {
        ...state,
        cartItems: cartItems.map((items) => {
          return items._id === id
            ? { ...items, count: items.count - 1 }
            : items;
        })
      };

    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: fetchedCartItems || []
      };

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: cartItems.filter((items) => items._id !== id)
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: cartItems.concat(items)
      };
    case SET_WISHLIST_ITEMS:
      return {
        ...state,
        wishList: fetchedWishlist || []
      };
    case REMOVE_WISHLIST_ITEM:
      return {
        ...state,
        wishList: wishList.filter((items) => items._id !== id)
      };
    case ADD_WISHLIST_ITEM:
      return {
        ...state,
        wishList: wishList.concat(items)
      };
    case SET_NEW_DATA:
      return {
        ...state,
        filteredData: newCartItems || []
      };
    case HIGH_TO_LOW:
      return {
        ...state,
        filteredData: filteredData.sort((a, b) => b["price"] - a["price"])
      };
    case LOW_TO_HIGH:
      return {
        ...state,
        filteredData: filteredData.sort((a, b) => a["price"] - b["price"])
      };
    default:
      return state;
  }
}
