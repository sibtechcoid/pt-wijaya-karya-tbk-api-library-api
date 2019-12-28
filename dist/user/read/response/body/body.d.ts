import Record from "../../../../record/record";
import Deactivate from "../../../../deactivate/read/response/body/body";
import Id from "../../../../id/id";
import Position from "../../../position/read/response/body/body";
export default interface Body extends Record, Deactivate, Id {
    position: Omit<Position, 'access'> | null;
    name: string;
    user: string;
    abbreviation: string | null;
    phone: string | null;
    email: string | null;
    nip: string | null;
    active: boolean;
    positionWika: null | string;
    parentId: string | null;
}
