const titre = document.getElementById("title");

async function getJoke() {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr");
    const data = await response.json();
    console.log(data);
    document.getElementById(
      "joke"
    ).innerText = `${data.setup} - ${data.delivery}`;
  } catch (error) {
    console.error("Erreur:", error);
  }
}
