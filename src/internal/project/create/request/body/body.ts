import Category from "../../../category/category";
import Project from "../../../../../project/create/request/body/body";
import Member from "../../../../../qpass/member/create/request/body/body";

export default interface Body extends Project<Member> {

    category : Category
}