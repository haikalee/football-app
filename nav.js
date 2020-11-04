document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".sidenav");
    M.Sidenav.init(elems);
    loadNav();
    
    function loadNav() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status != 200) return;
          
          document.querySelectorAll(".topnav, .sidenav").forEach(function(elm) {
              elm.innerHTML = xhttp.responseText;
          });
          
          document
          .querySelectorAll(".sidenav a, .topnav a")
            .forEach(function(elm) {
                elm.addEventListener("click", function(event) {
                var sidenav = document.querySelector(".sidenav");
                M.Sidenav.getInstance(sidenav).close();
                page = event.target.getAttribute("href").substr(1);
                loadPage(page);
              });
            });
        }
      };
      xhttp.open("GET", "/pages/nav.html", true);
      xhttp.send();
    }
  
    var page = window.location.hash.substr(1);
    const navTitle = document.getElementById('logo-container');
    if (page == "") page = "cl";
    loadPage(page);
    
    function loadPage(page) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
            var content = document.querySelector("#body-content");
            
            if (page === "cl") {
                navTitle.innerHTML = "Champions League";
                getChampionsLeagueTeam();
            } else if (page === 'gl') {
                navTitle.innerHTML = "Germany League";
                getGermanyLeagueTeam();
            } else if (page === 'nl') {
                navTitle.innerHTML = "Netherland League";
                getNetherlandLeagueTeam();
            } else if (page === 'el') {
                navTitle.innerHTML = "England League";
                getEnglandLeagueTeam();
            } else if (page === 'sl') {
                navTitle.innerHTML = "Spain League";
                getSpainLeagueTeam();
            } else if (page === 'fl') {
                navTitle.innerHTML = "France League";
                getFranceLeagueTeam();
            } else if (page === "save") {
                navTitle.innerHTML = "Favorite";
                getFavoriteTeam();
            } else if (page === "pertandingan") {
                navTitle.innerHTML = "Pertandingan";
                getMatches();
            }

            if (this.status == 200) {
                content.innerHTML = xhttp.responseText;
            } else if (this.status == 404) {
                content.innerHTML = "<p>Halaman tidak ditemukan.</p>";
            } else {
                content.innerHTML = "<p>Ups.. halaman tidak dapat diakses.</p>";
            }
        }
      };

      xhttp.open("GET", "/pages/" + page + ".html", true);
      xhttp.send();
    }
  
});