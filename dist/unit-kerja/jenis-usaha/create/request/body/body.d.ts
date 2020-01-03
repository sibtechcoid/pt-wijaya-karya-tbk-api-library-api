import Singkatan from "../../../../../singkatan/create/singkatan";
import Nama from "../../../../../nama/create/nama";
export default interface Body extends Nama, Singkatan {
    type: number;
}
