import Nama from "../../../../../nama/update/nama";
import Id from "../../../../../id/id";
import CreateBody from "../../../create/request/body/body";

export default interface Body extends Partial<CreateBody>, Id {

}