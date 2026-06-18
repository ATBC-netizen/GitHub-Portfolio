
const labsData = [
    {
        title: "Example Title #1",
        tags: ["1", "2", "3"],
        objective: "Example Objective",
        execution: "Example Execution",
        url: ""
    },
    {
        title: "Example Title #2",
        tags: ["1", "2", "3"],
        objective: "Example Objective",
        execution: "Example Execution",
        url: ""
    },
    {
        title: "Example Title #3",
        tags: ["1", "2", "3"],
        objective: "Example Objective",
        execution: "Example Execution",
        url: ""
    }
]

function renderLabs() {
    const container = document.getElementById('labs-container');

    labsData.forEach(lab => {
        const card = document.createElement('div');
        card.className = 'lab-card';

        const tagsHtml = lab.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

        card.innerHTML = `
        <h3 class="lab-title">${lab.title}</h3>
        <div class=tags>
            ${tagsHtml}
        </div>
        <p><strong>Objective:</strong> ${lab.objective}</p>
        <p><strong>Execution:</strong> ${lab.execution}</p>
        <a href="${lab.url}" class="lab-url">View Project Repository &rarr;</a>
        `;

        container.appendChild(card);
    });
}

renderLabs();