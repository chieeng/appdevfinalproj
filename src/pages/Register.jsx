function Register() {
  return (
    <div className="auth-page">

      {/* CENTER */}
      <div className="auth-container">
        <div className="auth-card">

          <h3>Register</h3>
          <p className="subtitle">Sign up to create your account.</p>

          {/* SOCIAL LOGIN */}
          <button className="social google">Sign up with Google</button>
          <button className="social facebook">Log in with Facebook</button>
          <button className="social apple">Log in with Apple</button>

          <div className="divider">or</div>

          {/* FORM */}
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <button className="btn-continue">Sign Up</button>

          {/* TERMS */}
          <p className="terms">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>

          <p className="other">
            Already have an account? <span className="link">Log in</span>
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