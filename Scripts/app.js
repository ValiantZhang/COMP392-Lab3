/// <reference path="_reference.ts"/>
// JavaScript Logic
"use strict";
(function () {
    console.log("app started");
    var person;
    person = new objects.Person("Tom", 46, "male");
    person.sayHello();
    person.showAge();
    var paragraph = document.getElementById("firstParagraph");
    paragraph.innerHTML = "This text has been changed by JavaScript";
    console.log("end of app");
})();

//# sourceMappingURL=app.js.map
