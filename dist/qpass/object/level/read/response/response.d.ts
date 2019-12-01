import Level from "../../create/request/level/level";
import Success from "../../../../../response/success";
import Id from "../../../../../id/id";
declare type Response = Success<(Level & Id)[]>;
export default Response;
