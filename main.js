const loginBtn = document.querySelector('.login-infor');
const signBtn = document.querySelector('.signup-infor');
const signItem = document.querySelector('.signup')
const loginItem = document.querySelector('.login')
loginBtn.addEventListener('click', function() {
    if(signItem.hasChildNodes('show')) {
        signItem.classList.remove('first');
        signItem.classList.remove('show')
    }
    signItem.classList.add('swipertoLeft');
    loginItem.classList.add('show')
    setTimeout(() => {
        signItem.classList.remove('swipertoLeft')
        signItem.classList.add('first')
    }, 750)
})
signBtn.onclick = () => {
    if(loginItem.hasChildNodes('show')) {
        loginItem.classList.remove('show')
        loginItem.classList.add('swipertoRight')
    }
    signItem.classList.add('show')
    setTimeout(() => {
        loginItem.classList.remove('swipertoRight')
        loginItem.classList.add('first')
    }, 750)
}