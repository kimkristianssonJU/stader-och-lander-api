export async function fetchThis(url) {
    const response = await fetch(url);
    const data = response.json();
    return data;
}
