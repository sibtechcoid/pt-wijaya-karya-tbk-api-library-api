import Deactivate from "../../../../deactivate/read/request/body/body";
import Limit from "../../../../limit/limit";
import Sort from "../../../../sort/sort";
import ReadsBody from "../../response/body/body";
import CreateBody from "../../../create/request/body/body";
export interface WhereInterface extends Partial<Omit<CreateBody, 'password' | 'user'>>, Deactivate {
}
export default interface Body extends Limit, Sort<Omit<ReadsBody, 'extraAccess' | 'access' | 'position' | 'password'>> {
    where?: WhereInterface;
}
