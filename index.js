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
  if(!katzDeliLine.length){
    return "The line is currently empty.";
  }
  var lines = [];
  for (var i=0; i < line.length; i++) {
    lines.push(i + 1 + ". " + line[i]);
  }
  console.log("The line is currently: " + lines)
  return "The line is currently: " + lines.join(', ');
}
