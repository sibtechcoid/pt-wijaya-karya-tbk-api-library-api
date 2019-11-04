import BaseResponse from '../../../response/response';
import User from "../../user";

interface Fail extends BaseResponse<undefined> {
    code : 404;
}

interface Success extends BaseResponse<User> {
    code : 200;
}

type Response = Fail|Success;
export default Response;