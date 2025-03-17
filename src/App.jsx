import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("Wedding Loans");
  const [deposit, setDeposit] = useState();
  const [period, setPeriod] = useState(1);
  const [calculatedLoan, setCalculatedLoan] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const maxLoanMap = {
      "Wedding Loans": 500000,
      "Home Construction Loans": 1000000,
      "Business Startup Loans": 1000000,
      "Education Loans": 400000
    };

    const maxLoan = maxLoanMap[category] || 0;
    const loanAmount = maxLoan - deposit;
    const monthlyPayment = loanAmount / (period * 12);

    setCalculatedLoan({ loanAmount, monthlyPayment });
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <h1>Saylani Microfinance App</h1>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Loan Categories Section */}
        <section className="loan-categories">
          <h2 className="section-title">Loan Categories</h2>
          <div className="categories-grid">
            {[
              { name: "Wedding Loans", max: "PKR 5 Lakh", period: "3 years" },
              { name: "Home Construction Loans", max: "PKR 10 Lakh", period: "5 years" },
              { name: "Business Startup Loans", max: "PKR 10 Lakh", period: "5 years" },
              { name: "Education Loans", max: "PKR 4 Lakh", period: "4 years" },
            ].map((category, index) => (
              <div key={index} className="category-card">
                <h3 className="category-title">{category.name}</h3>
                <p className="category-detail">Max Loan: {category.max}</p>
                <p className="category-detail">Loan Period: {category.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Loan Calculator Section */}
        <section className="loan-calculator">
          <h2 className="section-title">Loan Calculator</h2>
          <form className="calculator-form" onSubmit={handleCalculate}>
            <label>
              Select Category:
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option>Wedding Loans</option>
                <option>Home Construction Loans</option>
                <option>Business Startup Loans</option>
                <option>Education Loans</option>
              </select>
            </label>
            <label>
              Initial Deposit:
              <input
                type="number"
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
                placeholder="Enter amount"
              />
            </label>
            <label>
              Loan Period:
              <select value={period} onChange={(e) => setPeriod(Number(e.target.value))}>
                <option value={1}>1 year</option>
                <option value={2}>2 years</option>
                <option value={3}>3 years</option>
                <option value={4}>4 years</option>
                <option value={5}>5 years</option>
              </select>
            </label>
            <button type="submit" className="calculate-button">Calculate</button>
          </form>

          {calculatedLoan && (
            <div className="calculation-result">
              <h3>Calculation Result</h3>
              <p>Total Loan Amount: PKR {calculatedLoan.loanAmount.toLocaleString()}</p>
              <p>Monthly Payment: PKR {calculatedLoan.monthlyPayment.toFixed(1)}</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Saylani Welfare. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;