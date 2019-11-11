import Business from "../../business";
import Success from "../../../../../response/success";
import NotFound from "../../../../../response/not-found";
import Id from "../../../../../id/id";

type Response = Success<(Business & Id)[]>;
export default Response;