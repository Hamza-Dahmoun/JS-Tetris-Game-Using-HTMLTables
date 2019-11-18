var td = document.getElementsByTagName("td");
for (let i = 0; i < td.length; i++) {
    td[i].setAttribute("id", (i + 1));
    //td[i].innerText = i + 1;
}
