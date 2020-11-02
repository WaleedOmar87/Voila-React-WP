// common functions
const parseQueryArguments = (queryArguments) => {
	// prepare query string from queryArguments
	Object.keys(queryArguments)
		.map((arg) => `${arg}=${queryArguments[arg]}`)
		.join("&");
};
export {parseQueryArguments}
