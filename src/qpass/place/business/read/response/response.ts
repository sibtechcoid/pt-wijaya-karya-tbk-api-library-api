import Data from "../../create/request/data/data";
import Success from "../../../../../response/success";
import NotFound from "../../../../../response/not-found";
import Id from "../../../../../id/id";

type Response = Success<Data & Id>;
export default Response;