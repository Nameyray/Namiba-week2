function getName(event) {

    event.preventDefault();
    
    var femaleNames = ["Akosua", "Adwoa", "Abenna", "Akua", "Yaa", "Afua", "Ama"];
    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var inputDay = document.getElementById("day").value;
    var inputMonth = document.getElementById("month").value;
    var inputYear = document.getElementById("year").value;
    var inputCentury = document.getElementById("year").value;
    var genders = document.getElementsByName('gender');

    var dd = inputDay;
    var mm = inputMonth;
    var yy = inputYear.slice(2,4);
    var cc = inputCentury.slice(0,2);

    /* 
        formula to calculate the day of the week

        (((CC/4)-2*CC-1)+((5*YY/4))+((26*(MM+1)/10))+DD) mod 7
     */

    var extDay = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    function validateYear() {
        if (inputYear == "") {
            document.getElementById("year").style.borderColor = 'red';
            document.getElementById("smallYear").textContent = "Please input year";
            return  false;
        }
        else if(inputYear.length != 4) {
            document.getElementById("year").style.borderColor = 'red';
            document.getElementById("smallYear").textContent = "Please input the correct year pattern, e.g 2019";
            return false;
        }
        else {
            return true;
        }
    }


    function getGender () {
        for (let gender of genders){
          if (gender.checked){
            return gender.value;
          }
        }
      }      

    let genderData = getGender();

    var originalDay = weekDays[extDay.toFixed()];
    

    if (genderData == "male") {
        if (originalDay === 'Sunday') {
            alert('born on a sunday your akan name is ' + maleNames[0]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + maleNames[0];
            return true;
        }
        else if (originalDay === 'Monday') {
            alert('born on a monday your akan name is ' + maleNames[1]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + maleNames[1];
            return true;
        }
        else if (originalDay === 'Tuesday') {
            alert('born on a tuesday your akan name is ' + maleNames[2]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + maleNames[2];
            return true;
        }
        else if (originalDay === 'Wednesday') {
            alert('born on a wednesday your akan name is ' + maleNames[3]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + maleNames[3];
            return true;
        }
        else if (originalDay === 'Thursday') {
            alert('born on a thursday your akan name is ' + maleNames[4]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + maleNames[4];
            return true;
        }
        else if (originalDay === 'Friday') {
            alert('born on a friday your akan name is ' + maleNames[5]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + maleNames[5];
            return true;
        }
        else if (originalDay === 'Saturday') {
            alert('born on a saturday your akan name is ' + maleNames[6]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + maleNames[6];
            return true;
        }
    }
    
    if (genderData == "female") {
        if (originalDay === 'Sunday') {
            alert('born on a sunday your akan name is ' + femaleNames[0]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + femaleNames[0];
            return true;
        }
        else if (originalDay === 'Monday') {
            alert('born on a monday your akan name is ' + femaleNames[1]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + femaleNames[1];
            return true;
        }
        else if (originalDay === 'Tuesday') {
            alert('born on a tuesday your akan name is ' + femaleNames[2]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + femaleNames[2];
            return true;
        }
        else if (originalDay === 'Wednesday') {
            alert('born on a wednesday your akan name is ' + femaleNames[3]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + femaleNames[3];
            return true;
        }
        else if (originalDay === 'Thursday') {
            alert('born on a thursday your akan name is ' + femaleNames[4]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + femaleNames[4];
            return true;
        }
        else if (originalDay === 'Friday') {
            alert('born on a friday your akan name is ' + femaleNames[5]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + femaleNames[5];
            return true;
        }
        else if (originalDay === 'Saturday') {
            alert('born on a saturday your akan name is ' + femaleNames[6]);
            document.getElementById("result").textContent = "Born on Sunday: Your Name is: " + femaleNames[6];
            return true;
        }
    }
    
}
