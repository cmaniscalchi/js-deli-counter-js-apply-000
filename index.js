var katzDeli = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  }
 else return `Currently serving ${katzDeliLine.shift()}.`;
}

function currentLine(katzDeliLine, person) {
var array = []

  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  }
 for (let i = 0; i < katzDeliLine.length, i++) {
 
 return `The line is currently: ${katzDeliLine.length}. ${person}.`;
}
}