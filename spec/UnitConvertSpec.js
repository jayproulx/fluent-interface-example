describe("UnitConvert", function () {
    var UnitConvert = require('../lib/UnitConvert');
    var convert;

    beforeEach(function () {
        convert = new UnitConvert();
    });

    describe("when converting temperatures", function () {
        it("should be able to convert C fo F", function () {
            var result = convert.from(100, "C").to("F").execute();
            expect(result).toEqual("212F");
        });

        it("should be able to convert F fo C", function () {
            var result = convert.from(212, "F").to("C").execute();
            expect(result).toEqual("100C");
        });

        it("should be able to convert C fo K", function () {
            var result = convert.from(100, "C").to("K").execute();
            expect(result).toEqual("373.15K");
        });
    });

    describe("when formatting results", function () {
        it("should round numbers to 2 decimal places", function () {
            var result = convert.from(100, "mm").to("ft").execute();
            // 0.32808400000000004ft without rounding
            expect(result).toEqual("0.33ft");
        });

        it("should not add decimal places unnecessarily", function () {
            var result = convert.from(100, "C").to("F").execute();
            expect(result).toEqual("212F");
        })
    });

    describe("when dealing with unknowns", function () {
        it("should not throw unhandled errors when encountering unknown units", function () {
            var converter = convert.from(100, "X").to("Y");
            // need to bind here, otherwise converter.execute ends up with this === undefined
            expect(converter.execute.bind(converter)).not.toThrow();
        });

        it("should not throw unhandled errors when encountering unknown values", function () {
            var converter = convert.from("blue", "C").to("F");
            // need to bind here, otherwise converter.execute ends up with this === undefined
            expect(converter.execute.bind(converter)).not.toThrow();
        });
    })
});
