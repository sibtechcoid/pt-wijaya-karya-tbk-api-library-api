import Member from "../member/member";
import Category from "../category/category";
import Schedule from "../../../../../schedule/schedule";

export default interface Project extends Schedule {

    place : number;
    members : Member[];
    category : Category
}