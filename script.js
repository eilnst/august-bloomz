document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("dobForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const dob = document.getElementById("dob").value.trim();

      const validDOB = "2008-08-16"; // Correct DOB format (YYYY-MM-DD)

      if (dob !== validDOB) {
        alert("It’s not Astha’s DOB");
        return;
      }

      // Store name in localStorage to use later
      localStorage.setItem("visitorName", name);

      // Proceed to the birthday page
      window.location.href = "birthday.html";
    });
  }

  // Birthday page logic (runs only if on birthday.html)
  const birthdayHeading = document.getElementById("birthdayHeading");
  const birthdayName = document.getElementById("birthdayName");

  if (birthdayHeading && birthdayName) {
    const storedName = localStorage.getItem("visitorName") || "Dear";
    birthdayName.textContent = storedName;

    // Show age details
    const birthDate = new Date("2008-08-16T00:00:00");
    const now = new Date();
    const diff = now - birthDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = now.getMonth() - birthDate.getMonth() + (12 * (now.getFullYear() - birthDate.getFullYear()));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor(diff / 1000);

    document.getElementById("ageDetails").textContent =
      `You are ${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds old.`;
  }
});
