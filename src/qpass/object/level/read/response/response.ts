import Level from "../../create/request/body/body";
import Success from "../../../../../response/success";
import Id from "../../../../../id/id";

type Response = Success<(Level & Id)[]>;
export default Response;