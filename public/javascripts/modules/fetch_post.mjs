export function fetchPost(url, object) {
    console.log("KO");
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object)
    });
}