window.browser = window.browser || window.chrome;

browser.webRequest.onBeforeRequest.addListener(
	(details) => {
		const url = new URL(details.url);
		if (
			url.hostname.endsWith("odysee.com") ||
			url.hostname.endsWith("open.lbry.com")
		) {
			url.hostname = "watch.whateveritworks.org";
			return { redirectUrl: url.href };
		}
	},
	{
		urls: ["<all_urls>"],
	},
	["blocking"],
);
