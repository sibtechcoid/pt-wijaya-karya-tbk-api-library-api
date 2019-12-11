import Success from "../../../../../response/success";
import BadRequest from "../../../../../response/bad-request";

type Response = BadRequest<undefined>|Success<undefined>;
export default Response;