$(document).ready(function () {




    //Sending to portfolio after click 
    $(document).on('click keypress', () => {
        //audio
       if (document.querySelector('#audioprompt') == null) 
        {
                document.body.innerHTML = 
            '<audio id="audioprompt" autoplay><source src="audio/game-start-6104.mp3"></audio>'
             + document.body.innerHTML;

           } 
    function next() 
    {window.location.href='homepage.html'}
    setTimeout(next, 2000)
   
})




  });





