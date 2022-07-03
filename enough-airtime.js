function enoughAirtime(usage, balance) {
    var splitUsage = usage.split(",");
    var call = 1.88;
    var sms = 0.75;
    var data = 12;

    var total = 0;

    for (var i = 0; i < splitUsage.length; i++) {
        var trimUsage = splitUsage[i].trim()
        if (trimUsage.startsWith("call")) {
            total += call;
        } else if (trimUsage.startsWith("sms")) {
            total += sms;
        } else if (trimUsage.startsWith("data")) {
            total += data;
        }
    }
    var availBalance = balance - total;
    if (availBalance < 0) {
        availBalance = 0;
    }
    return "R" + availBalance.toFixed(2);
}
    