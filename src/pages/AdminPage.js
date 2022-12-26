import { useSelector } from "react-redux";

function AdminPage() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`${theme} h-screen page`}>
      Here's what the Admin needs to know!
    </div>
  );
}

export default AdminPage;
