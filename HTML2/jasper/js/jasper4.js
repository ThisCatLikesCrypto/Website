function sayHello() {
  yourname = document.getElementById("name").value;
  alert("god you're stupid, " + yourname + "!")
}
/* Style the tab */

.tab {
 overflow: hidden;
 border: 2px solid rgb(24, 55, 228);
 background-color; aliceblue;
}

/* Style the buttons that are used to open the tab content */
.tab button {
 background-color: inherit;
 float: left;
 border: none;
 outline: none;
 cursor: pointer;
 padding: 14px 16px;
 transition: 0.5s;
}

/* Change background color of buttons on hover */
.tab button:hover {
 background-color:coral;
 font-weight: bold;
}

/* Create an active/current tablink class */
.tab button.active {
 background-color:crimson;
 color:whitesmoke;
 font-weight: bold;
}

/* Style the tab content */
.tabcontent {
 background-color: rgba(205, 214, 255, 0.651);
 display: none;
 padding: 6px 12px;
 border: 1px solid black;
 border-top: none;
}

h1 {
 background-color:cornflowerblue;
 color:white;
 padding:20px;
}
