//create object for id using constructor method

function idCard(expiryDate, name) {
    this.name = name;
    this.expiryDate = new Date(expiryDate);
    this.today = new Date();
    this.checkExpiry = function (){
      this.differenece = this.today.getTime() - this.expiryDate.getTime();
      this.sign = Math.sign(difference);
      if (sign === -1) {
        return true
      } else if (sign === 1) {
        return false;
      }
    }
    this.expiry = this.expiryDate
  }
  
  //create array for Customer idcards.
  
  var person1 = new idCard('Chris Oneal', '2020 - 4 - 02');
  var person2 = new idCard('Joshua Tomar', '2022 - 09 - 01');
  var person3 = new idCard('Zach Hadel', '2021 - 01 - 09');
  var person4 = new idCard('Lyle Rath', '2025 - 11 - 08');
  var person5 = new idCard('Julian DingDong', '2021 - 12 - 14');

  var idCardArray = [person1, person2, person3, person4, person5]


  function vaccCard(name, firstDose, secondDose) {
    this.name = name;
    this.firstDose = new Date(firstDose);
    this.secondDose = new Date(secondDose);
    this.checkDifference = function(){
        var today = new Date();
        var difference = today.getTime() - this.secondDose.getTime();
        difference = Math.floor(difference / 86400000);
        return difference;
    }


    this.idMatch = function(index) {
        if (idCardArray[index].name == this.name){
            return true;
        } else {
            return false;
        }

    }
    this.checkDays = function(){
        this.difference = this.today.getTime() - this.secondDose.getTime();
        difference = Math.floor(difference / 86400000);
        return difference;
    }
}   

    
    //create array for customer vacc card.

  var person1Vacc = new vaccCard('Chris Oneal', '2021 - 06 - 03');
  var person2Vacc = new vaccCard('Joshua Tomar', '2021 - 30 - 11');
  var person3Vacc = new vaccCard('Zach Hadel', '2021 - 08 - 03');
  var person4Vacc = new vaccCard('Lyle Rath', '2021 - 06 - 05');
  var person5Vacc = new vaccCard('Julian DingDong', '2021 - 12 - 14');

var vaccCardArray = [person1Vacc, person2Vacc, person3Vacc, person4Vacc, person5Vacc]


    for (var i = 0; i < vaccCardArray.length; i++) {
        console.log(i);
        document.write("<tr>")
        document.write("<td>", idCardArray[i].name, "</td>")
        document.write("<td>", vaccCardArray[i].checkDifference(i), "</td>")
        document.write("</tr>")

    if (idCardArray[i].expired == false) {
        if (idCardArray[i].name == this.name) { //how do i rewrite this if statement to use function in vaccCard obj?
          if (this.vaccinated == true) { //how do i check the obj property of vaccinated from array?
            if (date >= 14) {
                console.log('allowed')
              
            } else {
                console.log('denied')

            }
          } else {
            console.log('denied')
     
          }
        } else {
            console.log('denied')
  
        }
      } else {
        console.log('denied')
      }

    }




        
        