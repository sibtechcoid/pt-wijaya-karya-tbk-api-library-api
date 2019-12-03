import Business from "../../../business/read/response/body/body";
import Level from "../../../level/read/response/body/body";
import Type from "../../../type/read/response/type/type";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import Deactivate from "../../../../../deactivate/read/response/body/body";
import Name from "../../../../../name/create/name";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";
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