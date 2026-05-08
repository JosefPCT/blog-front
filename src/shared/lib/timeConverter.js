const millisecond = 1;
const second = 1000 * millisecond;
const min = 60 * second;
// const hour = 60 * min;
// const day = 24 * hour;

// accepts number, in milliseconds
export function millisecondstoMinutes(num){
  return num / min;
}

export function minutesToMilliseconds(num){
  return num * millisecond;
}