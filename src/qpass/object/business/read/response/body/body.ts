import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Name from "../../../../../../name/create/name";
import Abbreviation from "../../../../../../abbreviation/create/abbreviation";
import Type from "../../../../../../internal/object/type/read/response/body/body";

export default interface Body extends Id, Record, Deactivate, Name, Abbreviation {

    type : Omit<Type, 'business'>
}