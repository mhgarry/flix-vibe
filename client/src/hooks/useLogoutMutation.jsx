import LOGOUT_USER from "../mutations/logout_user.js";
import { useMutation } from "@apollo/client";

const useLogoutMutation = () => {
  const [logoutUserMutation, { loading, error, data }] = useMutation(
    LOGOUT_USER,
    {
      onError: (error) => {
        console.error(error);
      },
    }
  );
  const logoutUser = async (token) => {
    return await logoutUserMutation({
      variables: { token },
    });
  };
};

export { useLogoutMutation };
