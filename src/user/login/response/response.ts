import BaseResponse from '../../../response/response';
import User from "../../user";
import Success from "../../../response/success";
import NotFound from "../../../response/not-found";


type Response = NotFound<undefined>|Success<User>;
export default Response;