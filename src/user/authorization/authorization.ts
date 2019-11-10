import Qpass from "./qpass/qpass";
import Internal from "./internal/internal";

export default interface Authorization {

    qpass : Qpass[];
    internal : Internal[];
}