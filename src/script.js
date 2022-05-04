document.onreadystatechange = () => {
    if (document.readyState === "complete") {

     $('#navbar').html('<div class="container">\
     <div id="theme" class="is-medium">\
         <a onclick="setDarkMode(true)" id="darkBtn" class="link">🌚<span> </span></a> /\
         <a onclick="setDarkMode(false)" id="lightBtn" class="link">🌝<span> </span> </a>\
     </div>\
 </div>\
 <nav class="container">\
     <div id="nav-brand"><a href="/"> <img src="assets/javascript.png" width="50"> </a>\
         <form class="column" action="/kelas" method="GET">\
             <input type="search" class="input search" name="query" placeholder="mau belajar apa?">\
         </form>\
     </div>\
     <div id="nav-menu">\
         <div class="nav-item">\
             <a href="index.html" class="nav-item">Belajar</a>\
             <div class="nav-sub-menu">\
             <a href="#" class="nav-sub-menu-item">Variabel dan Konstanta</a>\
                 <a href="function.html" class="nav-sub-menu-item">function</a>\
                 <a href="#" class="nav-sub-menu-item">Tipe data</a>\
                 <a href="#" class="nav-sub-menu-item">Operator</a>\
             </div>\
         </div>\
         <div class="nav-item">\
             <a href="mislecenaus.html" class="nav-item">mislecenaus</a>\
         </div>\
         <a href="#" class="nav-item">#</a>\
     </div>\
     <div class="nav-toggle" onclick="toggleMenu(this)">\
         <div class="bar1"></div>\
         <div class="bar2"></div>\
         <div class="bar3"></div>\
     </div>\
 </nav>')

    }
}



//dark mode //check localstorage
if (localStorage.getItem('preferredTheme') == 'dark')
setDarkMode(true)

function setDarkMode(isDark) {
if (isDark) {
    document.body.setAttribute("id", "darkmode");
    localStorage.setItem('preferredTheme', 'dark');
} else {
    document.body.setAttribute("id", "");
    localStorage.removeItem('preferredTheme');
}
}




