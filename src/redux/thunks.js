export const signUpThunk = async ({username, email, password}) => {
  const obj = {
    'nickname': username,
    'email': email,
    'password': password,
  }  
  try {
    const response = await fetch(
      `https://treasure-bay.onrender.com/users/sign-up`, {
        method: 'POST',
        body: obj,
      }
    );
    const data = await response.json();
    console.log(obj)
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};
