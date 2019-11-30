import Type from "../../../type/create/request/type/type";
import Record from "../../../../../record/record";
import Body from "../../../../../deactivate/read/response/body/body";
import Id from "../../../../../id/id";

export default interface Object extends Record, Body, Id {

    name: string;
    abbreviation: string;
    address: string;
    type: Type;
    wikaDesc: string;
    wikaSlug: string;
    wikaAttach: string;
}