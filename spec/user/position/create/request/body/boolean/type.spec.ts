import Type from "../../../../../../../dist/user/jabatan/create/request/body/boolean/type";
import User from "../../../../../../../dist/user/akses/user/akses";
import Proyek from "../../../../../../../dist/user/akses/proyek/akses";
import UnitKerja from "../../../../../../../dist/user/akses/unit-kerja/akses";
import Rencana from "../../../../../../../dist/user/akses/rencana/akses";
import LevelUsaha from "../../../../../../../dist/user/akses/level-usaha/akses";
import JenisUsaha from "../../../../../../../dist/user/akses/jenis-usaha/akses";
import JenisUnit from "../../../../../../../dist/user/akses/jenis-unit/akses";
import AuditProgram from "../../../../../../../dist/user/akses/audit-program/akses";
import Klausul from "../../../../../../../dist/user/akses/klausul/akses";
import Prosedur from "../../../../../../../dist/user/akses/prosedur/akses";
import Fungsi from "../../../../../../../dist/user/akses/fungsi/akses";
import Level from "../../../../../../../dist/user/akses/jadwal-rinci-level/akses";
import Jabatan from "../../../../../../../dist/user/akses/jabatan/akses";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('project request body', () => {

    it('path equal', () => {

        expect(Type(    {
            "nama" : "Admin",
            "singkatan" : "ADM",
            "akses" : {
                "user" : [User.CREATE],
                "proyek" : [Proyek.CREATE],
                "unitKerja" : [UnitKerja.CREATE],
                "rencana" : [Rencana.CREATE],
                "levelUsaha" : [LevelUsaha.CREATE],
                "jenisUsaha" : [JenisUsaha.CREATE],
                "jenisUnit" : [JenisUnit.CREATE],
                "auditProgram" : [AuditProgram.CREATE],
                "klausul" : [Klausul.CREATE],
                "prosedur" : [Prosedur.CREATE],
                "fungsi" : [Fungsi.CREATE],
                "level" : [Level.CREATE],
                "jabatan" : [Jabatan.CREATE],

            }
        })).toBe(true)
    });


});