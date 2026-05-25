import EditorialBanner from '../components/EditorialBanner';
import EditorialWorkflow from '../components/EditorialWorkflow';
import EditorialTeam from '../components/EditorialTeam';
import EditorialWriters from '../components/EditorialWriters';
import {
  CONTENT_FRAMEWORK_LIST,
  EDITORIAL_STAFF_POLICY,
  EDITORIAL_VALUES_LIST,
  HEALTH_INFO_UPDATES,
  WRITER_TRAINING_POLICY,
  WRITE_FOR_US_GUIDELINES,
} from '../data/editorialContent';

function BulletList({ items, className = '' }) {
  return (
    <ul className={`editorial-page__bullet-list ${className}`.trim()}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function BoldBulletList({ items }) {
  return (
    <ul className="editorial-page__bold-list">
      {items.map((item) => (
        <li key={item.title}>
          <strong>{item.title}</strong>
          <br />
          {item.body}
        </li>
      ))}
    </ul>
  );
}

function ContentBlock({ title, children, className = '' }) {
  return (
    <section className={`editorial-page__block ${className}`.trim()}>
      {title ? <h2 className="editorial-page__block-title">{title}</h2> : null}
      {children}
    </section>
  );
}

export default function EditorialPolicyPage() {
  return (
    <div className="editorial-page">
      <EditorialBanner />

      <div className="editorial-page__container">
        <div className="editorial-page__values">
          <ContentBlock title="Who We Are?">
            <p>
              We are a digital healthcare company that is currently working on bringing a modern,
              quality and affordable healthcare ecosystem in Pakistan. Our Mission is to act in
              accordance with the need for public healthcare. We set out on 24th March 2015 to be one
              of the first IT companies to digitally transform healthcare notions in Pakistan.
            </p>
            <p>
              Currently we are working on creating authentic database information, advanced patient
              referrals, appointment flows and classified consumer healthcare. Our aim is to serve
              all distinctive, high-quality services of healthcare in B2B and B2C constructs.
            </p>
          </ContentBlock>

          <ContentBlock title="Editorial Values">
            <p className="editorial-page__intro-text">
              All of the content is produced in light of strict editorial integrity and quality that
              is carefully monitored.
              <br />
              Our editorial values correspond to our audience&apos;s expectations. We believe in
              total transparency, openness, expert commentary, and reader trust.
              <br />
              Our content charter has been created by understanding the following rules:
            </p>
            <BulletList items={EDITORIAL_VALUES_LIST} />
            <p>
              It is, therefore, Healthwire&apos;s duty to establish set standards for a periodically
              reviewed process of creating and publishing content.
            </p>
          </ContentBlock>
        </div>

        <EditorialWorkflow />

        <ContentBlock title="Editorial Policy for Our Editorial Staff">
          <BoldBulletList items={EDITORIAL_STAFF_POLICY} />
        </ContentBlock>

        <ContentBlock title="Content Creation & Review Process / Content Framework">
          <p>
            Our content creation process has been established after many modifications to establish
            a strong backbone of everything we create. To ensure everything is published in
            accordance with our standards, we ensure
          </p>
          <ol className="editorial-page__ordered-list">
            {CONTENT_FRAMEWORK_LIST.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p>
            We understand different channels in healthcare. Health information can become very
            overwhelming because of its availability everywhere. Our creators at Healthwire, are
            working relentlessly to change that.
          </p>
          <p>
            Establishing content strategy- each publication is thoroughly discussed, searched before
            establishing strategies.
          </p>
        </ContentBlock>

        <ContentBlock title="Training Our Writers / Contributors">
          <p>
            You come for correct, authentic information which is why it is our responsibility to
            fulfill by establishing high writing standards. We present our content with the utmost
            unbiased agenda, with a balance between scientific facts and figures and perfectly
            calculated comprehensive information for our audience.
          </p>
          <p>
            We have research-backed information pieces distributed with our writers who each have a
            unique set of strengths. Their work in return is upheld to the highest of honest
            standards before presenting it to our audiences. To understand how our set of frameworks
            for content, here is our criteria for different forms of published content:
          </p>
          <BoldBulletList items={WRITER_TRAINING_POLICY} />
        </ContentBlock>

        <ContentBlock title="Product Pages" className="editorial-page__block--product">
          <p>
            <strong>The product pages are created in alliance with the product team.</strong> Our
            products are first of its kind to present a wholesome digitised healthcare ecosystem in
            Pakistan. Each and every requirement is curated, discussed with different experts before
            presenting it in front of our audience. Our main product pages consist of two main
            business models with their own set of requirements.
          </p>
        </ContentBlock>

        <ul className="editorial-page__bold-list editorial-page__bold-list--compact">
          <li>
            <strong>B2B</strong>
            <br />
            For B2B we have a very consumer client trust content generation where we ensure each and
            every feature is highlighted to take in client confidence and trust.
          </li>
          <li>
            <strong>B2C</strong>
            <br />
            For B2C we produce content the way we would like to consume as consumers for our own
            and our families well-being. Our approach towards this particular sector is to build a
            strong correlation between credible information and what the client is looking for.
          </li>
        </ul>

        <ContentBlock title="Blog Pages">
          <p>
            For the best of information, our blogs are discussed amongst the writers, reviewed with
            experts, and then finalized through looking at different Google trends.
          </p>
        </ContentBlock>

        <ContentBlock title="Information Pages">
          <p>
            Our information content is solely for the satisfaction of our audience. We only wish to
            create more quality and present more credibility than other platforms for us to stand
            out.
          </p>
        </ContentBlock>

        <ContentBlock title="Our Vocabulary prioritizes empathy, inclusivity, and precision">
          <p>What we read, we reflect.</p>
          <p>
            Keeping this in mind, we want to make sure we are publishing that is relevant, credible,
            clear, and authentic, and real-life content. We encourage our writers and editors to
            maintain a tone of warmth, empathy yet keep in mind the progressive trends that need to
            be reflected in the content that is created.
          </p>
          <p>
            At Healthwire, a conscious language is a long-term commitment that goes on with more
            focus on audience and health communities&apos; engagement. We believe we are a
            judgement-free zone, where we share stories to empower people to let them know that they
            are not alone in their struggles. From taboo topics to mental health struggles, we aim to
            cover each and everything that resonates with our readers.
          </p>
          <p>
            We just do not stop here. We believe in evolving ourselves. Whether it is language,
            stories, or our information, everything is seen from the perspective of a reader, and
            that is one aim Healthwire will always seek to uphold.
          </p>
        </ContentBlock>

        <ContentBlock title="Health Information is continually changing and so are we..">
          <p>
            Every form of information is changing, old ideas fade, and new trends emerge. We are
            fully aware of changing momentums which is why we are always quantifying our content
            after a set interval. You can verify this through certain references that are a tiny
            reflection of what our editorial process seems like. Some of these are, but are not
            limited to;
          </p>
          <BulletList items={HEALTH_INFO_UPDATES} className="editorial-page__bullet-list--spaced" />
          <p>
            Apart from timely updates, immediate action is taken if there is any submission of
            credible feedback that will help us grow.
          </p>
        </ContentBlock>

        <ContentBlock title="Our Collaborations">
          <p>
            As mentioned earlier, we are open to collaborations and are always seeking to learn and
            grow. If you have a relevant platform you want us to collaborate on, Healthwire will
            very much like to become a part of your achievement.
            <br />
            Please note, that we do have a strong reviewing system through which we maintain our set
            standard as well as establish new milestones. By all stretch and length, we would like to
            establish the same set of rules for all the collaboration we become a part of.
          </p>
        </ContentBlock>

        <ContentBlock title="Apki Sehat Subsaay Pehlay">
          <p>
            We do not believe in fluid content, rather we practice a very honest and direct approach
            with our readers. Any information present on our site in accordance with the scientific
            finding will not be subject to change, just because it may not align with anyone&apos;s
            individual values. Medicine is a blunt field and we like to portray it in the same manner
            without any self-edits.
          </p>
        </ContentBlock>

        <ContentBlock title="Help Us become Best for You">
          <p>
            You are our first and foremost priority. Whatever we write is for you. Our writers,
            editors, and contributors all aim to strive for having a healthy relationship with our
            readers.
            <br />
            We have established a stringent policy to allow you to help us grow and become better
            for you. We are continuously working hard. Evolving hard and trying our best to become
            the number 1 medical content provider of Pakistan.
            <br />
            We truly love when some of you try to connect with us. Let us know in the comment section
            below to let us know if there is any feedback we should know about.
          </p>
        </ContentBlock>

        <ContentBlock title="Write for Us/Become a Part of Healthwire Family">
          <p>
            If you want to become a part of our Healthwire family, you are welcome to send in your
            pitches. For a pitch to be approved you must consider the following guidelines;
          </p>
          <BulletList items={WRITE_FOR_US_GUIDELINES} />
        </ContentBlock>
      </div>

      <EditorialTeam />
      <EditorialWriters />
    </div>
  );
}
