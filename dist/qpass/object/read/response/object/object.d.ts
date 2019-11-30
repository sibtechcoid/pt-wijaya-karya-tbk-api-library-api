import Business from "../../../business/read/response/business/business";
import Level from "../../../type/read/response/level/level";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import Body from "../../../../../deactivate/read/response/body/body";
import Name from "../../../../../name/create/name";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";
export default interface Object extends Id, Record, Body, Name, Abbreviation {
    address: null | string;
    wikaParentId: null | number;
    wikaType: string | null;
    wikaId: number | null;
    business: null | Business;
    level: null | Level;
}
