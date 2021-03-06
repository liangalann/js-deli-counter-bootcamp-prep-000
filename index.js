var katzDeli = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine) {
    if(!katzDeliLine.length) {
    return "The line is currently empty."
  }
  var temp = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    temp.push(i+1 + ". " + katzDeliLine[i]);
}
    return "The line is currently: " + temp.join(', ');
}
