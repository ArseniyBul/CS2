let ex = document.querySelector('.btn-explore1')
let ret = document.querySelector('.btn-return')
let ex2 = document.querySelector('.btn-explore2')
let dw = document.querySelector('.btn-download')
let dis = document.querySelector('.a')
let st = document.querySelector('.b')
let tw = document.querySelector('.c')
let you = document.querySelector('.d')

dis.addEventListener('click', function(){
    location.assign('https://discord.com/invite/csgoru')
})

st.addEventListener('click', function(){
    location.assign('https://store.steampowered.com/app/730/CounterStrike_2/')
})

tw.addEventListener('click', function(){
    location.assign('https://www.twitch.tv/directory/all/tags/CS2?lang=ru')
})

you.addEventListener('click', function(){
    location.assign('https://www.youtube.com/hashtag/%D0%BA%D1%812')
})


dw.addEventListener('click', function(){
    location.assign('https://store.steampowered.com/app/730/CounterStrike_2/')
})

ex2.addEventListener('click', function(){
    location.assign('https://store.steampowered.com/?l=russian')
})

ex.addEventListener('click', function(){
    let stroka1 = document.querySelector('.stroka1')
    stroka1.style.display = "none"
    let stroka2 = document.querySelector('.stroka2')
    stroka2.style.display = "block"
    let th = document.querySelector('.tech')
    th.style.display = 'none'
})

ret.addEventListener('click', function(){
    let stroka1 = document.querySelector('.stroka1')
    stroka1.style.display = "block"
    let stroka2 = document.querySelector('.stroka2')
    stroka2.style.display = "none"
    let th = document.querySelector('.tech')
    th.style.display = 'block'
})

