// alert("Thanks for your input!");
// alert(" Did you know")

// var name = "M.Zain-ul-arfeen";
// console.log(name);

// var nationality = "Pakistan";
// console.log(nationality);
// console.log(name + " Live in " + nationality);

// var date;
// console.log(date);
// date = 13;
// console.log(date);
// date = date + date;
// console.log(date);
// console.log(date + "" + date);
// var camelCase = "isMeAppFirstLetterSmallMeinLiktheHoPhirSpaceKeBaddWalaFirstLetterCapitalMeLikthe";
// console.log(camelCase);
// let bhaiwah = +prompt("Write any number here", "3");
// let againuserinput = +prompt("Write again any number here" , "5")
// let multiplyUser = bhaiwah%againuserinput;
// console.log(multiplyUser);

// var number1 = 0;
// console.log(number1);
// ++number1;
// console.log(number1);
// number1++;
// console.log(number1);
// number1--;
// console.log(number1);

// var question = "Your species?";
// var defaultAnswer = "human";
// var spec = prompt(question, defaultAnswer);
// if (spec == "human"){
//     alert("Congralate")
// }

// var numberOfCats = +prompt("How many cats?");
// var tooManyCats = numberOfCats+1;
// alert(tooManyCats)

// var x = prompt("Where did you live" , "Pakistan");
// if (x === "Pakistan" || x === "Turkeye" ||x === "Muslim Place") {
// alert("Correct!");
// }
// else {
//     console.log("Get out from my website '-'")
//}

// var txt1 = document.querySelector('#text').innerHtml; 
// console.log(txt1);
// function myfunction(){
// console.log(txt1);
// }


// // var students = ["Anus","Asil","Hayan","Khalel","Nabiha","Nafay","Naima","Rayyan","Sana","Wajiha","Zain","Zainab"];
// // var fees = [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]

// var students{}
// for(let i = 0; i < students.length; i++){
//     document.write(`Student no ${i + 1} is <b> ${students[i]}</b> fees is <b>${fees[i]}</b>.<br /> `)
// }

var students = {
    student1: {
        name: "Anus",
        age: 0,
        fees: 300
    },
    student2: {
        name: "Asil",
        age: 0,
        fees: 300
    },
    student3: {
        name: "Hayan",
        age: 0,
        fees: 300
    },
    student4: {
        name: "Khalel",
        age: 0,
        fees: 300
    },
    student5: {
        name: "Nabiha",
        age: 0,
        fees: 300
    },
    student6: {
        name: "Nafay",
        age: 0,
        fees: 300
    },
    student7: {
        name: "Naima",
        age: 0,
        fees: 300
    },
    student8: {
        name: "Rayyan",
        age: 0,
        fees: 300
    },
    student9: {
        name: "Sana",
        age: 0,
        fees: 300
    },
    student10: {
        name: "Wajiha",
        age: 0,
        fees: 300
    },
    student11: {
        name: "Zain",
        age: 0,
        fees: 300
    },
    student12: {
        name: "Zainab",
        age: 0,
        fees: 300
    }
}
for(let i = 0;i < students.length; i++){
    console.log(`The ${i} is ${students[i.name]}`)
}