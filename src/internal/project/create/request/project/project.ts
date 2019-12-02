import Member from "../member/member";
import Category from "../category/category";
import Schedule from "../../../../../schedule/create/request/body/body";

export default interface Project extends Schedule {

    object : number;
    members : Member[];
    category : Category
}