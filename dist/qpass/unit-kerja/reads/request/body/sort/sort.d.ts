import ReadsBody from "../../../../../unit-kerja/read/response/body/body";
import BaseSort from "../../../../../../sort/sort";
export default interface Sort extends BaseSort<Omit<ReadsBody, 'level' | 'business' | 'type'>> {
}
