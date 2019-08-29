function produceDrivingRange(blockRange) {
  return function(start, end) {
    let dist = Math.abs(parseInt(start) - parseInt(end));
    
    if (dist < blockRange) {
      return `within range by ${blockRange - dist}`;
    } else {
      return 
    }
  }
}