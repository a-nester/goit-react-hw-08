import AppBar from "../AppBar/AppBar";
import Message from "../Message/Message";

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Message />
      {/* {isLoading && <div>...Loading</div>} */}
    </>
  );
};

export default Layout;
