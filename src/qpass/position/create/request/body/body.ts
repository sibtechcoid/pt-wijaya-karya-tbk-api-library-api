import Access from "../../../access/access";
import Group from "../../../group/group";
import Abbreviation from "../../../../../abbreviation/create/abbreviation";
import Name from "../../../../../name/create/name";
import Position from "../../../../../position/create/request/body/body";

export default interface Body extends  Position<Access[]>{

    group : Group;
}