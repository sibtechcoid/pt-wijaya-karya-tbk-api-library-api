import Nama from "../../../../../nama/update/nama";
import CreateBody from "../../../create/request/body/body";
import Id from "../../../../../id/id";

export default interface Body extends Id, Partial<CreateBody> {

    //jenisUnit ?: number;
    //jenisUsaha ?: number;
}