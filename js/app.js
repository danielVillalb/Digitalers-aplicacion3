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

console.log(window.innerWidth)

window.addEventListener('resize', function(){
    if(window.innerWidth>1000){
        $('#menu').css('display','none');
        $('#cruz').css('display','none');
        $('#barra').css({'top':'0'});
        $('.papa').css('display','block');
        $('#menu').css('display','none');

}else{
    $('.papa').css('display','block');
    if(condicion){

        
        

        $('#cruz').css({'display':'block','zIndex':'200','position':'fixed','right':'64px','top':'20'});
        
        console.log('entro')
    }else{
        console.log('no entro')
        $('#menu').css('display','block');
    }
    
}
});












