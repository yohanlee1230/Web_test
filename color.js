var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js');
document.head.appendChild(jQueryScript);

var links = {
    setColor: function (color){
        //  var alist = document.querySelectorAll('a');
        //  var i = 0;
        //  while(i < alist.length){
        //      alist[i].style.color = color;
        //      i = i + 1;
        //  }
        $('a').css('color', color);
    }
}
var body = {
    setBackgroundColor: function(color){
        //  document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    },
    setColor : function(color){
        //  document.querySelector('body').style.color = color;
        $('body').css('color', color);
    }
}
function buttonNightDay(self){
    if(self.value === 'night'){
        body.setBackgroundColor('black');
        body.setColor('white');
        self.value = 'day';
        links.setColor('powderblue');
    } else {
        body.setBackgroundColor('white');
        body.setColor('black');
        self.value = 'night';
        links.setColor('blue');
    }
}