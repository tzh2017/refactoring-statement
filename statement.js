const CalculatorFactory = require('./CalculatorFactory')

function getTotalAmount(invoice, plays) {
    let totalAmount = 0;
    for (let perf of invoice.performances) {
        const play = plays[perf.playID];
        totalAmount += CalculatorFactory.create(play.type).getAmount(perf);
    }
    return totalAmount;
}

function getVolumeCredits(invoice, plays) {
    let volumeCredits = 0;
    for (let perf of invoice.performances) {
        const play = plays[perf.playID];
        volumeCredits += CalculatorFactory.create(play.type).getVolumeCredits(perf);
    }
    return volumeCredits;
}

function formatAmount(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
    }).format(amount / 100);
}

function getDetails(invoice, plays) {
    let details = '';
    for (let perf of invoice.performances) {
        const play = plays[perf.playID];
        let thisAmount = CalculatorFactory.create(play.type).getAmount(perf);
        details += `  ${play.name}: ${formatAmount(thisAmount)} (${perf.audience} seats)\n`;
    }
    return details;
}

function statement(invoice, plays) {
    let result = `Statement for ${invoice.customer}\n`;
    result += getDetails(invoice, plays);
    result += `Amount owed is ${formatAmount(getTotalAmount(invoice, plays))}\n`;
    result += `You earned ${(getVolumeCredits(invoice, plays))} credits\n`;
    return result;
}

module.exports = statement;
