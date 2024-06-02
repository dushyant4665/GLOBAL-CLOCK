function displayTime(){ 
  var now = new Date(); 
  var dname = now.getDay(); 
  var monthh = now.getMonth(); 
  var dnum = now.getDate(); 
  var yearr = now.getFullYear(); 
  var hourr = now.getHours(); 
  var min = now.getMinutes(); 
  var secondss = now.getSeconds(); 
  var period = (hourr >=12) ? "PM" : "AM"; 
 if (hourr==0){
  hourr=12;
 }
 if(hourr>12)
 {hourr = hourr-12;
  period="PM";
 }

 Number.prototype.pad = function(digits){
  for(var n = this.toString(); n.length < digits; n = 0 + n);
  return n;
 }

  var Months=["January","February","March","April","May","June","July","August","September","October","November","December"]; 
  var weeks=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
  var ids=["daynames", "month", "date-num", "year", "hours", "minutes", "seconds", "period"];
  var values=[weeks[dname], Months[monthh], dnum.pad(2), yearr.pad(4) ,hourr.pad(2) ,min.pad(2) ,secondss.pad(2) ,period];

  for(var i=0; i<ids.length; i++) 
    document.getElementById(ids[i]).textContent = values[i]; 
} 

setInterval(displayTime, 100); 
