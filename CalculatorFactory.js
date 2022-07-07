const TragedyCalculator = require("./TragedyCalculator");
const ComedyCalculator = require("./ComedyCalculator");


module.exports = class CalculatorFactory {

    static create(type) {
        let calculator;
        switch (type) {
            case 'tragedy':
                calculator = new TragedyCalculator();
                break;
            case 'comedy':
                calculator = new ComedyCalculator();
                break;
            default:
                throw new Error(`unknown type: ${play.type}`);
        }
        return calculator;
    }
}