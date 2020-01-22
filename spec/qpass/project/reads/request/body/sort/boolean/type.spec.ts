import Type from "../../../../../../../../dist/audit/reads/request/body/sort/boolean/type";
import Sort from "../../../../../../../../dist/audit/reads/request/body/sort/sort";
import Mode from "../../../../../../../../dist/sort/mode/mode";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe('type', () => {

    let all : Required<Sort> = {
        created    : Mode.ASC,
        deactivate : Mode.ASC,
        id         : Mode.ASC,
        rencana       : [Mode.ASC, Mode.DESC],
        realisasi    : [Mode.ASC, Mode.DESC],
        updated    : Mode.ASC,
        tipe    : Mode.ASC,
    };

    it('valid all', () => {
        expect(Type(all)).toBe(true)
    });

    let partial : Sort = {
        created    : Mode.ASC,
        realisasi    : [Mode.ASC, Mode.DESC],
        updated    : Mode.ASC,
    };

    it('valid partial', () => {
        expect(Type(partial)).toBe(true)
    });
});