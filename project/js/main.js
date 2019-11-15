(function($) {
  "use strict"

  // NAVIGATION
  var responsiveNav = $('#responsive-nav'),
    catToggle = $('#responsive-nav .category-nav .category-header'),
    catList = $('#responsive-nav .category-nav .category-list'),
    menuToggle = $('#responsive-nav .menu-nav .menu-header'),
    menuList = $('#responsive-nav .menu-nav .menu-list');

  catToggle.on('click', function() {
    menuList.removeClass('open');
    catList.toggleClass('open');
  });

  menuToggle.on('click', function() {
    catList.removeClass('open');
    menuList.toggleClass('open');
  });

  $(document).click(function(event) {
    if (!$(event.target).closest(responsiveNav).length) {
      if (responsiveNav.hasClass('open')) {
        responsiveNav.removeClass('open');
        $('#navigation').removeClass('shadow');
      } else {
        if ($(event.target).closest('.nav-toggle > button').length) {
          if (!menuList.hasClass('open') && !catList.hasClass('open')) {
            menuList.addClass('open');
          }
          $('#navigation').addClass('shadow');
          responsiveNav.addClass('open');
        }
      }
    }
  });

  // HOME SLICK
  $('#home-slick').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    arrows: true,
  });

  // PRODUCTS SLICK
  $('#product-slick-1').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: false,
    appendDots: '.product-slick-dots-1',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('#product-slick-2').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: false,
    appendDots: '.product-slick-dots-2',
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  // PRODUCT DETAILS SLICK
  $('#product-main-view').slick({
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-view',
  });

  $('#product-view').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '#product-main-view',
  });

  // PRODUCT ZOOM
  $('#product-main-view .product-view').zoom();

  // PRICE SLIDER
  var slider = document.getElementById('price-slider');
  if (slider) {
    noUiSlider.create(slider, {
      start: [1, 999],
      connect: true,
      tooltips: [true, true],
      format: {
        to: function(value) {
          return value.toFixed(2) + '$';
        },
        from: function(value) {
          return value
        }
      },
      range: {
        'min': 1,
        'max': 999
      }
    });
  }
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

function validateEmail(email) {
    var re_mail = /^[a-zA-Z0-9_\.]+@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)*$/;
    return re_mail.test(email);
}
function validatePhone(phone) {
    var re_phone = /^(\+84|0)[3|5|7|8|9][1-9]\d{7}$/;
    return re_phone.test(phone);
}
function check_name(name) {
    var message_name="";
    if (name.value==="") {
        name.style.border='1px solid red';
        message_name="Please enter your name !";
        document.getElementById('message_name').innerHTML=message_name;
        return 0;
    } else if (name.value.length<7) {
        name.style.border='1px solid red';
        message_name="Please enter your full name !";
        document.getElementById('message_name').innerHTML=message_name;
        return 0;
    } else {
        name.style.border='1px solid green';
        message_name="";
        document.getElementById('message_name').innerHTML=message_name;
        return true;
    }
}
function check_email(mail) {
    var message_mail="";
    if (mail.value==="") {
        mail.style.border='1px solid red';
        message_mail="Please enter your Email !";
        document.getElementById('message_mail').innerHTML=message_mail;
        return 0;
    } else if (!validateEmail(mail.value)) {
        mail.style.border='1px solid red';
        message_mail="Email invalid !";
        document.getElementById('message_mail').innerHTML=message_mail;
        return 0;
    } else {
        mail.style.border='1px solid green';
        message_mail="";
        document.getElementById('message_mail').innerHTML=message_mail;
        return 1;
    }
}
function check_address(address) {
    var message_address="";
    if (address.value==="") {
        address.style.border='1px solid red';
        message_address="Please enter your address !";
        document.getElementById('message_address').innerHTML=message_address;
        return 0;
    } else {
        address.style.border='1px solid green';
        message_address="";
        document.getElementById('message_address').innerHTML=message_address;
        return 1
    }
}
function check_phone(phone) {
    var message_phone="";
    if (phone.value==="") {
        phone.style.border='1px solid red';
        message_phone="Please enter your phone number !";
        document.getElementById('message_phone').innerHTML=message_phone;
        return 0;
    } else if (!validatePhone(phone.value)) {
        phone.style.border='1px solid red';
        message_phone="Number phone invalid !";
        document.getElementById('message_phone').innerHTML=message_phone;
        return 0;
    } else {
        phone.style.border='1px solid green';
        message_phone="";
        document.getElementById('message_phone').innerHTML=message_phone;
        return 1;
    }
}
function check_username(username) {
    var message_username="";
    if (username.value==="") {
        username.style.border='1px solid red';
        message_username="Please enter your username !";
        document.getElementById('message_username').innerHTML=message_username;
        return 0;
    } else {
        username.style.border='1px solid green';
        message_username="";
        document.getElementById('message_username').innerHTML=message_username;
        return 1;
    }
}
function check_password(password) {
    var message_password="";
    if (password.value==="") {
        password.style.border='1px solid red';
        message_password="Please enter your password !";
        document.getElementById('message_password').innerHTML=message_password;
        return 0;
    } else if (password.value.length < 8) {
        password.style.border='1px solid red';
        message_password="Passwords must be at least 8 characters long";
        document.getElementById('message_password').innerHTML=message_password;
        return 0;
    } else {
        password.style.border='1px solid green';
        message_password="";
        document.getElementById('message_password').innerHTML=message_password;
        return 1;
    }
}
function check_conf_password(conf_password,password) {
    var message_conf_password="";
    if (conf_password.value==="") {
        conf_password.style.border='1px solid red';
        message_conf_password="Please confirm your password !";
        document.getElementById('message_conf_password').innerHTML=message_conf_password;
        return 0;
    } else if (conf_password.value!=password.value) {
        conf_password.style.border='1px solid red';
        message_conf_password="Password incorrect !";
        document.getElementById('message_conf_password').innerHTML=message_conf_password;
        return 0;
    } else {
        conf_password.style.border='1px solid green';
        message_conf_password="";
        document.getElementById('message_conf_password').innerHTML=message_conf_password;
        return 1;
    }
}
function check(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var address = document.getElementById('address');
    var phone = document.getElementById('phone');
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var conf_password = document.getElementById('conf_password');
    check_name(name);
    if (check_name(name)==0) {
        return;
    };
    check_email(email);
    if (check_email(email)==0) {
        return;
    };
    check_address(address);
    if (check_address(address)==0) {
        return;
    };
    check_phone(phone);
    if (check_phone(phone)==0) {
        return;
    };
    check_username(username);
    if (check_username(username)==0) {
        return;
    };
    check_password(password);
    if (check_password(password)==0) {
        return;
    };
    check_conf_password(conf_password,password);
    if (check_conf_password(conf_password,password)==0) {
        return;
    };
    window.location.reload(); //Refresh page
}


});
})(jQuery);
