const endPoint = "https://free.churchless.tech/v1/chat/completions"


async function logJSONData() {
    const response = await fetch(endPoint);
    const jsonData = await response.json();
    console.log(jsonData);
  }  

logJSONData()