import REGISTER_USER from "../mutations/register_user.js";
import { useMutation } from "@apollo/client";

const useRegisterMutation = () => {
  const [registerUserMutation, { loading, error, data }] = useMutation(
    REGISTER_USER,
    {
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const registerUser = async (username, email, password) => {
    return await registerUserMutation({
      variables: { username, email, password },
    });
  };
  return { registerUser, loading, error, data };
};

export { useRegisterMutation };
