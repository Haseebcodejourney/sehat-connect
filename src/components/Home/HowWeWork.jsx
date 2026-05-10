import { useState } from 'react';
import '../../styles/layout/home/_howwework.scss';

const workFlows = {
  pharmacy: {
    tabLabel: 'Pharmacy',
    title: 'Serving All Your Healthcare Needs At One Place!',
    stepsTitle: 'Order in three easy steps!',
    steps: [
      'Search and select your medicine',
      'Enter your details to confirm your order',
      'Sit back and your medicine will be delivered at your doorstep',
    ],
    visual: {
      searchLabel: 'Search for Medicine',
      detailsLabel: 'Enter Details',
      deliveryLabel: 'Medicine Delivered at Your Doorstep',
      packText: 'P',
      actionText: 'Book Appointment',
      successText: 'Order has been delivered successfully',
    },
  },
  labTests: {
    tabLabel: 'Lab Tests',
    title: 'Book Reliable Lab Tests From Trusted Labs!',
    stepsTitle: 'Book lab tests in three easy steps!',
    steps: [
      'Search and select your lab test',
      'Choose your preferred time and enter your details',
      'Get your sample collected or visit the lab with ease',
    ],
    visual: {
      searchLabel: 'Search for Lab Test',
      detailsLabel: 'Enter Patient Details',
      deliveryLabel: 'Report Delivered Online',
      packText: 'L',
      actionText: 'Book Lab Test',
      successText: 'Lab report has been delivered successfully',
    },
  },
};

const HowWeWork = () => {
  const [activeTab, setActiveTab] = useState('pharmacy');
  const activeFlow = workFlows[activeTab];

  return (
    <section className="how-we-work" aria-labelledby="how-we-work-title">
      <div className="how-we-work__content">
        <span className="how-we-work__eyebrow">How We Work</span>
        <h2 className="how-we-work__title" id="how-we-work-title">
          {activeFlow.title}
        </h2>

        <div className="how-we-work__tabs" role="tablist" aria-label="Service type">
          {Object.entries(workFlows).map(([key, flow]) => {
            const isActive = key === activeTab;

            return (
              <button
                className={`how-we-work__tab${isActive ? ' how-we-work__tab--active' : ''}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                key={key}
                onClick={() => setActiveTab(key)}
              >
                {flow.tabLabel}
              </button>
            );
          })}
        </div>

        <div className="how-we-work__steps">
          <h3 className='how-we-work__steps-title'>{activeFlow.stepsTitle}</h3>
          <ul>
            {activeFlow.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="how-we-work__visual" aria-hidden="true">
        <div className="how-we-work__path" />

        <div className="how-we-work__mini-card how-we-work__mini-card--search">
          <span className="how-we-work__step-label">
            <strong>1</strong>
            {activeFlow.visual.searchLabel}
          </span>
          <div className="how-we-work__medicine-card">
            <div className="how-we-work__medicine-pack">{activeFlow.visual.packText}</div>
            <div>
              <span />
              <span />
            </div>
            <div>
              <span />
              <span />
            </div>
            <div>
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="how-we-work__mini-card how-we-work__mini-card--details">
          <span className="how-we-work__step-label">
            <strong>2</strong>
            {activeFlow.visual.detailsLabel}
          </span>
          <div className="how-we-work__form-card">
            <span />
            <span />
            <span />
            <button type="button">{activeFlow.visual.actionText}</button>
          </div>
        </div>

        <div className="how-we-work__mini-card how-we-work__mini-card--delivery">
          <span className="how-we-work__step-label">
            <strong>3</strong>
            {activeFlow.visual.deliveryLabel}
          </span>
          <div className="how-we-work__done-card">
            <div className="how-we-work__check">✓</div>
            <p>{activeFlow.visual.successText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
