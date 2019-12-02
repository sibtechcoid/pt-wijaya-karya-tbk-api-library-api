import Record from "../../../../record/record";
import Id from "../../../../id/id";
import User from "../../../../user/read/response/user/user";
import Position from "../../../../position/read/response/body/body";
export default interface Body<Access, P extends Omit<Position<any>, 'access'>> extends Record, Id {
    access: Access;
    position: P;
    user: User;
}
