import BusinessData from "../../../../../qpass/place/business/create/request/business/business";
import Access from "../access/access";
import Group from "../group/group";

export default interface Position extends BusinessData {

    access : Access[];
    group : Group;
}