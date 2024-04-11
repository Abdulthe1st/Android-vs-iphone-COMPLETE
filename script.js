// Android Button

document
  .getElementById("android-btn1")
  .addEventListener("click", changeToAndroid);

function changeToAndroid() {
  document.getElementById("theimg").src = "images/Android-Logo.jpg";
  document.getElementById("link").innerHTML = "Android Home";
  document.getElementById("link").style.background = "#a4c93b";
  document.getElementById("link").href = "https://www.android.com/";
  document.getElementById("html").style.backgroundColor = "#a4c93b";
  document.getElementById("explore1").style.fontFamily = "Roboto, sans-serif";
  document.getElementById("android-btn1").classList.add("active");
  document.getElementById("apple-btn1").classList.remove("active");
}

// Apple Button
document.getElementById("apple-btn1").addEventListener("click", changeToApple);

function changeToApple() {
  document.getElementById("theimg").src = "images/Apple-Logo.jpg";
  document.getElementById("link").innerHTML = "Apple Home";
  document.getElementById("link").style.background = "#b6bcca";
  document.getElementById("link").href = "https://www.apple.com/";
  document.getElementById("html").style.backgroundColor = "#b6bcca";
  document.getElementById("explore1").style.fontFamily = "Brygada 1918, serif";
  document.getElementById("android-btn1").classList.remove("active");
  document.getElementById("apple-btn1").classList.add("active");
}
