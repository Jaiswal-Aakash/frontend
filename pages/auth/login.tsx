import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { User, Lock } from "lucide-react";

export default function LoginPage() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      username: credentials.username,
      password: credentials.password,
    });

    setLoading(false);

    if (res?.error) {
      setError(res.error || "Invalid credentials!");
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700">
      <div className="bg-white/10 backdrop-blur-md p-12 rounded-2xl shadow-xl w-[450px] min-h-[550px] border border-white/30">
        <h2 className="text-3xl font-semibold text-center text-white tracking-wide">Admin Login</h2>

        {error && <p className="text-red-400 text-center mt-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Username Field */}
          <div className="relative">
            <User className="absolute left-4 top-4 text-white/70 text-xl" />
            <input
              type="text"
              placeholder="Username"
              autoFocus
              aria-label="Username"
              className="w-full p-4 pl-14 text-lg text-white bg-transparent border border-white/40 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-4 top-4 text-white/70 text-xl" />
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              className="w-full p-4 pl-14 text-lg text-white bg-transparent border border-white/40 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center bg-blue-500 text-white p-4 text-lg rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 transition duration-300 disabled:opacity-50"
            disabled={loading || !credentials.username || !credentials.password}
          >
            {loading ? (
              <span className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full"></span>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Back to Home Button */}
        <button
          onClick={() => router.push("/")}
          className="mt-6 w-full bg-gray-500 text-white p-4 text-lg rounded-lg hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-700 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
