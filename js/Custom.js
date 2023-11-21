


// active nav links

const PathName = window.location.pathname;
const NavLink = 
document.querySelectorAll(".nav-list a").forEach(link =>{
  if (link.href.includes(`${PathName}`)) {
    console.log(link)
    link.classList.add("active");
  }else if(link.href == " " || link.href == "#"){
    link.classList.remove("active");
  }

})