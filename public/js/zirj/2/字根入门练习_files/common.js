$(document).ready(function () {


    $('#logout').click(()=>{
        localStorage.removeItem('loginTime')
        localStorage.removeItem('loginUser')
        $(location).attr('href', './index.html')
    
    
      })

      let loginUser = JSON.parse(localStorage.getItem('loginUser'))
        let loginTime = localStorage.getItem('loginTime')

      if (loginUser) {
        $('.module-right').removeClass('hidden')
        $('.logbtn-box').addClass('hidden')
        $('#loginTime').text(loginTime)
        $('#uname').text(loginUser.uname)
      }


})