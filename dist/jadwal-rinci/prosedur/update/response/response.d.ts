import Success from "../../../../response/success";
import BadRequest from "../../../../response/bad-request";
declare type Response = BadRequest<undefined> | Success<undefined>;
export default Response;
