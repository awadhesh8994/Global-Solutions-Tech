import React, { useState, useEffect } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Building2,
  User,
  UserPlus,
} from "lucide-react";

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyId: "",
    companyName: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  // Fetch companies from API
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      // Replace this URL with your actual API endpoint
      // const response = await fetch('YOUR_API_ENDPOINT/companies');
      // const data = await response.json();
      // setCompanies(data);

      // Mock data for demonstration
      setTimeout(() => {
        const mockCompanies = [
          { id: "1", name: "Tech Corp Inc." },
          { id: "2", name: "Digital Solutions Ltd." },
          { id: "3", name: "Innovation Systems" },
          { id: "4", name: "Global Enterprises" },
          { id: "5", name: "StartUp Ventures" },
        ];
        setCompanies(mockCompanies);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error fetching companies:", error);
      setLoading(false);
    }
  };

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
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.companyId) {
      newErrors.companyId = "Please select a company";
    } else if (formData.companyId === "other" && !formData.companyName.trim()) {
      newErrors.companyName = "Please enter your company name";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept the terms and conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Prepare data for API
      // Replace the existing userData object with this:
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        companyId: formData.companyId === "other" ? null : formData.companyId,
        companyName:
          formData.companyId === "other" ? formData.companyName : null,
        role: "user",
      };

      console.log("User data to send to backend:", userData);

      // TODO: Call your backend API here
      // Example:
      // fetch('YOUR_API_ENDPOINT/register', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(userData)
      // })
      // .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      //   // Redirect to login or dashboard
      // })
      // .catch(error => console.error('Error:', error));

      alert("Form submitted! Check console for data.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Brand */}
        <div className="text-center mb-4 pt-20">
          <p className="text-gray-800">Create your account to get started</p>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            {/* Form Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Sign Up</h2>
              <p className="text-sm text-gray-600">
                Fill in the details below to create your account
              </p>
            </div>

            {/* Signup Form */}
            <div className="space-y-4">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
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

              {/* Company Dropdown */}
              <div>
                <label
                  htmlFor="companyId"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Select Company <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building2 className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    name="companyId"
                    id="companyId"
                    value={formData.companyId}
                    onChange={handleChange}
                    disabled={loading}
                    className={`w-full pl-10 pr-4 py-3 border ${
                      errors.companyId ? "border-red-500" : "border-gray-300"
                    } rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 appearance-none bg-white cursor-pointer`}
                  >
                    <option value="">
                      {loading ? "Loading companies..." : "Choose a company"}
                    </option>
                    {companies.map((company) => (
                      <option key={company.id} value={company.id}>
                        {company.name}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
                {errors.companyId && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.companyId}
                  </p>
                )}
              </div>

              {/* Manual Company Input - Shows when "Other" is selected */}
              {formData.companyId === "other" && (
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                      className={`w-full pl-10 pr-4 py-3 border ${
                        errors.companyName
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                    />
                  </div>
                  {errors.companyName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.companyName}
                    </p>
                  )}
                </div>
              )}

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password <span className="text-red-500">*</span>
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

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className={`w-full pl-10 pr-12 py-3 border ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms and Conditions */}
              <div>
                <label className="flex items-start cursor-pointer group">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleChange}
                    className={`mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer ${
                      errors.terms ? "border-red-500" : ""
                    }`}
                  />
                  <span className="ml-3 text-sm text-gray-700">
                    I accept the{" "}
                    <a
                      href="#"
                      className="font-semibold text-blue-600 hover:text-blue-700 transition"
                    >
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="font-semibold text-blue-600 hover:text-blue-700 transition"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </label>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-500">{errors.terms}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Create Account
              </button>
            </div>
          </div>

          {/* Login Link */}
          <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-blue-600 hover:text-blue-700 transition"
              >
                Sign in here
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            Protected by reCAPTCHA and subject to the Google{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
