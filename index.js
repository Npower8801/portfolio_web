words = ["Student", "Web-Developer", "Deep Learning Enthusiast"];
var current_char = 0;

function anim_erase0() {
    $('#anim').text("");
    clearTimeout(stop0);
    anim_text1();
}

function anim_erase1() {
    $('#anim').text("");
    clearTimeout(stop1);
    anim_text2();
}

function anim_erase2() {
    $('#anim').text("");
    clearTimeout(stop2);
    anim_text0();
}

function anim_text0() {
    if (current_char <= words[0].length) {
        txt_elemnt = document.getElementById('anim').innerHTML += words[0].charAt(current_char);
        current_char++;
        if (current_char > words[0].length) {
            setTimeout(anim_erase0, 300);
            current_char = 0;
        }
    }
    stop0 = setTimeout(anim_text0, 350);
}

function anim_text1() {
    if (current_char <= words[1].length) {
        txt_elemnt = document.getElementById('anim').innerHTML += words[1].charAt(current_char);
        current_char++;
        if (current_char > words[1].length) {
            setTimeout(anim_erase1, 300);
            current_char = 0;
        }
    }
    stop1 = setTimeout(anim_text1, 350);
}

function anim_text2() {
    if (current_char <= words[2].length) {
        txt_elemnt = document.getElementById('anim').innerHTML += words[2].charAt(current_char);
        current_char++;
        if (current_char > words[2].length) {
            setTimeout(anim_erase2, 300);
            current_char = 0;
        }
    }
    stop2 = setTimeout(anim_text2, 350);
}


$(document).ready(function() {
    setInterval(anim_text0(), 4000);
    $('.sidemenue').addClass("added");
    $('.name').addClass("addedname");
    $('#name_anim').addClass("addedname2");
    $('.profile_pic,.social_links,.nav_bar').addClass("navbar_anim");
    $('.toggler').click(function() {
        $('#sidemenue').toggle().toggleClass('small_menue');
        $('.arrow').toggle().toggleClass('arrow_hide');
        

    });
});