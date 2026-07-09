// Helper function to create an array of numbers based on its arguments
// Use in creating pagination buttons
const createRange = (start, stop, step = 1) => {
  return Array.from(
    { length: Math.ceil((stop - start + 1) /step) },
    (_, index) => start + index * step
  );
}

export { createRange }