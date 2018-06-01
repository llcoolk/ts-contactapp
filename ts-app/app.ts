interface Person {
    firstName: string,
    lastName?: string,
    birthday?: Date
}

interface Contact extends Person{
    phoneNumber: string,
    email?: string,
    slack?: string,
    formatNumber: (phone: string) => void;
}

interface ContactCard extends Contact{
    sendMessage: (message: string) => void;
    addToFavorites:(message: string) => void;
}

var Sam: ContactCard ={
    firstName: 'Sam',
    lastName: 'Sung',
    birthday: new Date('Jan 01, 1999'),
    phoneNumber: '7145551212',
    formatNumber: (phoneNumber): void => {
        var s2 = ("" + phoneNumber).replace(/\D/g, '');
        var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
        console.log((!m) ? null : "(" + m[1] + ")" + m[2] + "-" + m[3]);
    },
    email: 'sam@test.com',
    slack: 'sam.slack.com',
    sendMessage: (message): void => {
        console.log(message);
    },
    addToFavorites: (message): void => {
        console.log(message);
    }
}

console.log(Sam);
Sam.formatNumber(Sam.phoneNumber);
Sam.addToFavorites('Added to Fav');
Sam.sendMessage('Message sent');
