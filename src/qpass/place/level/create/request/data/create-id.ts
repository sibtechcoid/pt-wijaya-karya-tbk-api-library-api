import Data from "./data";
import Id from "../../../../../../id/id";

export default function CreateId(type : Data, id : Id) : Data & Id {

    return Object.assign(type, id);
}
