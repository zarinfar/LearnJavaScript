//declare object 1
const person = {
    firstName : "Amin",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
};
document.getElementById("demo").innerHTML = person.firstName + " have " + person.age + " years old"
//declare object 2
const  person2 = {
    fistName2 : "reza",
    LastName : "ahmadi",
    Age      : 28,
    FatherName: "Mohamad"
                };

document.getElementById("person2").innerHTML = "My Name is " + person2.fistName2 + " " + person2.LastName +
    " and My father name is " + person2.FatherName

//declare object 3
const Food = {
    Name: "Pizza",
    Price: 150000
};

document.getElementById("food").innerHTML = Food.Name + " is " + Food.Price + " Rial"

//object 4

const Home = {
                Address : "Niavaran, Kuhestan",
                Metrazh : 200,
                Hayat : "Darad",
                Anbari : "Darad",
                Garmayesh: "Shufazh",
                Panjareh : 3,
                Balkon: "Darad"
            }



document.getElementById("Home").innerHTML = "In melk dar mantagheye " + Home.Address + " Mibashad." +
    "Metrazhe in melk " + Home.Metrazh + " metr Mibashad." + " in melk hayat " + Home.Hayat + " in melk Anbari " + Home.Anbari +
    " Garmayeshe in khane " + Home.Garmayesh + " Mibashad. " + "in melk daraye " + Home.Panjareh + " Panjareh mibashad" +
    "in melk balkon 20 metri " + Home.Balkon

const Car = {
    Name     : "Z4",
    Company  : "BMW",
    Model    : "2021",
    Color    : "Red",
    Automate : "Yes",
    Weight   : "800 KG"
}

document.getElementById("Car").innerHTML = "The Car Name is " + Car.Name + ". The Company is " + Car.Company +
    ". The Model is " + Car.Model + ". The Color is " + Car.Color + ". is it Automate? " + Car.Automate + ". The Weight is "
+ Car.Weight + "."


    // Function 1 > Moghyese adadaha

function Test () {
    let a = Number(document.getElementById("Value1").value);
    let b = Number(document.getElementById("Value2").value);

    if (a == b) {

        document.getElementById("Mosaviastba").innerHTML = "Ba in" ;
        document.getElementById("Displayer").innerHTML = "Mosavi ast" ;
    }

    if (a < b) {
        document.getElementById("Mosaviastba").innerHTML = "Az In" ;
        document.getElementById("Displayer").innerHTML = " kuchiktare";
    }

    if (a > b) {
        document.getElementById("Mosaviastba").innerHTML = "Az In" ;
        document.getElementById("Displayer").innerHTML = " Bozorgtare";
    }

}


//
