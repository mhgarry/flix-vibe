import LOGIN_USER from "../mutations/login_user.js";
import { useMutation } from "@apollo/client";

const useLoginMutation = () => {
  const [loginUserMutation, { loading, error, data }] = useMutation(
    LOGIN_USER,
    {
      onError: (error) => {
        console.error(error);
        // show a modal or some kind of seamless error message to the user that dynamically changes based on the error message
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
