import Nama from "../../../../nama/create/nama";
import Singkatan from "../../../../singkatan/create/singkatan";

export default interface Body extends Nama, Singkatan {

    address : string;
    business: number;
    level: number;
    type : number;
    // nama : string;
    // singkatan : string;
}