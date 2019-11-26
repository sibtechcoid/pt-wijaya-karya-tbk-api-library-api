import Type from "../../../type/create/request/type/type";
import Record from "../../../../../record/record";
import Deactivated from "../../../../../deactivated/deactivated";
import Id from "../../../../../id/id";

export default interface Object extends Record, Deactivated, Id {

    name: string;
    abbreviation: string;
    address: string;
    type: Type;
    wikaDesc: string;
    wikaSlug: string;
    wikaAttach: string;
}