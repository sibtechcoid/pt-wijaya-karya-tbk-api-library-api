import Business from "../../../business/read/response/business/business";
import Level from "../../../type/read/response/level/level";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import Deactivated from "../../../../../deactivated/deactivated";
import Name from "../../../../../name/name";
import Abbreviation from "../../../../../abbreviation/abbreviation";

export default interface Object  extends Id, Record, Deactivated, Name, Abbreviation {
    
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