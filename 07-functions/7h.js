let result;

function convertLength(length, from, to){
  if(from == 'miles'){
    if(to == 'km'){
      result = length * 1.6;
      console.log(`${result} km`);
    } else if(to == 'ft'){
      result = length * 5280;
      console.log(`${result} ft`);
    } else {
      result = length;
      console.log(`${result} miles`);
    }
  } else if(from == 'km'){
    if(to == 'miles'){
      result = length / 1.6;
      console.log(`${result} miles`);
    } else if(to == 'ft'){
      result = length * 3281;
      console.log(`${result} ft`);
    } else {
      result = length;
      console.log(`${result} km`);
    }
  } else if(from == 'ft'){
    if(to == 'km'){
        result = length / 3281;
      console.log(`${result} km`);
    } else if(to == 'miles'){
      result = length / 5280;
      console.log(`${result} miles`);
    } else {
      result = length;
      console.log(`${result} ft`);
    }
  } else {
    console.log(`Invalid unit: ${unit}`);
  }
}