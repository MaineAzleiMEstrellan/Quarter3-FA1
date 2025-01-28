
var text;
if (confirm("OK or Cancel?")) {


    var nickname = "Maine";
    var heightIn = 60;
    var weightKg = 60;
    
    var heightFeet = heightIn/12;
    var heightInches = heightIn%12;
    var weightLbs = weightKg*2.2046;
    
    console.log("Name: " + nickname + "\n" + "Height: " + heightFeet + "\'" + heightInches + "\"" +"\n"+ "Weight: " + weightLbs + " lbs");

} else {
    text = "User does not wish to share his/her information."
    console.log(text);
}


