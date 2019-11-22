import IdWith from "../../../../../../dist/id/assign";
import CreateType from "../../../../../../dist/qpass/place/type/create/request/type/create";
import IdCreate from "../../../../../../dist/id/create";

export default function Create () {

    return IdWith(new CreateType('string', 'abbrveiation'), new IdCreate(1));
}