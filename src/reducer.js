export const initialState = {
  basket: [],
  user: null,
  searchProduct: "",
}

export const getBasketTotal = (basket) => basket?.reduce(
  (amount, item) => item.price + amount,
  0
)
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      }

      case 'ADD_SEARCH_INPUT':

        let len = state.searchProduct.length

        let newSearch = [...state.searchProduct]

        len > 0 && newSearch.splice(len,1)
    
        return {
          ...state,
          searchProduct: [newSearch, action.inputValue]
        }

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      )
      let newBasket = [...state.basket]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        )
      }
      return {
        ...state,
        basket: newBasket,
      }

    case 'SET_USER':
      return {
        ...state, user: action.user
      }
    
    case 'EMPTY_BASKET':
      return {...state, basket: []}

    default:
      return state
  }
}

export default reducer
