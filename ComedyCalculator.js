const BaseCalculator = require("./BaseCalculator");

module.exports = class ComedyCalculator extends BaseCalculator {

    getAmount(perf) {
        let thisAmount = 30000;
        if (perf.audience > 20) {
            thisAmount += 10000 + 500 * (perf.audience - 20);
        }
        thisAmount += 300 * perf.audience;
        return thisAmount;
    }

    getVolumeCredits(perf) {
        return Math.max(perf.audience - 30, 0) + Math.floor(perf.audience / 5);
    }
}