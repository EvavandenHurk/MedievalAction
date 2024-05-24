window.onload = function() {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    image1.style.transition = 'right 4s ease';
    image2.style.transition = 'left 4s ease';

    // Move images to the center
    image1.style.right = 'calc(100% - 900px)'; // Adjust based on image width
    image2.style.left = 'calc(100% - 900px)'; // Adjust based on image width
};

// Wrap the modal functionality in its own scope
(function() {
  // Get the modal
  var modal = document.getElementById("myModal");

  // Function to open the modal
  function openModal() {
    modal.style.display = "block";
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Get the button that opens the modal
  var btn = document.getElementById("modalButton");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  btn.onclick = openModal;

  // When the user clicks on <span> (x), close the modal
  span.onclick = closeModal;

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  // Open the modal after 5 seconds
  setTimeout(openModal, 5000);
  
  // Function to handle button click action
  function handleButtonClick() {
    // Redirect to a new webpage
    window.location.href = "https://evavandenhurk.github.io/MedievalActionGame/"; // Change the URL to your desired webpage
  }

  // Add event listener to the button for click event
  btn.addEventListener("click", handleButtonClick);
})();
