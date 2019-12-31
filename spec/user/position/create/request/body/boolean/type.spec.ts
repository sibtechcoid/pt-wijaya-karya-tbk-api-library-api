import Type from "../../../../../../../dist/user/position/create/request/body/boolean/type";
import User from "../../../../../../../dist/user/access/user/access";
import Proyek from "../../../../../../../dist/user/access/proyek/access";
import UnitKerja from "../../../../../../../dist/user/access/unit-kerja/access";
import Rencana from "../../../../../../../dist/user/access/rencana/access";
import LevelUsaha from "../../../../../../../dist/user/access/level-usaha/access";
import JenisUsaha from "../../../../../../../dist/user/access/jenis-usaha/access";
import JenisUnit from "../../../../../../../dist/user/access/jenis-unit/access";
import AuditProgram from "../../../../../../../dist/user/access/audit-program/access";
import Klausul from "../../../../../../../dist/user/access/klausul/access";
import Prosedur from "../../../../../../../dist/user/access/prosedur/access";
import Fungsi from "../../../../../../../dist/user/access/fungsi/access";
import Level from "../../../../../../../dist/user/access/level/access";
import Jabatan from "../../../../../../../dist/user/access/jabatan/access";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('project request body', () => {

    it('path equal', () => {

        expect(Type(    {
            "name" : "Admin",
            "abbreviation" : "ADM",
            "access" : {
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