export const isSSR = () => typeof window === "undefined"

export const isCrawler = () =>
	!isSSR() &&
	(!("onscroll" in window) ||
		/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent))
