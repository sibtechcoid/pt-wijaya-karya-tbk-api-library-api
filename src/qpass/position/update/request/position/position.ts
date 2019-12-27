import CreatePosition from "../../../create/request/body/body";
import Id from "../../../../../id/id";


export default interface Position extends Partial<CreatePosition>, Id {

}