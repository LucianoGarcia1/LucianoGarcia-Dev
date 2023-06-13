const firebaseConfig = {
  apiKey: "AIzaSyAfiHh3BujuFZufFgzbJuBGYEcE6wPJ0g0",
  authDomain: "form-lc.firebaseapp.com",
  projectId: "form-lc",
  storageBucket: "form-lc.appspot.com",
  messagingSenderId: "77035445096",
  appId: "1:77035445096:web:534bfbe8788ac0f9fd94dd",
};

firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infosContact");

// Listen for a submit
const form = document.querySelector(".contact-form");

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let tel = document.querySelector(".number").value;
  let message = document.querySelector(".mensagem").value;

  const aviso = document.querySelector(".sucess");

  let imgContact = document.getElementById("contactImg");

  console.log(name, email, tel, message);

  saveContactInfo(name, email, tel, message);

  sendEmail(name, email, tel, message);

  document.querySelector(".contact-form").reset();

  //Manipulando mensagem de sucesso
  imgContact.src = "assets/img/undraw_messenger_re_8bky-svg.svg";

  setTimeout(() => {
    imgContact.src = "assets/img/undraw_message_sent_re_q2kl-svg.svg";
  }, 5000);

  aviso.classList.add("activeSucess");

  setTimeout(() => {
    aviso.classList.remove("activeSucess");
  }, 5000);
}

// Save infos to Firebase
function saveContactInfo(name, email, tel, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    numero: tel,
    message: message,
  });
}

function sendEmail(name, email, tel, message) {
  fetch("https://formsubmit.co/ajax/lcmsilva2223@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify({
      Nome: name,
      Email: email,
      Telefone: tel,
      Mensagem: message,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

form.addEventListener("submit", submitForm);
