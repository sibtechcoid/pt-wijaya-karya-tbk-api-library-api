import ReadsBody from "../../../response/body/body";
import BaseSort from "../../../../../sort/sort";
import Mode from "../../../../../sort/mode/mode";

export default interface Sort
    extends BaseSort<Omit<ReadsBody,'status'|'unitKerja'|'anggota'|'jenisUnit'|'rencana'|'realisasi'|'catatanAuditor'|'catatanAuditee'|'jabatan'|'externalOrganisasiRep'|'externalOrganisasiNo'|'externalAuditNo'>>
{

    rencana ?: [Mode, Mode];
    realisasi ?: [Mode, Mode];
}
