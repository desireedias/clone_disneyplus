document.addEventListener('DOMContentLoaded', function(){

    ocultaElementosDoHeader();
    const botoes = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const sectionHero = document.querySelector('.hero');
    const alturaHero = sectionHero.clientHeight;
    
    window.addEventListener('scroll', function(){
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero){
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader()

        }
        
    })

    //section de atrações, programação das abas
    for(let i = 0; i < botoes.length; i++ ){
        botoes[i].addEventListener('click', function(botao){
            const tabTarget = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${tabTarget}]`)
            hideTabs();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('shows__tabs__btn--is-active')

        })
    }
    // seção de perguntas e respostas
    for(let i = 0; i < questions.length; i++){
        questions[i].addEventListener('click', abreOuFechaResposta)
    }
})

function ocultaElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden')
}

function exibeElementosDoHeader(){
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden')
}

function abreOuFechaResposta(elemento){
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

function removeBotaoAtivo(){
    const botoes = document.querySelectorAll('[data-tab-button]');

    for(let i = 0; i < botoes.length; i++ ){
        botoes[i].classList.remove('shows__tabs__btn--is-active');
    }

}

function hideTabs(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for( let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}