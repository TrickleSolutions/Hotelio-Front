import { combineReducers } from "redux";
import { GetSearchedHotelsReducers, GetSingleHotelReducers } from "./hotelReducers";
import {
  GetAgentSignupReducer,
  GetAgentLoginReducer,
} from "../reducers/agentReducers";
import { GetAllRoomTypReducer } from "./roomCategoriesReducers";
import { GetALlPopularLocationReducer } from "./locationsReducers";
import { GetBookingOffersReducers } from "./OffersReducers";
import { GetBookingRegisterReducer } from "./BookingReducers";

const rootReducers = combineReducers({
  GetSearchedHotelsReducers,
  GetAgentSignupReducer,
  GetAgentLoginReducer,
  GetAllRoomTypReducer,
  GetALlPopularLocationReducer,
  GetBookingOffersReducers,
  GetBookingRegisterReducer,
  GetSingleHotelReducers
});

export default rootReducers;
