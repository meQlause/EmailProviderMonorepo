const AuthLayout = ({ children }) => {
  return (
    <section className="flex mx-auto px-50 gap-10 justify-center items-center h-screen w-screen">
      {children}
    </section>
  );
};

export default AuthLayout;