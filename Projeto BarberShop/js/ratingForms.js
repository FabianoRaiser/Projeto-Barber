function createRadioInputs(name, labels) {
    const container = document.createElement('div');
    labels.forEach(label => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = `${name}-${label.value}`;
        input.name = name;
        input.value = label.value;

        const labelElement = document.createElement('label');
        labelElement.htmlFor = input.id;
        labelElement.textContent = label.text;

        container.appendChild(input);
        container.appendChild(labelElement);
        container.appendChild(document.createElement('br'));
    });
    return container;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    const ratings = [
        { value: '1', text: '1 estrela' },
        { value: '2', text: '2 estrelas' },
        { value: '3', text: '3 estrelas' },
        { value: '4', text: '4 estrelas' },
        { value: '5', text: '5 estrelas' }
    ];

    const sections = [
        { id: 'qualidade-corte', label: 'Qualidade do corte:' },
        { id: 'tempo-espera', label: 'Tempo de espera:' },
        { id: 'atendimento-barbeiro', label: 'Atendimento do barbeiro:' },
        { id: 'ambiente-limpeza', label: 'Limpeza:' },
        { id: 'ambiente-conforto', label: 'Conforto:' },
        { id: 'ambiente-decoracao', label: 'Decoração:' },
        { id: 'ambiente-musica', label: 'Música:' }
    ];

    sections.forEach(section => {
        const fieldset = document.createElement('fieldset');
        const legend = document.createElement('legend');
        legend.textContent = section.label;
        fieldset.appendChild(legend);
        fieldset.appendChild(createRadioInputs(section.id, ratings));
        form.insertBefore(fieldset, form.querySelector('input[type="submit"]'));
    });

    const recomendacaoFieldset = document.createElement('fieldset');
    const recomendacaoLegend = document.createElement('legend');
    recomendacaoLegend.textContent = 'Probabilidade de indicar a barbearia (1-10):';
    recomendacaoFieldset.appendChild(recomendacaoLegend);
    const recomendacaoRatings = Array.from({ length: 10 }, (_, i) => ({ value: (i + 1).toString(), text: (i + 1).toString() }));
    recomendacaoFieldset.appendChild(createRadioInputs('recomendacao', recomendacaoRatings));
    form.insertBefore(recomendacaoFieldset, form.querySelector('input[type="submit"]'));
});