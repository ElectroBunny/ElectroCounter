

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
  //end

  birthday = "01/07/2023 20:00:00";
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "Kick OFF!!!!!!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0)
  }());
function displayRandomImage() {
  // Get all the files in the "img" folder
  const images = ['Var1.svg', 'Var2.svg', 'Var3.svg','Var4.svg', 'Var5.svg', 'Var6.svg','Var7.svg', 'Var8.svg'];

  // Select a random image
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  // Update the src attribute of the img element
  const imageElement = document.getElementById("my-image");
  imageElement.src = `img/${randomImage}`;
}
window.onload = function() {
  displayRandomImage();
}
