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
