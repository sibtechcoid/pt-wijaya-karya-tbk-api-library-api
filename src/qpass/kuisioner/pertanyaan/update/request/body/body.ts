import Id from "../../../../../../id/id";
import Group from "../../../../../../qpass/position/group/group";

export default interface Body extends Id {

    pertanyaan ?: string;
    dari ?: Group;
    untuk ?: Group;
}