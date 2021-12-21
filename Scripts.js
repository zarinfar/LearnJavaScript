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

//object 5
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

// Function 2 > Input Counter
function Counterlength() {
    let Counter = document.getElementById("input-counter").value;
    let length = Counter.length;
    document.getElementById("counter").innerHTML = length;
}
//


// Play with Array

    let Array = ["Amin", "Minoo", "Saeid","sara","Ahmad"]
    Array.sort();
    document.getElementById("Array").innerHTML = Array;
//Display Time
    Time = Date();
    document.getElementById("Time").innerHTML = Time.slice(16, 24);
//Display Year
    Year = new Date();
    document.getElementById("Year").innerHTML =  Year.getFullYear();
//Display Month
    Month = new Date();
    Month2 = Month.getMonth();
    Month3 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    document.getElementById("Month").innerHTML = Month3[Month2];

// Compare date

    let text;
    today = new Date();
    someday = new Date();

    Year1 = 2120;
    Month4 = 1;
    Day = 22;

    someday.setFullYear(Year1, Month, Day);

    if (someday > today) {
      text = "Today is before " + Month3[Month4] + " " +Day + ", " + Year1;
    } else {
      text = "Today is after " + Month3[Month4] + " " +Day + ", " + Year1;
    }
        document.getElementById("text2text2").innerHTML = text;


