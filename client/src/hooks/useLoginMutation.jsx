import login_user from "../mutations/login_user.js";
import { useMutation } from "@apollo/client";

export const useLoginMutation = () => {
  const [loginUserMutation, { loading, error, data }] = useMutation(
    login_user,
    {
      onError: (error) => {
        console.error(error);
        // show a modal or some kind of seamless error message to the user that dynamically changes based on the error message
      },
    }
  );

  const loginUser = async (username, password) => {
    return await loginUserMutation({
      variables: { username, password },
    });
  };
  return { loginUser, loading, error, data };
};
