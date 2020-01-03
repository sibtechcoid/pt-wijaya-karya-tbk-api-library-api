import Created from "../../../../response/created";
import Id from "../../../../id/id";
import BadRequest from "../../../../response/bad-request";
declare type Response = BadRequest<undefined> | Created<Id>;
export default Response;
