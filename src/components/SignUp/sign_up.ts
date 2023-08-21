export const sign_up = (data: { firstname: string, lastname: string, email: string, username: string; password: string }) => {
  fetch("https://tca-backend.azurewebsites.net/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
};
