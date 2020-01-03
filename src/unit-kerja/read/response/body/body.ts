import Business from "../../../jenis-usaha/read/response/body/body";
import Level from "../../../level-usaha/read/response/body/body";
import Type from "../../../jenis-unit/reads/response/body/body";
import Record from "../../../../record/record";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Nama from "../../../../nama/create/nama";
import Singkatan from "../../../../singkatan/create/singkatan";

export default interface Body  extends Record, Deactivate, Id, Nama, Singkatan  {

    level: null|Omit<Level,'type'>;
    address: string;
    type: null| Omit<Type,'level'|'business'>;
    business: null|Omit<Business,'type'>;

    // Deprecated;
    // wikaParentId : null|number;

    // Deprecated
    // wikaType : string|null;

    // Deprecated
    // wikaId : number|null;

}