import JenisUsaha from "../../../jenis-usaha/read/response/body/body";
import Level from "../../../level-usaha/read/response/body/body";
import Type from "../../../jenis-unit/reads/response/body/body";
import Record from "../../../../record/record";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Nama from "../../../../nama/create/nama";
import Singkatan from "../../../../singkatan/create/singkatan";

export default interface Body  extends Record, Deactivate, Id, Nama, Singkatan  {

    alamat: string;
    jenisUnit: null| Omit<Type,'levelUsaha'|'jenisUsaha'>;
    jenisUsaha: null|Omit<JenisUsaha,'jenisUnit'>;

    // Deprecated;
    // wikaParentId : null|number;

    // Deprecated
    // wikaType : string|null;

    // Deprecated
    // wikaId : number|null;


    levelUsaha: null|Omit<Level,'jenisUnit'>;

}