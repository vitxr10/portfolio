const descricao = document.getElementById('descricaoIcons');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');

const iconHtml = document.getElementById('iconHtml');
const iconJava = document.getElementById('iconJava');
const iconJs = document.getElementById('iconJs');
const iconCss = document.getElementById('iconCss');
const iconSql = document.getElementById('iconSql');
const iconGit = document.getElementById('iconGit');

const txtPadrao = "/* Passe o mouse por cima de alguma habilidade para ver a descrição */";
const p0 = document.createElement('div');
p0.id = 'p0';

document.body.appendChild(p0);

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

mouseoverEventHandler(iconHtml, 'HTML', 'Estudo essa linguagem de marcação para construção de páginas web há um ano e meio.', 'Possuo conhecimento em semântica, acessibilidade, inserção de imagens, criação de links, tabelas, formulários, boas práticas, etc.');
mouseoutEventHandler(iconHtml);

mouseoverEventHandler(iconJava, 'Java', 'Estudo essa linguagem de programação utilizando o paradigma de Orientação a Objetos há um ano e meio.', 'Possuo conhecimento em encapsulamento, herança, polimorfismo, estruturas de seleção e repetição, algoritmos de ordenação, classes e métodos, arrays, etc.');
mouseoutEventHandler(iconJava);

mouseoverEventHandler(iconJs, 'Javascript', 'Estudo essa linguagem de programação há um ano com o objetivo de tornar minhas aplicações web mais dinâmicas e interativas.', 'Possuo conhecimento em DOM, validação de formulários, animações, gerenciamento de eventos, funções, arrays e estruturas de seleção e repetição.');
mouseoutEventHandler(iconJs);

mouseoverEventHandler(iconCss, 'CSS', 'Estudo essa linguagem de estilo há um ano e meio.', 'Tenho conhecimento em seletores, posicionamento, flexbox, grid, design reponsivo, animações e transições básicas.');
mouseoutEventHandler(iconCss);

mouseoverEventHandler(iconSql, 'SQL', 'Estudo essa linguagem com o banco de dados Oracle há seis meses.', 'Possuo conhecimento em comandos básicos (SELECT, INSERT, UPDATE e DELETE), chaves primárias e estrangeiras, criação de tabelas e operações de consulta.');
mouseoutEventHandler(iconSql);

mouseoverEventHandler(iconGit, 'Git', 'Utilizo o Git e o Github para armazenar meus projetos há um ano.', 'Tenho conhecimento em criação de repositórios, controle de versão e comandos básicos como como git init, git clone, git add, git commit, git push, git pull, etc.');
mouseoutEventHandler(iconGit);







