import { Link } from 'react-router-dom';
import { LAB_MENU_COLUMNS } from '../constants';

export default function LabMegaMenu({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="lab-mega-menu" role="region" aria-label="Lab tests menu">
      <div className="lab-mega-menu__inner">
        {LAB_MENU_COLUMNS.map((column, columnIndex) => (
          <div
            key={column.title ?? `col-${columnIndex}`}
            className="lab-mega-menu__column"
          >
            {column.showTitle && (
              <h3 className="lab-mega-menu__heading">{column.title}</h3>
            )}
            <ul className="lab-mega-menu__list">
              {column.links.map((link) => (
                <li key={link.slug}>
                  <Link to={`/lab-tests/${link.slug}`} className="lab-mega-menu__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            {column.showAllLink && (
              <Link to="/lab-tests" className="lab-mega-menu__all">
                All Lab Tests
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
