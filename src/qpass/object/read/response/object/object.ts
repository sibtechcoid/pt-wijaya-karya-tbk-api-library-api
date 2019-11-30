import Business from "../../../business/read/response/business/business";
import Level from "../../../type/read/response/level/level";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import Deactivate from "../../../../../deactivate/read/response/body/body";
import Name from "../../../../../name/create/name";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";

export default interface Object  extends Id, Record, Deactivate, Name, Abbreviation {

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