var convert = require("convert-units");

/**
 * For this example, I found convert-units, which happens to already apply a fluent interface.  For the sake of the
 * example, I'm simply abstracting it to reflect the provided requirements, the ideal approach would be to simply
 * use convert-units directly.
 */
class UnitConvert {

    constructor() {

    }

    static possibilities(from) {
        if(from !== undefined) {
            return convert().from(from).possibilities();
        } else {
            return convert().possibilities();
        }
    }

    from(value, units) {
        this.fromValue = value;
        this.fromUnits = units;

        return this;
    }

    to(units) {
        this.toUnits = units;

        return this;
    }

    execute() {
        try {
            var result = convert(this.fromValue).from(this.fromUnits).to(this.toUnits);

            // round to 2 decimal places max if it's a float
            if(result % 1 !== 0) {
                result *= 100;
                result = Math.round(result);
                result /= 100;
            }

            return result += this.toUnits;
        } catch(error) {
            console.error(error.message, this);

            return "Unknown unit";
        }
    }
}

module.exports = UnitConvert;