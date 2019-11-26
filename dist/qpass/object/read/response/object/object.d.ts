import Business from "../../../business/read/response/business/business";
import Level from "../../../type/read/response/level/level";
import Id from "../../../../../id/id";
import Record from "../../../../../record/record";
import Deactivated from "../../../../../deactivated/deactivated";
export default interface Object extends Id, Record, Deactivated {
    abbreviation: null | string;
    name: string;
    address: null | string;
    wikaParentId: null | number;
    wikaType: string | null;
    wikaId: number | null;
    business: null | Business;
    level: null | Level;
}
