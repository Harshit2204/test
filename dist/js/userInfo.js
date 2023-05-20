let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");
let user_time = sessionStorage.getItem("time_taken") / 1000; // Convert milliseconds to seconds


let user_result = sessionStorage.getItem("resultText");

document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;
document.querySelector("span.time_taken").innerHTML = user_time + " seconds";
document.querySelector("span.result_user").innerHTML = user_result;
