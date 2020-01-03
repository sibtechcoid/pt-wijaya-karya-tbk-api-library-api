import Created from "../../../../../response/created";
import BadRequest from "../../../../../response/bad-request";
import Body from "./body/body";
declare type Response = BadRequest<undefined> | Created<Body>;
export default Response;
