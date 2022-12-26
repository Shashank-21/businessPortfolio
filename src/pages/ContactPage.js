import { useSelector } from "react-redux";

function ContactPage() {
  const theme = useSelector((state) => state.theme);
  return <div className={`${theme} h-screen page`}>Contact Me!</div>;
}

export default ContactPage;
