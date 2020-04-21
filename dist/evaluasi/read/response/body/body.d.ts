import Id from "../../../../id/id";
import Record from "../../../../record/record";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Kuisioner from "../../../../kuisioner/read/response/body/body";
import Audit from "../../../../audit/read/response/body/body";
import User from "../../../../user/read/response/body/body";
export default interface Body extends Id, Record, Deactivate {
    kuisioner: Kuisioner;
    nilai: number;
    audit: Omit<Audit, 'anggota' | 'penyetuju' | 'penolakan' | 'suratTugas' | 'perbaikan' | 'jabatan'>;
    dari: Omit<User, 'jabatan'>;
    untuk: Omit<User, 'jabatan'>;
}
