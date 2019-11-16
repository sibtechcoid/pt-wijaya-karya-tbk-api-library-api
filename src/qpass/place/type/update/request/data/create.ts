import Data from "../../../../level/create/request/level/level";
import Id from "../../../../../../id/id";

export default function Create(type : Data, id : Id) : Data & Id {

    return Object.assign(type, id);
}
