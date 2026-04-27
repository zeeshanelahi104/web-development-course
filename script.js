const studentName = "Zeeshan Elahi";
const studentAge = 20;
const studentCity = "Faisalabad";
const favoriteColor = "Blue";
const hobbies = ["Reading", "Coding", "Sports"];

function showInfo() {
    const info = document.getElementById("info");

    info.innerHTML = `
        <div class="info-card"><span>Name:</span> ${studentName}</div>
        <div class="info-card"><span>Age:</span> ${studentAge}</div>
        <div class="info-card"><span>City:</span> ${studentCity}</div>
        <div class="info-card"><span>Favorite Color:</span> ${favoriteColor}</div>
        <div class="info-card">
            <span>Hobbies:</span>
            <ul class="hobbies-list">
                ${hobbies.map(h => `<li>${h}</li>`).join("")}
            </ul>
        </div>
    `;
}

function showConsole() {
    console.log("Name:", studentName);
    console.log("Age:", studentAge);
    console.log("City:", studentCity);
    console.log("Favorite Color:", favoriteColor);
    console.log("Hobbies:", hobbies);
}
