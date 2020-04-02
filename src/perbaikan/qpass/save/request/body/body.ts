import Id from "../../../../../id/id";
import CreateBody from "../../../create/request/body/body";

export default interface Body extends Id, Partial<Pick<CreateBody, 'ditutup'|'catatan'>> {

}
