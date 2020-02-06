require(`dotenv`).config();
const {Pool}=require('pg');

const pool= new Pool(
			{
				user:`${process.env.DB_USER}`,
				host:`${process.env.DB_HOST}`,
				database:`${process.env.DB_DATABASE}`,
				password:`${process.env.DB_PASSWORD}`,
				port:process.env.DB_PORT,
				ssl:true,
			}
			);
pool.query(`SELECT * FROM owners`,(err,results)=>
			{
				if (err)
				{	
					throw err;
				}
				console.log(results.rows)
			}
		  );
