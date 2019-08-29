function produceDrivingRange(blockRange) {
  return function(start, end) {
    let dist = Math.abs(start - end);
    let range = Math.abs(blockRange - dist);
    return `within range by ${range}`;
  }
}