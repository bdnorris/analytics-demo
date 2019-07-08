var trackEvent = function(category, action, label, value) {
  console.log(category, action, label, value)

  if (typeof dataLayer != 'undefined') {
    console.log('dataLayer', dataLayer);

    dataLayer.push({
      // ...
    })

    console.log('dataLayer', dataLayer);
  }
}


var modalTriggers = document.querySelectorAll('[data-modal]');
var allModals = document.querySelectorAll('.modal');
var modalScreen = document.querySelector('.modal-screen');
var modalClose = document.querySelector('.modal-close');

for (var i = 0 ; i < modalTriggers.length ; i++) {
  modalTriggers[i].addEventListener("click", function(e) {
    var modalTarget = e.target.dataset.modal;
    modalScreen.classList.toggle('active');
    document.getElementById(modalTarget).classList.toggle('active');
    // ...
  })
}

modalClose.addEventListener("click", function(){
  closeModals('close button')
});
modalScreen.addEventListener("click", function(e){
  if(e.originalTarget.classList.contains('modal-screen'))
  closeModals('modal screen')
});

var closeModals = function(from) {
  for (var i = 0; i < allModals.length; i++) {
    allModals[i].classList.remove('active');
  }
  modalScreen.classList.remove('active');
  //  ...
} 