// const createRange = (start, stop, step = 1) =>
//     Array.from(
//       { length: Math.ceil((stop - start + 1) /step) },
//       (_, index) => start + index * step
//     );


const createRange = (start, stop, step = 1) => {
  return Array.from(
    { length: Math.ceil((stop - start + 1) /step) },
    (_, index) => start + index * step
  );
}

export { createRange }