<html  class="everything" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Sign Up</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;600;700;900&family=Rubik:wght@400;800;900&display=swap"
      rel="stylesheet"
    />
    <link href="style.css" rel="stylesheet" type="text/css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
  </head>

  <body class="other-page">
    <div class="nav-bar">
      <div class="title">Cognoscere.</div>
      <a href="home.html" class="nav-bar-content">Home</a>
      <a href="search.html" class="nav-bar-content">Search</a>
      <a href="#" class="nav-bar-content">Vocabulary</a>
      <a href="#" class="nav-bar-content">Translation</a>
      <a href="about.html" class="nav-bar-content">About</a>
      <a href="#" class="nav-bar-content-2" id="active">Sign up</a>
      <a href="login.html" class="nav-bar-content-2">Log In</a>
    </div>
    <div class="container-login">
      <div class="form-box">
        <form class="form" action="signup.php" method="get">
          <span class="acc-title">Welcome to Cognoscere.</span>
          <span class="subtitle"
            >Let's get started with an email, password, and something to call
            you by.</span
          >
          <div class="form-container">
            <input
              type="text"
              name="name"
              class="input"
              placeholder="First Name"
            />
            <input type="text" name="email" class="input" placeholder="Email" />
            <input
              type="password"
              name="pwd"
              class="input"
              placeholder="Password"
            />
          </div>
          <input type="submit">Sign up</input>
        </form>
        <div class="form-section">
          <p class="footer">
            Already have an account? <a href="login.html">Log In</a>
          </p>
        </div>
      </div>
    </div>
    <script src="index.js"></script>
  </body>
</html>
