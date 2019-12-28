import Deactivate from "../../../../deactivate/read/request/body/body";
import Limit from "../../../../limit/limit";
import Sort from "../../../../sort/sort";
import ReadBody from "../../../read/response/body/body";
export default interface Body extends Deactivate, Limit, Sort<Omit<ReadBody, 'extraAccess' | 'access' | 'position'>> {
}
