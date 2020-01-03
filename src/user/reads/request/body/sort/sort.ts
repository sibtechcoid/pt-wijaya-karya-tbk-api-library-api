import ReadsBody from "../../../response/body/body";
import BaseSort from "../../../../../sort/sort";
import Mode from "../../../../../sort/mode/mode";

export default interface Sort extends BaseSort<Omit<ReadsBody,'extraAkses'|'akses'|'jabatan'|'password'>> {

}

