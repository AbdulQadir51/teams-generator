// To generate HTML from the data
function generateHTML(members) {

    var markup = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Team Profile</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        />
        <link href="style.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <a class="navbar-brand">My Team</a>
          </div>
        </nav>
        <div class="content">
          <div class="container">
            <div class="row">
             `

    // Team Members
    for (let i = 0; i < members.length; i++) {

        // Team Members Name and Role
        markup += `<div class="col-lg-4">
        <div class="text-center card-box">
          <div class="member-card pt-2 pb-2">
            <div class="thumb-lg member-thumb mx-auto">
              <div class="rounded-circle img-thumbnail">
                <i class="fa fa-user"></i>
              </div>
            </div>
            <div class="">
              <h4>${members[i].getName()}</h4>
              <p class="text-muted">
                @${members[i].getRole()} 
              </p>
            </div>`


        // Engineers github Username
        if (members[i].getRole() == 'Engineer') {

            markup += ` <ul class="social-links list-inline">
                <li class="list-inline-item">
                  <a
                    title=""
                    data-placement="top"
                    data-toggle="tooltip"
                    class="tooltips"
                    href="https://github.com/${members[i].getGithub()}"
                    data-original-title="Github"><i class="fa fa-github"></i></a>
                </li>
              </ul>`
        }

        // Manager office number
        if (members[i].getRole() == 'Manager') {

            markup += ` <ul class="social-links list-inline">
              <li class="list-inline-item">
               <p>Office Number: ${members[i].getOfficeNumber()}</p>
              </li>
            </ul>`
        }
        // Intern School
        if (members[i].getRole() == 'Intern') {

            markup += ` <ul class="social-links list-inline">
            <li class="list-inline-item">
             <p>School: ${members[i].getSchool()}</p>
            </li>
          </ul>`
        }

        // Team Members Email
        markup += `<a href="mailto:${members[i].getEmail()}"
              class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">
              Email Now
            </a>
          </div>
        </div>
      </div>`
    }

    markup += `</div>
    </div>
    <!-- container -->
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
    </html>`
    return markup
}

module.exports = generateHTML