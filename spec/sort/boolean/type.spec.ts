import Name from "../../../dist/nama/create/nama";
import Abbreviation from "../../../dist/singkatan/create/singkatan";
import SortType from "../../../dist/sort/boolean/type";
import Mode from "../../../dist/sort/mode/mode";
import Sort from "../../../dist/sort/sort";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('project request body', () => {

    it('path equal', () => {

        let object : Name & Abbreviation = {
          nama : 'nama',
          singkatan : 'singkatan'
        };

        let sort : Sort<Name & Abbreviation> = {
            nama:Mode.ASC
        };

        expect(SortType(sort, Object.keys(object))).toBe(true);
    });


});