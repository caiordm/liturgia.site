/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const response = await fetch("https://liturgia.up.railway.app/")
    const json = await response.json()
	return {
		json // isso é o mesmo que json: json
	};
}