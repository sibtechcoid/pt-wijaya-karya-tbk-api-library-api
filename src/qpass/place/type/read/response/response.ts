import Type from "../../type";
import Success from "../../../../../response/success";
import NotFound from "../../../../../response/not-found";
import Id from "../../../../../id/id";

type Response = NotFound<undefined>|Success<Type & Id>;
export default Response;