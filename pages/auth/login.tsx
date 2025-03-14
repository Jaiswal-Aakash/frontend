import { useState } from "react";
import { useRouter } from "next/router";
import { User, Lock } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const adminUser = { username: "admin", password: "admin123" };

    if (
      credentials.username === adminUser.username &&
      credentials.password === adminUser.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password!");
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Sign in
          </h2>
          <p className="text-gray-600 text-center mt-2">
            Enter your login details to sign in
          </p>

          {error && <p className="text-red-500 text-center mt-3">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            {/* Username Field */}
            <div className="relative">
              {/* <User className="absolute left-4 top-4 text-gray-500" /> */}
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-4 pl-12 text-lg text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              {/* <Lock className="absolute left-4 top-4 text-gray-500" /> */}
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-4 pl-12 text-lg text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center bg-blue-500 text-white p-4 text-lg rounded-lg hover:bg-blue-600 transition duration-300 disabled:opacity-50"
              disabled={
                loading || !credentials.username || !credentials.password
              }
            >
              {loading ? (
                <span className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* home redirect */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">Or</p>
            <button
              onClick={() => router.push("/")}
              className="mt-2 flex items-center justify-center w-full bg-gray-100 border border-gray-300 p-3 rounded-lg hover:bg-gray-200 text-black"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2 relative">
        <Image
          src="/bg.jpeg"
          alt="Sign in Background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
