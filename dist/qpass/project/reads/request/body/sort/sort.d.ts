import ReadsBody from "../../../response/body/body";
import BaseSort from "../../../../../../sort/sort";
export default interface Sort extends BaseSort<Omit<ReadsBody, 'status' | 'object' | 'members' | 'type'>> {
}
