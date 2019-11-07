import Level from "../../level";
import Success from "../../../../../response/success";
import NotFound from "../../../../../response/not-found";
import Id from "../../../../../id/id";

type Response = NotFound<undefined>|Success<Level & Id>;
export default Response;