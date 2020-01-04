import Body from "../../create/request/body/body";
import Success from "../../../../response/success";
import Id from "../../../../id/id";
declare type Response = Success<Body & Id>;
export default Response;
