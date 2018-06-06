var Sam = {
    firstName: 'Sam',
    lastName: 'Sung',
    birthday: new Date('Jan 01, 1999'),
    phoneNumber: '7145551212',
    formatNumber: function (phoneNumber) {
        var s2 = ("" + phoneNumber).replace(/\D/g, '');
        var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
        console.log((!m) ? null : "(" + m[1] + ")" + m[2] + "-" + m[3]);
    },
    email: 'sam@test.com',
    slack: 'sam.slack.com',
    sendMessage: function (message) {
        console.log(message);
    },
    addToFavorites: function (message) {
        console.log(message);
    }
};
console.log(Sam);
Sam.formatNumber(Sam.phoneNumber);
Sam.addToFavorites('Added to Fav');
Sam.sendMessage('Message sent');
