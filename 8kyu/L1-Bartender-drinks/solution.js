function getDrinkByProfession(param){
var components = param.split(" "); // returns array ["SchoOL", "COUNSELOR"]
for (i=0;i<components.length;i++){
    components[i] = components[i].charAt(0).toUpperCase() + components[i].slice(1).toLowerCase();
}
components = components.join(" ");

if (components == "Jabroni") {return "Patron Tequila";}
if (components == "School Counselor") {return "Anything with Alcohol";}
if (components == "Programmer") {return "Hipster Craft Beer";}
if (components == "Bike Gang Member") {return "Moonshine";}
if (components == "Politician") {return "Your tax dollars";}
if (components == "Rapper") {return "Cristal";}
return "Beer";
