
jQuery(document).ready(function($) {

   $(".banner li").click(function(event) { 

      $(".banner li").removeClass('active')&&$(this).addClass('active')
      var index=this.id

      var id='#'+'index_'+index

     $("html,body").animate({scrollTop: $(id).offset().top}, 1000);

   });


   $('#gotop').click(function(){ 
        $('body,html').animate({

            scrollTop: 0

        },

        800);//点击回到顶部按钮，缓懂回到顶部,数字越小越快

        return false;  
    })

   $(window).scroll(function(){
      t = $(document).scrollTop();
      if(t > 150){

          $('#gotop').fadeIn('slow');

      }else{
          $('#gotop').fadeOut('slow');

      }       

  }) 
});