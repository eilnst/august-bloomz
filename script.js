document.getElementById('dobForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const dobInput = document.getElementById('dob').value;
  if (!dobInput) {
    alert('Please select your date of birth.');
    return;
  }

  const dob = new Date(dobInput);
  const now = new Date();

  if (dob >= now) {
    alert('Date of birth must be in the past.');
    return;
  }

  const ageInMs = now - dob;
  const ageInSeconds = Math.floor(ageInMs / 1000);
  const ageInMinutes = Math.floor(ageInSeconds / 60);
  const ageInHours = Math.floor(ageInMinutes / 60);
  const ageInDays = Math.floor(ageInHours / 24);
  const ageInMonths = Math.floor(ageInDays / 30.4375);
  const ageInYears = Math.floor(ageInMonths / 12);

  const message = `
🎉 Happy Birthday! 🎉

You are now:
👉 ${ageInYears} years
👉 ${ageInMonths} months
👉 ${ageInDays} days
👉 ${ageInHours} hours
👉 ${ageInMinutes} minutes
👉 ${ageInSeconds} seconds old!

Now let me go and do some chills... You enjoy your birthday 😉💫
  `;

  alert(message);
});
