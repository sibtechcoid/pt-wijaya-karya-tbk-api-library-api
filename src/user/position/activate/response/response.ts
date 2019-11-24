import Created from "../../../../response/created";
import Id from "../../../../id/id";
import BadRequest from "../../../../response/bad-request";
import Success from "../../../../response/success";

type Response = BadRequest<undefined>|Success<undefined>;
export default Response;