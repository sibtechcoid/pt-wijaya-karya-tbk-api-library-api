import Action from "../../../action/action";
import Access from "../../../../position/access/access";
import Position from "../../../../position/read/response/body/body";
import BaseMember from "../../../../../member/read/response/body/body";
export default interface Body extends BaseMember<Access[], Position> {
    action: Action;
    actionDate: string | null;
}
