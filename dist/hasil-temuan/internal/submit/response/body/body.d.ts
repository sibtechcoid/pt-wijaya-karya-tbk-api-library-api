import ReadBody from "../../../../../jadwal-rinci/internal/read/response/body/body";
import Record from "../../../../../record/record";
import Id from "../../../../../id/id";
export default interface Body extends Pick<ReadBody, 'diselesaikan' | keyof Record | keyof Id> {
}
