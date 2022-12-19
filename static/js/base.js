document.addEventListener("DOMContentLoaded", function () {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
            document.querySelector('.navbar').style.backgroundColor = 'white';
            document.querySelector('.navbar').style.color = 'black';
            document.querySelector('.navbar').classList.add('navbar-scroll');
            document.querySelector('.social-icons').classList.add('scroll');
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
            document.querySelector('.navbar').style.backgroundColor = 'transparent';
            document.querySelector('.navbar').style.color = 'white';
            
            document.querySelector('.social-icons').classList.remove('scroll');
            document.querySelector('.navbar').classList.remove('navbar-scroll');
            
        }
    });
});

