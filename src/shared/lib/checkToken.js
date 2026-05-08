// import { millisecondstoMinutes, minutesToMilliseconds } from "./timeConverter";

// const checkToken = () => {

//   const millisecond = 1;
//   const second = 1000 * millisecond;
//   const min = 60 * second;
//   const hour = 60 * min;
//   const day = 24 * hour;


//   console.log(localStorage.getItem("token"));
//   const stored = localStorage.getItem("token");
//   const token = JSON.parse(stored);
//   console.log(token.value);
//   console.log(token.created);
//   console.log(token.expiryInMins)
//   console.log("Millisecond difference");
//   console.log(Date.now() - token.created);
//   console.log("Minutes difference");
//   // console.log((Date.now() - token.created) / min);
//   console.log(millisecondstoMinutes(Date.now() - token.created));

//   console.log("Is Token Valid");
//   console.log(((Date.now() - token.created) / min) < token.expiryInMins);


  
//   console.log(day);
//   console.log(min * 15);
//   console.log((min * 15) / min);
//   console.log(Date.now()  / day);

//   console.log(Date.now());
//   console.log(Date.now() - Date.now());

//   const test = Date.now();
//   console.log(new Date(test));

//   console.log(new Date(Date.now()));

//   console.log((Date.now() + 15) - Date.now());
// }

// export default checkToken;