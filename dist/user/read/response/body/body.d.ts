import Access from "../../../access/create/request/body/body";
import ReadsBody from "../../../reads/response/body/body";
export default interface Body extends ReadsBody {
    extraAccess: Access;
    access: Access;
}
