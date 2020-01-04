import Sort from "./sort";

export default function Null () : (keyof Sort)[] {

    let temp : {[Key in keyof Sort] : any}  =  {
        id           : null,
        nama         : null,
        user         : null,
        singkatan : null,
        telepon        : null,
        email        : null,
        nip          : null,
        aktif       : null,
        jabatanWika : null,
        parentId     : null,
        created      : null,
        updated      : null,
        deactivate   : null,
    };

    return <(keyof Sort)[]>Object.keys(temp);
}
