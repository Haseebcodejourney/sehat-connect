import { useState } from 'react';

export default function Tabs({ tabs = [], defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="tabs">
      <div className="tabs__header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tabs__tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs__content">{tabs[activeTab]?.content}</div>
    </div>
  );
}
