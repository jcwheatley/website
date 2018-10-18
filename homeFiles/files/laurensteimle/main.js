// Initialize Firebase
  var config = {
    apiKey: "hidden",
    authDomain: "contact-form-66589.firebaseapp.com",
    databaseURL: "https://contact-form-66589.firebaseio.com",
    projectId: "contact-form-66589",
    storageBucket: "",
    messagingSenderId: "80276289504"
  };
  firebase.initializeApp(config);

// // Initialize Firebase James' Test Database
// var config = {
//     apiKey: "hidden",
//     authDomain: "ls-contactform.firebaseapp.com",
//     databaseURL: "https://ls-contactform.firebaseio.com",
//     projectId: "ls-contactform",
//     storageBucket: "",
//     messagingSenderId: "992758537534"
// };
// firebase.initializeApp(config);

// Contact Form Submissions Collection
var messagesRef = firebase.database().ref('messages');

// Listen for submit pushed
document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    var name = getInputValue('name');
    var email = getInputValue('email');
    var subject = getInputValue('subject');
    var message = getInputValue('message');

    saveMessage(name, email, subject, message);

    // Message sent confirmation alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 10 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },5000);

    //Clear all forms
    document.getElementById('contactForm').reset();
}

// get form values
function getInputValue(id){
    return document.getElementById(id).value;
}

// Save messages to firebase
function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}
