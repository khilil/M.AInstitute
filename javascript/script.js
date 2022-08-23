// ***************************************************
// nva bar
// ***************************************************
// background-image: url(/html/contact.jpg);
// background-size: 100% 100%;
// height: 100vh;
let asmission_nav=document.getElementById('asmission_nav');
let asmission_nav2=document.getElementById('asmission_nav2');
let admission_form=document.querySelector('.admission');
let removwe_body=document.querySelector('.removwe')
let body=document.querySelector('body');
let icon=document.querySelector('.icon')
let name_r=document.querySelector('.name_r')

asmission_nav.addEventListener('click',function(){

  if( admission_form.style.display=="block"){

 admission_form.style.display="none"
 removwe_body.style.display='block'
  body.style.backgroundImage= ""
  body.style.backgroundSize="0% 0%"
  body.style.height="0vh"
  name_r.style.display='block'
  asmission_nav2.style.display="none"
}
else{
  admission_form.style.display="block"
  removwe_body.style.display='none'
  body.style.backgroundImage= "url(/html/contact.jpg)"
  body.style.height="100vh"
  body.style.width="100vw"
  body.style.backgroundSize="100% 100%"  
  name_r.style.display='none'
    asmission_nav2.style.display="block"
}
})
asmission_nav2.addEventListener('click',function(){
  admission_form.style.display="none"
  removwe_body.style.display='block'
   body.style.backgroundImage= ""
   body.style.backgroundSize="0% 0%"
   body.style.height="0vh"
   name_r.style.display='block'
   asmission_nav2.style.display="none"
})

// **************************************************
// click_and_remove_std and Subject_chaptere remove
// **************************************************
let subject_and_remove_nav=document.getElementById('subject_and_remove'); // this is nav
let click_and_remove_std=document.querySelector('.click_and_remove_std');
let Subject=document.querySelector('.Subject')
let chapter=document.querySelector('.chapter')

subject_and_remove_nav.addEventListener('click',function(){
  if(click_and_remove_std.style.display=='grid'){
  click_and_remove_std.style.display='none';
  Subject.style.display='flex'
  chapter.style.display='block'
  p1.style.display="block"
  p2.style.display="block"
}
  else{
  click_and_remove_std.style.display='grid';
  chapter.style.display='none'
  Subject.style.display='none'
   
  p1.style.display="none"
  // p2.style.display="none"
  }
})

// ***********************************
// logic of colorave(sub1)
// ***********************************

let  p1=document.getElementById('p1')
let  p2=document.getElementById('p2')
let sub1=document.getElementById('sub1');
let colorav=document.querySelector('.colorav')

sub1.addEventListener('click',function(){
  // colorav.style. display= 'grid';
    
    if( colorav.style. display=='grid'){
        colorav.style. display='none';
        p1.style.display='block';
        p2.style.display='none';
        
      }
      else{
        colorav.style. display= 'grid';
       
        p1.style.display='none';
        p2.style.display='block';

        English.style. display='none';
        math.style. display='none';
        kalol.style. display='none';
        Khauh.style. display='none';
        since.style. display='none';
      Sanskrite.style. display='none';



   
    }
})
// ***********************************
// logic of maths(sub2)
// ***********************************
let sub2=document.getElementById('sub2');
let math=document.querySelector('.math')
sub2.addEventListener('click',function(){
  // colorav.style. display= 'grid';
  
  if( math.style. display=='grid'){
    math.style. display='none';
    p1.style.display='block';
    p2.style.display='none';
  }
  else{
    math.style. display= 'grid';
    
    p1.style.display='none';
    p2.style.display='block';

    colorav.style. display='none';
    English.style. display='none';
    Kung.style. display='none';
    kalol.style. display='none';
    Khauh.style. display='none';
    since.style. display='none';
    Sanskrite.style. display='none';





  }
})
// ***********************************
// logic of maths(sub3)
// ***********************************
let sub3=document.getElementById('sub3');
let English=document.querySelector('.English')
sub3.addEventListener('click',function(){
  // colorav.style. display= 'grid';
  
  if( English.style. display=='grid'){
    English.style. display='none';
    p1.style.display='block';
    p2.style.display='none';
  }
  else{
    English.style. display= 'grid';
    English.style.transition='1s';

    p1.style.display='none';
    p2.style.display='block';

    colorav.style. display='none';
    math.style. display='none';
    kalol.style. display='none';
    Kung.style. display='none';
    Khauh.style. display='none';
    since.style. display='none';
    Sanskrite.style. display='none';

   
  }
})



// **************************************************************************************************************************************
// std 2 Logic and // std 3 Logic
// **************************************************************************************************************************************


// sub4 logic kalol

let sub4=document.getElementById('sub4');
let kalol=document.getElementById('kalol')
let Kung=document.getElementById('Kung')
sub4.addEventListener('click',function(){
    if( kalol.style. display=='grid'){
        kalol.style. display='none';

        p1.style.display='block';
        p2.style.display='none';
      }
      else{
        kalol.style. display= 'grid';
        
                p1.style.display='none';
                p2.style.display='block';
        
        colorav.style. display='none';
        math.style. display='none';
        English.style. display='none';
        Kung.style. display='none';
        Khauh.style. display='none';
      since.style. display='none';
      Sanskrite.style. display='none';


        

      }
    })

// *****************************************************************************
//  std 4 logic And Std 5 Logic
// *****************************************************************************

let Khauh=document.getElementById('Khauh');
let sub5=document.getElementById('sub5'); 
sub5.addEventListener('click',function(){
  if( Khauh.style. display=='grid'){
      Khauh.style. display='none';

      p1.style.display='block';
      p2.style.display='none';
    }
    else{
      Khauh.style. display= 'grid';
      
            p1.style.display='none';
            p2.style.display='block';
      
      colorav.style. display='none';
      math.style. display='none';
      kalol.style. display='none';
      English.style. display='none';
      Kung.style. display='none';
      since.style. display='none';
      Sanskrite.style. display='none';

      

    }
  })


  // *****************************************************************************
//  std 6 logic And Std 7 Logic Std 8 Logic Logic Std 9 Logic Logic Std 10 Logic
// *****************************************************************************

let sub6=document.getElementById('sub6');
let sub7=document.getElementById('sub7');

let since=document.getElementById('since');
let Sanskrite=document.getElementById('Sanskrite');

// since sub6

sub6.addEventListener('click',function(){
  if( since.style. display=='grid'){
      since.style. display='none';

      p1.style.display='block';
      p2.style.display='none';
    }
    else{
      since.style. display= 'grid';

      p1.style.display='none';
      p2.style.display='block';
      
      colorav.style. display='none';
      math.style. display='none';
      kalol.style. display='none';
      English.style. display='none';
      Khauh.style. display='none';
      Sanskrite.style. display='none';
      Kung.style. display='none';
      


    }
  })
  // since sub7

sub7.addEventListener('click',function(){
  if( Sanskrite.style. display=='grid'){
      Sanskrite.style. display='none';

      p1.style.display='block';
      p2.style.display='none';
    }
    else{
      Sanskrite.style. display= 'grid';

      p1.style.display='none';
      p2.style.display='block';
      
      colorav.style. display='none';
      math.style. display='none';
      kalol.style. display='none';
      English.style. display='none';
      Khauh.style. display='none';
      Kung.style. display='none';
      since.style. display='none';
      


    }
  })
