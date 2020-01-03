import Nama from "../../../../../nama/update/nama";
import Singkatan from "../../../../../singkatan/update/singkatan";
import Id from "../../../../../id/id";
export default interface Body extends Id, Nama, Singkatan {
    jenisUnit?: number;
}
