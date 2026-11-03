// API Calling

const getUsernames = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?limit=10",
  );

  const users = await response.json();
  users.forEach((user) => {
    console.log(user.name);
  });
};