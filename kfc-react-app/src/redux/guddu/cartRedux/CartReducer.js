import {
  DEC_QTY,
  GET_CART_DATA,
  INC_QTY,
  REM_ALL,
  REM_ONE,
} from "./CartAction";

export const initstate = {
  cartdata: [
    {
      image:
        "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000110.jpg",
      title: "Strips & Popcorn Treat",
      price: 366,
      qty: 1,
      id: "gali1",
    },
    {
      image:
        "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000110.jpg",
      title: "dummy",
      price: 199,
      qty: 1,
      id: "gali2",
    },
  ],
};
export const cartReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case GET_CART_DATA: {
      return state;
    }
    case INC_QTY: {
      return {
        ...state,
        cartdata: state.cartdata.filter((elem) =>
          elem.id === payload ? elem.qty++ : elem.qty
        ),
      };
    }
    case DEC_QTY: {
      return {
        ...state,
        cartdata: state.cartdata.filter((elem) =>
          elem.id === payload ? elem.qty-- : elem.qty
        ),
      };
    }
    case REM_ONE: {
      return {
        ...state,
        cartdata: state.cartdata.filter((elem) => elem.id !== payload),
      };
    }
    case REM_ALL: {
      return {
        ...state,
        cartdata: [],
      };
    }
    default:
      return state;
  }
};

// cartdata: [
//     {
//       image:
//         "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000110.jpg",
//       title: "Strips & Popcorn Treat",
//       price: 366,
//       qty: 1,
//       id: "gali1",
//     },
//     {
//       image:
//         "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/L-8000110.jpg",
//       title: "dummy",
//       price: 199,
//       qty: 1,
//       id: "gali2",
//     },
//   ],
