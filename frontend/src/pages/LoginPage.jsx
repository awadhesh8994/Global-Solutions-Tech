import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const baseUrl = "http://localhost:8080"; // Change this to your actual base URL

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (errors.general) {
      setErrors((prev) => ({ ...prev, general: "" }));
    }
    if (successMessage) {
      setSuccessMessage("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      const loginData = {
        email: formData.email,
        password: formData.password,
      };

      try {
        const response = await fetch(`${baseUrl}/api/users/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Login failed");
        }

        // Success - store token and user data
        console.log("Login successful:", data);

        // Store authentication token if provided
        if (data.token) {
          localStorage.setItem("authToken", data.token);
        }

        // Store user data
        localStorage.setItem("userData", JSON.stringify(data));

        // Store remember me preference
        if (formData.remember) {
          localStorage.setItem("rememberMe", "true");
        }

        setSuccessMessage(
          `Welcome back! Redirecting to ${
            data.role?.name || "USER"
          } dashboard...`
        );

        // Redirect based on role
        setTimeout(() => {
          const role = data.role?.name;
          switch (role) {
            case "SUPER_ADMIN":
              window.location.href = "/super-admin/dashboard";
              break;
            case "USER":
              window.location.href = "/dashboard";
              break;
            default:
              window.location.href = "/dashboard";
          }
        }, 1500);
      } catch (error) {
        console.error("Login error:", error);
        setErrors({
          general:
            error.message || "Invalid email or password. Please try again.",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            Welcome back! Please sign in to continue
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            {/* Form Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Sign In</h2>
              <p className="text-sm text-gray-600">
                Enter your credentials to access your account
              </p>
            </div>

            {/* Success Message */}
            {successMessage && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-sm text-green-800">{successMessage}</p>
              </div>
            )}

            {/* Error Message */}
            {errors.general && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-sm text-red-800">{errors.general}</p>
              </div>
            )}

            {/* Login Form */}
            <div className="space-y-5">
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`w-full pl-10 pr-12 py-3 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  loading
                    ? "opacity-50 cursor-not-allowed hover:transform-none"
                    : ""
                }`}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-semibold text-blue-600 hover:text-blue-700 transition"
              >
                Create one now
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            By signing in, you agree to our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
