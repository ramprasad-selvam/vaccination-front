import { useState } from "react";
import Layout from "../components/Layout";
function Profile() {
  const allAllergies = [
    "Peanuts",
    "Dairy",
    "Gluten",
    "Shellfish",
    "Soy",
    "Eggs",
    "Pollen",
    "Wheat",
    "Dust",
    "Pet Dander",
  ];

  const [form, setForm] = useState({
    dob: "",
    gender: "",
    address: "",
    allergies: [],
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAllergyToggle = (allergy) => {
    setForm((prev) => {
      const exists = prev.allergies.includes(allergy);
      return {
        ...prev,
        allergies: exists
          ? prev.allergies.filter((a) => a !== allergy)
          : [...prev.allergies, allergy],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Profile Data:", form);
  };

  const filteredAllergies = allAllergies.filter((a) =>
    a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout heading="Profile">
      <div className="ctr" role="main">
        <form onSubmit={handleSubmit}>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={form.dob}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={form.gender}
            onChange={handleInputChange}
            required
          >
            <option value="">-- Select --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-say">Prefer not to say</option>
          </select>

          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            rows="3"
            value={form.address}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="allergy-search">Search Allergies</label>
          <input
            type="text"
            id="allergy-search"
            placeholder="Type to filter..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="multi-select">
            {filteredAllergies.map((allergy) => (
              <label key={allergy} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={form.allergies.includes(allergy)}
                  onChange={() => handleAllergyToggle(allergy)}
                />
                {allergy}
              </label>
            ))}
          </div>

          <button type="submit">Save Profile</button>
        </form>
      </div>
    </Layout>
  );
}

export default Profile;
