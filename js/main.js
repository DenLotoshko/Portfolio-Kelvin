$('.burger').click(function () {
    $('.burger span:nth-child(1)').toggleClass('first');
    $('.burger span:nth-child(2)').toggleClass('middle');
    $('.burger span:nth-child(3)').toggleClass('last');
});

const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
        document.getElementById('first').style.backgroundColor='white';
        document.getElementById('second').style.backgroundColor='white';
    }
    else{
        document.getElementById('first').style.backgroundColor='black';
        document.getElementById('second').style.backgroundColor='black';
    }
}

function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({ 
        scrollTop: $(id).offset().top - offset
        }, 1000);
        return false; 
}


AOS.init({
    // disable: "mobile",
    // once:true
});
