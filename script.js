const tickets = []; // Array para armazenar os chamados localmente

document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value.trim();
    const priority = document.getElementById("priority").value;

    if (!title || !category || !description || !priority) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Criar um novo chamado
    const ticket = { title, category, description, priority, createdAt: new Date().toLocaleString() };
    tickets.push(ticket);

    // Atualizar lista de chamados
    updateTicketList();

    alert("Chamado criado com sucesso!");
    this.reset();
});

function updateTicketList() {
    const ticketList = document.getElementById("tickets");
    ticketList.innerHTML = ""; // Limpar lista

    tickets.forEach((ticket, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${ticket.title}</strong> (${ticket.priority})<br>
            <em>Categoria:</em> ${ticket.category}<br>
            <em>Descrição:</em> ${ticket.description}<br>
            <em>Data:</em> ${ticket.createdAt}<br>
            <button onclick="deleteTicket(${index})">Excluir</button>
        `;
        ticketList.appendChild(li);
    });
}

function deleteTicket(index) {
    tickets.splice(index, 1); // Remover chamado
    updateTicketList(); // Atualizar a lista
}
