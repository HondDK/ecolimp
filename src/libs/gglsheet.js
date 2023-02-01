const scriptUrl =
	"https://script.google.com/macros/s/AKfycbywnZDRN58kTS3j18l0v6EfqfOsztt8rUP-3cS8zOpkFy_1jVOaiv6TMJfNIOK_-qbQJA/exec";

export function gglsheet(e) {
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
