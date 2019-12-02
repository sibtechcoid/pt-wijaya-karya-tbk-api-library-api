import Access from "../../../access/access";
import Group from "../../../group/group";
import Position from "../../../../../position/create/request/body/body";

export default interface Body extends Position<Access[], Group>{

}