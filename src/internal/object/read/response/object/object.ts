import Type from "../../../type/create/request/type/type";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Deactivate from "../../../../../deactivate/read/response/body/body";

export default interface Object extends Record, Deactivate, Id {

    name: string;
    abbreviation: string;
    address: string;
    type: Type;
    wikaDesc: string;
    wikaSlug: string;
    wikaAttach: string;
}