document.onreadystatechange = () => {
    if (document.readyState === "complete") {

     $('#navbar').html('<div class="container">\
     <div id="theme" class="is-medium">\
         <a onclick="setDarkMode(true)" id="darkBtn" class="link">🌚<span> </span></a> /\
         <a onclick="setDarkMode(false)" id="lightBtn" class="link">🌝<span> </span> </a>\
     </div>\
 </div>\
 <nav class="container">\
     <div id="nav-brand"><a href="/"> <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png" width="50"> </a>\
         <form class="column" action="/kelas" method="GET">\
             <input type="search" class="input search" name="query" placeholder="mau belajar apa?">\
         </form>\
     </div>\
     <div id="nav-menu">\
         <div class="nav-item">\
             <a href="/kelas-feed" class="nav-item">Belajar</a>\
             <div class="nav-sub-menu">\
                 <a href="function.html" class="nav-sub-menu-item">function</a>\
                 <a href="/panduan" class="nav-sub-menu-item">Panduan</a>\
                 <a href="/track" class="nav-sub-menu-item">Perjalanan</a>\
             </div>\
         </div>\
         <div class="nav-item">\
             <a href="/nongkrong" class="nav-item">Nongkrong</a>\
             <div class="nav-sub-menu">\
                 <a href="/nongkrong" class="nav-sub-menu-item">Semua</a>\
                 <a href="/forum" class="nav-sub-menu-item">Forum</a>\
                 <a href="/artikel" class="nav-sub-menu-item">Artikel</a>\
                 <a href="/mading" class="nav-sub-menu-item">Mading</a>\
             </div>\
         </div>\
         <a href="/login" class="nav-item">Login</a>\
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




