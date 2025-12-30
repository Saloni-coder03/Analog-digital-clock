let a;
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};

const updateAllClocks = () => {
  a = new Date();

  // Main digital clock
  const time = a.toLocaleTimeString();
  const date = a.toLocaleDateString(undefined, options);
  document.getElementById("time").innerHTML = time + "<br>on " + date;

  // World clocks
  document.getElementById("indiaTime").innerText =
    a.toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });

  document.getElementById("usaTime").innerText =
    a.toLocaleTimeString("en-US", { timeZone: "America/New_York" });

  document.getElementById("ukTime").innerText =
    a.toLocaleTimeString("en-GB", { timeZone: "Europe/London" });

  document.getElementById("japanTime").innerText =
    a.toLocaleTimeString("ja-JP", { timeZone: "Asia/Tokyo" });

  // Analog clock
  const hours = a.getHours();
  const minutes = a.getMinutes();
  const seconds = a.getSeconds();

  document.getElementById("hour").style.transform =
    `rotate(${(hours % 12) * 30 + minutes * 0.5 - 90}deg)`;

  document.getElementById("minute").style.transform =
    `rotate(${minutes * 6 - 90}deg)`;

  document.getElementById("second").style.transform =
    `rotate(${seconds * 6 - 90}deg)`;
};

// ONE interval only (no flicker)
setInterval(updateAllClocks, 1000);
updateAllClocks();
