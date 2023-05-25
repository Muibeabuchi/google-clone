const url = "https://random-words5.p.rapidapi.com/getRandom";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "07611baa4cmsh15ebb59b25072ffp179c96jsn169d0fbc99c5",
    "X-RapidAPI-Host": "random-words5.p.rapidapi.com",
  },
};

export async function getRandomWord() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    return result;
    console.log(result);
  } catch (error) {
    console.error("random word api error", error.message);
  }
}
