import Type from "../../../type/create/request/type/type";
import BaseObject from "../../../../../object/read/response/object/object";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
import Deactivate from "../../../../../deactivate/read/response/body/body";
import Business from "../../../business/read/response/body/body";

export default interface Object extends BaseObject<Business> {

    name: string;
    abbreviation: string;
    address: string;
    type: Type;
}