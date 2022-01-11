var Form=document.getElementById("survey-form");
// first name
Form.addEventListener('submit',function(event){
   event.preventDefault()//prevents the form from auto submitting
 var First_Name =document.getElementById("firstname").value
   console.log(First_Name);

   var data=document.createElement('td')
data.append(First_Name);
var row1=document.getElementById('firstname-data')
   row1.appendChild(data)
   data.className += "addCSS"
/// last name
   var Last_Name=document.getElementById("lastname").value
   console.log(Last_Name);

   var data2=document.createElement('td')
   data2.append(Last_Name);
   data2.className = "addCSS"
  var row2=document.getElementById('lastname-data')
  row2.appendChild(data2)

  var Address=document.getElementById("address").value
  console.log(Address);

  var data3=document.createElement('td')
  data3.append(Address);
  data3.className = "addCSS"
 var row3=document.getElementById('address-data')
 row3.appendChild(data3)

  var Pincode=document.getElementById("pincode").value
  console.log(Pincode);

  var data4=document.createElement('td')
  data4.append(Pincode);
  data4.className = "addCSS"
  var row4=document.getElementById('pincode-data')
 row4.appendChild(data4)
  // gender
 
  var selectedOption = $("input:radio[name=option]:checked").val()
  console.log(selectedOption)
      
  var data5=document.createElement('td')
 data5.append(selectedOption);
//data5.innerHTML=selectedOption;
  var row5=document.getElementById('gender-data')
 row5.append(data5)
  
///food
var valid=false;
if(document.getElementById("Italian").checked){
                 valid=true;
   var italy=document.getElementById("Italian").value                
  console.log(italy) 
  var data60=document.createElement('p')

   data60.append(italy)
   var row60=document.getElementById('choice of food-data')
   row60.append(data60)   
   valid=true;
}
if(document.getElementById("Chinese").checked){
    var china=document.getElementById("Chinese").value
    console.log(china) 
    var data611=document.createElement('p')
    data611.append(china)
    var row61=document.getElementById('choice of food-data')
    row61.append(data611)   
    valid=true;
}
if(document.getElementById("South Indian").checked){
    var south=document.getElementById("South Indian").value
    console.log(south)   
    var data62=document.createElement('p')
   data62.append(south);
  var row62=document.getElementById('choice of food-data')
   row62.append(data62)    
    valid=true;
}
if(document.getElementById("Punjabi").checked){
    var punjabi=document.getElementById("Punjabi").value
    console.log(punjabi) 
    var data63=document.createElement('p')
   data63.append(punjabi);
  var row63=document.getElementById('choice of food-data')
   row63.append(data63)    
    valid=true;
}
if(document.getElementById("Other").checked){
    var other=document.getElementById("Other").value
    console.log(other) 
   var data64=document.createElement('p')
   data64.append(other);
  var row64=document.getElementById('choice of food-data')
  row64.append(data64)  
    valid=true;
}
if(valid){
}
else{
    alert("please enter minimum 2 option")
    return false;
}

  var State=document.getElementById("state").value
  console.log(State);
  var data7=document.createElement('td')
  data7.append(State);
  var row7=document.getElementById('state-data')
  row7.appendChild(data7)
  data7.className += "addCSS"

  var Country=document.getElementById("country").value
  console.log(Country);
  var data8=document.createElement('td')
  data8.append(Country);
  var row8=document.getElementById('country-data')
  row8.appendChild(data8)
  data8.className += "addCSS"
 
 
  ///creating table
  var addData=document.createElement('td');

  var inputs=document.querySelectorAll('input')
  inputs.forEach (input=>input.value='')
  var textarea=document.querySelectorAll('textarea')
  textarea.forEach (textarea=>textarea.value='')
  var radList = document.getElementsByName('option');

    for (var i = 0; i < radList.length; i++) {
      if(radList[i].checked) radList[i].checked = false;
    }
} )
