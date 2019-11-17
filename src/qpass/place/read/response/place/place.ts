import Business from "../../../business/read/response/business/business";
import Type from "../../../level/read/response/type/type";
import Level from "../../../type/read/response/level/level";

export default interface Place {

    id : null;
    created : Date;
    updated : Date;
    abbreviation : null|string;
    name : string;
    address : null|string;
    wikaParentId : null|number;
    wikaType : string;
    wikaId : number;
    deactivated : null;
    business: null|Business;
    level: null|Type;
    type: null|Level;
}