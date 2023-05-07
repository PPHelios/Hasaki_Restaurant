// Background parallax
const header = document.getElementsByTagName("Header")[0];  
header.addEventListener("mousemove", function(event) {
  parallaxed(event);

});
function parallaxed(e) {
  const windowWidth= screen.width
      const amountMovedX = ((e.clientX / windowWidth) * 100);
     console.log(amountMovedX);
      const x = document.getElementsByClassName("parallaxed");
        x[0].style.backgroundPosition=`${amountMovedX}% bottom`   
}
// Burger close toggle
const burgerToggler = document.getElementById("burgerToggler");
const burger = document.getElementById("burger");
burger.addEventListener("click", ()=>burger.classList.toggle("open"))

