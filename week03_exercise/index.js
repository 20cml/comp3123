const http = require('http');

// Use Employee Module here
const employeeModule = require('./Employee');
const allEmployees = employeeModule.getAllEmployees();
console.log(allEmployees);

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
  if (req.method !== 'GET')   
 {
    // Improved error handling for non-GET requests
    if (req.method === 'POST') {
      res.writeHead(405); // Method Not Allowed
    } else {
      res.writeHead(400); // Bad Request
    }
    res.end(`{"error": "${http.STATUS_CODES[res.statusCode]}"}`);
  } else {
    if (req.url === '/') {
      // Display message
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Welcome to Lab Exercise 03</h1>');

    } else if (req.url === '/employee') {
      // Display all details for employees
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(allEmployees));

    } else if (req.url === '/employee/names') {
      // Display employee names
      const names = employees.map(employee => `${employee.firstName} ${employee.lastName}`).sort();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(names));   

    } else if (req.url === '/employee/totalsalary') {
      // Display total salary
      const totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ total_salary: totalSalary   
 }));
    } else {
      // Handle not found (404)
      res.writeHead(404);
      res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
    }
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});