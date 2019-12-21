import Success from "../../../response/success";
import NotFound from "../../../response/not-found";
import Body from "./body/body";
declare type Response = NotFound<undefined> | Success<Body>;
export default Response;
