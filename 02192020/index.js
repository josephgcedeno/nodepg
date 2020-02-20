const path = require('path')
const express = require('express')
const app = express()
// slug - landing page


// slug - home page
app.get('/home', function(req, res) {
    res.end(`
    	<html>
		<head>
		    <title>Charter</title>
		    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" />
		    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
			<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
			<style>
				body {
				  margin: 0;
				  font-family: Arial, Helvetica, sans-serif;
				}

				.topnav {
				  overflow: hidden;
				  background-color: #333;
				}

				.topnav a {
				  float: left;
				  display: block;
				  color: #f2f2f2;
				  text-align: center;
				  padding: 14px 16px;
				  text-decoration: none;
				  font-size: 17px;
				}

				.topnav a:hover {
				  background-color: #ddd;
				  color: black;
				}

				.topnav a.active {
				  background-color: #4CAF50;
				  color: white;
				}

				.topnav .icon {
				  display: none;
				}

				@media screen and (max-width: 600px) {
				  .topnav a:not(:first-child) {display: none;}
				  .topnav a.icon {
				    float: right;
				    display: block;
				  }
				}

				@media screen and (max-width: 600px) {
				  .topnav.responsive {position: relative;}
				  .topnav.responsive .icon {
				    position: absolute;
				    right: 0;
				    top: 0;
				  }
				  .topnav.responsive a {
				    float: none;
				    display: block;
				    text-align: left;
				  }
				}
			</style>
		</head>
		<body>
		<div class="topnav" id="myTopnav">
		  <a href="/home" class="active">Home</a>
		  <a href="/petowners">Pet Owner</a>
		  <a href="#contact">Contact</a>
		  <a href="#about">About</a>
		  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
		    <i class="fa fa-bars"></i>
		  </a>
		</div>
		</body>
		<script>
		 	function myFunction() {
			  var x = document.getElementById("myTopnav");
			  if (x.className === "topnav") {
			    x.className += " responsive";
			  } else {
			    x.className = "topnav";
			  }
			}
		</script>
		</html>

    	`)
})

// slug - get all countries
app.get('/petowners', function(req, res1) {
    
    // logic

    require('dotenv').config()
    const { Pool } = require('pg')
    const pool = new Pool({
      user: `${process.env.DB_USER}`, 
      host: `${process.env.DB_HOST}`,
      database: `${process.env.DB_DATABASE}`, 
      password: `${process.env.DB_PASSWORD}`, 
      port: process.env.DB_PORT, 
      ssl:true,  
    })
        
    pool.query('SELECT * FROM owners', (err, res) => {
/*      console.log(res.rows)*/
      const arrLeng=res.rows.length;

      let tbody = ``;
      for(let i=0;i<arrLeng;i++){
        tbody += `
            <tr>
                <td>${res.rows[i]['owner_id']}</td>
                <td>${res.rows[i]['name']}</td>
                <td>${res.rows[i]['gender']}</td>
                <td>${res.rows[i]['age']}</td>
                <td>${res.rows[i]['occupation']}</td>
               
            </tr>
        `;
      }
   
      res1.end(`

		<html>
		<head>
		    <title>Charter</title>
		   
		    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css" />
		    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
			<script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
			<style>
				body {
				  margin: 0;
				  font-family: Arial, Helvetica, sans-serif;
				}

				.topnav {
				  overflow: hidden;
				  background-color: #333;
				}

				.topnav a {
				  float: left;
				  display: block;
				  color: #f2f2f2;
				  text-align: center;
				  padding: 14px 16px;
				  text-decoration: none;
				  font-size: 17px;
				}

				.topnav a:hover {
				  background-color: #ddd;
				  color: black;
				}

				.topnav a.active {
				  background-color: #4CAF50;
				  color: white;
				}

				.topnav .icon {
				  display: none;
				}

				@media screen and (max-width: 600px) {
				  .topnav a:not(:first-child) {display: none;}
				  .topnav a.icon {
				    float: right;
				    display: block;
				  }
				}

				@media screen and (max-width: 600px) {
				  .topnav.responsive {position: relative;}
				  .topnav.responsive .icon {
				    position: absolute;
				    right: 0;
				    top: 0;
				  }
				  .topnav.responsive a {
				    float: none;
				    display: block;
				    text-align: left;
				  }
				}
			</style>
		</head>
		<body>
		<div class="topnav" id="myTopnav">
		  <a href="/home">Home</a>
		  <a href="/petowners" class="active">PetOwners</a>
		  <a href="#contact">Contact</a>
		  <a href="#about">About</a>
		  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
		    <i class="fa fa-bars"></i>
		  </a>
		</div>
      	<div class="alert alert-success" role="alert">
            <h1>EXPRESSWORK PGDB WITH DATATABLE API AND NAV W3SCHOOL </h1>
          </div>  
            <table id="example" class="display" style="width:100%">
                <thead>
                    <tr>
                        <th>Owner ID</th>
                        <th>Owner NAME</th>
                        <th>Owner Gender</th>
                        <th>Owner Age</th>
                        <th>Owner Occupation</th>
                    </tr>
                </thead>
                <tbody>
                    ${tbody}
                </tbody>
            </table>
	    </body>
		 <script>
		 	function myFunction() {
			  var x = document.getElementById("myTopnav");
			  if (x.className === "topnav") {
			    x.className += " responsive";
			  } else {
			    x.className = "topnav";
			  }
			}
			$(document).ready(function() {
    				$('#example').DataTable();
			});
         </script>
		
</html>
 		
         
        `)
      pool.end()
    })
  
    
})

app.listen(3000)