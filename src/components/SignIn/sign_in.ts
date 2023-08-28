export const sign_in = (data: { username: string; password: string; }) => {
    fetch("https://tca-backend.azurewebsites.net/api/users/sign-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => localStorage.setItem('tca_data', data))
        .catch(err => console.log(err));
};