//create object for id using constructor method

function idCard(expiryDate, name) {
    this.name = name;
    this.expiryDate = new Date(expiryDate);
    this.today = new Date();
    this.checkExpiry = function() {
      var differnece = this.today.getTime() - thisexpiryDate.getTime();
      var sign = Math.sign(difference);
      if (sign == -1) {
        return true
      } else if (sign == 1) {
        return false;
      }
    }
    this.expiry = this.expiryDate
  }
  
  //create array for Customer idcards.
  
  var person1 = new idCard('Chris Oneal', '2020/04/02');
  var person2 = new idCard('Joshua Tomar', '2022/09/01');
  var person3 = new idCard('Zach Hadel', '2021/01/09');
  var person4 = new idCard('Lyle Rath', '2025/11/08');
  var person5 = new idCard('Julian DingDong', '2021/12/12');

  var idCardArray = [person1, person2, person3, person4, person5]



  function vaccCard(name, firstDose, secondDose) {
    this.name = name;
    this.firstDose = new Date(firstDose);
    this.secondDose = new Date(secondDose);
    this.idMatch = function(index) {
        if (idCardArray[index].name == this.name){
            return true;
        } else {
            return false;
        }
    }
}

  //create array for customer vacc card.

  var person1 = new vaccCard('Chris Oneal', '2021/06/03');
  var person2 = new vaccCard('Joshua Tomar', '2021/30/11');
  var person3 = new vaccCard('Zach Hadel', '2021/08/03');
  var person4 = new vaccCard('Lyle Rath', '2022/06/05');
  var person5 = new vaccCard('Julian DingDong', '2021/10/08');

var vaccCardArray = [person1, person2, person3, person4, person5]

if (idCardArray[index].expired == false) {
    if (idCardArray[index].name == this.name) {
      if (this.vaccinated == true) {
        if (date >= 14) {
          return "Allowed";
        } else {
          return "Denied";
        }
      } else {
        return "Denied";
      }
    } else {
      return "Denied";
    }
  } else {
    return "Denied";
  }


