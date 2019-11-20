import Business from "../../../business/read/response/business/business";
import Type from "../../../level/read/response/type/type";
import Level from "../../../type/read/response/level/level";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import Deactivated from "../../../../../deactivated/deactivated";

export default interface Place  extends Id, Record, Deactivated{

    abbreviation : null|string;
    name : string;
    address : null|string;
    wikaParentId : null|number;
    // TODO nullable?
    wikaType : string|null;
    // TODO nullable?
    wikaId : number|null;
    business: null|Business;
    level: null|Level;
    // type: null|Type;
}