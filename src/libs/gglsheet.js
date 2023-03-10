const scriptUrl =
	"https://script.google.com/macros/s/AKfycbwJss7eZk7zMHQwWvwyUZnYElkIptuioUMCUsUkhBgdfMb02u4eG3ybsMEznV1qTkdI/exec";

export function gglsheet() {
	const formEle = document.querySelector("form");
	const formDatab = new FormData(formEle);
	fetch(scriptUrl, {
		method: "POST",
		body: formDatab,
	})
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.log(error);
		});
}
