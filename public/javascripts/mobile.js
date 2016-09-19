
// 모바일

$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: false,
        scrollingSpeed: 700,
        loopTop: true
    });
});


// '신청하기' 폼에서 선택된 후원자 or 창업자 active class 추가
$(document).ready( function() {
    var selector_slide = '.slide_10_contents_switcher li';
    $(selector_slide).first().addClass('active');

    $(selector_slide).click(function () {
        $(selector_slide).removeClass('active');
        $(this).addClass('active');
    });
});


// 예비 창업자 or 예비 후원자 판별
$('#slide_10_contents_submit').click(function() {
    var checked = checkWhoYouAre();
    var person = "";
    var name = $('#slide_10_contents_name').val();
    var email = $('#slide_10_contents_email').val();
    var phone = $('#slide_10_contents_phone').val();

    if (checked == 1) {
        person = "예비 창업자";
    }
    else if (checked == 2) {
        person = "예비 후원자";
    }

    inputRequired();
    console.log("신청자는 " + person + "이고, 이름은 " + name + ", 이메일 주소는 " + email + ", 전화번호는 " + phone + "입니다.")
});
// 예비 창업자 or 예비 후원자 값 넘겨줌
function checkWhoYouAre() {
    var checked = "1";  // checked = 1 (예비 창업자) , checked = 2 (예비 후원자)
    var take = $('.slide_10_contents_switcher li')[1]; // 예비 창업자
    var give = $('.slide_10_contents_switcher li')[0]; // 예비 후원자

    if ( $(give).attr("class") == "active" ) { checked ="1"; }
    else if ( $(take).attr("class") == "active" ) { checked = "2"; }

    return checked;
}
// 이름, 이메일, 휴대 전화번호 입력 했는지?
function inputRequired() {
    var name = $('#slide_10_contents_name');
    var email = $('#slide_10_contents_email');
    var phone = $('#slide_10_contents_phone');
    var check = $('#slide_10_contents_checkbox');

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
        $("#slide_10_contents_checkbox_text").css("color", "grey");
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
        $("#slide_10_contents_checkbox_text").css("color", "red");
    }
}


// 트위터 공유
function share_twitter(text, url) {
    var popUrl = " https://twitter.com/intent/tweet?text= " + text + "&url=" + url;
    var popOption = "width=500, height=400, top=130, left=400, resizable=no, scrollbars=no, status=no;";
    window.open(popUrl, "", popOption);
}
// 카카오톡 공유
//<![CDATA[
Kakao.init('b0548efd9cc480ebf2cce5ab1eea893e');
function share_kakaotalk() {
    // // 카카오톡 링크 버튼을 생성합니다 . 처음 한번만 호출하면 됩니다 .
    Kakao.Link.createTalkLinkButton({
        container: '#slide_10_contents_share_kakao ',
        label: '지연 카톡 공유',
        image: {
            src: 'https://lh5.ggpht.com/wAGD0ZKPLCAfKtKxUzxhQY_19EoBhWak8PX52HmnIweJjV1bRGyZotUcJ_Vibgnd0A=h900',
            width: '300',
            height: '200'
        },
        webButton: {
            text: '카톡 공유하기 성공',
            url: 'http://52.78.143.99:3000/' // 앱 설정의 웹 플랫폼에 등록 한 도메인의 URL이어야 합니다 .
        }
    });
};
//]]>
// 링크 복사 (아이콘 클릭 시 모달 띄움)
$(document).ready(function() {
    var modal = $('#mobile_popup');
    var btn = $('#slide_10_contents_share_link');
    var span = $('#mobile_popup_close_btn');

    btn.click(function() {
        modal.css("display", "block");
        $("body").css({overflow:'hidden'}).bind('touchmove', function(e){e.preventDefault()});
    });

    span.click(function() {
        modal.css("display", "none");
        $("body").unbind('touchmove');
    });
});
