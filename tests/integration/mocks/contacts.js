var mock = {}

mock = {
    contact_id: "place",
    contact : {
        majorObject: {
            name: "dave",
            vat_number: "456ghtd",
            city: "london",
            telephone: "0203467893"
        },
        minorObject: {
            date: "2015-08-26",
            message: "what"
        }
    },
    edit : {

        majorObject: {
            contact_id: "false",
            vat_number: "456ghtd",
            city: "london",
            telephone: "0203467893"
        },
        minorObject: {
            date: "2015-08-26",
            message: "what",
            reminder_id: "",
            contact_reminders_id: "false"
        },
        items_to_remove: ''
    }
};



module.exports = mock;