import ReadBody from "../../../read/response/body/body";
import Id from "../../../../id/id";
import Record from "../../../../record/record";

export default interface Body extends Omit<ReadBody, keyof Id | keyof Record | 'nilai'>, Partial<Id>, Partial<Record> {

    nilai : null|number;
}
