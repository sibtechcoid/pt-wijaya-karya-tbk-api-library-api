import Id from "../../../../id/id";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Group from "../../../../anggota/jabatan/group/group";

export default interface Body extends Id, Deactivate{

    pertanyaan : string;

    dari  : Group;

}
