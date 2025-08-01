function storeDOB() {
  const dobInput = document.getElementById("dob").value;
  const error = document.getElementById("error");

  if (!dobInput) {
    error.textContent = "Please select your birth date!";
    return;
  }

  const birthDate = new Date(dobInput);
  const now = new Date();

  if (birthDate > now) {
    error.textContent = "Date cannot be in the future!";
    return;
  }

  localStorage.setItem("dob", dobInput);
  window.location.href = "birthday.html";
}

function showAge() {
  const dob = localStorage.getItem("dob");
  if (!dob) return;

  const birthDate = new Date(dob);
  const now = new Date();
  const diff = now - birthDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(days / 365.25);

  const output = `You are now ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old!`;

  const ageOutput = document.getElementById("ageOutput");
  if (ageOutput) {
    ageOutput.textContent = output;
  }
}

// Call this only on birthday.html
if (window.location.pathname.includes("birthday.html")) {
  showAge();
}
