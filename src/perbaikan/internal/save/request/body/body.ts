import Id from "../../../../../id/id";
import CreateBody from "../../../create/request/body/body";

export default interface Body extends Id, Pick<CreateBody, 'ditutup'|'catatan'> {

}
