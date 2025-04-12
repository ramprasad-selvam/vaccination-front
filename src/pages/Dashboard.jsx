// src/pages/Dashboard.jsx

import React from "react";
import Layout from "../components/Layout";
import DataTable from "react-data-table-component";
const data = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "User" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "Admin" },
];

const columns = [
  { name: "Name", selector: (row) => row.name, sortable: true },
  { name: "Email", selector: (row) => row.email },
  { name: "Role", selector: (row) => row.role },
];
const items = [
  "BCG (Tuberculosis)",
  "Hepatitis B",
  "DTP (Diphtheria, Tetanus, Pertussis)",
  "IPV (Inactivated Polio Vaccine)",
  "MMR (Measles, Mumps, Rubella)",
  "Hib (Haemophilus influenzae type b)",
  "Rotavirus",
  "Pneumococcal Conjugate Vaccine (PCV)",
  "Varicella (Chickenpox)",
  "Hepatitis A",
  "Influenza (Flu Shot)",
  "HPV (Human Papillomavirus)",
  "COVID-19",
  "Meningococcal",
  "Typhoid",
  "Japanese Encephalitis",
  "Rabies",
  "Yellow Fever",
  "Tetanus Booster",
  "Shingles (Zoster)",
];

const Dashboard = () => {
  return (
    <Layout heading="Dashboard">
      <div className="dashcontainer">
        <div className="top-row">
          <div className="box">
            <div className="list-page">
              <h2 className="heading blue">Upcoming vaccination</h2>
              <div className="scrollable-list">
                <ul className="custom-list">
                  {items.map((item, index) => (
                    <li key={index} className="list-item">
                      {item} - {new Date().toLocaleDateString()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="list-page">
              <h2 className="heading red">Missed vaccination</h2>
              <div className="scrollable-list">
                <ul className="custom-list">
                  {items.map((item, index) => (
                    <li key={index} className="list-item">
                      {item} - {new Date().toLocaleDateString()}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="table-row">
          <h2 className="heading">Past Vaccination</h2>
          <DataTable columns={columns} data={data} pagination />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
