const scriptUrl =
	"https://script.google.com/macros/s/AKfycbxwMo5WD--hbCvo-892P64qfHQ0fxEu-ObgGRV9W_EzhOr87sIe2y_Nf6sgQmI2KJS4/exec";

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
