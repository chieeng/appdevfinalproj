import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUp = () => {
    if (!formData.fullName || !formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Check if email already exists
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (existingUsers.some(user => user.email.toLowerCase() === formData.email.toLowerCase())) {
      alert("This email is already registered");
      return;
    }

    // Store new user
    const newUser = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password
    };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="auth-page">

      {/* CENTER */}
      <div className="auth-container">
        <div className="auth-card">

          <h3>Create Account</h3>
          <p className="subtitle">Sign up to start booking amazing properties!</p>

          {/* SOCIAL LOGIN */}
          <button className="social google">Sign up with Google</button>
          <button className="social facebook">Sign up with Facebook</button>
          <button className="social apple">Sign up with Apple</button>

          <div className="divider">or</div>

          {/* FORM */}
          <input 
            type="text" 
            placeholder="Full Name" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type="password" 
            placeholder="Password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <button className="btn-continue" onClick={handleSignUp}>Sign Up</button>

          {/* TERMS */}
          <p className="terms">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>

          <p className="other">
            Already have an account? <Link to="/login" className="link">Log in</Link>
          </p>

        </div>
      </div>

      {/* FOOTER */}
      <div className="auth-footer">

        <div>
          <h4>CUSTOMER SERVICE</h4>
          <p>Help Center</p>
          <p>Booking Guide</p>
          <p>Payment Methods</p>
          <p>Refund Policy</p>
          <p>FAQ</p>
        </div>

        <div>
          <h4>ABOUT VACANSEE</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Policies</p>
          <p>Privacy Policy</p>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>YouTube</p>
          <p>Twitter</p>
        </div>

      </div>

    </div>
  );
}

export default Register;