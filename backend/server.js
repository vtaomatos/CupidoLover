const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const app = express();
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

  // Mocked data
  const users = [
    {
      id: 1,
      name: 'John Doe',
      description: 'A brief description about John',
      photo: `https://picsum.photos/200?random=${Math.random()}`,
      isInterested: true
    },
    {
      id: 2,
      name: 'Jane Doe',
      description: 'A brief description about Jane',
      photo: `https://picsum.photos/200?random=${Math.random()}`,
      isInterested: false
      },
      {
        id: 3,
        name: 'Bob Smith',
        description: 'A brief description about Bob',
        photo: `https://picsum.photos/200?random=${Math.random()}`,
        isInterested: true
      },
      {
        id: 4,
        name: 'Alice Johnson',
        description: 'A brief description about Alice',
        photo: `https://picsum.photos/200?random=${Math.random()}`,
        isInterested: false
      },
      {
        id: 5,
        name: 'Charlie Brown',
        description: 'A brief description about Charlie',
        photo: `https://picsum.photos/200?random=${Math.random()}`,
        isInterested: true
      },
      {
        id: 6,
        name: 'Marry Poppins',
        description: 'A brief description about Marry',
        photo: `https://picsum.photos/200?random=${Math.random()}`,
        isInterested: false
      },
      {
        id: 7,
        name: 'James Bond',
        description: 'A brief description about James',
        photo: `https://picsum.photos/200?random=${Math.random()}`,
        isInterested: true
      },
      {
        id: 8,
        name: 'Harry Potter',
        description: 'A brief description about Harry',
        photo: `https://picsum.photos/200?random=${Math.random()}`,
        isInterested: false
      },
      {
        id: 9,
        name: 'Ron Weasley',
        description: 'A brief description about Ron',
        photo: `https://picsum.photos/200?random=${Math.random()}`,
        isInterested: true
      },
      {
        id: 10,
        name: 'Hermione Granger',
        description: 'A brief description about Hermione',
        photo: `https://picsum.photos/200?random=${Math.random()}`,
        isInterested: false
      }
    ];

// Login route
app.post('/login', (req, res) => {
  console.log('Login request received'); // Log to indicate that a request has been received

  // In a real application, you would authenticate the user here
  const { identifier } = req.body;

  console.log(`Identifier received: ${identifier}`); // Log the received identifier

  // Regex patterns for RG and CPF
  const rgPattern = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[0-9]{1}$/;
  const cpfPattern = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/;

  if (rgPattern.test(identifier) || cpfPattern.test(identifier)) {
    console.log('Valid identifier, logging in'); // Log successful login
    res.json({ success: true, message: 'Logged in successfully' });
  } else {
    console.log('Invalid identifier, login failed'); // Log failed login
    res.json({ success: false, message: 'Invalid RG or CPF' });
  }
});

// Route to get users catalog
app.get('/users', (req, res) => {
  res.json(users);
});

// Other routes...

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
