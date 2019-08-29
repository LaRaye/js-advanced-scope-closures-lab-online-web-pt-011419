function produceDrivingRange(blockRange) {
  return calculateRange(start, end) {
    let dist = Math.abs(start - end);
    let range = Math.abs(blockRange - dist);
    return `within range by ${range}`;
  }
}