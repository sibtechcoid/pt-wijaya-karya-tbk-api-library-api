import Type from "../../type";
import Success from "../../../../../response/success";
import NotFound from "../../../../../response/not-found";

type Response = Success<Type<number>[]>;
export default Response;