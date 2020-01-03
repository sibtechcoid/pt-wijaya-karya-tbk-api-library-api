import Member from "../../../../anggota/create/request/body/body";
import Id from "../../../../id/id";
import Schedule from "../../../../schedule/update/request/body/body";
export default interface Body extends Id, Omit<Schedule, 'plan'> {
    anggota?: Member[];
}
