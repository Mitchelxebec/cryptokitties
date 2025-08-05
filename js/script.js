const menus = document.querySelectorAll("#menu li");
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("side-menu");
const closeBtn = document.getElementById("close");
const overlay = document.getElementById("overlay");
const body = document.body;
const modal = document.querySelector(".modal-box");
const texts = document.querySelector(".modal-box p");
const button = document.getElementById("claim-btn");
const amount = document.getElementById("amount");
const featuresBtn = document.querySelector(".game-features");
const features = document.getElementById("featuresContent");
const display = document.getElementById("refresh");
let claimed = 0;

menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    menus.forEach((menu) => menu.classList.remove("active"));
    menu.classList.add("active");
  });
});

// FOR THE HAMBURGER
hamburger.onclick = () => {
  sideMenu.classList.add("open");
  overlay.classList.add("active");
  hamburger.style.display = "none";
};

closeBtn.onclick = () => {
  sideMenu.classList.remove("open");
  overlay.classList.remove("active");
  hamburger.style.display = "block";
};

overlay.onclick = () => {
  sideMenu.classList.remove("open");
  overlay.classList.remove("active");
  hamburger.style.display = "block";
};

menus.forEach((menu) => {
  menu.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("active");
    hamburger.style.display = "block"
  });
});

// FOR THE MODAL
button.addEventListener("click", () => {
  claimed++;
  if (claimed === 1) {
    amount.textContent = `${claimed + ".00"}`;
  } else {
    texts.textContent = "POINTS ALREADY CLAIMED";
  }
  modal.classList.add("open");

  setTimeout(() => {
    modal.classList.remove("open");
  }, 3000);
});

// FEATURES BUTTON
featuresBtn.addEventListener("click", () => {
  features.classList.toggle("drop-down");
});

// Save current refresh time
const pageLoadTime = Date.now();
localStorage.setItem("pageLoadTime", pageLoadTime);

// 🔹 Get time from localStorage
function getTimeSincePageLoad() {
  const storedTime = parseInt(localStorage.getItem("pageLoadTime"));
  if (!storedTime) return "No load time stored";

  const now = Date.now();
  const diffInSeconds = Math.floor((now - storedTime) / 1000);

  if (diffInSeconds < 60) {
    return `PAGE REFRESHED: ${diffInSeconds} second${
      diffInSeconds === 1 ? "" : "s"
    } ago`;
  } else if (diffInSeconds < 3600) {
    const mins = Math.floor(diffInSeconds / 60);
    return `PAGE REFRESHED: ${mins} minute${mins === 1 ? "" : "s"} ago`;
  } else {
    const hours = Math.floor(diffInSeconds / 3600);
    return `PAGE REFRESHED: ${hours} hour${hours === 1 ? "" : "s"} ago`;
  }
}

function updateStatusText() {
  const statusText = getTimeSincePageLoad();
  display.innerText = statusText;
}

setTimeout(() => {
  updateStatusText(); // first update after 10s
  setInterval(updateStatusText, 10000); // then update every 10s
}, 10000);
