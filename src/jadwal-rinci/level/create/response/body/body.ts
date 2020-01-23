import ReadBody from "../../../read/response/body/body";


export default interface Body extends Omit<ReadBody,'levelUsaha'> {

   // levelUsaha : Omit<LevelUsaha,'jenisUnit'>;
}