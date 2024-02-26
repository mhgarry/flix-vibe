import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../mutations/login_user";

export const useLoginMutation = () => {
  const [loginUserMutation, { loading, error, data }] = useMutation(
    LOGIN_USER,
    {
      onError: (error) => {
        // will pull in error and the context of the error to generate the correct error message and display to the user by pulling in a modal or some kind of seamless error message display
        console.error(error);
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
