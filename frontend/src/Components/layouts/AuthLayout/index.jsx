import { Fragment } from "react";
import PageHead from "../../commons/PageHead";

const AuthLayout = ({ children, title }) => {
  return (
    <Fragment>
      <PageHead title={title} />
      <section className="flex mx-auto px-50 gap-10 justify-center items-center h-screen w-screen">
        {children}
      </section>
    </Fragment>
  );
};

export default AuthLayout;