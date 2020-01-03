import Id from "../../../../id/id";
import Record from "../../../../record/record";
import User from "../../../../user/reads/response/body/body";
import UserJabatan from "../../../../user/jabatan/read/response/body/body";
import MemberJabatan from "../../../../anggota/jabatan/read/response/body/body";
export default interface Penolakan extends Id, Record {
    realisasi: [Date | string, Date | string];
    alasan: string;
    user: Omit<User, 'extraAkses' | 'jabatan' | 'akses'>;
    jabatan: Omit<UserJabatan, 'akses'> | null;
    jabatanMember: Omit<MemberJabatan, 'akses'> | null;
}
