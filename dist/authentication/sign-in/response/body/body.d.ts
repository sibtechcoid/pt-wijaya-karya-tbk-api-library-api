import UserRead from "../../../../user/read/response/body/body";
import Akses from "../../../../user/akses/create/request/body/body";
export default interface Body extends UserRead {
    token: string;
    akses: Akses;
}
