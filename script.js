const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    if (!document.pictureInPictureEnabled) {
      // Let the user know that PiP is not enabled/supported.
      button.textContent = 'PiP is not supported in your browser.';
      button.disabled = true;
    } else {
    // Catch Error Here
    alert("Oops, something gone wrong. Sorry about that. Please try again later.");
    }
  }
}

//Button action PiP
button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});

// On Load
selectMediaStream();