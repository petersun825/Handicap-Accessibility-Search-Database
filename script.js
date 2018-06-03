/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console


document.createElement("TR");
//     td.textContent = accessibility[i][1];
//     table.appendChild(td);
//     console.log(accessibility);
//   }
// }
// }
//   // var  myPara2=document.createElement('p');
//   // myPara2.textContent=accessibility[i];
//   // myTable.appendChild(myPara);


var myRequest = new XMLHttpRequest();
myRequest.open('GET', 'https://sheetsu.com/apis/v1.0bu/4932db21565a');
myRequest.responseType = 'json';
myRequest.addEventListener('load', handleResponse);

function showAccessibility() {
  myRequest.send();
}

function handleResponse() {
  
  if (this.status == 200) {
   var data = this.response;
   //console.log(this.response);
    // var txt = "<td id="top">"+   "number"+"</td>"+"<td>"+"Topic"+"</td>"+"<td>"+"Old Section"+"</td>"+"<td>"+"New Section"+"</td>"+"<td>"+"Comments"+"</td>";
    var txt="<tr><td> <b>Number</b></td><td><b>Topic</b></td> <td><b> Previous Section</b> </td> <td> <b>New Section</b></td> <td><b> Change in Technical Requirement</b></td> <td><b> Comparison with ADA</b></td> <td></tr>";
  
    for (var i = 0; i < data.length; i++){
      txt += "<tr><td>" + data[i]["Number"] + "</td><td>" + data[i]["Topic"] + "</td><td>" + data[i]["Old Section"] + "</td><td>" + data[i]["New Section"] + "</td><td>" + data[i]["Comments"] + "</td><td>"+data[i]["Comparison to ADA"]+"</td></tr>";
    }
  
    //console.log(txt);
    // var header=document.createElement("table");
    var table = document.createElement("table");
    // header.innerHTML=txtheader;
    table.innerHTML = txt;
    
    // var h = document.getElementById("myTable");
    var p = document.getElementById("myTable");
    // h.append(header);
    p.append(table);
      
  }
}

function myFunction() {
  // Declare variables 
  var input, filter, table, tr, td,ct,ps,ns, i;
  //td=topic, ps=previous section, ns=new section, ct=change in technical requirement
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
  for (i = 0; i < tr.length; i++) {
    ps = tr[i].getElementsByTagName("td")[1];
    if (ps) {
      if (ps.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
  for (i = 0; i < tr.length; i++) {
    ns = tr[i].getElementsByTagName("td")[2];
    if (ns) {
      if (ns.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
    for (i = 0; i < tr.length; i++) {
    ct = tr[i].getElementsByTagName("td")[4];
    if (ct) {
      if (ct.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
};

function searchNew() {
  // Declare variables 
  var input, filter, table, tr, td,ct,ps,ns, i;
  //td=topic, ps=previous section, ns=new section, ct=change in technical requirement
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML === "n/a") {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
