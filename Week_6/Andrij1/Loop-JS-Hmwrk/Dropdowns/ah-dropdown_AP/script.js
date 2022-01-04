/*Функція тоггль (тумблер) - при натисканні конпки меню дропдауну (показати)
отримує значення "знайти-показати дропдаун"*/
function myFunction() {
    document.getElementById("ah-myDropdown").classList.toggle("show");
  }

/*Функція івент - спрацьовує при натисканні на підпозицію дропдауну:
в разі натискання на копку чи поза нею, вона зникає
*/
  window.onclick = function(event) {
    if (!event.target.matches('.ah-dropbtn')) {
      var dropdowns = document.getElementsByClassName("ah-dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }