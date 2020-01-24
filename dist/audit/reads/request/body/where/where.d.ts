import CreateBody from "../../../../create/request/body/body";
import Deactivate from "../../../../../deactivate/read/request/body/body";
import Status from "../../../../status/status";
export default interface Where extends Partial<Omit<CreateBody, 'anggota' | 'user' | 'status'>>, Deactivate {
    status?: Status[];
}
