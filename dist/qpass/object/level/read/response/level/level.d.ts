import Type from "../../../../type/read/response/type/type";
import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
export default interface Level extends Deactivate, Record, Id, Name, Abbreviation {
    type: null | Omit<Type, 'levels'>;
}
