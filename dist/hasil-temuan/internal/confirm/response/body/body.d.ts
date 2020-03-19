import ReadBody from "../../../../../audit/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
export default interface Body extends Pick<ReadBody, 'fase' | keyof Record | keyof Id> {
}
