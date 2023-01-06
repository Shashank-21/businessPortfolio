import Button from "../components/Button";
import { signInWithGooglePopup } from "../utils/firebaseUtils";

function SigninPage() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div className="h-96">
      SignInPage!
      <Button secondary onClick={logGoogleUser}>
        Google Sign In
      </Button>
    </div>
  );
}

export default SigninPage;
