var http = require("http");
var employees = require("./Employee")
var message = require("./message")
//TODO - Use Employee Module here
console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.write(message)
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
        }

        if (req.url === '/employee') {
            res.write(JSON.stringify(employees))
            //TODO - Display all details for employees in JSON format
        }

        if (req.url === '/employee/names') {
            let namesArray = employees.map(emp => `${emp.firstName} ${emp.lastName}`)
            namesArray.sort()
            res.write(JSON.stringify(namesArray))
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
        }

        if (req.url === '/employee/totalsalary') {
            let sumOfSalaries = employees.reduce((acc,v,i,a)=>{
                acc = acc + v.Salary
                return acc
            },0)
            let sumOfSalariesObject = {"total_salary":sumOfSalaries}
            res.write(JSON.stringify(sumOfSalariesObject))
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
    }
    res.end()
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})