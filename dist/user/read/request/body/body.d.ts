import Deactivate from "../../../../deactivate/read/request/body/body";
import Limit from "../../../../limit/limit";
import Sort from "../../../../sort/sort";
import CreateBody from "../../../create/request/body/body";
export default interface Body extends Deactivate, Limit, Sort<CreateBody> {
}
