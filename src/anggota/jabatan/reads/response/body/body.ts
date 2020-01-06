import Group from "../../../group/group";
import ReadBody from "../../../read/response/body/body";

export default interface Body extends Omit<ReadBody,'akses'> {

    group : Group;
}