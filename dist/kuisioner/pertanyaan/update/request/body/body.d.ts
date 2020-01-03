import Id from "../../../../../id/id";
import Group from "../../../../../anggota/jabatan/group/group";
export default interface Body extends Id {
    pertanyaan?: string;
    dari?: Group;
    untuk?: Group;
}
