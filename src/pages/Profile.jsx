function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your account settings and preferences</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <h2>Personal Information</h2>
          <div className="profile-field">
            <label>Full Name</label>
            <input type="text" defaultValue="John Doe" />
          </div>
          <div className="profile-field">
            <label>Email</label>
            <input type="email" defaultValue="john.doe@example.com" />
          </div>
          <div className="profile-field">
            <label>Phone</label>
            <input type="tel" defaultValue="+63 912 345 6789" />
          </div>
          <button className="save-btn">Save Changes</button>
        </div>

        <div className="profile-card">
          <h2>Account Settings</h2>
          <div className="setting-item">
            <label>Email Notifications</label>
            <input type="checkbox" defaultChecked />
          </div>
          <div className="setting-item">
            <label>SMS Notifications</label>
            <input type="checkbox" />
          </div>
          <div className="setting-item">
            <label>Newsletter</label>
            <input type="checkbox" defaultChecked />
          </div>
          <button className="save-btn">Update Settings</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;