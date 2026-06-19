const dateFormatter = (date) => {
    // console.log("Timezone date");
    // console.log(date);
    // console.log("Converted date");
    // console.log(new Date(date));
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  if(!date){
    return;
  }

  return formatter.format(new Date(date));
}

export default dateFormatter;