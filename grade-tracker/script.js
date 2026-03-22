let grades = [];

function addGrade() {
    let subject = document.getElementById("subject").value;
    let grade = document.getElementById("grade").value;

    if (subject === "" || grade === "") {
        alert("Fill all fields");
        return;
    }

    grades.push(Number(grade));

    let li = document.createElement("li");
    li.textContent = subject + ": " + grade;

    document.getElementById("list").appendChild(li);

    updateAverage();

    document.getElementById("subject").value = "";
    document.getElementById("grade").value = "";
}

function updateAverage() {
    let sum = grades.reduce((a, b) => a + b, 0);
    let avg = sum / grades.length;

    document.getElementById("average").textContent = avg.toFixed(2);
}