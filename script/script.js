'use strict';

let fields = [
    null, // 0
    'circle', // 1
    'cross', // 2
    null, // 3
    null, // 4
    null, // 5
    null, // 6
    null, // 7
    null, // 8
];

// let fields = [
//     null,
//     'circle',
//     'circle',
//     'circle',
//     null,
//     null,
//     'cross',
//     'cross',
//     null,
// ];

function init() {
    render();  // Aufruf der render-Funktion, um das Spielbrett zu erstellen
}

function render() {
    const contentDiv = document.getElementById('content');
    const table = document.createElement('table');

    for (let i = 0; i < 3; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            const cell = document.createElement('td');

            if (fields[index] === 'circle') {
                cell.textContent = generateCircleSVG();
            } else if (fields[index] === 'cross') {
                cell.textContent = 'X';
            }

            row.appendChild(cell);
        }

        table.appendChild(row);
    }

    contentDiv.innerHTML = '';
    contentDiv.appendChild(table);
}

function generateCircleSVG() {
    const contentDiv = document.getElementById('content');

    // SVG-Element erstellen
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "70");
    svg.setAttribute("height", "70");

    // Kreis erstellen
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "35");
    circle.setAttribute("cy", "35");
    circle.setAttribute("r", "35");
    circle.setAttribute("fill", "transparent");
    circle.setAttribute("stroke", "#00b0ef");
    circle.setAttribute("stroke-width", "5");

    // Animation erstellen
    const animation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    animation.setAttribute("attributeName", "r");
    animation.setAttribute("from", "0");
    animation.setAttribute("to", "35");
    animation.setAttribute("dur", "2s");
    animation.setAttribute("begin", "0s");
    animation.setAttribute("calcMode", "spline");
    animation.setAttribute("keySplines", "0.68 0.12 0.32 0.88");

    // Animation dem Kreis hinzufügen
    circle.appendChild(animation);

    // Kreis dem SVG-Element hinzufügen
    svg.appendChild(circle);

    // SVG-Element dem HTML-Dokument hinzufügen
    contentDiv.innerHTML = '';
    contentDiv.appendChild(svg);
}



