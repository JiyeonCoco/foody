
// 모바일 9번째 페이지
var html_9 = <!-- Slide 9 -->
    '<div class=' + '"' + 'section' + '">' +
                '<div class=' + '"' + 'slide slide_9' + '">' +
                    '<div id=' + '"' + 'slide_9_contents' + '">' +
                        '<div id=' + '"' + 'slide_9_text' + '">' +
                            '현재 서비스 준비 중이며 <br>' +
                            '하루 빨리 더욱 더 좋은 플랫폼을 <br>' +
                            '만들기 위해 힘쓰고 있습니다. <br>' +
                            '' +
                            '성함과 연락처를 남겨주시면 <br>' +
                            '론칭 시 연락드리도록 하겠습니다! <br> <br>' +
                            '' +
                            '지금까지와는 전혀 다른 방식으로, <br>' +
                            '고객님들의 소중한 의견과 관심을 통한 <br>' +
                            '새로운 음식점 개업을 도와드리겠습니다. <br> <br>' +
                            '' +
                            '앞으로도 소중한 의견과 애정, 그리고 <br>' +
                            '지속적인 소통을 통해 발전해 나갈 수 있도록 <br>' +
                            '저희 푸디펀드가 함께 하겠습니다.' +
                        '</div>' +
                        '<div id=' + '"' + 'slide_9_img' + '"' + ' class=' + '"' + 'slide_img' + '"> </div>' +
                    '</div>' +
                '</div>' +
            '</div>';

// 모바일 10번째 페이지
var html_10 = <!-- Slide 10 -->
    '<div class="section">' +
        '<div class="slide slide_10">' +
            '<div id="slide_10_contents">' +
                '<ul class="slide_10_contents_switcher">' +
                    '<li> <a id="slide_10_contents_switcher_take" href="javascript:;"> 예비 창업자 </a> </li>' +
                    '<li> <a id="slide_10_contents_switcher_give" href="javascript:;"> 예비 후원자 </a> </li>' +
                '</ul>' +
                '<div id="slide_10_contents_input">' +
                    '<input type="text" id="slide_10_contents_name" placeholder="이름" pattern="[A-Za-z]{3}" >' +
                    '<div> <input type="email" id="slide_10_contents_email" placeholder="이메일" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"> </div>' +
                    '<div> <input type="text" id="slide_10_contents_phone" placeholder="휴대 전화번호" pattern="[0-9]*"> </div>' +
                    '<div class="slide_10_contents_agree">' +
                        '<input type="checkbox" id="slide_10_contents_agree_checkbox" value="agree">' +
                        '<label for="slide_10_contents_agree_checkbox"> </label>' +
                        '<div id="slide_10_contents_agree_text"> 개인정보 제공 동의 </div>' +
                    '</div>' +

                    '<button type="submit" id="slide_10_contents_submit">' +
                        '<img src="/images/mobile/page_10_btn.png">' +
                    '</button>' +

                    '<div id="slide_10_contents_text">' +
                        '식당 개업을 준비하고 계시는 지인들에게 <br>' +
                        '푸디펀드를 추천해보세요! <br>' +
                    '</div>' +
                    '<ul id="slide_10_contents_share">' +
                        '<li> <a id="slide_10_contents_share_fb" onclick="share_facebook();"> </a> </li>' +
                        '<li> <a id="slide_10_contents_share_twitter" href="https://twitter.com/intent/tweet?text=지연 트위터 공유 성공&url=http://52.78.143.99:3000/"> </a> </li>' +
                        '<li> <a id="slide_10_contents_share_kakao" onclick="share_kakaotalk();"> </a> </li>' +
                        '<li> <a id="slide_10_contents_share_link"> </a> </li>' +
                    '</ul>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';


// 데스크탑 or 모바일 ?
var desktop = window.matchMedia("(min-device-width: 1024px)");
var mobile = window.matchMedia("(max-device-width: 640px) and (orientation:portrait)");
if (desktop.matches) {
    loadJS('/javascripts/desktop.js');
}
else if(mobile.matches) {
    loadJS('/javascripts/mobile.js');
    $('#fullpage').append(html_9);
    $('#fullpage').append(html_10);
}
function loadJS(url)
{
    // adding the script tag to the head
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.setAttribute('type','text/javascript');
    script.setAttribute('src', url);
    head.insertBefore(script, head.firstChild);
}


// facebook 공유
window.fbAsyncInit = function() {
    FB.init({
        appId: '291051781242701',
        cookie: true,
        xfbml: true,
        version: 'v2.2'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function share_facebook() {
    FB.ui({
        method: 'share',
        href: "http://52.78.143.99:3000/",
        title: "지연 페북 공유",
        description: "페북 공유하기 성공",
        picture: "https://lh5.ggpht.com/wAGD0ZKPLCAfKtKxUzxhQY_19EoBhWak8PX52HmnIweJjV1bRGyZotUcJ_Vibgnd0A=h900"
    }, function (response){});
}