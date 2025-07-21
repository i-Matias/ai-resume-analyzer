import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export const meta = () => [
  {
    title: "Resumind | Auth",
  },
  {
    name: "description",
    content: "Login or register to access your resumes and feedback.",
  },
];

export default function Auth() {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const next = location.search.split("next=")[1];
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      console.log(next === undefined, typeof next);
      navigate(next || "/");
    }
  }, [auth.isAuthenticated]);

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen flex items-center justify-center">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white. rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Login to Continue Your Job Journey</h2>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-plus">
                Singing you in...
              </button>
            ) : (
              <>
                {auth.isAuthenticated ? (
                  <button className="auth-button" onClick={auth.signOut}>
                    <p> Log out</p>
                  </button>
                ) : (
                  <button className="auth-button" onClick={auth.signIn}>
                    <p>Log in</p>
                  </button>
                )}
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
