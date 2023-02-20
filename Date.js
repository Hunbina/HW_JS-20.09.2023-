function StartOfMonth(date) {
    var date1 = new Date(date);
    return date1.getDate() < 10 ? true : false;
}
module.exports = StartOfMonth

