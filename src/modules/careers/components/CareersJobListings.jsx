import { useEffect, useRef } from 'react';
import { ZOHO_RECRUIT_CONFIG } from '../data/careersContent';

function loadZohoJobs() {
  if (typeof window.rec_embed_js !== 'undefined') {
    window.rec_embed_js.load({
      widget_id: ZOHO_RECRUIT_CONFIG.widgetId,
      page_name: ZOHO_RECRUIT_CONFIG.pageName,
      source: ZOHO_RECRUIT_CONFIG.source,
      site: ZOHO_RECRUIT_CONFIG.site,
      empty_job_msg: ZOHO_RECRUIT_CONFIG.emptyJobMsg,
    });
  }
}

export default function CareersJobListings() {
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const existingCss = document.querySelector(`link[href="${ZOHO_RECRUIT_CONFIG.cssUrl}"]`);
    if (!existingCss) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = ZOHO_RECRUIT_CONFIG.cssUrl;
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector(`script[src="${ZOHO_RECRUIT_CONFIG.scriptUrl}"]`);

    const initEmbed = () => {
      window.setTimeout(loadZohoJobs, 3000);
    };

    if (existingScript) {
      initEmbed();
      return undefined;
    }

    const script = document.createElement('script');
    script.src = ZOHO_RECRUIT_CONFIG.scriptUrl;
    script.async = true;
    script.onload = initEmbed;
    document.body.appendChild(script);

    return undefined;
  }, []);

  return (
    <section className="careers-jobs" aria-labelledby="careers-jobs-title">
      <div className="careers-page__container">
        <h2 id="careers-jobs-title">Join the Dream Team</h2>
        <p className="careers-jobs__subtitle">Current Job Openings</p>
        <div className="careers-jobs__embed">
          <div id={ZOHO_RECRUIT_CONFIG.widgetId} />
        </div>
      </div>
    </section>
  );
}
