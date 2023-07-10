async function main() {
    const url = 'https://text-translator2.p.rapidapi.com/translate';

    const input = document.getElementById("translate").value
    const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '5f123922cdmsh8fe8d5753678f6dp1970aejsn7b1720d122cd',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    body: new URLSearchParams({
        source_language: 'en',
        target_language: 'fr',
        text: input,                                       
    })
};

console.log(input);
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        document.getElementById("outtext").innerText = result.data.translatedText;
    } catch (error) {
        console.error(error);
    }

    
}