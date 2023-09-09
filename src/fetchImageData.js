async function fetchImageDataArr(prompt) {
  const apiUrl = "https://api.openai.com/v1/images/generations";
  const apikey = import.meta.env.VITE_API_KEY;
  console.log(apiUrl, apikey);
  const requestBody = {
    prompt,
    n: 4,
    size: "256x256",
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
}

export default fetchImageDataArr;
