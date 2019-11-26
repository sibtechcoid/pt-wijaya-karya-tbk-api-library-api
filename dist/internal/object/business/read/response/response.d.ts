import Business from "../../create/request/business/business";
import Success from "../../../../../response/success";
import Id from "../../../../../id/id";
declare type Response = Success<Business & Id>;
export default Response;
