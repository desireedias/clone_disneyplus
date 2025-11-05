document.addEventListener('DOMContentLoaded', function(){
    const botoes = document.querySelectorAll('[data-tab-button]');

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
})

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