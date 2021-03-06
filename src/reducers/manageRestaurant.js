import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(
  state = { restaurants: [], reviews: [] },
  action
) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = { text: action.payload, id: cuid() };
      return { ...state, restaurants: [...state.restaurants, restaurant] };
    case "REMOVE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter((x) => x.id !== action.payload),
      };
    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId,
      };
      return { ...state, reviews: [...state.reviews, review] };
    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter((review) => review.id !== action.payload),
      };

    default:
      return state;
  }
}
