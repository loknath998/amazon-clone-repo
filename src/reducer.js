export const initialState = {
    cart: [],
    user: null,
    orders: [],
    save_for_later: [],
    address: null,
};

// SELECTOR
// cart total price starts ------------------------------------
export const getCartTotalPrice = (cart) => {
    return cart?.reduce((amount, item) => amount + item.price * item.qty, 0);
};
// =============================
// we can do above thing as below also

function totalFunction(total, num) {
    return total + num.price;
}
// export const getCartTotal = (cart)=>{
//     cart.reduce(totalFunction,0)
// }
// =============================
// cart total  price ends ------------------------------------
// cart total items starts -----------------------------------
export const getCartTotalItems = (cart) => {
    return cart?.reduce((total, item) => total + item.qty, 0);
};

// cart total items ends -----------------------------------

const reducer = (state, action) => {
    // console.log(action);

    // console.log(state);
    const { cart, save_for_later, orders } = state;
    switch (action.type) {
        case "ADD_TO_CART":
            let index1 = findDuplicate(cart, action.item.id);
            if (index1 !== -1) {
                let newCart = [...cart];
                newCart.splice(index1, 1, {
                    ...cart[index1],
                    qty: cart[index1].qty + 1,
                });
                return {
                    ...state,
                    cart: newCart,
                };
            }
            // console.log("item", action.item);
            return {
                ...state,
                cart: [...state.cart, action.item],
            };
        case "DECREASE_QUANTITY":
            let index2 = findDuplicate(cart, action.id);
            if (index2 !== -1) {
                let newCart = [...cart];
                newCart.splice(index2, 1, {
                    ...cart[index2],
                    qty: cart[index2].qty - 1,
                });
                return { ...state, cart: newCart };
            }

            return state;
        case "DELETE_FROM_CART":
            let index3 = findDuplicate(cart, action.id);
            let newCart = [...cart];
            if (index3 !== -1) {
                newCart.splice(index3, 1);
            }
            return {
                ...state,
                cart: newCart,
            };
        case "SET_USER": {
            return {
                ...state,
                user: action.user,
            };
        }
        case "SAVE_FOR_LATER": {
            let index4 = findDuplicate(save_for_later, action.item.id);
            // let newSave_for_later = [...save_for_later];
            if (index4 === -1) {
                return {
                    ...state,
                    save_for_later: [...save_for_later, action.item],
                };
            }
            return state;
        }
        case "SAVE_FOR_LATER_DELETE": {
            let index5 = findDuplicate(save_for_later, action.id);
            let newSave_for_later = [...save_for_later];
            if (index5 !== -1) {
                newSave_for_later.splice(index5, 1);
                return {
                    ...state,
                    save_for_later: newSave_for_later,
                };
            }
            return state;
        }

        case "ADD_ADDRESS": {
            return {
                ...state,
                address: action.address,
            };
        }
        case "ADD_TO_ORDERS": {
            let newOrders = cart.map((item) => {
                return {
                    ...item,
                    date: new Date().toDateString(),
                    time: new Date().toLocaleTimeString(),
                    orderId: action.orderId,
                };
            });
            return {
                ...state,
                orders: [...newOrders, ...orders],
                cart: [],
            };
        }
        case "COPY_ONLINE_ORDERS": {
            return {
                ...state,
                orders: action.orders,
            };
        }
        case "SIGN_OUT":
            return {
                ...initialState,
            };
        default:
            return state;
    }
};

function findDuplicate(cart, id) {
    // console.log(cart);
    // return -1;
    return cart.findIndex((item) => item.id === id);
}

export default reducer;
