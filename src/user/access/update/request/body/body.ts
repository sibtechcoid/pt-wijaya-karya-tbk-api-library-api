import Qpass from "../../../qpass/qpass";
import Internal from "../../../internal/internal";
import Id from "../../../../../id/id";

export default interface Body extends Id{

    qpass ?: Qpass[];
    internal ?: Internal[];
}