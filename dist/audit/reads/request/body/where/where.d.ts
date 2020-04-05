import CreateBody from "../../../../create/request/body/body";
import Deactivate from "../../../../../deactivate/read/request/body/body";
import Status from "../../../../status/status";
import Fase from "../../../../fase/fase";
import Type from "../../../../type/type";
export default interface Where extends Partial<Omit<CreateBody, 'anggota' | 'status' | 'tipe' | 'fase'>>, Deactivate {
    status?: Status[];
    fase?: Fase[];
    tipe?: Type[];
}
