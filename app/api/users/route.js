//  /api/users

export async function GET(request) {

// Handle the GET request for /api/users
// Retrieve users from the database

const users = [
  {id: 1, name:'Mort'},
  {id: 2, name:'Bort'},
  {id: 3, name:'Chad'},
];

// Send users as a response
return new Response(JSON.stringify(users));
}