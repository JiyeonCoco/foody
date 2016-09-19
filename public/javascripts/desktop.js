
// 데스크탑

$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        scrollingSpeed: 0,
        loopTop: true,

        onLeave: function() {
            // '마우스 휠로 화면 전환했을 경우'
            if (typeof event != 'undefined' && typeof event.wheelDelta != 'undefined') {
                console.log("mouseWheel");
                if (-120 <= event.wheelDelta && event.wheelDelta <= 120) {
                    delay(200);
                    return true;
                }
                else {
                    return false;
                    delay(500);
                }
            }
            // '키보드, 네비게이터로 화면 전환했을 경우'
            else if(onkeydown === null) {
                console.log("keyboard or nav");
            }
        }
    });
});

// 메인화면 전환 시 대기시간 설정
function delay(ms){
    var start = new Date().getTime();
    var end = start ;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}


// '신청하기'에서 후원자 or 창업자 클릭 시 active
$(document).ready( function() {
    var selector_slide = '.slide_8_contents_right_switcher li';
    var selector_popup = '.apply_popup_contents_switcher li';
    $(selector_slide).first().addClass('active');
    $(selector_popup).first().addClass('active');

    $(selector_slide).click(function () {
        $(selector_slide).removeClass('active');
        $(this).addClass('active');
    });

    $(selector_popup).click(function () {
        $(selector_popup).removeClass('active');
        $(this).addClass('active');
    });
});


// '신청하기' 버튼 클릭 시 모달 창 띄움
$(document).ready(function() {
    var modal = $('#apply_popup');
    var btn = $('#header_bar_applyBtn img');
    var span = $('.close');

    btn.click(function() {
        modal.css("display", "block");
    });
    span.click(function() {
        modal.css("display", "none");
    });
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


// 8번째 페이지
// 예비 창업자 or 예비 후원자 판별
$('#slide_8_contents_right_submit').click(function() {
    var checked = checkWhoYouAre_1();
    var person = "";
    var name = $('#slide_8_contents_right_name').val();
    var email = $('#slide_8_contents_right_email').val();
    var phone = $('#slide_8_contents_right_phone').val();

    if (checked == 1) {
        person = "예비 창업자";
    }
    else if (checked == 2) {
        person = "예비 후원자";
    }

    inputRequired_1();
    console.log("신청자는 " + person + "이고, 이름은 " + name + ", 이메일 주소는 " + email + ", 전화번호는 " + phone + "입니다.")
});
// 예비 창업자 or 예비 후원자 값 넘겨줌
function checkWhoYouAre_1() {
    var checked = "1";  // checked = 1 (예비 창업자) , checked = 2 (예비 후원자)
    var take = $('.slide_8_contents_right_switcher li')[0]; // 예비 창업자
    var give = $('.slide_8_contents_right_switcher li')[1]; // 예비 후원자

    if ( $(take).attr("class") == "active" ) { checked ="1"; }
    else if ( $(give).attr("class") == "active" ) { checked = "2"; }

    return checked;
}
// 이름, 이메일, 휴대 전화번호 입력 했는지?
function inputRequired_1() {
    var name = $('#slide_8_contents_right_name');
    var email = $('#slide_8_contents_right_email');
    var phone = $('#slide_8_contents_right_phone');
    var check = $('#slide_8_contents_right_checkbox');

    if (name.val() == "") {
        name.css("border-bottom", "2px solid red");
    }
    if (email.val() == "") {
        email.css("border-bottom", "2px solid red");
    }
    if (phone.val() == "") {
        phone.css("border-bottom", "2px solid red");
    }
    if ($(check).is(":checked") == true) {
        $("#slide_8_contents_right_checkbox_text").css("color", "grey");
    }

    if (name.val() != "") {
        name.css("border-bottom", "1px solid grey");
    }
    if (email.val() != "") {
        email.css("border-bottom", "1px solid gray");
    }
    if (phone.val() != "") {
        phone.css("border-bottom", "1px solid gray");
    }
    if ($(check).is(":checked") == false) {
        $("#slide_8_contents_right_checkbox_text").css("color", "red");
    }
}

// 팝업창
// 예비 창업자 or 예비 후원자 판별
$('#apply_popup_contents_submit').click(function() {
    var checked = checkWhoYouAre_2();
    var person = "";
    var name = $('#apply_popup_contents_name').val();
    var email = $('#apply_popup_contents_email').val();
    var phone = $('#apply_popup_contents_phone').val();

    if (checked == 1) {
        person = "예비 창업자";
    }
    else if (checked == 2) {
        person = "예비 후원자";
    }

    inputRequired_2();
    console.log("신청자는 " + person + "이고, 이름은 " + name+ ", 이메일 주소는 " + email + ", 전화번호는 " + phone + "입니다.")
});
// 예비 창업자 or 예비 후원자 값 넘겨줌
function checkWhoYouAre_2() {
    var checked = "1";  // checked = 1 (예비 창업자) , checked = 2 (예비 후원자)
    var take = $('.apply_popup_contents_switcher li')[0]; // 예비 창업자
    var give = $('.apply_popup_contents_switcher li')[1]; // 예비 후원자

    if ( $(take).attr("class") == "active" ) { checked ="1"; }
    else if ( $(give).attr("class") == "active" ) { checked = "2"; }

    if ( $(take).attr("class") == "active" ) { checked ="1"; }
    else if ( $(give).attr("class") == "active" ) { checked = "2"; }

    return checked;
}
// 이름, 이메일, 휴대 전화번호 입력 했는지?
function inputRequired_2() {
    var name = $('#apply_popup_contents_name');
    var email = $('#apply_popup_contents_email');
    var phone = $('#apply_popup_contents_phone');
    var check = $('#apply_popup_contents_checkbox');

    if (name.val() == "") {
        name.css("border-bottom", "2px solid red");
    }
    if (email.val() == "") {
        email.css("border-bottom", "2px solid red");
    }
    if (phone.val() == "") {
        phone.css("border-bottom", "2px solid red");
    }
    if ($(check).is(":checked") == true) {
        $("#apply_popup_contents_checkbox_text").css("color", "grey");
    }

    if (name.val() != "") {
        name.css("border-bottom", "1px solid grey");
    }
    if (email.val() != "") {
        email.css("border-bottom", "1px solid gray");
    }
    if (phone.val() != "") {
        phone.css("border-bottom", "1px solid gray");
    }
    if ($(check).is(":checked") == false) {
        $("#apply_popup_contents_checkbox_text").css("color", "red");
    }
}


// 트위터 공유
function share_twitter(text, url) {
    var popUrl = " https://twitter.com/intent/tweet?text= " + text + "&url=" + url;
    var popOption = "width=500, height=400, top=130, left=400, resizable=no, scrollbars=no, status=no;";
    window.open(popUrl, "", popOption);
}
// 카카오톡 공유
function share_kakaotalk() {
    alert("PC버전에서는 카카오톡 공유 기능이 지원되지 않습니다.");
}
// URL 복사
function is_ie() {
    if (navigator.userAgent.toLowerCase().indexOf("chrome") != -1) return false;
    if (navigator.userAgent.toLowerCase().indexOf("msie") != -1) return true;
    if (navigator.userAgent.toLowerCase().indexOf("windows nt") != -1) return true;
    return false;
}
// 링크 복사
function share_url_1() {
    var clipboard = new Clipboard('#slide_8_contents_left_share_link');

    clipboard.on('success', function(e) {
        alert("복사되었습니다.");
    });
}
// 링크 복사
function share_url_2() {
    var clipboard = new Clipboard('#apply_popup_contents_share_link');

    clipboard.on('success', function(e) {
        alert("복사되었습니다.");
    });
}