import UserRead from "../../../read/response/user/user";

export default interface User extends UserRead {

    token : string;

}