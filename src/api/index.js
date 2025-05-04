const signInEndpoint = "https://treasure-bay.onrender.com/auth/sign-in";
const signUpEndpoint = "https://treasure-bay.onrender.com/users/sign-up";
const adminUsersEndpoint = "https://treasure-bay.onrender.com/admin-users";


export const signIn = async ({ Email, Password }) => {
  const obj = {
    email: Email,
    password: Password,
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
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const signUp = async ({ Username, Email, Password }) => {
  const obj = {
    nickname: Username,
    email: Email,
    password: Password,
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
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getUsers = async (token) => {

  try {
    const response = await fetch(
      adminUsersEndpoint, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const setUserAttempts = async (token, id, attempts) => {
  try {
    const response = await fetch(
      `${adminUsersEndpoint}/attempts`,
      {
        body: JSON.stringify({
          id,
          attempts,
        }),
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const setUserRole = async (token, id, role) => {
  try {
    const response = await fetch(`${adminUsersEndpoint}/role`, {
      body: JSON.stringify({
        id,
        role,
      }),
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data)
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const setUserStatus = async (token, id, status) => {
  try {
    const response = await fetch(`${adminUsersEndpoint}/status`, {
      body: JSON.stringify({
        id,
        status,
      }),
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getCurrentUser = async (token) => {
  try {
    const response = await fetch(
      "https://treasure-bay.onrender.com/users/current",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};