

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})
const search = () => {
const searchbox= document.getElementById("search-item").value.toUpperCase();
const storeitems= document.getElementById("searchproduct-list")
  const searchproduct= document.querySelectorAll(".searchproduct")
  const pname= document.getElementById("h3")
for (var i=0;i<pname.length;i++)
  {
let match=searchproduct[i].getElementByTagName('h3')[0];
    if(match)
    {
let textvalue=match.textContent || match.innerHTML
      if(textvalue.toUpperCase().indexOf(searchbox)>-1)
      {
searchproduct[i].style.display="";
        
      }
      else{
        searchproduct[i].style.display="none";
      }
      
    }
    
  }



}
