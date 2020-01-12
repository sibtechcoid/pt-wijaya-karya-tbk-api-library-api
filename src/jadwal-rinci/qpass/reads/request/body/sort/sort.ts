import ReadBody from "../../../../read/response/body/body";
import BaseSort from "../../../../../../sort/sort";

export default interface Sort extends BaseSort<Omit<ReadBody,'fungsi'|'prosedur'|'prosesBisnis'|'klausul'>> {

}
