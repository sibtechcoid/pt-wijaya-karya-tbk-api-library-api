import UserRead from "../../../read/response/user/user";

export default interface Body extends UserRead {

    token : string;

}