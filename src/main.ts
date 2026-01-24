type NavElement = HTMLDivElement | HTMLElement;

export function activateMenus(menus: NodeListOf<HTMLLIElement>) {
    menus.forEach((menu) => {
        menu.addEventListener("click", () => {
            menus.forEach((menu) => menu.classList.remove("active"));
            menu.classList.add("active");
        });
    });
}

export function openModal(hamburger: HTMLButtonElement, sideMenu: NavElement, overlay: HTMLDivElement) {
    sideMenu.classList.add("open");
    overlay.classList.add("active");
    hamburger.style.display = "none";
}

export function closeModal(hamburger: HTMLButtonElement, sideMenu: NavElement, overlay: HTMLDivElement) {
    sideMenu.classList.remove("open");
    overlay.classList.remove("active");
    hamburger.style.display = "block";
}

let claimed = 0;
export function popUpModal(amount: HTMLSpanElement, texts: HTMLParagraphElement, modal: HTMLDivElement) {
    claimed++;
    if (claimed === 1) {
        texts.textContent = "Hooray Points claimed!";
        amount.textContent = `${claimed + ".00"}`;
    } else {
        texts.textContent = "POINTS ALREADY CLAIMED";
    }
    modal.classList.add("open");

    setTimeout(() => {
        modal.classList.remove("open");
    }, 3000);
}

export function featuresDropDown(features: HTMLDivElement) {
    features.classList.toggle("drop-down");
}

// SAVE ANY VALUE SAFELY
export function setItem<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
}

// READ A NUMBER SAFELY
export function getNumber(key: string): number | null {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;

    const parsed = JSON.parse(raw);
    return typeof parsed === "number" ? parsed : null;
}

// READ GENERIC SAFELY
export function getItem<T>(key: string): T | null {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;

    return JSON.parse(raw) as T;
}

// GET TIME IF IT EXIST OR STORE IT IF IT DOESN'T
function getOrInitPageLoadTime(): number {
    const existing = getItem<number>("pageLoadTime");
    if (existing !== null) {
        return existing;
    }

    const now = Date.now();
    setItem("pageLoadTime", now);
    return now;
}

const pageLoadTime = getOrInitPageLoadTime();

// FOR TIME RELOAD UPDATES
export function getTimeSincePageLoad() {
    const storedTime = pageLoadTime;
    if (storedTime === null) return null;

    const now = Date.now();
    const diffInSeconds = Math.floor((now - storedTime) / 1000);

    if (diffInSeconds < 60) {
        return `PAGE REFRESHED: ${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`;
    } else if (diffInSeconds < 3600) {
        const mins = Math.floor(diffInSeconds / 60);
        return `PAGE REFRESHED: ${mins} minute${mins === 1 ? "" : "s"} ago`;
    } else {
        const hours = Math.floor(diffInSeconds / 3600);
        return `PAGE REFRESHED: ${hours} hour${hours === 1 ? "" : "s"} ago`;
    }
}

// Schedule the next update in 10 seconds
export function updateStatusText(display: HTMLParagraphElement) {
    display.innerText = getTimeSincePageLoad() ?? "";

    setTimeout(() => updateStatusText(display), 10000);
}

