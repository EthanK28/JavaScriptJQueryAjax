// form의 submit 이벤트 발생시
$('#geoform').submit(function(e) {
    event.preventDefault();

    // 검색어
    var keyword = $('#keyword').val().trim();

    if (!keyword) {
        alert("검색어를 입력하세요.");
        return false;
    }

    // 화면상에 보여지고 있는 모든 마커를 삭제
    for (var i = 0; i < marker_count; i++) {
        // 1) 지도에서 마커 지우기
        marker_list[i].setMap(null);
        // 2) 마커객체 제거
        marker_list[i] = null;
    }
    // 마커의 카운터 초기화
    marker_count = 0;

    // 검색어 생성
    // ex) 서울특별시 강남구 역삼1동 치킨집
    var query = area_addr + " " + keyword;

    // naver-open-api 호출
    $.get("http://openapi.naver.com/search", {
        "key" : naver_key,
        "query" : query,
        "target" : "local",
        "start" : 1,
        "display" : 20
    }, function(xml) {
        // XML결과를 JSON으로 변환
        var json = $.xml2json(xml.responseText);
        // 검색결과가 존재한다면?
        if (json.channel) {
            // 결과항목의 배열 얻기
            var item = json.channel.item;

            // 배열의 수 만큼 반복
            for (var i = 0; i < item.length; i++) {
                // 결과값 추출
                var title = item[i].title;
                var description = item[i].description;
                var telephone = item[i].telephone;
                var link = item[i].link;
                var address = item[i].address;

                // 마커 생성 함수 호출
                addMarker(title, link, address, description, telephone);
            }
        }
    });
}); 