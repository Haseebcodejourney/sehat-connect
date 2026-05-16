import { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { FRANCHISE_CITIES, INVESTMENT_RANGES } from '../constants';

export default function PharmacyFranchiseForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    city: '',
    investment: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="franchise-form" className="pharmacy-franchise-form">
      <h2 className="pharmacy-franchise-form__title">So What Are You Waiting For?</h2>
      <p className="pharmacy-franchise-form__intro">
        Fill this form to register and our team will contact you shortly for further details.
      </p>

      {submitted ? (
        <p className="pharmacy-franchise-form__success" role="status">
          Thank you, {form.name}. Our franchise team will contact you soon.
        </p>
      ) : (
        <form className="pharmacy-franchise-form__fields" onSubmit={handleSubmit}>
          <div className="pharmacy-franchise-form__field">
            <label htmlFor="franchise-name">Name*</label>
            <Input
              id="franchise-name"
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="pharmacy-franchise-form__field">
            <label htmlFor="franchise-phone">Phone*</label>
            <Input
              id="franchise-phone"
              name="phone"
              type="tel"
              placeholder="03xxxxxxxxx"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="pharmacy-franchise-form__field">
            <label htmlFor="franchise-city">City</label>
            <Select
              id="franchise-city"
              name="city"
              value={form.city}
              onChange={handleChange}
              options={FRANCHISE_CITIES}
            />
          </div>

          <div className="pharmacy-franchise-form__field">
            <label htmlFor="franchise-investment">Investment Range</label>
            <Select
              id="franchise-investment"
              name="investment"
              value={form.investment}
              onChange={handleChange}
              options={INVESTMENT_RANGES}
            />
          </div>

          <button type="submit" className="pharmacy-franchise-form__submit">
            Submit Application
          </button>
        </form>
      )}
    </section>
  );
}
