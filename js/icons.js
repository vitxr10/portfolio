const descricao = document.getElementById('descricaoIcons');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

const iconHtml = document.getElementById('iconHtml');
const iconJava = document.getElementById('iconJava');
const iconJs = document.getElementById('iconJs');
const iconCss = document.getElementById('iconCss');
const iconBoots = document.getElementById('iconBoots');

const txtPadrao = "/* Passe o mouse por cima de alguma habilidade para ver a descrição */";
const malandro = document.createElement('div');
malandro.id = 'malandro';

document.body.appendChild(malandro);

function mouseoverEventHandler(icon, desc, text1, text2) {
    icon.addEventListener('mouseover', () => {
        descricao.textContent = desc;
        p1.textContent = text1;
        p2.textContent = text2;
    });
}

function mouseoutEventHandler(icon) {
    icon.addEventListener('mouseout', () => {
        descricao.textContent = txtPadrao;
        p1.textContent = '';
        p2.textContent = '';
    });
}

mouseoverEventHandler(iconHtml, 'HTML', 'É uma linguagem de marcação utilizada na construção de páginas na Web.', 'Tenho 1 ano de experiência com essa tecnologia e possuo conhecimento em Semântica, tabelas, formulários, etc.');
mouseoutEventHandler(iconHtml);

mouseoverEventHandler(iconJava, 'Java', 'É a minha linguagem de programação favorita, tenho um nível de conhecimento intermediário nessa tecnologia e um ano de experiência.', 'Possuo conhecimento em estrutura de seleção e repetição, algoritmos de ordenação, funções, orientação a objetos, vetores e matrizes, etc.');
mouseoutEventHandler(iconJava);

mouseoverEventHandler(iconJs, 'Javascript', 'Tenho menos tempo de experiência com essa linguagem de programação, 6 meses, mas estou gostando bastante por ela ser mais fácil e menos verbosa que o Java.', 'Tenho conhecimento em DOM, funções, arrays e estruturas de seleção e repetição.');
mouseoutEventHandler(iconJs);

mouseoverEventHandler(iconCss, 'CSS', 'É uma linguagem de estilo utilizada para definir a aparência de documentos escritos em HTML.', 'Estudo essa tecnologia a um ano e tenho conhecimento em flexbox, grid, design reponsivo, animações básicas, etc.');
mouseoutEventHandler(iconCss);

mouseoverEventHandler(iconBoots, 'Bootstrap', 'É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.', 'Tenho 8 meses de experiência com esse framework e já criei algumas landing pages.');
mouseoutEventHandler(iconBoots);







