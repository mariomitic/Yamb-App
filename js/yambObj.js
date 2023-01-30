
  
  
  let dices = {
        generateDice: function()  { let diceX = Math.floor(Math.random() * 6+1);   
        return diceX
        }
    }


let yambObj = {

    throwButton: "",
    SixDices: [0,1,1,1,1,1,1],
    SixKeeps: [0,0,0,0,0,0,0],
    counter: 0,

    rowIndex: 0,
    cellIndex: 0,
    
    throw: function(){
        this.counter = this.counter +1;
         for (let i=1; i< 7; i++) {  
          if (this.SixDices[i] === 0){
            continue
           }
           this.SixDices[i] = dices.generateDice();
           document.getElementById("throwRow").cells[i].innerHTML = this.SixDices[i];
         if (this.counter > 1){
            $('td.call').addClass('complete');
            $('td.hand').addClass('complete');  
         }
           if(this.counter >= 3)  {
            document.querySelector('button').disabled = true;   }
                } 
           },

  
    keepingDices: function () {
                  let table = document.getElementById("diceTable"), rIndex, cIndex;
                  for (let i=0; i< table.rows.length; i++) {
                     for (j=1; j<table.rows[i].cells.length; j++) {
                     table.rows[i].cells[j].onclick = function() {
                        rIndex = this.parentElement.rowIndex;
                        cIndex = this.cellIndex;
                        let cellValue = document.getElementById("diceTable").rows[rIndex].cells[cIndex];
                        cellValue = cellValue.innerText;
                        cellValue = parseFloat(cellValue);

                    if (isNaN(cellValue) || cellValue == "") {
                                    return
                                     }
                        if (rIndex === 1) {
                    for ( let x=1; x<7; x++){
                         let emptyCell = document.getElementById("diceTable").rows[rIndex-1].cells[x].innerHTML;
                        
                       if (emptyCell === "") {
                  //         if  want first available in keep table change cell[cIndex] to cell[x]
                          document.getElementById("diceTable").rows[rIndex-1].cells[cIndex].innerHTML = cellValue;
                         document.getElementById("diceTable").rows[rIndex].cells[cIndex].innerHTML = "";
                         yambObj.SixDices[cIndex] = 0;
                         yambObj.SixKeeps[cIndex] = cellValue;
                         //console.log(yambObj.SixKeeps);
                         return
                          }          
                      }
                    } else if (rIndex === 0) {
                      //iteration is done above
                      // for ( let x=1; x<7; x++){
                      // let emptyCell = document.getElementById("diceTable").rows[rIndex+1].cells[x].innerHTML;
                          // if (emptyCell === "") {
                          document.getElementById("diceTable").rows[rIndex+1].cells[cIndex].innerHTML = cellValue;
                          document.getElementById("diceTable").rows[rIndex].cells[cIndex].innerHTML = "";
                         yambObj.SixDices[cIndex] = cellValue;
                         yambObj.SixKeeps[cIndex] = 0;
                         //console.log(yambObj.SixKeeps);
                         return
                    }
                    
                  }//end click function
                }//end iterration of rows cells
               }//end iterration of table rows
              },//end of keepingDices method
         
  
enterOne:
$('#rowOne').children().on('click', function () {
  if (yambObj.counter === 0){
    return
  }
  let firstResult = yambObj.SixKeeps;
  let toEnter = 0;
  for (i=0; i<firstResult.length; i++){
  if (firstResult[i] === 1){
    toEnter = toEnter +1;
    if (toEnter === 6) {
     break
    }
  }
  $(this).text(toEnter);
  $(this).addClass('complete');  
   }
  return yambObj.resetThrow()
}),




enterTwo:
$('#rowTwo').children().on('click', function () {
  if (yambObj.counter === 0){
    return
  }
  let firstResult = yambObj.SixKeeps;
  let toEnter = 0;
  for (i=0; i<firstResult.length; i++){
  if (firstResult[i] === 2){
    toEnter = toEnter +2;
    if (toEnter === 12) {
      break
     }
  }
  $(this).text(toEnter);
  $(this).addClass('complete');  
  }
return yambObj.resetThrow()
}),


enterThree:
$('#rowThree').children().on('click', function () {
  if (yambObj.counter === 0){
    return
  }
  let firstResult = yambObj.SixKeeps;
  let toEnter = 0;
  for (i=0; i<firstResult.length; i++){
  if (firstResult[i] === 3){
    toEnter = toEnter +3;
    if (toEnter === 18) {
      break
     }
  }
  $(this).text(toEnter);
  $(this).addClass('complete'); 
   }
return yambObj.resetThrow()
}),

enterFour:
$('#rowFour').children().on('click', function () {
  if (yambObj.counter === 0){
    return
  }
  let firstResult = yambObj.SixKeeps;
  let toEnter = 0;
  for (i=0; i<firstResult.length; i++){
  if (firstResult[i] === 4){
    toEnter = toEnter +4;
    if (toEnter === 24) {
      break
    }
  }
  $(this).text(toEnter);
  $(this).addClass('complete'); 
    }
return yambObj.resetThrow()
}),
  
            
enterFive:
$('#rowFive').children().on('click', function () {
  if (yambObj.counter === 0){
    return
  }
  let firstResult = yambObj.SixKeeps;
  let toEnter = 0;
  for (i=0; i<firstResult.length; i++){
  if (firstResult[i] === 5){
    toEnter = toEnter +5;
    if (toEnter === 30) {
      break
    }
  }
  $(this).text(toEnter);
  $(this).addClass('complete');
   }
return yambObj.resetThrow()
}), 


enterSix:
$('#rowSix').children().on('click', function () {
  if (yambObj.counter === 0){
    return
  }
  let firstResult = yambObj.SixKeeps;
  let toEnter = 0;
  for (i=0; i<firstResult.length; i++){
  if (firstResult[i] === 6){
    toEnter = toEnter +6;
    if (toEnter === 36) {
      break;
    }
  }
    $(this).text(toEnter);
  $(this).addClass('complete');
 }
return yambObj.resetThrow()
 }),


enterMax:
$('#MaxRow').children().on('click', function () {
    if (yambObj.counter === 0){
      return
    }
    let countingDices = 0;
    for (let j = 0; j< yambObj.SixKeeps.length; j++){
      if (yambObj.SixKeeps[j] !== 0){
          countingDices = countingDices +1;
      }
      //CHECK FOR MISSCALCULATION adds dice 6 at the end?!
    }
    if(countingDices < 5){alert("MUST KEEP 5 DICES!"); return}
        let sumMax = 0;
    let sorted = yambObj.SixKeeps.sort();
    for (i=2; i < sorted.length; i++){
    sumMax = sumMax + sorted[i];
     
    $(this).text(sumMax);
    $(this).addClass('complete');  
    }
    console.log(yambObj.SixKeeps);
  return yambObj.resetThrow()
    
   }),

   enterMin:
$('#MinRow').children().on('click', function () {
    if (yambObj.counter === 0){
      return
    }
    console.log(keepingDices);
    let countingDices = 0;
    for (let j = 0; j< yambObj.SixKeeps.length; j++){
      if (yambObj.SixKeeps[j] !== 0){
          countingDices = countingDices +1;
      }
     }
    if(countingDices < 5){alert("MUST KEEP 5 DICES!"); return}
    let sumMin = 0;
    let sorted = yambObj.SixKeeps.sort();
    for (i=0; i < sorted.length-1; i++){ 
    sumMin = sumMin + sorted[i];  
    } 
    if(sorted[1] === 0){
      sumMin = sumMin + sorted[6];
    }   
   $(this).text(sumMin);
  $(this).addClass('complete'); 
  return yambObj.resetThrow()
     }),




enterThree:
$('#ThreeRow').children().on('click', function () {
if (yambObj.counter === 0){
return
}
let sumforThree = 0;
let sorted = yambObj.SixKeeps.sort();
 if (sorted[4] === sorted[5] && sorted[5] === sorted[6]){
 sumforThree = sorted[4] + sorted[5] + sorted[6] + 20;
}else if (sorted[3] === sorted[4] && sorted[4] === sorted[5]){
  sumforThree = sorted[3] + sorted[4] + sorted[5] + 20;
}else if (sorted[2] === sorted[3] && sorted[3] === sorted[4]){
  sumforThree = sorted[2] + sorted[3] + sorted[4] + 20;
}else if (sorted[1] === sorted[2] && sorted[2] === sorted[3]){
  sumforThree = sorted[1] + sorted[2] + sorted[3] + 20;
  //SIMPLIFY maybe
   } else { sumforThree = 0}
   if(sumforThree === 20){
    sumforThree = 0;
   }
$(this).text(sumforThree);
$(this).addClass('complete'); 
return yambObj.resetThrow()
     }),



enterStraight:
$('#StraightRow').children().on('click', function () {
if (yambObj.counter === 0){
return
}


let sumforStraight = 0;
let sorted = yambObj.SixKeeps.sort();
let reverserSort1 = sorted.reverse();

let uniqueCharObj = [...new Set(reverserSort1)];
let reverserSort = [...uniqueCharObj];
//REMOVED DUPLICATES IN SORTED ARRAY (...New Set...)

if (reverserSort[0] === 6 && reverserSort[1] === 5 && reverserSort[2] === 4 && reverserSort[3] === 3 && reverserSort[4] === 2){
  if(yambObj.counter === 1){
  sumforStraight = 66;}
  else if(yambObj.counter === 2){
    sumforStraight = 56;}
    else if(yambObj.counter === 3){
      sumforStraight = 46;}
}else if (reverserSort[0] === 5 && reverserSort[1] === 4 && reverserSort[2] === 3 && reverserSort[3] === 2 && reverserSort[4] === 1){
  if(yambObj.counter === 1){
    sumforStraight = 66;}
    else if(yambObj.counter === 2){
      sumforStraight = 56;}
      else if(yambObj.counter === 3){
        sumforStraight = 46;}
}else{
sumforStraight = 0;
}
$(this).text(sumforStraight);
$(this).addClass('complete'); 

return yambObj.resetThrow()
     }),



enterFull:
$('#FullRow').children().on('click', function () {
if (yambObj.counter === 0){
return
}
let sumforFull = 0;
let sorted = yambObj.SixKeeps.sort();
let revSorted = sorted.reverse();
revSorted = revSorted.filter(x => x !== 0);
    let three =[];
    let pair =[];

    //FINDS THREE IN FULL
    for(let i=0; i<revSorted.length; i++){
          if(revSorted[i] === revSorted[i+1] && revSorted[i] === revSorted[i+2]){
            three.push(revSorted[i], revSorted[i+1], revSorted[i+2]);
            revSorted.splice(i, 3);       
                }else{continue}
              }

    //FINDS PAIR IN FULL
    for(let j=0; j<revSorted.length;j++){
          if(revSorted[j] === revSorted[j+1]){
            pair.push(revSorted[j], revSorted[j+1]);
            revSorted.splice(j, 2);       
                }else{continue}
            }
    sumforFull = sumforFull + three[0] + three[1] + three[2] + pair[0] + pair[1] + 30;
          if(three.length === 0 || pair.length === 0){sumforFull = 0};
          
          
          $(this).text(sumforFull);
          $(this).addClass('complete'); 
          return yambObj.resetThrow()
      }),




enterPoker:
$('#PokerRow').children().on('click', function () {
if (yambObj.counter === 0){
return
}
let sumforPoker = 0;
let sorted = yambObj.SixKeeps.sort();
 if (sorted[3] === sorted[4] && sorted[4] === sorted[5] && sorted[5] === sorted[6]){
  sumforPoker = sorted[3] + sorted [4] + sorted[5] + sorted[6] + 40;
 }else if (sorted[2] === sorted[3] && sorted[3] === sorted[4] && sorted[4] === sorted[5]){
  sumforPoker = sorted[2] + sorted [3] + sorted[4] + sorted[5] + 40;
 }else if (sorted[1] === sorted[2] && sorted[2] === sorted[3] && sorted[3] === sorted[4]){
 sumforPoker = sorted[1] + sorted[2] + sorted[3] + sorted[4] + 40;
   } else {sumforPoker = 0}
   if(sumforPoker === 40){
    sumforPoker = 0;
   }
$(this).text(sumforPoker);
$(this).addClass('complete'); 
return yambObj.resetThrow()
     }),


enterYamb:
$('#YambRow').children().on('click', function () {
if (yambObj.counter === 0){
return
}
let sumforYamb = 0;
let sorted = yambObj.SixKeeps.sort();
 if (sorted[2] === sorted[3] && sorted[3] === sorted[4] && sorted[4] === sorted[5] && sorted[5] === sorted[6]){
  sumforYamb = sorted[2] + sorted[3] + sorted[4] + sorted[5] + sorted[6] + 50;
 }else if (sorted[1] === sorted[2] && sorted[2] === sorted[3] && sorted[3] === sorted[4] && sorted[4] === sorted[5]){
  sumforYamb = sorted[1] + sorted[2] + sorted[3] + sorted[4] + sorted[5] + 50;
  } else {sumforYamb = 0}
  if(sumforYamb === 50){
    sumforYamb = 0;
   }
$(this).text(sumforYamb);
$(this).addClass('complete'); 
return yambObj.resetThrow()
     }),


 unlockNextDown: 
$('.nextDown').on('click', function(){
    let next = parseInt($('.nextDown')[0].innerHTML);
    if (isNaN(next)){return}else{
    $('.nextDown:first').removeClass('nextDown');
    $('.colDown:first').removeClass('colDown')}
     
}),


unlockNextUp:
$('.nextUp').on('click', function(){
  let len = $('.nextUp').length - 1;
  let next = parseInt($('.nextUp')[len].innerHTML);
  if (isNaN(next)){return}else{{
  $('.nextUp:last').removeClass('nextUp');
  $('.colUp:last').removeClass('colUp');
 }
  }
  }),




callColumnFunc: function(e) {
if(yambObj.counter === 0){ return}
let $target = e.target;
$target.classList.add('calledCell');
$('#yambTable').addClass('allButCalledBlocked');
$target.classList.remove('complete');
$('.nextUp').addClass('allButCalledBlocked');
$('.nextDown').addClass('allButCalledBlocked');

    return  
},



    resetThrow: function(){
      document.querySelector('button').disabled = false; 
      yambObj.counter = 0;
        let table = document.getElementById("diceTable"), rIndex, cIndex;
                  for (let i=0; i< table.rows.length; i++) {
                  
                     for (j=1; j<table.rows[i].cells.length; j++) {
                     table.rows[i].cells[j].innerHTML = "";
                     }
                   }
                   for (let i=1; i<yambObj.SixDices.length;i++){
                    yambObj.SixDices[i] = 1;
                    yambObj.SixKeeps[i] = 0;
                   }   

                   //cell content must stay off if has a value entered
                   $('td.hand').removeClass('complete');
                   $('td.hand').each(function(){
                      let num = $(this).text();
                      if($.isNumeric(num)){
                        $(this).addClass('complete');
                      }
                   });
                   $('td.call').removeClass('complete');
                   $('td.call').each(function(){
                      let num = $(this).text();
                      if($.isNumeric(num)){
                        $(this).addClass('complete');
                      }
                   });

                   //classes removed after entered value
                   $('#yambTable').removeClass('allButCalledBlocked');
                   $('.nextUp').removeClass('allButCalledBlocked');
                   $('.nextDown').removeClass('allButCalledBlocked');
                   $('.calledCell').removeClass('calledCell');
            },


   sum1_1: function(){
      let sum1 = 0;
      for (i=0; i<$('.firstColSum1').length; i++){
      let number = parseInt($('.firstColSum1')[i].innerText);
      if(isNaN(number)){ number = 0}
      sum1 = sum1 + number;
        }
        if(sum1 >= 60){
        sum1 = sum1 + 30;
       }
       if(sum1 === 0){document.getElementById("firstCol").innerText = "";}else{
       document.getElementById("firstCol").innerText = sum1;}
       
 },

    sumFree1_6: function(){
      let sum1 = 0;
      for (i=0; i<$('.freeColSum1').length; i++){
      let number = parseInt($('.freeColSum1')[i].innerText);
      if(isNaN(number)){ number = 0}
      sum1 = sum1 + number;
      }
      if(sum1 >= 60){
      sum1 = sum1 + 30;
      }
      if(sum1 === 0){document.getElementById("secondCol").innerText = "";}else{
      document.getElementById("secondCol").innerText = sum1;}
  },
    
   sumUp1_6: function(){
      let sum1 = 0;
      for (i=0; i<$('.UpColSum1').length; i++){
      let number = parseInt($('.UpColSum1')[i].innerText);
      if(isNaN(number)){ number = 0}
      sum1 = sum1 + number;
      }
      if(sum1 >= 60){
      sum1 = sum1 + 30;
      }
      if(sum1 === 0){document.getElementById("thirdCol").innerText = "";}else{
      document.getElementById("thirdCol").innerText = sum1;}
  },

     sumCall1_6: function(){
      let sum1 = 0;
      for (i=0; i<$('.CallSum1').length; i++){
      let number = parseInt($('.CallSum1')[i].innerText);
      if(isNaN(number)){ number = 0}
      sum1 = sum1 + number;
      }
      if(sum1 >= 60){
      sum1 = sum1 + 30;
      }
      if(sum1 === 0){document.getElementById("fourthCol").innerText = "";}else{
      document.getElementById("fourthCol").innerText = sum1;}
  },


     sumHand1_6: function(){
      let sum1 = 0;
      for (i=0; i<$('.HandSum1').length; i++){
      let number = parseInt($('.HandSum1')[i].innerText);
      if(isNaN(number)){ number = 0}
      sum1 = sum1 + number;
      }
      if(sum1 >= 60){
      sum1 = sum1 + 30;
      }
      if(sum1 === 0){document.getElementById("fifthCol").innerText = "";}else{
      document.getElementById("fifthCol").innerText = sum1;}
  },

  sum2DownCol: function(){
    let oneVal = parseInt(document.getElementById("1.1").innerText);
    let maxVal = parseInt(document.getElementById("1.7").innerText);
    let minVal = parseInt(document.getElementById("1.8").innerText);
    if(isNaN(oneVal) || isNaN(maxVal) || isNaN(minVal)){ return}
    let sum1 = (maxVal - minVal) * oneVal;
    document.getElementById("firstCol_sum2").innerText = sum1;
    },

  sum2FreeCol: function(){
    let oneVal = parseInt(document.getElementById("2.1").innerText);
    let maxVal = parseInt(document.getElementById("2.7").innerText);
    let minVal = parseInt(document.getElementById("2.8").innerText);
    if(isNaN(oneVal) || isNaN(maxVal) || isNaN(minVal)){ return}
    let sum1 = (maxVal - minVal) * oneVal;
    document.getElementById("secondCol_sum2").innerText = sum1;
   },

   sum2UpCol: function(){
    let oneVal = parseInt(document.getElementById("3.1").innerText);
    let maxVal = parseInt(document.getElementById("3.7").innerText);
    let minVal = parseInt(document.getElementById("3.8").innerText);
    if(isNaN(oneVal) || isNaN(maxVal) || isNaN(minVal)){ return}
    let sum1 = (maxVal - minVal) * oneVal;
    document.getElementById("thirdCol_sum2").innerText = sum1;
    },
    
  sum2CallCol: function(){
    let oneVal = parseInt(document.getElementById("4.1").innerText);
    let maxVal = parseInt(document.getElementById("4.7").innerText);
    let minVal = parseInt(document.getElementById("4.8").innerText);
    if(isNaN(oneVal) || isNaN(maxVal) || isNaN(minVal)){ return}
    let sum1 = (maxVal - minVal) * oneVal;
    document.getElementById("fourthCol_sum2").innerText = sum1;
   },

    sum2HandCol: function(){
    let oneVal = parseInt(document.getElementById("5.1").innerText);
    let maxVal = parseInt(document.getElementById("5.7").innerText);
    let minVal = parseInt(document.getElementById("5.8").innerText);
    if(isNaN(oneVal) || isNaN(maxVal) || isNaN(minVal)){ return}
    let sum1 = (maxVal - minVal) * oneVal;
    document.getElementById("fifthCol_sum2").innerText = sum1;
   },



   sum3ColDown: function(){
      let sum1 = 0;
      for (i=0; i<$('.firstColSum3').length; i++){
      let number = parseInt($('.firstColSum3')[i].innerText);
      if(isNaN(number)){ number = 0}
      sum1 = sum1 + number;
       if(sum1 === 0){document.getElementById("firstCol_sum3").innerText = "";}else{
       document.getElementById("firstCol_sum3").innerText = sum1;}
      }
 },

   sum3ColFree: function(){
      let sum1 = 0;
      for (i=0; i<$('.secondColSum3').length; i++){
      let number = parseInt($('.secondColSum3')[i].innerText);
      if(isNaN(number)){ number = 0}
      sum1 = sum1 + number;
}
       if(sum1 === 0){document.getElementById("secondCol_sum3").innerText = "";}else{
       document.getElementById("secondCol_sum3").innerText = sum1;}
   },

   sum3ColUp: function(){
      let sum1 = 0;
      for (i=0; i<$('.thirdColSum3').length; i++){
      let number = parseInt($('.thirdColSum3')[i].innerText);
      if(isNaN(number)){ number = 0}
      sum1 = sum1 + number;
      }
       if(sum1 === 0){document.getElementById("thirdCol_sum3").innerText = "";}else{
       document.getElementById("thirdCol_sum3").innerText = sum1;}
   },

   sum3ColCall: function(){
      let sum1 = 0;
      for (i=0; i<$('.fourthColSum3').length; i++){
      let number = parseInt($('.fourthColSum3')[i].innerText);
      if(isNaN(number)){ number = 0}
      sum1 = sum1 + number;
      }
       if(sum1 === 0){document.getElementById("fourthCol_sum3").innerText = "";}else{
       document.getElementById("fourthCol_sum3").innerText = sum1;}
   },


   sum3ColHand: function(){
      let sum1 = 0;
      for (i=0; i<$('.fifthColSum3').length; i++){
      let number = parseInt($('.fifthColSum3')[i].innerText);
      if(isNaN(number)){ number = 0}
      sum1 = sum1 + number;
      }
       if(sum1 === 0){document.getElementById("fifthCol_sum3").innerText = "";}else{
       document.getElementById("fifthCol_sum3").innerText = sum1;}
   },



SumOfAllSum1: 
$('#yambTable > tbody').on('click', function(){
  sum1Arr = [];
  let SumOfSum1 = 0;
  let Down = parseInt(document.getElementById("firstCol").innerText);
  let Free = parseInt(document.getElementById("secondCol").innerText);
  let Up = parseInt(document.getElementById("thirdCol").innerText);
  let Call = parseInt(document.getElementById("fourthCol").innerText);
  let Hand = parseInt(document.getElementById("fifthCol").innerText);
  sum1Arr.push( Down, Free, Up, Call, Hand);
  for (let i = 0; i<sum1Arr.length; i++){
    if(isNaN(sum1Arr[i])) {continue}
  SumOfSum1 = SumOfSum1 + sum1Arr[i];
  }
  if(SumOfSum1 === 0){document.getElementById("sumOfsum1").innerText = "";}else{
  document.getElementById("sumOfsum1").innerText = SumOfSum1;}
}),


SumOfAllSum2: 
$('#yambTable > tbody').on('click', function(){
  let sum2Arr = [];
  let SumOfSum2 = 0;
  let Down = parseInt(document.getElementById("firstCol_sum2").innerText);
  let Free = parseInt(document.getElementById("secondCol_sum2").innerText);
  let Up = parseInt(document.getElementById("thirdCol_sum2").innerText);
  let Call = parseInt(document.getElementById("fourthCol_sum2").innerText);
  let Hand = parseInt(document.getElementById("fifthCol_sum2").innerText);
  sum2Arr.push( Down, Free, Up, Call, Hand);
  for (let i = 0; i<sum2Arr.length; i++){
    if(isNaN(sum2Arr[i])) {continue}
  SumOfSum2 = SumOfSum2 + sum2Arr[i];
  }
  if(SumOfSum2 === 0){document.getElementById("sumOfsum2").innerText = "";}else{
  document.getElementById("sumOfsum2").innerText = SumOfSum2;}
}),

SumOfAllSum3: 
$('#yambTable > tbody').on('click', function(){
  let sum3Arr = [];
  let SumOfSum3 = 0;
  let Down = parseInt(document.getElementById("firstCol_sum3").innerText);
  let Free = parseInt(document.getElementById("secondCol_sum3").innerText);
  let Up = parseInt(document.getElementById("thirdCol_sum3").innerText);
  let Call = parseInt(document.getElementById("fourthCol_sum3").innerText);
  let Hand = parseInt(document.getElementById("fifthCol_sum3").innerText);
  sum3Arr.push( Down, Free, Up, Call, Hand);
  for (let i = 0; i<sum3Arr.length; i++){
    if(isNaN(sum3Arr[i])) {continue}
  SumOfSum3 = SumOfSum3 + sum3Arr[i];
  }
  if(SumOfSum3 === 0){document.getElementById("sumOfsum3").innerText = "";}else{
  document.getElementById("sumOfsum3").innerText = SumOfSum3;}
}),


grandTotal:
$('#yambTable').on('click', function(){
  let sumArr = [];
  let SumOfAll = 0;
  let Sum1 = parseInt(document.getElementById("sumOfsum1").innerText);
  let Sum2 = parseInt(document.getElementById("sumOfsum2").innerText);
  let Sum3 = parseInt(document.getElementById("sumOfsum3").innerText);
  sumArr.push(Sum1, Sum2, Sum3);
  for (let i = 0; i<sumArr.length; i++){
    if(isNaN(sumArr[i])) {continue}
  SumOfAll = SumOfAll + sumArr[i];
  }
  if(SumOfAll === 0){document.getElementById("sumOfAllsum").innerText = "";}else{
  document.getElementById("sumOfAllsum").innerText = SumOfAll;}
}),
  };//end of yamb object 



// event listeners  

let enterSum1_1 = document.querySelectorAll('.firstColSum1');
for (var i = 0; i < enterSum1_1.length; i++) {
enterSum1_1[i].addEventListener('click', yambObj.sum1_1, false);
}

let cellToCall = $('.call');
for (var i = 0; i < cellToCall.length; i++) {
cellToCall[i].addEventListener('contextmenu', yambObj.callColumnFunc, false);
}

let sumUp_1 = document.querySelectorAll('.UpColSum1');
for (let i = 0; i < sumUp_1.length; i++){
  sumUp_1[i].addEventListener('click', yambObj.sumUp1_6, false);
}

let sumFree_1 = document.querySelectorAll('.freeColSum1');
for (let i = 0; i < sumFree_1.length; i++){
  sumFree_1[i].addEventListener('click', yambObj.sumFree1_6, false);
}

let sumCall_1 = document.querySelectorAll('.CallSum1');
for (let i = 0; i < sumCall_1.length; i++){
  sumCall_1[i].addEventListener('click', yambObj.sumCall1_6, false);
}

let sumHand_1 = document.querySelectorAll('.HandSum1');
for (let i = 0; i < sumHand_1.length; i++){
  sumHand_1[i].addEventListener('click', yambObj.sumHand1_6, false);
}

let sum2Free = document.querySelectorAll('.freeColSum2');
for (let i = 0; i < sum2Free.length; i++){
  sum2Free[i].addEventListener('click', yambObj.sum2FreeCol, false);
}

let sum2Call = document.querySelectorAll('.CallColSum2');
for (let i = 0; i < sum2Call.length; i++){
  sum2Call[i].addEventListener('click', yambObj.sum2CallCol, false);
}

let sum2Hand = document.querySelectorAll('.HandColSum2');
for (let i = 0; i < sum2Hand.length; i++){
  sum2Hand[i].addEventListener('click', yambObj.sum2HandCol, false);
}

let enterSum3_Down = document.querySelectorAll('.firstColSum3');
for (var i = 0; i < enterSum3_Down.length; i++) {
enterSum3_Down[i].addEventListener('click', yambObj.sum3ColDown, false);
}

let enterSum3_Free = document.querySelectorAll('.secondColSum3');
for (var i = 0; i < enterSum3_Free.length; i++) {
enterSum3_Free[i].addEventListener('click', yambObj.sum3ColFree, false);
}

let enterSum3_Up = document.querySelectorAll('.thirdColSum3');
for (var i = 0; i < enterSum3_Up.length; i++) {
enterSum3_Up[i].addEventListener('click', yambObj.sum3ColUp, false);
}

let enterSum3_Call = document.querySelectorAll('.fourthColSum3');
for (var i = 0; i < enterSum3_Call.length; i++) {
enterSum3_Call[i].addEventListener('click', yambObj.sum3ColCall, false);
}

let enterSum3_Hand = document.querySelectorAll('.fifthColSum3');
for (var i = 0; i < enterSum3_Hand.length; i++) {
enterSum3_Hand[i].addEventListener('click', yambObj.sum3ColHand, false);
}


document.getElementById("1.8").addEventListener('click', yambObj.sum2DownCol, false);
document.getElementById("3.1").addEventListener('click', yambObj.sum2UpCol, false);


window.addEventListener('contextmenu', function (e) { 
      e.preventDefault(); 
}, false);

//FINISHED ON 01/23/2023 ___ BY MAXA


   






