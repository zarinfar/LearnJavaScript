const person = {
    firstName : "Amin",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
};
document.getElementById("demo").innerHTML = person.firstName + " have " + person.age + " years old"

const  person2 = {
    fistName2 : "reza",
    LastName : "ahmadi",
    Age      : 28,
    FatherName: "Mohamad"
                };

document.getElementById("person2").innerHTML = "My Name is " + person2.fistName2 + " " + person2.LastName +
    " and My father name is " + person2.FatherName

function Test () {
    let a = Number(document.getElementById("Value1").value);
    let b = Number(document.getElementById("Value2").value);

    if (a == b) {
        document.getElementById("Displayer").innerHTML = "Mosavi ast" ;
    }

    if (a < b) {
        document.getElementById("Displayer").innerHTML = a + " az " + b + " kuchiktare";
    }

    if (a > b) {
        document.getElementById("Displayer").innerHTML = a + " az " + b + " Bozorgtare";
    }

}



