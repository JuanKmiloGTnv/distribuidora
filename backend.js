// Función para enviar el mensaje del usuario
function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    const messagesContainer = document.getElementById('chatbox-messages');

    if (userInput.trim() !== "") {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.textContent = userInput;
        messagesContainer.appendChild(userMessage);

        setTimeout(() => {
            generateBotResponse(userInput);
        }, 1000); 

        document.getElementById('user-input').value = "";
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Función para manejar la selección de opciones predeterminadas
function handleOption(option) {
    const messagesContainer = document.getElementById('chatbox-messages');

    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = option;
    messagesContainer.appendChild(userMessage);

    setTimeout(() => {
        generateBotResponse(option);
    }, 1000);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Función para generar las respuestas automáticas del bot
function generateBotResponse(input) {
    const messagesContainer = document.getElementById('chatbox-messages');
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');
    if (input.toLowerCase().includes("accesorios")) {
        botMessage.textContent = "Las máquinas incluyen un juego básico de herramientas y accesorios como prensatelas, agujas y enhebradores manuales.";
      } else if (input.toLowerCase().includes("garantía")) {
        botMessage.textContent = "Todas nuestras máquinas cuentan con una garantía de 1 año.";
      } else if (input.toLowerCase().includes("tipos de máquinas")) {
        botMessage.textContent = "Ofrecemos máquinas para uso industrial con diferentes configuraciones de hilos y puntadas.";
      } else if (input.toLowerCase().includes("facilidad de uso")) {
        botMessage.textContent = "Sí, todas nuestras máquinas vienen con un manual de instrucciones y ofrecemos soporte técnico.";
      } else if (input.toLowerCase().includes("correo electrónico")) {
        botMessage.textContent = "Nuestro correo electrónico es singerparaelvallesas@hotmail.com Por favor, no dudes en escribirnos.";
      } else {
        botMessage.textContent = "Lo siento, no entiendo tu pregunta. ¿Podrías reformularla?";
      }

    messagesContainer.appendChild(botMessage);

    // Agregar nuevamente las opciones de preguntas después de cada respuesta del bot
    const optionsMessage = document.createElement('div');
    optionsMessage.classList.add('message', 'bot-message');
    optionsMessage.innerHTML = `
        <button onclick="handleOption('Accesorios')">Accesorios</button>
        <button onclick="handleOption('Garantía')">Garantía</button>
        <button onclick="handleOption('Tipos de máquinas')">Tipos de máquinas</button>
        <button onclick="handleOption('Facilidad de uso')">Facilidad de uso</button>
        <button onclick="handleOption('Correo')"> correo electrónico</button>
    `;
    messagesContainer.appendChild(optionsMessage);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
