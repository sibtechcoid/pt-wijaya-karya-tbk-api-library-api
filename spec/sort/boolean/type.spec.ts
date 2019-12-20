import Name from "../../../dist/name/create/name";
import Abbreviation from "../../../dist/abbreviation/create/abbreviation";
import SortType from "../../../dist/sort/boolean/type";
import Mode from "../../../dist/sort/mode/mode";
import Sort from "../../../dist/sort/sort";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('project request body', () => {

    it('path equal', () => {

        let object : Name & Abbreviation = {
          name : 'name',
          abbreviation : 'abbreviation'
        };

        let sort : Sort<Name & Abbreviation> = {
          sort : {name:Mode.ASC}
        };

        expect(SortType(sort, object)).toBe(true);
    });


});