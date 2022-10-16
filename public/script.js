window.onscroll = function(e){
    console.log(window.pageYOffset);

    if (window.pageYOffset >= 5 ){
        document.getElementsByClassName('navbarz')[0].style.backgroundColor = 'rgb(17, 16, 21)'
        document.getElementsByClassName('navbarz')[0].style.borderBottom = '1px solid rgba(50, 49, 49, 0.49)'
    } else {
        document.getElementsByClassName('navbarz')[0].style.backgroundColor = 'transparent'
        document.getElementsByClassName('navbarz')[0].style.borderBottom = 'none'
   
    }
}

window.onload = function(){
    document.getElementsByClassName('immobilie')[0].classList.add('scrolled')
    document.getElementsByClassName('immobilie')[0].classList.add('slide-left')
    document.getElementsByClassName('textcont-button')[0].classList.add('scrolled')
    document.getElementsByClassName('textcont-button')[0].classList.add('slide-right')
    document.getElementsByClassName('logo')[0].classList.add('scrolled')
    document.getElementsByClassName('logo')[0].classList.add('fade-in-bottom')
    document.getElementsByClassName('jetztanrufen')[0].classList.add('scrolled')
    document.getElementsByClassName('jetztanrufen')[0].classList.add('fade-in-bottom')
    document.getElementsByClassName('menuicon')[0].classList.add('scrolled')
    document.getElementsByClassName('menuicon')[0].classList.add('fade-in-bottom')
}

function openBetreuung(){
    ele1 = document.getElementsByClassName('dienstleistung')[0];
    ele2 = document.getElementsByClassName('dienstleistung')[1];
    ele3 = document.getElementsByClassName('dienstleistung')[2];
    ele4 = document.getElementsByClassName('dienstleistung')[3];
    mehr = document.getElementsByClassName('dienstleistung-mehr')[0];
    dienst = document.getElementsByClassName('dienstleistungenopen')[0];
    zrk = document.getElementsByClassName('sibbi')[0];

    mehr.style.opacity = '0';
    dienst.style.display = 'flex';
    setTimeout(function(){
    dienst.classList.remove('opacityzero');
    }, 200)
    ele1.style.width = '100%';
    zrk.style.display ='initial';
    ele2.style.width = '0';
    ele3.style.width = '0';
    ele4.style.width = '0'
    ele2.style.opacity = '0';
    ele3.style.opacity = '0';
    ele4.style.opacity = '0'
}

function closeBetreuung(){
    ele1 = document.getElementsByClassName('dienstleistung')[0];
    ele2 = document.getElementsByClassName('dienstleistung')[1];
    ele3 = document.getElementsByClassName('dienstleistung')[2];
    ele4 = document.getElementsByClassName('dienstleistung')[3];
    mehr = document.getElementsByClassName('dienstleistung-mehr')[0];
    dienst = document.getElementsByClassName('dienstleistungenopen')[0];
    zrk = document.getElementsByClassName('sibbi')[0];

    mehr.style.opacity = '1';
    dienst.classList.remove('opacityzero');
    setTimeout(function(){
    dienst.style.display = 'none';
    }, 50)
    ele1.style.width = '25%';
    ele2.style.width = '25%';
    ele3.style.width = '25%';
    ele4.style.width = '25%'
    ele2.style.opacity = '1';
    ele3.style.opacity = '1';
    ele4.style.opacity = '1';
    zrk.style.display = 'none'
}

function openReinigung(){
    ele1 = document.getElementsByClassName('dienstleistung')[0];
    ele2 = document.getElementsByClassName('dienstleistung')[1];
    ele3 = document.getElementsByClassName('dienstleistung')[2];
    ele4 = document.getElementsByClassName('dienstleistung')[3];
    mehr = document.getElementsByClassName('dienstleistung-mehr')[1];
    dienst = document.getElementsByClassName('dienstleistungenopen')[1];
    zrk = document.getElementsByClassName('sibbi')[1];

    mehr.style.opacity = '0';
    dienst.style.display = 'flex';
    setTimeout(function(){
    dienst.classList.remove('opacityzero');
    }, 200)
    ele1.style.width = '0';
    zrk.style.display ='initial';
    ele2.style.width = '100%';
    ele3.style.width = '0';
    ele4.style.width = '0'
    ele1.style.opacity = '0';
    ele2.style.opacity = '100%';
    ele3.style.opacity = '0';
    ele4.style.opacity = '0'
}

function closeReinigung(){
    ele1 = document.getElementsByClassName('dienstleistung')[0];
    ele2 = document.getElementsByClassName('dienstleistung')[1];
    ele3 = document.getElementsByClassName('dienstleistung')[2];
    ele4 = document.getElementsByClassName('dienstleistung')[3];
    mehr = document.getElementsByClassName('dienstleistung-mehr')[1];
    dienst = document.getElementsByClassName('dienstleistungenopen')[1];
    zrk = document.getElementsByClassName('sibbi')[1];

    mehr.style.opacity = '1';
    dienst.classList.remove('opacityzero');
    setTimeout(function(){
        dienst.style.display = 'none';
    }, 200)
    ele1.style.width = '25%';
    zrk.style.display ='none';
    ele2.style.width = '25%';
    ele3.style.width = '25%';
    ele4.style.width = '25%'
    ele1.style.opacity = '1';
    ele2.style.opacity = '1';
    ele3.style.opacity = '1';
    ele4.style.opacity = '1'
}

function openHaus(){
    ele1 = document.getElementsByClassName('dienstleistung')[0];
    ele2 = document.getElementsByClassName('dienstleistung')[1];
    ele3 = document.getElementsByClassName('dienstleistung')[2];
    ele4 = document.getElementsByClassName('dienstleistung')[3];
    mehr = document.getElementsByClassName('dienstleistung-mehr')[2];
    dienst = document.getElementsByClassName('dienstleistungenopen')[2];
    zrk = document.getElementsByClassName('sibbi')[2];

    mehr.style.opacity = '0';
    dienst.style.display = 'flex';
    setTimeout(function(){
    dienst.classList.remove('opacityzero');
    }, 200)
    ele1.style.width = '0';
    zrk.style.display ='initial';
    ele2.style.width = '0';
    ele3.style.width = '100%';
    ele4.style.width = '0'
    ele1.style.opacity = '0';
    ele2.style.opacity = '0';
    ele3.style.opacity = '1';
    ele4.style.opacity = '0'
}

function closeHaus(){
    ele1 = document.getElementsByClassName('dienstleistung')[0];
    ele2 = document.getElementsByClassName('dienstleistung')[1];
    ele3 = document.getElementsByClassName('dienstleistung')[2];
    ele4 = document.getElementsByClassName('dienstleistung')[3];
    mehr = document.getElementsByClassName('dienstleistung-mehr')[2];
    dienst = document.getElementsByClassName('dienstleistungenopen')[2];
    zrk = document.getElementsByClassName('sibbi')[2];

    mehr.style.opacity = '1';
    dienst.classList.remove('opacityzero');
    setTimeout(function(){
        dienst.style.display = 'none';
    }, 200)
    ele1.style.width = '25%';
    zrk.style.display ='none';
    ele2.style.width = '25%';
    ele3.style.width = '25%';
    ele4.style.width = '25%'
    ele1.style.opacity = '1';
    ele2.style.opacity = '1';
    ele3.style.opacity = '1';
    ele4.style.opacity = '1'
}

function openVer(){
    ele1 = document.getElementsByClassName('dienstleistung')[0];
    ele2 = document.getElementsByClassName('dienstleistung')[1];
    ele3 = document.getElementsByClassName('dienstleistung')[2];
    ele4 = document.getElementsByClassName('dienstleistung')[3];
    mehr = document.getElementsByClassName('dienstleistung-mehr')[3];
    dienst = document.getElementsByClassName('dienstleistungenopen')[3];
    zrk = document.getElementsByClassName('sibbi')[3];

    mehr.style.opacity = '0';
    dienst.style.display = 'flex';
    setTimeout(function(){
    dienst.classList.remove('opacityzero');
    }, 200)
    ele1.style.width = '0';
    zrk.style.display ='initial';
    ele2.style.width = '0';
    ele3.style.width = '0';
    ele4.style.width = '100%'
    ele1.style.opacity = '0';
    ele2.style.opacity = '0';
    ele3.style.opacity = '0';
    ele4.style.opacity = '1'
}

function closeVer(){
    ele1 = document.getElementsByClassName('dienstleistung')[0];
    ele2 = document.getElementsByClassName('dienstleistung')[1];
    ele3 = document.getElementsByClassName('dienstleistung')[2];
    ele4 = document.getElementsByClassName('dienstleistung')[3];
    mehr = document.getElementsByClassName('dienstleistung-mehr')[3];
    dienst = document.getElementsByClassName('dienstleistungenopen')[3];
    zrk = document.getElementsByClassName('sibbi')[3];

    mehr.style.opacity = '1';
    dienst.classList.remove('opacityzero');
    setTimeout(function(){
        dienst.style.display = 'none';
    }, 200)
    ele1.style.width = '25%';
    zrk.style.display ='none';
    ele2.style.width = '25%';
    ele3.style.width = '25%';
    ele4.style.width = '25%'
    ele1.style.opacity = '1';
    ele2.style.opacity = '1';
    ele3.style.opacity = '1';
    ele4.style.opacity = '1'
}

function submitMail(){
 if(document.getElementsByClassName('teleinput')[0].value  !== '' && document.getElementsByClassName('teleinput')[1].value !== '' && document.getElementsByClassName('teleinput')[2].value !== '' && document.getElementsByClassName('teleinput')[3].value !== '' ){
   setTimeout(function() {
    document.getElementsByClassName('successcont')[0].style.bottom = '25px'
    document.getElementsByClassName('successcont')[0].style.opacity = '1';
    document.getElementsByClassName('successcont')[0].style.transition = '0.5s';
    var elements = document.getElementsByTagName("input");
    var elements2 = document.getElementsByTagName("select");
    var elements3 = document.getElementsByTagName('textarea');
for (var ii=0; ii < elements.length; ii++) {
  if (elements[ii].type == "text" || "email" || "number") {
    elements[ii].value = "";
  }
}
for (var ii=0; ii < elements2.length; ii++) {
    if (elements2[ii]) {
      elements2[ii].value = "";
    }
  }

  for (var ii=0; ii < elements3.length; ii++) {
    if (elements3[ii]) {
      elements3[ii].value = "";
    }
  }
   }, 500)

   setTimeout(function() {
    document.getElementsByClassName('successcont')[0].style.bottom = '-50%'
    document.getElementsByClassName('successcont')[0].style.opacity = '0';
    document.getElementsByClassName('successcont')[0].style.transition = '0.5s';
   }, 3500)
 }
}