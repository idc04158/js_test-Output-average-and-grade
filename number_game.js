document.addEventListener("DOMContentLoaded", function(){
    
    
    
    
    //버튼을 누르면 작동
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function(){

        var input = document.getElementById("input");
        var input_st = [];
        var bingo = MAth.floor(Math.random()*100);
        var inputr = Number((input.value));
        var chance = 10;
        var con = document.getElementById("con");
        
        var fbingo = function(){
        //기회가 남아있다면
        for(chance=0; chance<10; chance++){
            if(chance > 0){
                
                    //랜덤 수를 맞추면
                    if(bingo === inputr){
                        alert("정답입니다!!!!!!")
                    }else{
                        //틀리면
                        if(bingo < inputr){
                            alert("Down");
                        }else{
                            alert("Up");
                        }
                        alert("다시 시도해보세요 기회는" + chance + "번 남았습니다")
                        chance = chance - 1
                    }
            //기회가 남아있지 않다면
            }else{
                alert("THE END : 게임을 다시 시작하시겠습니까?");
                if(con === 'N' | con === "Y"){
                    if(con === 'N'){
                    break;
                    }
                }else{
                    alert("N 또는 Y를 입력해주세요");
                }    
            }
        }}

        fbingo();
    });

});