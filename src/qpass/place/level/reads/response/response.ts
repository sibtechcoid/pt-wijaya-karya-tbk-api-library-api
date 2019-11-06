import Level from "../../level";
import Success from "../../../../../response/success";
import NotFound from "../../../../../response/not-found";

type Response = Success<Level<number>[]>;
export default Response;