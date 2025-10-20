(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonial carousel
        $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left text-info"></i>',
            '<i class="bi bi-arrow-right text-info"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

})(jQuery);

// Payment 
document.getElementById('paymentForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
  const expDate = document.getElementById('expDate').value;
  const cvv = document.getElementById('cvv').value;

  // Simple regex & logic checks
  if (!/^\d{16}$/.test(cardNumber)) {
    alert('Nomor kartu harus 16 digit!');
    return;
  }

  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expDate)) {
    alert('Tanggal kedaluwarsa harus dalam format MM/YY!');
    return;
  }

  if (!/^\d{3,4}$/.test(cvv)) {
    alert('CVV tidak valid!');
    return;
  }

  alert('✅ Validasi berhasil! (Mockup, data tidak dikirim)');
});
