import { useMutation } from "@tanstack/react-query";
import prepareApiUrl from "@Utils/prepareApiUrl";
import extractSubdomain from "@Utils/extractSubdomain";
import { Navigate, useNavigate } from "react-router-dom";

const USE_SIGN_IN_QUERY_KEY = 'login';
const SIGN_IN_API_URL = prepareApiUrl(`/${USE_SIGN_IN_QUERY_KEY}`, false);
const SUBDOMAIN = extractSubdomain()

function useSignIn() {
  const navigation = useNavigate();
  const { data, isError, error, mutateAsync, isLoading, isPending } = useMutation({
    mutationKey: [USE_SIGN_IN_QUERY_KEY],
    mutationFn: signInFuction,
    retry: false,
    onSuccess: (data) => {
      localStorage.setItem('token', data?.token);
      localStorage.setItem('user', JSON.stringify(data?.user));
      navigation('/dashboard'); // Redirect to home page on successful login
    },
  })

  return {
    data,
    isLoading,
    isPending,
    isError,
    error,
    mutateAsync
  };
}

const signInFuction = async ({ email , password, role }) => {
      const response = await fetch(SIGN_IN_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'CUSTOM-Subdomain': SUBDOMAIN,
        },
        body: JSON.stringify({"user": { email, password, role: role || 'student' }}),
      });

      if (!response.ok) {
        throw new Error('Sign-in failed');
      }

      return response.json();
    };

export default useSignIn;