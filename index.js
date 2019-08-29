function produceDrivingRange(distLimit) {
  return calculateRange(start, end) {
    let dist = Math.abs(start - end);
    let range = Math.abs(distLimit - dist);
    return `within range by ${range}`;
  }
}