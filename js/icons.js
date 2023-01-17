const descricao = document.getElementById('descricaoIcons');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

const iconHtml = document.getElementById('iconHtml');

iconHtml.addEventListener("mouseover", (evento) => {
    descricao.textContent = "HTML";
    p1.textContent = "É uma linguagem de marcação utilizada na construção de páginas na Web.";
    p2.textContent = "Tenho 1 ano de experiência com essa tecnologia e possuo conhecimento em Semântica, tabelas, formulários, etc.";
    
})

iconHtml.addEventListener("mouseout", (evento) => {
    const txtPadrao = "/* Passe o mouse por cima de alguma habilidade para ver a descrição */";
    const malandro = document.getElementById('malandro');

    descricao.textContent = txtPadrao;
    p1.textContent = "";
    p2.textContent = "";
})


const iconJava = document.getElementById('iconJava');

iconJava.addEventListener("mouseover", (evento) => {
    descricao.textContent = "Java";
    p1.textContent = "É a minha linguagem de programação favorita, tenho um nível de conhecimento intermediário nessa tecnologia e um ano de experiência.";
    p2.textContent = "Possuo conhecimento em estrutura de seleção e repetição, algoritmos de ordenação, funções, orientação a objetos, vetores e matrizes, etc. ";
})

iconJava.addEventListener("mouseout", (evento) => {
    const txtPadrao = "/* Passe o mouse por cima de alguma habilidade para ver a descrição */";
    const malandro = document.getElementById('malandro');

    descricao.textContent = txtPadrao;
    p1.textContent = "";
    p2.textContent = "";
})

const iconJs = document.getElementById('iconJs');

iconJs.addEventListener("mouseover", (evento) => {
    descricao.textContent = "Javascript";
    p1.textContent = "Tenho menos tempo de experiência com essa linguagem de programação, 6 meses, mas estou gostando bastante por ela ser mais fácil e menos verbosa que o Java.";
    p2.textContent = "Tenho conhecimento em DOM, funções, arrays e estruturas de seleção e repetição.";
})

iconJs.addEventListener("mouseout", (evento) => {
    const txtPadrao = "/* Passe o mouse por cima de alguma habilidade para ver a descrição */";
    const malandro = document.getElementById('malandro');

    descricao.textContent = txtPadrao;
    p1.textContent = "";
    p2.textContent = "";
})

const iconCss = document.getElementById('iconCss');
iconCss.addEventListener("mouseover", (evento) => {
    descricao.textContent = "CSS";
    p1.textContent = "É uma linguagem de estilo utilizada para definir a aparência de documentos escritos em HTML.";
    p2.textContent = "Estudo essa tecnologia a um ano e tenho conhecimento em flexbox, grid, design reponsivo, animações básicas, etc.";
})

iconCss.addEventListener("mouseout", (evento) => {
    const txtPadrao = "/* Passe o mouse por cima de alguma habilidade para ver a descrição */";
    const malandro = document.getElementById('malandro');

    descricao.textContent = txtPadrao;
    p1.textContent = "";
    p2.textContent = "";
})

const iconBoots = document.getElementById('iconBoots');

iconBoots.addEventListener("mouseover", (evento) => {
    descricao.textContent = "Bootstrap";
    p1.textContent = "É um framework front-end que fornece estruturas de CSS para a criação de sites e aplicações responsivas de forma rápida e simples.";
    p2.textContent = "Tenho 8 meses de experiência com esse framework e já criei algumas landing pages.";
})

iconBoots.addEventListener("mouseout", (evento) => {
    const txtPadrao = "/* Passe o mouse por cima de alguma habilidade para ver a descrição */";
    const malandro = document.getElementById('malandro');

    descricao.textContent = txtPadrao;
    p1.textContent = "";
    p2.textContent = "";
})





