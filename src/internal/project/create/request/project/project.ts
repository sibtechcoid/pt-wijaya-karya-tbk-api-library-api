import Member from "../member/member";
import Category from "../category/category";

export default interface Project {

    planned : [Date|string, Date|string];
    realize : [Date|string|null, Date|string|null];
    place : number;
    members : Member[];
    category : Category
}