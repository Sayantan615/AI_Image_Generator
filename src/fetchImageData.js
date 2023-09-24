async function fetchImageDataArr(prompt) {
  try {
    const apiUrl = "https://api.openai.com/v1/images/generations";
    const apikey = import.meta.env.VITE_API_KEY || process.env.API_KEY;
    console.log(apiUrl, apikey);
    const requestBody = {
      prompt,
      n: 4,
      size: "1024x1024",
    };
    const requestHeaders = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apikey}`,
    };
    const response = await fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: requestHeaders,
    });
    const data = await response.json();
    console.log(data);
    return data.data;
  } catch (err) {
    alert(err.message);
  }
}

export default fetchImageDataArr;
