function count() {
    const tasks = document.querySelectorAll(".check").length;
    console.log("number of whole tasks: "+ tasks);
    const completed = document.querySelectorAll(":checked").length;
    console.log("number of complete tasks: " + completed);
    const left = tasks - completed;

    document.getElementById("count").innerHTML = left;
}