  document.body.addEventListener('submit', async (e) => {
    e.preventDefault(); // this stops whatever the browser wanted to do itself.
    const form = $(e.target).serializeArray(); // here we're using jQuery to serialize the form
    fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then((fromServer) => fromServer.json())
      .then((fromServer) => {
        if (document.querySelector('.flex-inner')) {
          document.querySelector('.flex-inner').remove();
        }    
        console.log('fromServer', fromServer);
      })
      .catch((err) => console.log(err));
  });

  // Banner Section

document.getElementById("home").onclick = function () {
  location.href = "/index.html";
}
document.getElementById("about").onclick = function () {
  location.href = "/about.html";
}
document.getElementById("docs").onclick = function () {
  location.href = "/docs.html";
}

// Year Section

document.getElementById("yearOne").onclick = function () {
  location.href = "/dataOne.html";
}
document.getElementById("yearTwo").onclick = function () {
  location.href = "/dataTwo.html";
}
document.getElementById("yearThree").onclick = function () {
  location.href = "/dataThree.html";
}