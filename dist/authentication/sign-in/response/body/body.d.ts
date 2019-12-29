import UserRead from "../../../../user/read/response/body/body";
import Access from "../../../../user/access/create/request/body/body";
export default interface Body extends UserRead {
    token: string;
    extraAccess: Access;
    access: Access;
}
