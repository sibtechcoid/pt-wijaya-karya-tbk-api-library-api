import ReadBody from "../../../read/response/body/body";
export default interface Body extends ReadBody {
    externalOrganisasiRep: string;
    externalOrganisasiNo: string;
    externalAuditNo: string;
}
