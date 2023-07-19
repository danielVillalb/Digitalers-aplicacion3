
let condicion=true;
let anda=true;
if(anda){

    $('#menu').addClass('hamburguesa');
    $('#menu').on('click',function(){
        condicion=true;
        if(condicion){
            
            $('.papa').css('display','block');
            $('#menu').css('display','none');
            $('#barra').animate({'top':'0'},500,function(){
                $('#cruz').css({'display':'block','zIndex':'200','position':'fixed','right':'64px','top':'20'});
            })
            condicion=false;
        }
        console.log(condicion)
    })
    
    $('#cruz').on('click',function(){
       
        
        if(!condicion){
            $('#barra').animate({'top':'-100%'},500,function(){
                $('.papa').css('display','none');
                
                $('#menu').css('display','block');
            })
            $('#cruz').css('display','none');
            condicion=true;
        }
        console.log("condicion2"+condicion)
    })
}

window.addEventListener('resize', function(){
if(this.window.innerWidth<1000){
    anda=true;
    console.log(anda)
    if(!condicion){
        
        $('#cruz').css({'display':'block','zIndex':'200','position':'fixed','right':'64px','top':'20'});
        $('#menu').css('display','none');
    }else{
        $('#barra').css({'top':'-100%'})
        $('#cruz').css({'display':'none'});
        $('#menu').css({'display':'block','zIndex':'200','position':'fixed','right':'64px','top':'20'});
    }
}else{
    anda=false;
    console.log("mas de mil"+anda)
    console.log(this.window.innerWidth)
    console.log('aver: '+condicion)
    if(condicion){
        $('#cruz').css({'display':'none'});
        $('#menu').css('display','none');
        $('.papa').css('display','block');
        $('#menu').css('display','none');
        $('#barra').css({'top':'0'})
    }else{
        $('#cruz').css({'display':'none'});

    }
}
})
let btnOscuro=$('#oscuro');
let btnClaro=$('#claro');
let body=$('body');
let header=$('header');
let nav=$('#barra');
let oscuro=false;

const modoOscuro=()=>{
    body.addClass('oscuro');
    body.removeClass('claro');
    nav.addClass('negro');
    nav.removeClass('claro');
    header.addClass('oscuro');
    header.removeClass('oscuro');
    btnClaro.css('display','block');
    btnOscuro.css('display','none');
    oscuro=true;

}
const modoClaro=()=>{
    body.removeClass('oscuro');
    body.addClass('claro');
    nav.removeClass('negro');
    nav.addClass('claro');
    header.addClass('claro');
    header.removeClass('claro');
    btnOscuro.css('display','block');
    btnClaro.css('display','none');
    oscuro=false;
}



