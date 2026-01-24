type NavElement = HTMLDivElement | HTMLElement;
export declare function activateMenus(menus: NodeListOf<HTMLLIElement>): void;
export declare function openModal(hamburger: HTMLButtonElement, sideMenu: NavElement, overlay: HTMLDivElement): void;
export declare function closeModal(hamburger: HTMLButtonElement, sideMenu: NavElement, overlay: HTMLDivElement): void;
export declare function popUpModal(amount: HTMLSpanElement, texts: HTMLParagraphElement, modal: HTMLDivElement): void;
export declare function featuresDropDown(features: HTMLDivElement): void;
export declare function setItem<T>(key: string, value: T): void;
export declare function getNumber(key: string): number | null;
export declare function getItem<T>(key: string): T | null;
export declare function getTimeSincePageLoad(): string | null;
export declare function updateStatusText(display: HTMLParagraphElement): void;
export {};
//# sourceMappingURL=main.d.ts.map