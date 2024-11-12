theme.Mosaic = (function() {
  function Mosaic(container) {
  var use_lightbox = container.querySelector('.use_lightbox');
    if(use_lightbox) {
    	var mosaic_blocks = container.querySelectorAll('.mosaic_block');
      if(mosaic_blocks.length) {
        
          var items = [];
        var pswpElement = document.querySelectorAll('.pswp')[0];
        
        mosaic_blocks.forEach(function (item,index) {

          var imageObj = {
            src: item.getAttribute('data-image-url'),
            w: +(item.getAttribute('data-image-width')),
            h: +(item.getAttribute('data-image-height'))
          }
           items.push(imageObj);
          
          item.addEventListener('click', function(e) {

            var target = e.target;


            if(target.classList.contains('mosaic_block-link') || target.closest('.mosaic_block-link')) {
            } else {
              e.preventDefault();

              var options = {
                index: index // start at first slide
              };
              var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
              gallery.init();
            }

          });
        });
      }
    }
  }
  
  return Mosaic; 
})();