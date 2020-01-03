import Created from "../../../../../response/created";
import Id from "../../../../../id/id";
import BadRequest from "../../../../../response/bad-request";
import Body from "./body/body";

type Response = BadRequest<undefined>|Created<Body>;
export default Response;