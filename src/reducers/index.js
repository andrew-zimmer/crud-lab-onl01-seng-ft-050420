import { combineReducers } from "redux";
import manageRestaurant from "./manageRestaurant";
import manageReviews from "./manageReviews";

export default combineReducers({
  restaurants: manageRestaurant,
  reviews: manageReviews,
});
