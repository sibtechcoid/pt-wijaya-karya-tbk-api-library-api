import UserRead from "../../../../user/read/response/user/user";
export default interface Body extends UserRead {
    token: string;
}
