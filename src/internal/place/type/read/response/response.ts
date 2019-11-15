import Type from "../../create/request/data/type";
import Success from "../../../../../response/success";
import Id from "../../../../../id/id";

type Response = Success<(Type & Id)[]>;
export default Response;