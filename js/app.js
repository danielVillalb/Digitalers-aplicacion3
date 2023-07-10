let condicion=false;
$('#menu').addClass('hamburguesa');
$('#menu').on('click',function(){
    condicion=!condicion;
    if(condicion){
        $('.papa').css('display','block');
        $('#menu').css('display','none');
        $('#barra').animate({'top':'0'},500,function(){
        

        $('#cruz').css({'display':'block','zIndex':'200','position':'fixed','right':'64px','top':'20'});
        })
        
    }
})
console.log(condicion)
$('#cruz').on('click',function(){
    condicion=!condicion;
    if(!condicion){
        $('#barra').animate({'top':'-100%'},500,function(){
        $('.papa').css('display','none');
        
        $('#menu').css('display','block');
        })
        $('#cruz').css('display','none');
    }
})
















