import LOGIN_USER from "../mutations/login_user.js";
import { useMutation } from "@apollo/client";

const useLoginMutation = () => {
  const [loginUserMutation, { loading, error, data }] = useMutation(
    LOGIN_USER,
    {
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const loginUser = async (login, password) => {
    return await loginUserMutation({
      variables: { login, password },
    });
  };
  return { loginUser, loading, error, data };
};

export { useLoginMutation };
