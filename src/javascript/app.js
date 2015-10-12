
// Activate Modals

var largeModal = document.getElementById("large-modal"),
    smallModal = document.getElementById("small-modal"),
    buttonOpenLgModal = document.getElementById("open-large-modal"),
    buttonOpenSmModal = document.getElementById("open-small-modal");

// Activate Modal When Button is CLicked
var activateModal = function (buttonId,modalId){
  buttonId.onclick = function(){
    modalId.classList.add("active");
    document.body.classList.add("active-modal")
  }

  // If Modal is Open, and Modal gets clicked, close it
  var modalClose = document.getElementsByClassName("modal-close");
  for (var i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function(){
      var modals = document.getElementsByClassName("modal");
      for (var i = 0; i < modals.length; i++) {
        modals[i].classList.remove("active");
      }
      document.body.classList.remove("active-modal")
    }
  }
}

activateModal(buttonOpenLgModal,largeModal);
activateModal(buttonOpenSmModal,smallModal);

console.log("WHAT");
