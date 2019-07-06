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


document.querySelector('[data-button]').addEventListener('click', function(e) {
  trackEvent('my category', 'click', e.target.innerHTML, 1);
})

