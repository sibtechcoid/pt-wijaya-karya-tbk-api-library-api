import Deactivate from "../../../../../../deactivate/read/response/body/body";
import Record from "../../../../../../record/record";
import Id from "../../../../../../id/id";
import Name from "../../../../../../name/create/name";
import Prosedur from "../../../../prosedur/read/response/body/body";

export default interface Body extends Deactivate, Record, Id, Name  {

    prosedur : Omit<Prosedur,'prosesBisnis'>[]
}