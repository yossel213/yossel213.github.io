$(document).ready(function() {
    $("#btnLogin").click(function(){
        let usuario = $("#username").val();
        let password = $("#password").val();
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("password", password);
        window.location.href = "pages/home.html";
    })

    $("#showPass").click(function() {
        var passwordInput = $("#password");

        if (passwordInput.attr("type") === "password") {
          passwordInput.attr("type", "text");
        } else {
          passwordInput.attr("type", "password");
        }
      });
  });

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
});
