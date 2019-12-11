import Id from "../../../../../../id/id";
import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Business from "../../../../../object/business/read/response/body/body";
import Group from "../../../../../position/group/group";

export default interface Body extends Id, Deactivate{

    pertanyaan : string;

    dari  : Group;

    untuk  : Group;
}