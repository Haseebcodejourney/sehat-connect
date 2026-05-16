import LabCtaBanner from './LabCtaBanner';
import LabOrderCard from './LabOrderCard';

export default function LabTestContent({ test, onAddToCart }) {
  const sections = test.sections ?? [];

  return (
    <article className="lab-test-content">
      {sections.map((section, index) => (
        <section key={section.title} className="lab-test-section">
          <h2>{section.title}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          {section.listTitle && <p className="lab-test-section__list-title">{section.listTitle}</p>}
          {section.list?.length > 0 && (
            <ul>
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {(index === 1 || index === 3) && <LabCtaBanner />}
        </section>
      ))}

      {test.resultTable && (
        <section className="lab-test-section">
          <h2>{test.resultTable.title}</h2>
          {test.resultTable.intro && <p>{test.resultTable.intro}</p>}
          <div className="lab-test-table-wrap">
            <table className="lab-test-table">
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Normal Range</th>
                </tr>
              </thead>
              <tbody>
                {test.resultTable.rows.map((row) => (
                  <tr key={row.test}>
                    <td>{row.test}</td>
                    <td>{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <LabCtaBanner />
        </section>
      )}

      <LabOrderCard test={test} onAddToCart={onAddToCart} />

      {test.faq?.length > 0 && (
        <section className="lab-test-section lab-test-section--faq">
          <h2>Frequently Asked Questions (FAQs)</h2>
          <dl className="lab-test-faq">
            {test.faq.map((item) => (
              <div key={item.question} className="lab-test-faq__item">
                <dt>{item.question}</dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </article>
  );
}
