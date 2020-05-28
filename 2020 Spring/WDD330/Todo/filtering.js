function filter(id){
    console.log(id);
    document.getElementById(id).style.border = "thin solid black";

    if (id == "all"){
        document.getElementsByClassName("taskbox").style.display = "none";
    } else if (id =="active"){
        document.getSelectionAll("input[type=\"checkbox\"]:checked").style.display = "none";
    } else if (id == "completed"){
        document.getSelectionAll("taskbox").style.display = "none";
        document.getSelectionAll("input[type=\"checkbox\"]:checked").style.display= "flex";
    }
    
}