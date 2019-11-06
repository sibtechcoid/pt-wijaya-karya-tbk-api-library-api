import Created from "../../../../../response/created";
import Id from "../../../../../id/id";
import BadRequest from "../../../../../response/bad-request";
import Conflict from "../../../../../response/conflict";
import Message from "../../../../../message/message";

type Response =
    BadRequest<undefined> |
    Created<Id<number>> |
    Conflict<Message>
    ;
export default Response;