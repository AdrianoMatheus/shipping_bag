
// Verifica se o payload do ping é true ou false

if (msg.payload !== false && msg.payload > 0) {
    // Dispositivo está online
    msg.payload = true;
} else {
    // Dispositivo está offline
    msg.payload = false;
}

// Retorna a mensagem com o novo payload
return msg;