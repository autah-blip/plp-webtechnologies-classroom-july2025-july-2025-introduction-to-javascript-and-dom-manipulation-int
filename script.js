// ===============================
// 🌱 PART 1: JavaScript Basics
// ===============================

// Declare variables and use conditionals
document.getElementById("checkAgeBtn").addEventListener("click", function() {
  let age = document.getElementById("ageInput").value;

  if (age === "") {
    document.getElementById("ageResult").innerText = "Please enter your age.";
  } else if (age >= 18) {
    document.getElementById("ageResult").innerText = "✅ You are an adult!";
  } else {
    document.getElementById("ageResult").innerText = "🚸 You are underage.";
  }
});


// ===============================
// 💡 PART 2: JavaScript Functions
// ===============================

// Custom function to calculate total price including tax
function calculateTotal(price) {
  const taxRate = 0.16; // 16% tax
  let total = price + (price * taxRate);
  return total.toFixed(2);
}

// Use the function when button is clicked
document.getElementById("calcTotalBtn").addEventListener("click", function() {
  let price = parseFloat(document.getElementById("priceInput").value);

  if (isNaN(price)) {
    document.getElementById("totalResult").innerText = "Enter a valid number!";
  } else {
    let total = calculateTotal(price);
    document.getElementById("totalResult").innerText = `💰 Total with tax: $${total}`;
  }
});


// ===============================
// 🔁 PART 3: Loops
// ===============================

// Example using a for loop to display numbers
document.getElementById("showNumbersBtn").addEventListener("click", function() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear existing list

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Number ${i}`;
    list.appendChild(li);
  }
});


// ===============================
// 🌐 PART 4: DOM Manipulation
// ===============================

// Change background color and add text
document.getElementById("changeColorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = getRandomColor();

  const msgArea = document.getElementById("messageArea");
  msgArea.textContent = "🎨 Background color changed!";
  msgArea.style.color = "green";
});

// Helper function to generate random colors
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
