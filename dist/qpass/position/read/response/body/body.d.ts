import BasePosition from "../../../../../position/read/response/body/body";
import Access from "../../../access/access";
import Group from "../../../group/group";
export default interface Body extends BasePosition<Access[], Group> {
}
