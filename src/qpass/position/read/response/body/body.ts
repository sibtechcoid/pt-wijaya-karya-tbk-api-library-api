import BasePosition from "../../../../../position/read/response/body/body";
import Group from "../../../group/group";
import Access from "../../../../access/create/request/body/body";

export default interface Body extends BasePosition<Access, Group> {


}