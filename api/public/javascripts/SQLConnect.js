var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var connection;

var config = {
    server: "CPCINPUDV003505",
    options: {
        database: "testdb"
    },
    authentication: {
      type: "default",
      options: {  
        userName: "Usr1",
        password: "1234567890",
       
      }
    }
  };

  module.exports = {
connect : function connect(){
  connection = new Connection(config);

  connection.on('connect', function(err,res) {
    if(err) {
      console.log('Error: ', err)
    }
    // If no error, then good to go...
    console.log("Connected");
  });
},

executeStatement:function executeStatement(res) {

  let data=[]
  
      request = new Request("select [ServerName],[IP],[Size] from [dbo].[Server_Log]", function(err, rowCount) {
      if (err) {
        console.log(err);
      } else {
        console.log(rowCount + ' rows');
        res.send(JSON.stringify(data))
      }
    });

    request.on('row', (columns)=> {
      
        data.push({'ServerName': columns[0].value, 'IP':columns[1].value,'Size':columns[2].value})
        console.log(data);
      
    }
    
    );
   
    
    
   connection.execSql(request);
  
   
  }
}


