// Función para obtener las mazmorras seleccionadas
function getSelectedDungeons() {
    const checkboxes = document.querySelectorAll('input[name="dungeon"]:checked');
    const selectedDungeons = [];

    checkboxes.forEach((checkbox) => {
        const dungeonName = checkbox.value;
        const dungeonImage = getDungeonImage(dungeonName); // Llamamos a una función para obtener la ruta de la imagen
        selectedDungeons.push({ name: dungeonName, image: dungeonImage });
    });

    return selectedDungeons;
}

// Función para obtener la ruta de la imagen asociada a cada mazmorra (modificar según tus necesidades)
function getDungeonImage(dungeonName) {
    switch (dungeonName) {

        case "Hondonada Frondacuero [BH]":
            return "https://static.icy-veins.com/images/wow/og-images/brackenhide-hollow.jpg";
        case "Salas de Infusión [HOI]":
            return "https://static.icy-veins.com/images/wow/og-images/halls-of-infusion.jpg";
        case "Uldaman: Legado de Tyr [UlD]":
            return "https://static.icy-veins.com/images/wow/og-images/uldaman-legacy-of-tyr.jpg"
        case "Neltharus [NELT]":
            return "https://static.icy-veins.com/images/wow/og-images/neltharus.jpg";
        case "Fuerte Libre [FH]":
            return "https://wow.zamimg.com/uploads/screenshots/normal/770900-fuerte-libre.jpg"
        case "Cumbre del Vórtice [VP]":
            return "https://wow.zamimg.com/uploads/screenshots/normal/911372-la-cumbre-del-vortice.jpg"
        case "Catacumbas Putrefactas [UNDR]":
            return "https://wow.zamimg.com/uploads/screenshots/normal/768061-catacumbas-putrefactas.jpg"

        case "Guarida de Neltharion [NL]":
            return "https://stormfate.com/wp-content/uploads/2023/03/dragonflight-season-2-campaign-768x432.webp"

        default:
            return "https://media.tenor.com/K-YokPxobd8AAAAM/wow-world-of-warcraft.gif"; // Si no hay imagen asociada, deja una cadena vacía
    }
}

// Función para seleccionar una mazmorra aleatoria y mostrar el resultado en el modal
function selectRandomDungeon() {
    const selectedDungeons = getSelectedDungeons();

    if (selectedDungeons.length > 0) {
        const randomIndex = Math.floor(Math.random() * selectedDungeons.length);
        const randomDungeon = selectedDungeons[randomIndex];

        // Mostrar el resultado en el modal
        const modal = document.getElementById("resultModal");
        const resultText = document.getElementById("randomResult");
        const resultImage = document.getElementById("randomImage"); // Agregamos un elemento para mostrar la imagen
        resultText.textContent = randomDungeon.name;

        // Mostrar la imagen asociada
        resultImage.src = randomDungeon.image;

        modal.style.display = "block";

        // Ocultar la alerta si se selecciona al menos una mazmorra
        const errorSelec = document.getElementById("errorSelec");
        errorSelec.style.display = "none";

    } else {

        // Mostrar la alerta si no se selecciona ninguna mazmorra
        const errorSelec = document.getElementById("errorSelec");
        errorSelec.style.display = "block";
    }
}


// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById("resultModal");
    modal.style.display = "none";
}

// Asociar evento al botón de "Seleccionar Aleatorio"
document.getElementById("randomButton").addEventListener("click", selectRandomDungeon);

// Función para limpiar todas las mazmorras seleccionadas
function clearSelection() {
    const checkboxes = document.querySelectorAll('input[name="dungeon"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
    });
}

// Asociar evento al botón de "Limpiar Selección"
document.getElementById("clearButton").addEventListener("click", clearSelection);