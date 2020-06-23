import ReadsBody from "../../../../read/response/body/body";
import BaseSort from "../../../../../../sort/sort";
export default interface Sort extends BaseSort<Omit<ReadsBody, 'lampiran' | 'catatan'>> {
}
