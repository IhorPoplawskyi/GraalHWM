const signInEndpoint = "https://treasure-bay.onrender.com/auth/sign-in";

const signUpEndpoint = "https://treasure-bay.onrender.com/users/sign-up";

export const signIn = async ({ email, password }) => {
  const obj = {
    email: email,
    password: password,
  };
  try {
    const response = await fetch(
      signInEndpoint,
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(obj);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const signUp = async ({ username, email, password }) => {
  const obj = {
    nickname: username,
    email: email,
    password: password,
  };
  try {
    const response = await fetch(
      signUpEndpoint,
      {
        method: "POST",
        body: JSON.stringify(obj),
        headers: { "Content-type": "application/json" },
      }
    );
    const data = await response.json();
    console.log(obj);
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};