import Success from "../../../response/success";
import NotFound from "../../../response/not-found";
import Token from "./token/token";

type Response = NotFound<undefined>|Success<Token>;
export default Response;