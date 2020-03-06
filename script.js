 $(".but1").click(function(){
            $(".but1").hide();
            $(".map").hide();
            $(".lie").show();
            $(".lie2").show();   
            
        }); 
        
 $(".lie").hover(function(){
            $(".lie2").hide();
            $(".lie").hide();
            $(".lie3").show();
            $(".lie4").show();   
            
        }); 
        
$(".lie3").dblclick(function(){
            $(".lie3").hide();
            $(".lie4").hide();
            $(".lie5").show();
            $(".lie6").show();  
            $(".but2").show();
            
        }); 
        
$(".but2").click(function(){
            $(".lie5").hide();
            $(".lie6").hide();
            $(".but2").hide();
            $(".success1").show(); 
            $(".but3").show(); 
        });
        
$(".but3").click(function(){
            $(".success1").hide();
            $(".but3").hide(); 
            $(".guard").show(); 
            $(".guardtalks").show();
            $(".but4").show();
        }); 
        
$(".but4").click(function(){
            $(".but4").hide(); 
            $(".guard").hide(); 
            $(".guardtalks").hide();
            $(".guard2").show(); 
            $(".guardtalks2").show(); 
            $(".battle").show(); 
        }); 
        
$(".battle").click(function(){ 
            $(".guard2").hide(); 
            $(".guardtalks2").hide();
            $(".battle").hide();
            $(".command").show(); 
            $(".guard3").show(); 
            $(".katana").show();
        }); 
        
$(".katana").click(function(){ 
            $(".command").hide(); 
            $(".guard3").hide(); 
            $(".katana").hide();
            $(".mercyy").show(); 
            $(".mercy").show(); 
            $(".kill").show(); 
            $(".mercyyy").show(); 
        });
        
$(".kill").click(function(){ 
            $(".mercyy").hide(); 
            $(".mercy").hide(); 
            $(".kill").hide();
            $(".death").show(); 
            $(".mercyyy").hide(); 
            $(".successkill").show(); 
        });
        
$(".mercy").click(function(){ 
            $(".mercyy").hide(); 
            $(".mercy").hide(); 
            $(".kill").hide(); 
            $(".mercyyy").hide(); 
            $(".successmercy").show(); 
        });
        
$(".successmercy").click(function(){ 
            $(".treasure").show(); 
            $(".successmercy").hide(); 
        });
        
$(".successkill").click(function(){ 
            $(".treasure").show(); 
            $(".successkill").hide(); 
            $(".death").hide(); 
        });