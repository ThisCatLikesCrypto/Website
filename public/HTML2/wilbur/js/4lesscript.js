function sayHello(){
  yourname = document.getElementById("name").value;
  alert(yourname + ", you should be scared, we now have our name in the database and we will use it to track us down. ;)");
  setTimeout(function(){
    window.location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }, 1000);
}