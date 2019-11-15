import Level from "./level";
import Id from "../../../../../../id/id";

export default function CreateId(type : Level, id : Id) : Level & Id {

    return Object.assign(type, id);
}
