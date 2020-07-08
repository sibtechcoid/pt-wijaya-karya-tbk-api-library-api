import CreateBody from "../../../../create/request/body/body";
import Deactivate from "../../../../../../deactivate/read/request/body/body";
export default interface Where extends Partial<Omit<CreateBody, 'prosesBisnis' | 'prosedur' | 'klausul' | 'fungsi' | 'masalah' | 'objek' | 'kriteria' | 'lampiran' | 'tinjauan' | 'tinjauanCatatan'>>, Deactivate {
}
