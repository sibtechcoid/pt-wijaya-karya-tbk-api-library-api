import Limit from "../../../../limit/limit";
import Sort from "../../../../sort/sort";
import ReadBody from "../../../read/response/body/body";


export default interface Body extends Limit, Sort<Omit<ReadBody,'extraAkses'|'akses'|'jabatan'>> {

}
