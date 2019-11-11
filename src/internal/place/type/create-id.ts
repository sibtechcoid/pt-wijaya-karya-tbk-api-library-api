import Type from "./type";
import Id from "../../../id/id";
import Level from "../../../qpass/place/level/level";

export default function CreateId(type : Type, id : Id) : Level & Id {

    return Object.assign(type, id);
}

