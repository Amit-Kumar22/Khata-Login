let username = document.getElementById("username").value;
let stateName = document.getElementById('state').value;
  //Bihar
  if (stateName.length > 0) {
      inputField.value = stateName.charAt(0).toUpperCase() + stateName.slice(1);
  }
function validateUsername(username) {
  var pattern = /^[A-Za-z][A-Za-z0-9_]*$/;
  if (!pattern.test(username)) {
      alert("Invalid username. It must start with a letter and contain only letters, digits, and underscores.");
      return false;
  }
  return true;
}


document.addEventListener("DOMContentLoaded", () =>
{
  const homeSection = document.getElementById("home-section");
  const loginSection = document.getElementById("login-section");
  const registerSection = document.getElementById("register-section");

  const sections = [homeSection, loginSection, registerSection];

  function showSection(section)
  {
    sections.forEach((sec) => (sec.style.display = "none"));
    section.style.display = "block";
  }

  document
    .getElementById("home")
    .addEventListener("click", () => showSection(homeSection));
  document
    .getElementById("login")
    .addEventListener("click", () => showSection(loginSection));
  document
    .getElementById("register")
    .addEventListener("click", () => showSection(registerSection));
  document
    .getElementById("register2")
    .addEventListener("click", () => showSection(registerSection));
  document
    .getElementById("login2")
    .addEventListener("click", () => showSection(loginSection));

  // Show the home section by default
  showSection(homeSection);
});

document.getElementById("form1").classList.add("active");

function validateForm(form)
{
  const inputs = form.querySelectorAll("input[required]");
  let isValid = true;

  inputs.forEach((input) =>
  {
    if (!input.value)
    {
      input.classList.add("error");
      isValid = false;
    } else
    {
      input.classList.remove("error");
      isValid = true;
    }
  });

  if (!isValid)
  {
    alert("Please fill in all required fields.");
  }

  return isValid;
}

function checkPasswordsMatch()
{
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("comfpswd").value;
  if (password !== confirmPassword)
  {
    alert("Passwords do not match.");
    return false;
  }

  return true;
}

function goToPage(pageNumber)
{
  const pages = document.querySelectorAll(".form");
  //const currentForm = document.getElementById(`form${pageNumber}`);
  const form1 = document.getElementById("form1")
  const form2 = document.getElementById("form2")
  const form3 = document.getElementById("form3")
  if((pageNumber === 2 && !validateForm(form1)) || (pageNumber === 3 && !validateForm(form2)))
  {
    return;
  }
  if(pageNumber === 2 && !checkPasswordsMatch())
  {
    return;
  }
  if(pageNumber === 2 && istrue == 0)
  {
    alert("First Verify OTP with Your number")
    return;
  }

  
  
  pages.forEach((page) => page.classList.remove("active"));
  document.getElementById(`form${pageNumber}`).classList.add("active");
  changebtncolor(pageNumber);
}

function changebtncolor(pageNumber)
{
  const steps = document.querySelectorAll(".btn");
  steps.forEach((btn, index) =>
  {
    if (index + 1 < pageNumber)
    {
      btn.classList.add("completed");
      // btn.classList.remove("active");
    } else if (index + 1 === pageNumber)
    {
      btn.classList.add("active");
      // btn.classList.remove("completed");
    } else
    {
      // btn.classList.remove("active", "completed");
    }
  });
}
document.getElementById("btn1").classList.add("active");

// For OTP Section

let generatedOtp = "";
function generateOTP()
{
  return Math.floor(100000 + Math.random() * 900000).toString();
}

document.getElementById("verify-btn").addEventListener("click", function (e)
{
  e.preventDefault();

  const mobileNumber = document.getElementById("number").value;
  const msgg = document.getElementById("msgg");
  if (isValidMobile(mobileNumber))
  {
    generatedOtp = generateOTP();
    alert(`Your OTP is: ${generatedOtp}`);

    msgg.classList.add("active");
    document.getElementById("otp-section").classList.add("active");
    startTimer();
  } else
  {
    alert("Please enter a valid mobile number");
  }
});

let istrue = 0;

document.getElementById("verify-otp-btn").addEventListener("click", function (e)
  {
    e.preventDefault();
    const otpInput = document.getElementById("otp").value;
    if (otpInput === generatedOtp)
    {
      alert("OTP verified successfully!");
      istrue = 1;
    } 
    else
    {
      alert("Invalid OTP. Please try again.");
      istrue = 0;
    }
  });

function isValidMobile(mobile)
{
  const mobileRegex = /^[6789]\d{9}$/;
  return mobileRegex.test(mobile);
}

document.getElementById("resend-btn").addEventListener("click", function (e)
{
  e.preventDefault();
  generatedOtp = generateOTP();
  alert(`Your OTP is: ${generatedOtp}`);
  startTimer();
  document.getElementById("timer").style.display = "block";
  document.getElementById("msgg").style.display = "flex";
  document.getElementById("resend-btn").classList.add("hidden");
  document.getElementById("verify-otp-btn").classList.remove("hidden");
});

function startTimer()
{
  let timeLeft = 10;
  const timerDisplay = document.getElementById("timer");
  timerDisplay.textContent = timeLeft;

  const interval = setInterval(function ()
  {
    timeLeft--;
    timerDisplay.textContent = timeLeft;

    if (timeLeft <= 0)
    {
      clearInterval(interval);
      document.getElementById("timer").style.display = "none";
      document.getElementById("msgg").style.display = "none";
      document.getElementById("resend-btn").classList.remove("hidden");
      document.getElementById("verify-otp-btn").classList.add("hidden");
    }
  }, 1000);
}
