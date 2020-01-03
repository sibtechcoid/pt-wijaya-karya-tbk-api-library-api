import Business from "../../../jenis-usaha/read/response/body/body";
import Level from "../../../level-usaha/read/response/body/body";
import Type from "../../../jenis-unit/reads/response/body/body";
import Record from "../../../../../record/record";
import Deactivate from "../../../../../deactivate/read/response/body/body";
import Id from "../../../../../id/id";
import Name from "../../../../../name/create/name";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";

export default interface Body  extends Record, Deactivate, Id, Name, Abbreviation  {

    address: string;
    type: null| Omit<Type,'level'|'business'>;
    business: null|Omit<Business,'type'>;

    //address : null|string;
    // wikaParentId : null|number;
    // // TODO nullable?
    // wikaType : string|null;
    // // TODO nullable?
    // wikaId : number|null;
   // business: null|Business;
    level: null|Omit<Level,'type'>;
    //type: null|Type;
}