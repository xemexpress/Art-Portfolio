var router = require('express').Router()
var nodemailer = require('nodemailer')
var auth = require('../auth')

router.post('/', auth.optional, function(req, res, next){
  console.log(req.body)
  if(!req.body.mail.messager){
    return res.status(422).json({ errors: { Name: "can't be empty :)" } })
  }

  if(!req.body.mail.message){
    return res.status(422).json({ errors: { Content: "can't be blank :)" } })
  }

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'theartistserver@gmail.com',
      clientId: '920036113165-c1tt6u0p11v6cei4qv0t3enihkkvhn54.apps.googleusercontent.com',
      clientSecret: 'nN7gCJhkDsKwY2gjKChYG5Yd',
      refreshToken: '1/dUIC0NQmrNtYF5zfLY8m2Nh6wd-9622DW8XOh9RxZQk',
      accessToken: 'ya29.GltNBZVkges1TP3MJQEMw5NdG3epoSGVq1n-BgUqbRX5Qx1lkPuL1Ygi6aNUOIgI1tXeltv4HnBBJ7C7UsXuHV-rHK8Eu5tS-Rv58o7gP0D4ifMHqm_PAUQ0-vsN'
    }
  })

  let mailOptions = {
    from: `${req.body.mail.messager} <theartistserver@gmail.com>`,
    to: 'theartistserver@gmail.com',
    subject: 'Message for the Artist',
    html: `
      <!doctype html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>Message from Yuen-Pik-Kwan</title>
          <style>
            /* -------------------------------------
                GLOBAL RESETS
            ------------------------------------- */
            img {
              border: none;
              -ms-interpolation-mode: bicubic;
              max-width: 100%; }

            body {
              background-color: #f6f6f6;
              font-family: sans-serif;
              -webkit-font-smoothing: antialiased;
              font-size: 14px;
              line-height: 1.4;
              margin: 0;
              padding: 0;
              -ms-text-size-adjust: 100%;
              -webkit-text-size-adjust: 100%; }

            table {
              border-collapse: separate;
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              width: 100%; }
              table td {
                font-family: sans-serif;
                font-size: 14px;
                vertical-align: top; }

            /* -------------------------------------
                BODY & CONTAINER
            ------------------------------------- */

            .body {
              background-color: #f6f6f6;
              width: 100%; }

            /* Set a max-width, and make it display as block so it will automatically stretch to that width, but will also shrink down on a phone or something */
            .container {
              display: block;
              Margin: 0 auto !important;
              /* makes it centered */
              max-width: 580px;
              padding: 10px;
              width: 580px; }

            /* This should also be a block element, so that it will fill 100% of the .container */
            .content {
              box-sizing: border-box;
              display: block;
              Margin: 0 auto;
              max-width: 580px;
              padding: 10px; }

            /* -------------------------------------
                HEADER, FOOTER, MAIN
            ------------------------------------- */
            .main {
              background: #ffffff;
              border-radius: 3px;
              width: 100%; }

            .wrapper {
              box-sizing: border-box;
              padding: 20px; }

            .content-block {
              padding-bottom: 10px;
              padding-top: 10px;
            }

            .footer {
              clear: both;
              Margin-top: 10px;
              text-align: center;
              width: 100%; }
              .footer td,
              .footer p,
              .footer span,
              .footer a {
                color: #999999;
                font-size: 12px;
                text-align: center; }

            /* -------------------------------------
                TYPOGRAPHY
            ------------------------------------- */dddddd
            p,
            ul,
            ol {
              font-family: sans-serif;
              font-size: 14px;
              font-weight: normal;
              margin: 0;
              Margin-bottom: 15px; }
              p li,
              ul li,
              ol li {
                list-style-position: inside;
                margin-left: 5px; }

            a {
              color: #3498db;
              text-decoration: underline; }

            /* -------------------------------------
                BUTTONS
            ------------------------------------- */
            .btn {
              box-sizing: border-box;
              width: 100%; }
              .btn > tbody > tr > td {
                padding-bottom: 15px; }
              .btn table {
                width: auto; }
              .btn table td {
                background-color: #ffffff;
                border-radius: 5px;
                text-align: center; }
              .btn a {
                background-color: #ffffff;
                border: solid 1px #3498db;
                border-radius: 5px;
                box-sizing: border-box;
                color: #3498db;
                cursor: pointer;
                display: inline-block;
                font-size: 14px;
                font-weight: bold;
                margin: 0;
                padding: 12px 25px;
                text-decoration: none;
                text-transform: capitalize; }

            .btn-primary table td {
              background-color: #3498db; }

            .btn-primary a {
              background-color: #3498db;
              border-color: #3498db;
              color: #ffffff; }

            /* -------------------------------------
                OTHER STYLES THAT MIGHT BE USEFUL
            ------------------------------------- */

            .powered-by a {
              text-decoration: none; }

            /* -------------------------------------
                RESPONSIVE AND MOBILE FRIENDLY STYLES
            ------------------------------------- */
            @media only screen and (max-width: 620px) {
              table[class=body] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important; }
              table[class=body] p,
              table[class=body] ul,
              table[class=body] ol,
              table[class=body] td,
              table[class=body] span,
              table[class=body] a {
                font-size: 16px !important; }
              table[class=body] .wrapper,
              table[class=body] .article {
                padding: 10px !important; }
              table[class=body] .content {
                padding: 0 !important; }
              table[class=body] .container {
                padding: 0 !important;
                width: 100% !important; }
              table[class=body] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important; }
              table[class=body] .btn table {
                width: 100% !important; }
              table[class=body] .btn a {
                width: 100% !important; }
              table[class=body] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important; }}

            /* -------------------------------------
                PRESERVE THESE STYLES IN THE HEAD
            ------------------------------------- */
            @media all {
              .ExternalClass {
                width: 100%; }
              .ExternalClass,
              .ExternalClass p,
              .ExternalClass span,
              .ExternalClass font,
              .ExternalClass td,
              .ExternalClass div {
                line-height: 100%; }
              .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important; }
              .btn-primary table td:hover {
                background-color: #34495e !important; }
              .btn-primary a:hover {
                background-color: #34495e !important;
                border-color: #34495e !important; } }

          </style>
        </head>
        <body>
          <table border="0" cellpadding="0" cellspacing="0" class="body">
            <tr>
              <td>&nbsp;</td>
              <td class="container">
                <div class="content">

                  <!-- START CENTERED WHITE CONTAINER -->
                  <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">${req.body.mail.message}</span>
                  <table class="main">

                    <!-- START MAIN CONTENT AREA -->
                    <tr>
                      <td class="wrapper">
                        <table border="0" cellpadding="0" cellspacing="0">
                          <tr>
                            <td>
                              <p>Hi there,</p>
                              <p>After visiting your site, <b>${req.body.mail.messager}</b> said:</p>
                              <p align="center"><b>${req.body.mail.message}</b></p>
                            </td>
                          </tr>
                        </table>
                        <br/><br/><br/><br/>
                        <table border="0" cellpadding="0" cellspacing="0" class="btn btn-primary">
                          <tbody>
                            <tr>
                              <td align="center">
                                <table border="0" cellpadding="0" cellspacing="0">
                                  <tbody>
                                    <tr>
                                      <td> <a href="https://yuen-pik-kwan.firebaseapp.com/#/" target="_blank">Go to your Site</a> </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>

                  <!-- END MAIN CONTENT AREA -->
                  </table>

                  <!-- START FOOTER -->
                  <div class="footer">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td class="content-block powered-by">
                          Powered by <a href="http://htmlemail.io">HTMLemail</a> & <a href="https://github.com/xemexpress/Art-Portfolio">Art-Portfolio</a>.
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!-- END FOOTER -->

                <!-- END CENTERED WHITE CONTAINER -->
                </div>
              </td>
              <td>&nbsp;</td>
            </tr>
          </table>
        </body>
      </html>
    `
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if(err){
      return res.status(422).json({
        errors: { 'message': `is not sent. Please check this error: ${err.errno}` }
      })
    }

    return res.status(200).json({ message: 'sent' })
  })
})

module.exports = router
