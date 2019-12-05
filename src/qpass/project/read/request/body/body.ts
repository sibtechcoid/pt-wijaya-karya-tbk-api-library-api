import Deactivate from "../../../../../deactivate/read/request/body/body";
import Status from "../../../status/status";

export default interface Body extends Deactivate {

    status ? : Status[]
}