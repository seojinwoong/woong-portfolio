// Enter키 칠때 submit 방지코드
$("input").on({
    keydown : function(e){
        if(e.keyCode==13){
            return false;
        }
    }
});

// 유효성 검사 결과를 저장할 객체
var questionCheck = {
    "queryTitle" : false,
    "querySort" : false,
    "queryContent" : false,
    "memberName" : false,
    "memberEmail" : false,
    "memberPhone" : false
}

$(function(){
    $(".reset-btn").on({
        click : function(){
            if(confirm("입력된 항목들이 삭제됩니다. \n취소하시겠습니까?")){
                location.href="question.html"
            }
        }
    });
    $("#query-noname").on({
        change : function(){
            var status = $(this).is(":checked");
            if(status){
                $(".query-box-2").hide();
                $(".context-title").html("고객님의 소중한 의견을 들려주세요.<br>익명으로 문의하기를 선택하실 경우, 답변을 드릴 수 없는 점 양해 바랍니다.");
            }else{
                $(".query-box-2").show();
                $(".context-title").html("궁금하신 사항을 문의해 주시면 성실하게 답변해 드리도록 하겠습니다.<br>주말이나 공휴일의 경우 답변이 늦어질 수 있으니 양해 바랍니다.");
            }
        }
    });

    // 제목
    $("#queryTitle").on({
        input : function(){
            var regExp = /^[가-힣\s]+$/;
            if($(this).val().trim()==""){
                $(this).css({"border-color":"#e07b46"});
                $(this).next("span").text("제목을 입력해주세요.");
                questionCheck.queryTitle = false;
            }else{
                if(!regExp.test($(this).val())){
                    $(this).css({"border-color":"#e07b46"});
                    $(this).next("span").text("한글만 입력해주세요.");
                    questionCheck.queryTitle = false;
                }else{
                    $(this).css({"border-color":"green"});
                    $(this).next("span").text("");
                    questionCheck.queryTitle = true;
                }
            }
        }
    });

    // 분류
    $("#querySort").on({
        change : function(){
            if($(this).val()=="no-select"){
                $(this).css({"border-color":"#e07b46"});
                $(this).next("span").text("유형을 선택해주세요.");
                questionCheck.querySort = false;
            }else{
                $(this).css({"border-color":"green"});
                $(this).next("span").text("");
                questionCheck.querySort = true;
            }
        }
    });

    // 내용
    $("#queryContent").on({
        input : function(){
            var textL = $(this).val().trim().length;
            if(textL<10){
                $(this).css({"border-color":"#e07b46"});
                $(this).next("span").text("10글자 이상 입력해주세요. ("+textL+" / 10)");
                questionCheck.queryContent = false;
            }else{
                $(this).css({"border-color":"green"});
                $(this).next("span").text("");
                questionCheck.queryContent = true;
            }
        }
    });

    // 회원 이름
    $("#memberName").on({
        input : function(){
            var regExp = /^[가-힣\s]+$/;
            if($(this).val().trim()==""){
                $(this).css({"border-color":"#e07b46"});
                $(this).next("span").text("성명을 입력해주세요.");
                questionCheck.memberName = false;
            }else{
                if(!regExp.test($(this).val())){
                    $(this).css({"border-color":"#e07b46"});
                    $(this).next("span").text("한글만 입력해주세요.");
                    questionCheck.memberName = false;
                }else{
                    $(this).css({"border-color":"green"});
                    $(this).next("span").text("");
                    questionCheck.memberName = true;
                }
            }
        }
    });

    // 이메일 select 대로 입력되기
    $("#email-tail").on({
        change : function(){
            if($(this).val()=="self"){
                $("#memberEmail2").val("").removeAttr("readonly");
                questionCheck.memberEmail = false;
            }else{
                $("#memberEmail2").val($(this).val()).attr("readonly","true");
                questionCheck.memberEmail = true;
            }
        }
    });

    // 이메일
    $("#memberEmail").on({
        input : function(){
            var regExp = /^[a-zA-Z0-9]*$/;
            if(!regExp.test($(this).val())){
                $(".email-section .reg-result").text("유효하지 않은 이메일 주소입니다.");
                $(".email-section>div").css({"border-color":"#e07b46"});
                questionCheck.memberEmail = false;
            }else{
                $(".email-section .reg-result").text("");
                $(".email-section>div").css({"border-color":"green"});
                questionCheck.memberEmail = true;
            }
        }
    });

    $("#memberEmail2").on({
        input : function(){
            var regExp =  /^[\w]+(\.[\w]+){1,3}$/; 
            if(!regExp.test($(this).val())){
                $(".email-section .reg-result").text("유효하지 않은 이메일 주소입니다.");
                $(".email-section>div").css({"border-color":"#e07b46"});
                questionCheck.memberEmail = false;
            }else{
                $(".email-section .reg-result").text("");
                $(".email-section>div").css({"border-color":"green"});
                questionCheck.memberEmail = true;
            }
        }
    });
    
    // 연락처
    $("#memberPhone").on({
        keydown : function(e){
            console.log(e.keyCode);
            if(e.keyCode==189 || e.keyCode==109 || e.keyCode==107 || e.keyCode==187 ){
                return false;
            }
        },
        input : function(){
            if($(this).val().trim().length<9){
                $(this).css({"border-color":"#e07b46"});
                $(this).next("span").text("연락처는 9자 이상 입력해주세요.");
                questionCheck.memberPhone = false;
            }else{
                $(this).css({"border-color":"green"});
                $(this).next("span").text("");
                questionCheck.memberPhone = true;
            }
        }
    });
});

function validate(){
    if($("#query-noname:checked").length==1){
        questionCheck.memberName = true;
        questionCheck.memberEmail = true;
        questionCheck.memberPhone = true;
    }

    for(var key in questionCheck){
        if(!questionCheck[key]){
            var id = "#"+key;
            $(id).focus().css({"border-color":"#e07b46"});
            return false;
        }
    }

    alert("문의 작성이 완료되었습니다. \n소중한 의견 감사합니다.");
}

