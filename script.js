

/////////////splash screen ////////////

function splash_function() {
    document.getElementsByClassName("splash")[0].style.display = 'none';
    document.getElementById("loder").style.width = '70%';
    document.getElementById("loder").style.background = 'red';
  }
  
  
  
  
  ////////////////form responsive //////////////
  
  function enabled_function() {
    
    if(document.getElementById("lisence").checked === true){
      document.getElementById("submit").disabled = false;
    } else {
      document.getElementById("submit").disabled = true;
    }
    }; 
   
   
  
  
  ///////////////////// its contact form data sending part ///////////////////////
  
  let count = 10;    // constant variable for adding counter 
  
  function send_data_function() {
  
    count = count - 1;
  
    if(count <= 8){
      swal("Sorry !!!!", "You Are Already Contacted.", "warning");
    } else {
      swal("Success", "", "success");
    }
  
    
  var config = {
    apiKey: "AIzaSyBvYhKUeQgJdYN7ayH7TmfmpJZka6twuwg",
    authDomain: "training-ac143.firebaseapp.com",
    databaseURL: "https://training-ac143.firebaseio.com",
    projectId: "training-ac143",
    storageBucket: "training-ac143.appspot.com",
    messagingSenderId: "158225660325" 
  };
  
  firebase.initializeApp(config);
  
  
  
  const name = document.getElementById("user").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;
  
  var root = firebase.database().ref('message').child(name);
  
    root.set({
      "name":name,
      "phone":phone,
      "message":message 
  });
  
  console.log({
      "name":name,
      "phone":phone,
      "message":message 
  });
      
  }
  
  ///////////////////// its comment sending part ///////////////////////
  
  function send_comment_function() {
    count = count - 1;
  
     if(count <= 8){
      swal("Sorry !!!!", "One User Send Only 1 Comment", "error");
    } else {
      swal("Success", "", "success");
    }
  
  
  var fconfig = {
    apiKey: "AIzaSyBvYhKUeQgJdYN7ayH7TmfmpJZka6twuwg",
    authDomain: "training-ac143.firebaseapp.com",
    databaseURL: "https://training-ac143.firebaseio.com",
    projectId: "training-ac143",
    storageBucket: "training-ac143.appspot.com",
    messagingSenderId: "158225660325" 
  };
  
  firebase.initializeApp(fconfig);
  
  var comment = document.getElementById("comment").value;
  
  firebase.database().ref('comments').child(comment).set({comment: comment });
  
  document.getElementById("comment").innerText = "";
  
  }
  
  
  
  
  //////////////navbar position////////////
  
  var windowPosition = window.pageYOffset;
  window.onscroll =  function(){
     var windo = window.pageYOffset;
     // var nav = document.getElementById("nav");
  
    if(windowPosition > windo){
     document.getElementById("nav").style.top = "0%";
     document.getElementById("scroll_button").style.display = 'none';
  
    }else{
     document.getElementById("nav").style.top = "-20%";
     document.getElementById("scroll_button").style.display = 'block';
  
    }
    windowPosition = windo;
  
  }
  
  
  //////////////////////// search box js /////////////////////
  
  function search_function(){
    manually_function();
  }
  
  //////////////////its enter press search function//////////////
  
  let searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keyup", function(e){
  
      if(e.keyCode === 13){
        e.preventDefault();
        document.getElementById("searchName").click();
      }
  });
  
  
  
   function manually_function(){
    var input = document.getElementById("searchBar").value;
    var link = document.getElementById("searchName");
    input = input.toLowerCase().trim();
    
  
    switch(input){
      case '':
      document.getElementById("searchBar").focus();
      document.getElementById("searchBar").setAttribute("placeholder", "Please! type a message");
      break;
  
      case 'assignment 1':
      link.setAttribute("href", "a1.html");
      break;
  
      case 'a1':
      link.setAttribute("href", "a1.html");
      break;
  
      case 'assignment 2':
      link.setAttribute("href", "a2.html");
      break;
  
      case 'a2':
      link.setAttribute("href", "a2.html");
      break;
  
      case 'assignment 3':
      link.setAttribute("href", "a3.html");
      break;
  
      case 'a3':
      link.setAttribute("href", "a3.html");
      break;
  
      case 'assignment 4':
      link.setAttribute("href", "a4.html");
      break;
  
      case 'a4':
      link.setAttribute("href", "a4.html");
      break;
  
      case 'assignment 5':
      link.setAttribute("href", "a5.html");
      break;
  
      case 'a5':
      link.setAttribute("href", "a5.html");
      break;
  
      case 't1':
      link.setAttribute("href", "t1.html");
      break;
  
      case 't1':
      link.setAttribute("href", "t1.html");
      break; 
  
      case 't2':
      link.setAttribute("href", "t2.html");
      break; 
  
      case 't3':
      link.setAttribute("href", "t3.html");
      break;
   
      case 't4':
      link.setAttribute("href", "t4.html");
      break; 
  
      case 't5':
      link.setAttribute("href", "t5.html");
      break;
  
      case 'assignment':
      link.setAttribute("href", "project.html#c");
      break;
  
      case 'task':
      link.setAttribute("href", "project.html#html");
      break;
  
      case 'a1.txt':
      link.setAttribute("href", "source/a1.txt");
      break;
  
      case 'a2.txt':
      link.setAttribute("href", "source/a2.txt");
      break;
  
      case 'a3.txt':
      link.setAttribute("href", "source/a3.txt");
      break;
  
      case 'a4.txt':
      link.setAttribute("href", "source/a4.txt");
      break;
  
      case 'a5.txt':
      link.setAttribute("href", "source/a5.txt");
      break;
  
      case 't1.txt':
      link.setAttribute("href", "source/t1.txt");
      break;
  
      case 't2.txt':
      link.setAttribute("href", "source/t2.txt");
      break;
  
      case 't3.txt':
      link.setAttribute("href", "source/t3.txt");
      break;
  
      case 't4.txt':
      link.setAttribute("href", "source/t4.txt");
      break;
  
      case 't5.txt':
      link.setAttribute("href", "source/t5.txt");
      break;
  
      case 'c':
      link.setAttribute("href", "project.html#c");
      break;
  
      case 'home':
      link.setAttribute("href", "index.html");
      break;
  
      case 'project':
      link.setAttribute("href", "project.html#p");
      break;
  
      case 'contact':
      link.setAttribute("href", "#contact");
      break;
  
      case 'pic':
      link.setAttribute("href", "css/kamleen.jpg");
      break;
  
      case 'sw.js':
      link.setAttribute("href", "sw.js");
      break;
  
      case 'script.js':
      link.setAttribute("href", "script.js");
      break;
  
      case 'dark.css':
      link.setAttribute("href", "css/dark.css");
      break;
  
      case 'style.css':
      link.setAttribute("href", "css/style.css");
      break;
  
      case 'kamleen':
      link.setAttribute("href", "https://mohdkamleen.blogspot.com/");
      break;
  
      case 'digicoders':
      link.setAttribute("href", "http://digicoders.in/");
      break;
  
      case 'dc':
      link.setAttribute("href", "http://digicoders.in/");
      break;
  
      case 'digi':
      link.setAttribute("href", "http://digicoders.in/");
      break;
  
      case 'dcoders':
      link.setAttribute("href", "http://digicoders.in/");
      break;
  
      default:
      swal("Opps !!!", "Sorry Page not Found", "error");
      break;
       
    }
    
  }
  
  //////////// its service worker part ////////////
  
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(res => {
      console.info('Service Worker is Regitser', res);
    })
    .catch(err => {
      console.info('Service Worker is not Register', err);
    })
  } else 
    console.log('Service Worker is not suppoted in your browser');
  
  
  
  
  