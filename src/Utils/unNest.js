export default function unNest(object, properties) {
	const propsArray = properties.split('.');
	let result;
	for (let i = 0; i < propsArray.length; i += 1) {
		const prop = propsArray[i];
		if (object[prop]) {
			result = object[prop];
		} else if (result && result[prop]) {
			result = result[prop];
		} else {
			result = null;
		}
	}
	return result;
}
