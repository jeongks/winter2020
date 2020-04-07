const sourceurl = "https://jeongks.github.io/term%20project/data/employees.json"


fetch(sourceurl)
  .then((response) => response.json())
  .then((employeeInfo) => {
    //Once it comes back, display it to the console.
    console.log(employeeInfo);
    
    let mylist = employeeInfo.employees;
    console.log(mylist[0]);

    for (let i = 0; i < mylist.length; i++){
        //employee image
        let imgcode = mylist[i].imagecode;
        let srcofimg = "https://jeongks.github.io/term%20project/images/" + imgcode + ".jpg";
        let employeeimg = document.createElement("img");
        employeeimg.src = srcofimg;
        let employeeinformation = document.createElement("div");
        employeeinformation.id = "information";
        //employee name
        let employeeName = document.createElement("h2");
        employeeName.textContent = mylist[i].name;
        //employee biography
        let employeebiohead = document.createElement("h4");
        employeebiohead.textContent = "Biography";
        let employeebio = document.createElement("p");
        employeebio.textContent = mylist[i].biography;
        //employee email
        let employeeemail = document.createElement("h4");
        employeeemail.textContent = "e-Mail: " + mylist[i].email;

        
        

        let employee = document.createElement("div");
        employee.appendChild(employeeimg);
        employeeinformation.appendChild(employeeName);
        employeeinformation.appendChild(employeebiohead);
        employeeinformation.appendChild(employeebio);
        employeeinformation.appendChild(employeeemail);
        employee.appendChild(employeeinformation);

        document.getElementById("employee").appendChild(employee);
       
      
      
      
    }


 });