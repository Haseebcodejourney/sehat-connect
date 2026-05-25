const OFFICE = {
  city: 'Lahore',
  address:
    '57 Mian Mehmood Ali Kasoori Rd, Block B3 Gulberg III, Lahore, Punjab 54000',
  email: 'support@healthwire.pk',
  phone: '(042) 32500989',
};

export default function ContactOffice() {
  return (
    <section className="contact-us-main" aria-labelledby="contact-office-title">
      <div className="address-detail">
        <h2 id="contact-office-title" className="address-detail__title">
          Regional Office
        </h2>

        <ul className="detail-text">
          <li>
            <strong>City:</strong>
            <span>{OFFICE.city}</span>
          </li>
          <li className="address-li">
            <strong>Address:</strong>
            <div className="paragraph">{OFFICE.address}</div>
          </li>
          <li>
            <strong>Email:</strong>
            <span className="email">
              <a href={`mailto:${OFFICE.email}`}>{OFFICE.email}</a>
            </span>
          </li>
          <li>
            <strong>Phone:</strong>
            <span className="phone-num">
              <a href="tel:+924232500989">{OFFICE.phone}</a>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
