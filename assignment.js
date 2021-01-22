function kilometerToMeter(kilometer){
    if (kilometer >= 0){
        var meter = (kilometer * 1000);
        return meter;
    }
    else{
        var error1 = ("Distance can not be negative");
        console.log (error1);
    }

}
var check = kilometerToMeter(1);
console.log (check);



function budgetCalculator (watch, mobile, laptop){
    if ((watch, mobile, laptop) >= 0){
    total = 0;
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    var total = (watch * watchPrice) + (mobile * mobilePrice) + (laptop * laptopPrice);

    return total;
}
    else {
        var error2 = ("Invalid Input");
        console.log (error2);
    }
}

var totalBudget = budgetCalculator (1, 1, 1);
console.log(totalBudget);








function hotelCost(days){
    var amount = 0;
    if(days<=10){
        amount = days * 100;
    } else if (days<=20){
        var first10Days = 10 * 100;
        var remaining = days - 10;
        var second10Days= remaining * 80;
        amount = first10Days + second10Days;
    } else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remaining = days - 20;
        var after20Days = remaining * 50;
        amount = first10Days + second10Days + after20Days;
    }
    return amount;
}

var totalAmount = hotelCost(10);
console.log(totalAmount);









function megaFriend (names){
    var length = 0;
    var longest;

    for (var i = 0; i < names.length; i++) {

        if (names[i].length > length) {
            var length = names[i].length;
            longest = names[i];
        }
    }
    return longest;
}

var result = megaFriend ([ "habib","habibahmed", "mehrin","hasu", "jannatul mehrin ahmed","jannatul mehrin ahmad"]);
console.log(result);