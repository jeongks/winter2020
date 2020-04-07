const sourceurl = "https://github.com/jeongks/jeongks.github.io/blob/master/term%20project/employees.json"


fetch(sourceurl)
  .then((response) => response.json())
  .then((employeeInfo) => {
    //Once it comes back, display it to the console.
    console.log(employeeInfo);
    
    let mylist = employeeInfo.list;

    for (i = 0; i <mylist.length; i++){
        //employee image
        let imgcode = mylist[i].imagecode;
        let srcofimg = "//github.com/jeongks/jeongks.github.io/tree/master/term%20project/images/" + imgcode + ".jpg";
        let employeeimg = document.createElement("img");
        employeeimg.src = srcofimg;
        //employee name
        let employeeName = document.createElement("h5");
        employeeName.textContent = "Name: " + mylist[i].name;
        //employee biography
        let employeebiohead = document.createElement("h5");
        employeebiohead.textContent = "Biography";
        let employeebio = document.createElement("p");
        employeebio.textContent = mylist[i].biography;
        //employee email
        let employeeemail = document.createElement("h5");
        employeeemail.textContent = "e-Mail: " + mylist[i].email;

        
        

        let employee = document.createElement("div");
        employee.appendChild(employeeimg);
        employee.appendChild(employeeName);
        employee.appendChild(employeebiohead);
        employee.appendChild(employeebio);
        employee.appendChild(employeeemail);

        document.getElementById("employee").appendChild(employee);
       
      
      
      
    }


 });