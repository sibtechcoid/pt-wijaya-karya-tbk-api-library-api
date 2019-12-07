import Business from "../../../business/read/response/body/body";
import Level from "../../../level/read/response/body/body";
import BaseObject from "../../../../../object/read/response/object/object";

export default interface Body  extends BaseObject<Business>  {

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