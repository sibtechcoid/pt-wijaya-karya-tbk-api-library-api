import Success from "../../../response/success";
import NotFound from "../../../response/not-found";
import User from "./user/user";

type Response = NotFound<undefined>|Success<User>;
export default Response;