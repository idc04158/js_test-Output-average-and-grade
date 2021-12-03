document.addEventListener("DOMContentLoaded", function(){


//버튼을 누르면 작동
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){

    var result = function(){
    

        //변수선언
        var ko = document.getElementById("ko")
        var en = document.getElementById("en")
        var ma = document.getElementById("ma")
        var kor = Number((ko.value))
        var enr = Number((en.value))
        var mar = Number((ma.value))

        
        //평균 return
        if(0< kor  && kor <= 100 && 0< enr && enr <= 100 && 0< mar && mar <= 100){
            var sum = (kor + enr + mar);
            sum = Number(sum);
            var avg = (sum / 3);
            avg = Number(avg);
            var avgr =avg.toFixed(2);
            avgr = String(avgr);
            var al = 0;

        }else{
            var al = 1;
        }

        //등급 return
        if(avgr >= 90){ 
            var grd = 'A';
        }else if (avgr >= 80){ 
            var grd = 'B';
        }else if (avgr >= 70){ 
            var grd = 'C';
        }else if (avgr >= 60){ 
            var grd = 'D';
        }else{ 
            var grd = 'F';
        };

        if(al === 0){        
            alert ("당신의 평균은" + avgr + "이고 등급은" + grd + "입니다.");
        }else{
            alert ("0이상, 100이하의 값을 입력해주세요.");
        }
    };
   
    result();




});

});