import UserRead from "../../../../user/read/response/body/body";

export default interface Body extends UserRead {

    token : string;

}