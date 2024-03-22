//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var guestList = ["Umaima Asim", "Hiba Irfan", "Umna Laiq"];
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",\nI would like to invite you to dinner. Your wisdom and insights have inspired me. We look forward to sharing this memorable meal with you!.\nPlease let me know if you can join me.\nSincerely, [Hoorain Nasir]"));
});
