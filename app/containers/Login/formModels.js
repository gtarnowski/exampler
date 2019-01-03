import t from "tcomb-form-native";

const LoginModel = t.struct({
  username: t.String,
  password: t.String
});

const loginOptions = {
  fields: {
    username: {
      placeholder: "Username",
      error: "Username is Required"
    },
    password: {
      placeholder: "Password",
      error: "Password is Required"
    }
  }
};

const RegisterModel = t.struct({
  username: t.String,
  password: t.String,
  repeatPassword: t.String
});

const registerOptions = {
  fields: {
    username: {
      placeholder: "Username",
      error: "Username is Required"
    },
    password: {
      placeholder: "Password",
      error: "Password is Required"
    },
    repeatPassword: {
      placeholder: "Password Repeat",
      error: "Repeat password is required"
    }
  }
};

export { LoginModel, RegisterModel, registerOptions, loginOptions };
