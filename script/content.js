window.onload = function() {
    const mainBodyElement = document.querySelector('.container-content');
    const container = document.getElementById("container-content")
    const content_box = document.getElementById("content");
    mainBodyElement.addEventListener('mouseenter', () => {
      console.log('mouseEnter')
      content_box.style.height = "100%"
      content_box.style.transition ="2.5s"
      container.style.padding ="5%"
      container.style.transition ="2s"
      container.style.backgroundColor ="rgba(21, 22, 24, 0.861)"
    });
    
    mainBodyElement.addEventListener('mouseleave', () => {
      console.log('mouseLeave')
      content_box.style.height = "0"
      content_box.style.transition ="1.5s"
      container.style.padding ="2%"
      container.style.transition ="1.2s"
      container.style.backgroundColor ="rgba(142, 158, 252, 0.132)"
      
    });
  };
  