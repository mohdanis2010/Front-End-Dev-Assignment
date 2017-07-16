

'use strict';

app.factory('gerListService', [

  function() {

    var data = [
     {
        "name": "Leanne Graham",
        "phone": "+27-61-433-5444",
        "email": "leanne@gmail.com",
        "policy_no":"1770736803156442",
        "icon_phone":"js/services/images/phone.png",
        "icon_email":"js/services/images/email.png",
        "icon_policy":"js/services/images/file.png"
    },

    {
        "name": "Ervin Howell",
        "phone": "+27-61-567-7543",
        "email": "ervin@gmail.com",
        "policy_no":"010692659309125",
        "icon_phone":"js/services/images/phone.png",
        "icon_email":"js/services/images/email.png",
        "icon_policy":"js/services/images/file.png"
    },
    
    {
        "name": "Clementine Bauch",
        "phone": "+27-61-999-5444",
        "email": "bauch@gmail.com",
        "policy_no":"14631234447",
        "icon_phone":"js/services/images/phone.png",
        "icon_email":"js/services/images/email.png",
        "icon_policy":"js/services/images/file.png"
    },

    {
        "name": "Patricia Lebsack",
        "phone": "+27-61-876-8888",
        "email": "lebsack@gmail.com",
        "policy_no":"4931709623156",
        "icon_phone":"js/services/images/phone.png",
        "icon_email":"js/services/images/email.png",
        "icon_policy":"js/services/images/file.png"
    },
    
    {
        "name": "Patricia luke",
        "phone": "+27-61-222-8765",
        "email": "luke@gmail.com",
        "policy_no":"95673209623156",
        "icon_phone":"js/services/images/phone.png",
        "icon_email":"js/services/images/email.png",
        "icon_policy":"js/services/images/file.png"
    },

    {
        "name": "Chelsey Dietrich",
        "phone": "+27-61-654-6543",
        "email": "dietrich@gmail.com",
        "policy_no":"2540009541289",
        "icon_phone":"js/services/images/phone.png",
        "icon_email":"js/services/images/email.png",
        "icon_policy":"js/services/images/file.png"
    },
    
    {
        "name": "Chelsey Schulist",
        "phone": "+27-61-999-8743",
        "email": "schulist@gmail.com",
        "policy_no":"147793584786430",
        "icon_phone":"js/services/images/phone.png",
        "icon_email":"js/services/images/email.png",
        "icon_policy":"js/services/images/file.png"
    },

    {
        "name": "Dietrich sulen",
        "phone": "+27-61-543-3434",
        "email": "sulen@gmail.com",
        "policy_no":"00087641289",
        "icon_phone":"js/services/images/phone.png",
        "icon_email":"js/services/images/email.png",
        "icon_policy":"js/services/images/file.png"
    },
    
    {
        "name": "Chelsey L",
        "phone": "+27-61-809-5401",
        "email": "lch@gmail.com",
        "policy_no":"337342584786430",
        "icon_phone":"js/services/images/phone.png",
        "icon_email":"js/services/images/email.png",
        "icon_policy":"js/services/images/file.png"
    }
    
    ];
    return {
      getData: function() {
        return data;
      }
    };
  }
]);