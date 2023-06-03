'use strict';

// // // /////////////////////////////////////////////////
// // // /////////////////////////////////////////////////
// // // // BANKIST APP


// // // Data

 
  const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2, account3, account4];





// // // Elements

const labelWelcome = document.querySelector('.welcome');

const labelDate = document.querySelector('.date');

const labelBalance = document.querySelector('.balance__value');

const labelSumIn = document.querySelector('.summary__value--in');

const labelSumOut = document.querySelector('.summary__value--out');

const labelSumInterest = document.querySelector('.summary__value--interest');

const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');

const containerMovements = document.querySelector('.movements');

const login = document.querySelector('.login')

const btnLogin = document.querySelector('.login__btn');

const btnTransfer = document.querySelector('.form__btn--transfer');

const btnLoan = document.querySelector('.form__btn--loan');

const btnClose = document.querySelector('.form__btn--close');

const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');

const inputLoginPin = document.querySelector('.login__input--pin');

const inputTransferTo = document.querySelector('.form__input--to');

const inputTransferAmount = document.querySelector('.form__input--amount');

const inputLoanAmount = document.querySelector('.form__input--loan-amount');

const inputCloseUsername = document.querySelector('.form__input--user');

const inputClosePin = document.querySelector('.form__input--pin');


///MODAL
const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCloseModal = document.querySelector('.btn--close-modal');

const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const modalText = document.querySelector('.modal__header')





const openModal = function (msg) {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // console.log(`${msg}`);
  modalText.textContent = `${msg}`
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});










// DATES

const formatMovementDate = function (date, locale){

  const calcDaysPassed = (date1, date2) => Math.round(Math.abs((date1-date2) / (1000 * 60 * 60 * 24)));

const daysPassed = calcDaysPassed(new Date(), date);
// console.log(daysPassed);

if (daysPassed === 0) return 'Today';
if (daysPassed === 1) return 'Yesterday';
if (daysPassed <= 7) return $`{daysPassed} days ago`;
else {

  //       const day = `${date.getDate()}`.padStart(2, 0);
  //       const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //       const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  // INTERNATIONALIZATION

  // NO OPTIONS OBJECT INCLUDED IN THE ARGUMENTS BECAUSE WE ARE JUST DISPLAYING THE DATE ONLY AND NOT TIME E.T.C.
return new Intl.DateTimeFormat(locale).format(date);

}
}
  

      





//1a. display each movements

// SORT DISPLAYMOVEMENTS PARAMETER WAS ADDED LATER IN THE PROJECT  AND SET TO FALSE BECAUSE IT NEEDED TO BE TRUE (SORTED OUT) ONLY WHEN THE SORTED BUTTON IS CLICKED ON.


// CHANGED MOVEMENT PARAMETER TO THE ENTIRE ACCOUT OBJECT (acc) beacuse of the date property added to the account object, so both the movements and the dates can be looped .

const displayMovements = function (acc, sort = false ) {

  containerMovements.innerHTML = '';

// SLICE HERE IS USED TO MAKE A COPY OF THE MOVEMENTS ARRAY IN OTHER TO SORT IT BECAUSE WITHOUT IT, WE WILL BE SORTING THE REAL MOVEMENTS ARRAY......IF SORT IS FALSE, THEN MOVS SHOULD BE MOVEMENTS (UNSORTED MOVEMENTS IN THE REAL ARRAY)


// CHANGED JUST MOVEMENT TO acc.movement because the parameter changed up, and so it can be looped through.
const movs = sort ? acc.movements.slice().sort((a,b)  => a - b ) : acc.movements;



// CHANHGED THE MOVEMENTS  TO MOVS SO WE CAN LOOP THE MOVS

//LOOPING OVER THE MOVEMENTS AND MOVEMENTSDATES TOGETHER; LOOPING OVER TWO ARRAYS AT THE SAME TIME, WE CALL THE FOREACH METHOD ON ONE AND WE USE THE CURRENT INDEX TO GET DATA FROM SOME OTHER ARRAY (acc.movementsDates[i]) 
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      const date = new Date(acc.movementsDates[i]);

      // const day = `${date.getDate()}`.padStart(2, 0);
      // const month = `${date.getMonth() + 1}`.padStart(2, 0);
      // const year = date.getFullYear();

      // ACC.LOCALE WAS ADDED TO THE ARGUMENT IN OTHER TO GET THE LOCALE INFORMATION FROM EACH ACCOUNT OBJECT
      const displayDate = formatMovementDate(date, acc.locale);

      //  STYLE AND CURRENCY ARE OBJECT (OPTIONS), BUT THEY ARE SPILITTED HERE; MOV WAS ALSO INCLUDED BECAUSE THATS  WHERE WE WANT TO GET THE DATA TO BE INTERNATIONALIZED.

      // CREATE INTERNATIONALIZED FORMAT FOR MOV
      const formattedMov1 = new Intl.NumberFormat(acc.locale, {
        style: 'currency',
        currency: acc.currency,
      }).format(mov);

      //   // insert the row html for iteration
      const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>

       <div class="movements__date">${displayDate}</div>
       
        <div class="movements__value"> ${formattedMov1} </div>
      </div>
    `;

      //   // INSERT THE WHOLE HTML INTO THE WEB PAGE (MOVEMENTS KNOWN AS CONTAINER.MOVEMENT)

      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}


//1b CLICK BUTTON TO SORT MOVEMTNTS ARRAY

// create state variables for 'Sorted' to monitor the state of the movements, i.e in a normal state sorted is false, meaning the movements are not sort, but when we click the 'SORT BUTTON', movements must be sorted.

let sorted = false;
btnSort.addEventListener('click', function (e) {
e.preventDefault();
// !SORTED MEANING OPPOSITE OF SORTED
displayMovements(currentAccount, !sorted);

sorted =!sorted;
 

});





//2. COMPUTE USER NAMES (FIRST LETTERS)
const user = 'Steven Thomas Williams';
const username =
 user.toLowerCase()
 .split(' ')
 .map(use => use[0])
.join ('')

// console.log(username);



// CREATE USERNAME FUNCTION
const createUsername = function (accs){

  accs.forEach(function(acc){

// ADDED NEW PROPERTY  TO THE ACCOUNT OBJECT
acc.username = acc.owner
  .toLowerCase()
  .split(' ')
  .map(use => use[0])
  .join('');


  })

}
 createUsername (accounts);




//  3. CALCULATE TOTAL MONEY IN THE ACCOUNTS

// FUNCTION PARAMETER WAS FORMALLY MOVEMENTS
const calcPrintBalance = function (acc)  {
  // SUM TOTAL MONEY USING REDUCE METHOD

  // const balance =  movements.reduce( (acc, mov) =>
  //  acc + mov, 0
  //   )

  // ADDING BALANCE (acc.balance) PROPERTY TO THE ACCOUNT OBJECT because we need to check for balance in the Transfer axis and suming the total movements together, to give total in balance
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  // CREATE INTERNATIONALIZED FORMAT FOR BALANCE
  const formattedMov2 = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(acc.balance);

  labelBalance.textContent = formattedMov2;
}
  
// 4 DISPLAY IN & OUT (DEPOSIT, WITHDRAWAL, INTEREST)

// function parameter was formally MOVEMENTS but it was changed to account array (acc), so that we can get both the movements and interest and all other Object property from each account array

const calcDisplaySummary = function (acc){
  // DEPOSITS
  const deposits = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  // CREATE INTERNATIONALIZED FORMAT FOR DEPOSITS
  const formattedMov3 = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(deposits);

  labelSumIn.textContent = formattedMov3;

  // WIITHDRAWAL
  const withdrawal = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);

  // CREATE INTERNATIONALIZED FORMAT FOR WITHDRAWAL
  const formattedMov4 = new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: acc.currency,
  }).format(deposits);

  labelSumOut.textContent = formattedMov4;

  // currentAccount.interest - interest of the current account log

  //INTEREST

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)

    // FILTER FOR INTEREST GREATER THAN OR EQUAL 1
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);

  // CREATE INTERNATIONALIZED FORMAT FOR INTEREST
const formattedMov5 = new Intl.NumberFormat(acc.locale, {
  style: 'currency',
  currency : acc.currency,
}) .format(interest); 

  labelSumInterest.textContent = formattedMov5;
}





 
// 5 IMPLEMENTING LOG IN


// WE NEED THIS TWO VARIABLES TO PERSIST ON MORE THAN ONE FUNCTION (THATS WHY WE PUT IN IN THE GLOBAL VARIABLE)
let currentAccount;
let timer;

btnLogin.addEventListener('click', function (e) {
  
// PREVENT FORM FROM SUBMITTING
  e.preventDefault();

  // TO FIND THE PARTICULAR / CURRENT ACCOUNT WE WANT TO LOG IN FROM THE ACCOUNT ARRAY

  currentAccount = accounts.find (acc => acc.username === inputLoginUsername.value);


if (currentAccount?.pin === Number(inputLoginPin.value) ){
  // DISPLAY  MESSAGE & FIRST NAME
  labelWelcome.textContent = `Welcome back, ${
    currentAccount.owner.split(' ')[0]
  }`;

  //  DISPLAY UI
  containerApp.style.opacity = 100;

// EMPTY USERNAME AND PASSWORD FIELD  

  inputLoginUsername.value = '';
  inputLoginPin.value = ''; 
  login.style.display = 'none';
  // inputLoginUsername.blur();

  // DISPLAY TIMEOUT

  // IF TIMER EXISTS IN THE CURRENT ACCOUNT LOG IN, CLEAR THE RUNNING TIMEOUT.....
if (timer) clearInterval(timer);

// ...AND SET TIMEOUT TO THE SETTIMEOUT FUNCTION TO READ AGAIN FROM THE START TIME
 timer = setTimeout();



// CURRENT DATE AND TIME

// INTERNATIONALIZATION

const now = new Date();
const options = {
  hour : 'numeric',
  minute : 'numeric',
  day : 'numeric',
  month: 'numeric',
  year: 'numeric',
  // weekday : 'numeric',
}

// THIS WAS COMMENTED OUT BECAUSE WE ARE NOT USING THE LOCALE (LOCATION) COMING FROM THE BROWSER, BUT WE ARE USING THE ONE COMING FROM THE ACCOUNTS ARRAY

// const locale = navigator.language;

labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);

// labelDate.textContent = `${day}/${month}/${year}, ${hour}: ${min}`;



// CURRENTACCOUNT HERE MEANS THE WHOLE ACCOUNT OBJECTS EACH PASSED ON THE FUNCTION PARAMETER AS (ACC)

// DISPLAY MOVEMENTS
// displayMovements(currentAccount.movements);

  // DISPLAY BALANCE
  // calcPrintBalance(currentAccount);
  
  // DISPLAY SUMMARY
  // calcDisplaySummary(currentAccount);

  updateUI(currentAccount);
    
}  

else if (!currentAccount?.pin !== Number(inputLoginPin.value)){
  // labelWelcome.textContent = "wrong input";
  openModal('WRONG INPUT');

  //  DISPLAY UI
  // containerApp.style.opacity = 0;
}
}) 


// UPDATE UI FUNCTION

// CREATE A FUNCTION THAT ACCEPTS CALLING OF A ALL MOVEMENTS, BALANCE & SUMMARY  UPDATE UI EVERYTIME A FUNCTIONALITY OCCURS. 

const updateUI = function (acc) {

  // DISPLAY MOVEMENTS
  displayMovements(acc);

  // DISPLAY BALANCE
  calcPrintBalance(acc);

  // DISPLAY SUMMARY
  calcDisplaySummary(acc);
}




// FAKED LOG IN

// currentAccount = account1;
// updateUI(currentAccount);
//  containerApp.style.opacity = 100;






// 6 MAKE TRANSFERS

btnTransfer.addEventListener('click',function (e) {

e.preventDefault();

const amount = Number(inputTransferAmount.value);
const receiverAccout = accounts.find(acc => acc.username === inputTransferTo.value);

if (amount > 0 
  && receiverAccout 
  && currentAccount.balance >= amount 
  && receiverAccout !== currentAccount.username) {
    // AMOUNT IS SUBTRACTED FROM THE CURRENTACCOUNT AND ADDED TO THE RECEIVER ACCOUNT, PUSHED THE NEW MOVEMENTS INTO THE SENDER AND RECEIVER ARRAY

    currentAccount.movements.push(-amount);
    receiverAccout.movements.push(amount);

    // // PUSH DATE  (MOVEMENTDATES) ARRAY TO BE UPFATED IN THE UI OF BOTH THE SENDER AND THE RECEIVER

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAccout.movementsDates.push(new Date().toISOString());

    // SET TIMER BACK TO NORMAL, BY CLEARING IT FIRST AND CALLING IT BACK
    clearInterval(timer);
    timer = setTimeout();

  }if (!receiverAccout) {
        openModal('WRONG USERNAME');
  } if (amount > currentAccount.balance){
    openModal('INSUFFICIENT BALANCE')
  }
inputTransferTo.value = '';
inputTransferAmount.value = '';

// AFTER INPUTTING AMOUNT TO TRANSFER AND ALL NECCESSARY CONDITIONS ARE MET, THE UI IS UPDATED AGAIN

  updateUI(currentAccount);

})






// 7 CHECKING FOR LOAN ELIGIBILITY AND UPDATING BALANCE AFTER LOAN IS GRANTED

btnLoan.addEventListener ('click', function (e) {
e.preventDefault();

// USING 'MATH.FLOOR' INSTEAD OF JUST ORDINARY 'NUMBER' AHEAD OF INPUTLOANAMOUNT.VALUE BECAUSE MATH.FLOOR DOES TYPE COERCION AND ROUND DOWN NUMBERS TO AVOID DECIMAL, LIKE IN A REAL BANK APP
const amount = Math.floor(inputLoanAmount.value);

if (amount > 0 && currentAccount.movements.some(mov=> mov >= amount * 0.1)){
  // PUSH AMOUNT GOTTEN FROM LOAN TO MOVEMENT ARRAY TO BE UPFATED IN THE UI


  // SET TIMEOUT ON LOAN
 setTimeout( () => {
   currentAccount.movements.push(amount);

   // // PUSH DATE  (MOVEMENTDATES) ARRAY TO BE UPFATED IN THE UI
   currentAccount.movementsDates.push(new Date().toISOString());

   updateUI(currentAccount);
}, 5000 );    

// SET TIMER BACK TO NORMAL, BY CLEARING IT FIRST AND CALLING IT BACK
clearInterval(timer);
timer = setTimeout();
} else{
  openModal('YOU ARE NOT ELIGIBLE FOR THIS LOAN');
}


})




// 8 DELETE AN ACCOUNT USING FINDINDEX METHOD

btnClose.addEventListener('click', function (e) {

e.preventDefault();

if (currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin)){

  // TO FIND THE PARTICULAR ACCOUNTS IN THE ACCOUNTS ARRAY THAT THE USERNAME MATCH THE CURRENT USERNAME INPUTTED 
const index = accounts.findIndex (acc => acc.username === currentAccount.username);

// SLICE: TO COMPLETELY REMOVE THE SELECTED ACCOUNT FROM THE ACCOUNT ARRAY
  accounts.splice(index, 1);
  

   
};
//  containerApp.style.opacity = 0;

})






// 9  SET TIMEOUT WHEN A USER LOGS IN
const setTimeout = function () {
// SET TIME TO 100s

let time = 170;

// INTERVAL WAS GIVEN A NAME OF (CONST TIMER) SO THAT WE WILL BE ABLE TO CLEAR THE INTERVAL (STOP TIMER AND LOG OUT WHEN THE TIME IS UP)
const timer = setInterval (function () {
  // TO GET MINUTES
  const min = String(Math.trunc(time / 60)).padStart(2, 0);

  // REMAINDER OF TIME / 60 TO GET SECONDS.
  const sec = String(Math.trunc(time % 60)).padStart(2, 0);

  // IN EACH CALL PRINT THE REMAINING TIME TO THE UI
  labelTimer.textContent = `${min} : ${sec}`;

  // WHEN 0 SECONDS, STOP TIMER AND LOG OUT---COMES BEFORE (TIME--)
  if (time === 0) {
    clearInterval(timer);
    labelWelcome.textContent = 'Log In To Get Started';
    containerApp.style.opacity = 0;
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
  }

  // DECREASE TIME BY SECONDS
  time--;


}, 1000)
// WE RETURNED THE TIMER SO THAT WE CAN USE THE CLEARINTERVAL TO CLEAR THE TIMER IF ITS RUNING IN EACH ACCOUNT LOGGED IN
  return timer;
}













// setInterval(function () {

// const now = new Date ();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);
// const sec = `${now.getSeconds()}`.padStart(2, 0 );

// console.log(`${hour} : ${min} : ${sec}`  );
// }, 1000);





