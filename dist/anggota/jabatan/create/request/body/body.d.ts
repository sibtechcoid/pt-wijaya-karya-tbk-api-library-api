import Group from "../../../group/group";
import Akses from "../../../../../user/akses/create/request/body/body";
import Singkatan from "../../../../../singkatan/create/singkatan";
import Nama from "../../../../../nama/create/nama";
export default interface Body extends Singkatan, Nama {
    group: Group;
    akses: Akses;
}
