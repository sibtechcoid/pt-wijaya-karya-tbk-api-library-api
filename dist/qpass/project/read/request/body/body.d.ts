import Deactivate from "../../../../../deactivate/read/request/body/body";
import Status from "../../../status/status";
import Type from "../../../type/type";
export default interface Body extends Deactivate {
    type?: Type;
    status?: Status[];
}
