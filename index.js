var katzDeli = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return "Welcome, " + person + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (!katzDeliLine.length) {
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}

function currentLine(katzDeliLine) {
    if(!katzDeliLine.length) {
    return "The line is currently empty."
  }
  for (var i = 0; i < katzDeliLine.length; i++) {
    var temp = katzDeliLine[i]
    console.log("I am currently" + katzDeliLine[i])
}
currentline(Ada,Grace)
