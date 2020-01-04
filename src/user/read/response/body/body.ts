import Akses from "../../../akses/create/request/body/body";
import ReadsBody from "../../../reads/response/body/body";

export default interface Body extends ReadsBody {

    extraAkses : Akses;
    akses : Akses;
    // jabatan : Omit<Jabatan, 'akses'>|null;
    // nama : string;
    // user : string;
    // singkatan : string|null;
    // telepon : string|null;
    // email : string|null;
    // nip : string|null;
    // active : boolean;
    // jabatanWika : null|string;
    // parentId : string|null;
}