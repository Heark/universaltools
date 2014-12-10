// system that stores usernames & passwords \\
require 'storage.js'

usernames = new Array
var username = prompt("", 'Username'')
var sys = function (add, remove){
  this.add = usernames.push
  this.remove = remove;
}
var error = function (log, fix){
  this.log = console.log;
}
// assface123
if (sys.username.length => 30){
  document.write("Username too long to be added");
  error.log('Error 1010/username.length/');
}
sys.add(username);

