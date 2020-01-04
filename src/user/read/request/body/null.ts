import ReadBody from "../../response/body/body";

export default function Null () : Omit<ReadBody,'extraAkses'|'akses'|'jabatan'> {

    return {
        id           : 0,
        nama         : '',
        user         : '',
        singkatan : '',
        telepon        : null,
        email        : null,
        nip          : null,
        aktif       : true,
        jabatanWika : null,
        parentId     : null,
        created      : '',
        updated      : '',
        deactivate   : '',
    }
}
