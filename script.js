var randomNumber = 0;
// List of additional artworks to add dynamically
const newArtworks = [
    { title: 'The Scream', artist: 'Edvard Munch', img: 'https://via.placeholder.com/200' },
    { title: 'Girl with a Pearl Earring', artist: 'Johannes Vermeer', img: 'https://via.placeholder.com/200' },
    { title: 'The Birth of Venus', artist: 'Sandro Botticelli', img: 'https://via.placeholder.com/200' },
    { title: 'The Night Watch', artist: 'Rembrandt van Rijn', img: 'https://via.placeholder.com/200' },
    { title: 'The Kiss', artist: 'Gustav Klimt', img: 'https://via.placeholder.com/200' },
    { title: 'American Gothic', artist: 'Grant Wood', img: 'https://via.placeholder.com/200' },
    { title: 'Las Meninas', artist: 'Diego Velázquez', img: 'https://via.placeholder.com/200' },
    { title: 'The Last Supper', artist: 'Leonardo da Vinci', img: 'https://via.placeholder.com/200' },
    { title: 'Water Lilies', artist: 'Claude Monet', img: 'https://via.placeholder.com/200' },
    { title: 'Starry Night Over the Rhône', artist: 'Vincent van Gogh', img: 'https://via.placeholder.com/200' }
];
function generateRandomNumber(){
    randomNumber = Math.floor(Math.random() * newArtworks.length); 
}
function addRandomArtwork() {
    const randomIndex = getRandomIndex();
    const newArtworkElement = createArtworkElement(newArtworks[randomIndex]);
    newArtworkElement.addEventListener("click", function() {
        newArtworkElement.style.backgroundColor = "lightblue";
        document.getElementById("counter").textContent = "Artworks Viewed: " 
        + (parseInt(document.getElementById("counter").textContent.split(":")[1]) + 1);
    })
    document.querySelector(".art-grid").appendChild(newArtworkElement);
}

function getRandomIndex() {
    return Math.floor(Math.random() * newArtworks.length);
}

function createArtworkElement(artwork) {
    const artworkElement = document.createElement("div");
    artworkElement.className = "art-panel";

    const imgElement = document.createElement("img");
    imgElement.src = artwork.img;
    artworkElement.appendChild(imgElement);

    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = `${artwork.title} by ${artwork.artist}`;
    artworkElement.appendChild(paragraphElement);

    return artworkElement;
}

document.getElementById("reset-button").addEventListener("click", function() {
    document.querySelector(".art-grid").innerHTML = 
    '<div class="art-panel"><img src="https://via.placeholder.com/200" alt="Starry Night"><p>Starry Night by Vincent van Gogh</p></div>' +
    '<div class="art-panel"><img src="https://via.placeholder.com/200" alt="Mona Lisa"><p>Mona Lisa by Leonardo da Vinci</p></div>' +
    '<div class="art-panel"><img src="https://via.placeholder.com/200" alt="The Persistence of Memory"><p>The Persistence of Memory by Salvador Dalí</p></div>';

    document.getElementById("counter").textContent = "Artworks Viewed: 0";
    document.querySelectorAll(".art-panel").forEach(function(element) {
        element.addEventListener("click", function() {
            element.style.backgroundColor = "lightblue";
            document.getElementById("counter").textContent = "Artworks Viewed: " 
            + (parseInt(document.getElementById("counter").textContent.split(":")[1]) + 1);
        })
    })

});

document.querySelectorAll(".art-panel").forEach(function(element) {
    element.addEventListener("click", function() {
        element.style.backgroundColor = "lightblue";
        document.getElementById("counter").textContent = "Artworks Viewed: " 
        + (parseInt(document.getElementById("counter").textContent.split(":")[1]) + 1);
    })
})

document.getElementById("add-art-button").addEventListener("click", addRandomArtwork);