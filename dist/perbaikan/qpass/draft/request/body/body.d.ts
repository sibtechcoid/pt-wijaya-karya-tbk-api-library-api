import Id from "../../../../../id/id";
import CreateBody from "../../../create/request/body/body";
export default interface Body extends Partial<Id>, Partial<Omit<CreateBody, 'ditutup' | 'catatan'>> {
}
