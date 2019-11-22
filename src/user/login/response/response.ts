import Success from "../../../response/success";
import NotFound from "../../../response/not-found";
import Authorized from "./token/authorized";

type Response = NotFound<undefined>|Success<Authorized>;
export default Response;