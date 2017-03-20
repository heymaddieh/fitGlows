angular.module('fitGlows').service('calcSrv', function(){
  // var userInput = {};
  var user = {};

  this.bodyFatPercentage= function(input){
  var sex = input.sexM ? 'male' : 'female';
  var heightFtIn = [input.heightFt, input.heightInch];
  var weightLbs = input.weight;
  var age = input.age;
  var waistIn = input.waist;
  var hipIn = input.hip;
  var illiacIn = input.illiac;
  //assigning user input to object///////////
  
    // userInput.sex = sex;
    // userInput.heightFtIn = heightFtIn;
    // userInput.weightLbs = weightLbs;
    // userInput.age = age;
    // userInput.waistIn = waistIn;
    // userInput.hipIn = hipIn;
    // userInput.illiacIn = illiacIn;
    
  //////////////////////////////////////
 
  //converting variables and assigning to converted user object//////
  
    user.heightCm = (heightFtIn[0] * 30.48 + heightFtIn[1] * 2.54).toString();
    user.weightKg = (weightLbs * 0.453592).toString();
    user.waistCm = (waistIn * 2.54).toString();
    user.hipCm = (hipIn * 2.54).toString();
    user.age = age.toString();
    user.sex = sex.toString();
    
    if(sex !== "female"){
      user.illiacCm = illiacIn * 2.54;
    } else {
      user.illiacCm = undefined;
    }
    
  /////////////////////////////////////////
  
  //BMI Calculation////////////////////////
      var bmi = function(){
        return (Math.round((user.weightKg/Math.pow(user.heightCm/100, 2))*10)/10).toFixed(1);
      }
      
      user.bmi = bmi();
     // console.log(user.bmi);
  //////////////////////////////////////////
  
  //body fat percentage calculation///////////
    //white women w/ BMI under 30, age 15-79
        if(sex === 'female' && user.bmi <= 30 && age >= 15 && age <= 79){
          user.bodyDensity = (1.1668297 - (0.002824 * user.waistCm) + (0.0000122098 * Math.pow(user.waistCm, 2)) - (0.0007333128 * user.hipCm) + ((0.000510477 * user.heightCm) - (0.00021616 * age))).toString();
          
          var bfPercWwno = (((4.96/user.bodyDensity) - 4.51) * 100);
          
          user.bfPerc = (Math.round(bfPercWwno * 10) / 10).toFixed(1);
      }
     ////////////////////////////////////////// 
    // obese white women w/ BMI > 30, age 20-60
        else if(sex === 'female' && user.bmi > 30 && age >= 20 && age <= 60){
         var bfPercWwo = (0.11077 * user.waistCm) - (0.17666 * user.heightCm) + (0.14354 * user.weightKg) + 51.033;
          
          user.bfPerc = (Math.round(bfPercWwo * 10) / 10).toFixed(1);
        }
      //////////////////////////////////////////
    // white men BMI under 30, age 18 - 78
        else if(sex === 'male' && user.bmi < 30 && age >=18 && age <= 78){
         var bfPercWmno = -47.371817 + (0.57914807*user.waistCm) + (0.25189114*user.hipCm) + (0.21366088*user.illiacCm) - (0.35595404*user.weightKg);
          
          user.bfPerc = (Math.round(bfPercWmno * 10) / 10).toFixed(1);
        }
      //////////////////////////////////////////
    // obese white men BMI over 30, age 24-68
          else if(sex === 'male' && user.bmi >=30 && age >= 24 && age <= 68){
            var bfPercWmo = (0.31457*user.waistCm) - (0.10969*user.weightKg) + 10.834;
        
          user.bfPerc = (Math.round(bfPercWmo * 10) / 10).toFixed(1);
        }
        
          else {
            user.bfPerc = undefined;
          }
  
  return user;
}
// bodyFatPercentage("female", [6, 0], 189, 18, 25, 35, undefined);
// console.log(userInput);
// console.log(user);
})