const BaseCalculator = require("./BaseCalculator");


module.exports = class TragedyCalculator extends BaseCalculator {


    getAmount(perf) {
        let thisAmount = 40000;
        if (perf.audience > 30) {
            thisAmount += 1000 * (perf.audience - 30);
        }
        return thisAmount;
    }


    getVolumeCredits(perf) {
        return Math.max(perf.audience - 30, 0);
    }

}