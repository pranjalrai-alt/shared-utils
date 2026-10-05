exports.version = "1.0.0";
exports.formatAmount = (n) => "Rs. " + n.toFixed(2);
exports.gst = (n) => +(n * 0.18).toFixed(2);
exports.discount = (n, pct) => +(n * (1 - pct / 100)).toFixed(2);
