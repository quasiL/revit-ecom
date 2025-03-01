import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "privacy",
};

export default function Privacy() {
  const titleStyle = "text-2xl mb-4 font-semibold";
  const email = "mailto:support@simplerevit.com";
  const emailStyle = "text-revitGreen underline";

  return (
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold py-6 text-revitGold">Privacy Policy</h2>
      <div className="space-y-6 text-gray-400">
        <section>
          <h2 className={titleStyle}>1. General Data Collection</h2>
          <p>
            At Simple Revit, we prioritize protecting the privacy and security
            of our customer&apos;s personal information. This Privacy Policy
            outlines our practices regarding the collection, use, and disclosure
            of personal data. By purchasing and using our digital products,
            customers acknowledge and accept the practices described in this
            document, in compliance with applicable laws. Simple Revit reserves
            the right to update this Privacy Policy at any time to reflect
            changes in legal, technological, or operational requirements. Any
            updates will be communicated through our official channels and will
            include an effective date. By continuing to use our services,
            customers agree to the changes made.
          </p>
        </section>

        <section>
          <h2 className={titleStyle}>2. Purchases and Information Sharing</h2>
          <p>
            At Simple Revit, the primary goal of collecting customer information
            is to facilitate the purchasing process, ensure smooth digital
            transactions, and deliver purchased products effectively. Customers
            voluntarily provide information, such as their name, email address,
            and payment details, when completing a purchase. This information is
            essential to process transactions, deliver download links, and
            provide support when needed.
          </p>
          <p className="mt-4">
            Simple Revit may share necessary information with trusted third
            parties, such as payment processors, to ensure secure and efficient
            transactions. When selecting service providers, we prioritize their
            compliance with data protection standards and their ability to
            safeguard customer information against unauthorized access or
            misuse.
          </p>
          <p className="mt-4">
            Unlike platforms requiring user accounts or registrations, Simple
            Revit operates without permanent user profiles. Instead,
            purchase-related data is collected solely to fulfill orders and
            maintain compliance with applicable laws. We do not store payment
            details beyond what is necessary for transaction processing, and we
            never disclose customer information to other users or unrelated
            parties.
          </p>
          <p className="mt-4">
            If customers believe their personal data has been used improperly or
            wish to request access, modification, or deletion of their data,
            they may contact us at{" "}
            <a href={email} className={emailStyle}>
              support@simplerevit.com
            </a>
            . While certain information may need to be retained for legal or
            operational purposes, Simple Revit ensures that data is archived
            securely and used solely within the boundaries of applicable
            legislation.
          </p>
          <p className="mt-4">
            In the unlikely event of unauthorized access to purchase-related
            data or issues concerning the delivery of digital products,
            customers are encouraged to notify us promptly at{" "}
            <a href={email} className={emailStyle}>
              support@simplerevit.com
            </a>
            . Simple Revit is committed to resolving such matters efficiently
            and transparently.
          </p>
        </section>

        <section>
          <h2 className={titleStyle}>
            3. Personal Information Collected by Simple Revit
          </h2>
          <p>
            Simple Revit uses cookies and similar technologies to enhance the
            customer experience, track website activity, and improve the quality
            of services provided. Cookies help us understand customer
            preferences, ensure smooth navigation, and avoid displaying
            repetitive or outdated content.
          </p>
          <p>
            If customers prefer not to receive cookies or wish to be notified
            before their use, they can adjust their browser settings
            accordingly. Please note that disabling cookies may impact certain
            functionalities of our website.
          </p>
          <p className="mt-4">
            In addition to cookies, Simple Revit may collect technical
            information, such as:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>IP addresses</li>
            <li>Operating systems</li>
            <li>Browser types</li>
            <li>Referral website addresses</li>
          </ul>
          <p className="mt-4">
            This information is gathered to ensure the functionality, security,
            and optimization of our website.
          </p>
          <p className="mt-4">
            Simple Revit does not share customer information with third parties
            without explicit consent, except in the following cases:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              To comply with legal obligations, such as court orders or
              government requests, in accordance with applicable data protection
              laws.
            </li>
            <li>
              To protect the rights, property, or safety of Simple Revit, our
              customers, or the public, as permitted by law.
            </li>
            <li>
              To address disputes, prevent fraudulent activity, or resolve
              technical issues related to our services.
            </li>
          </ul>
          <p className="mt-4">
            We are committed to safeguarding customer data through robust
            security measures, including administrative, technical, and physical
            safeguards, to protect against unauthorized access, use, or
            disclosure.
          </p>
          <p className="mt-4">
            Simple Revit does not sell or exchange personal data with third
            parties for marketing purposes, and we require our service providers
            to uphold the same standard of protection for any data they process
            on our behalf.
          </p>
          <p className="mt-4">
            By using our services, customers acknowledge and agree to these
            practices. Should any customer have concerns about data usage, they
            may contact us at{" "}
            <a href={email} className={emailStyle}>
              support@simplerevit.com
            </a>{" "}
            for further assistance.
          </p>
        </section>

        <section>
          <h2 className={titleStyle}>
            4. Permission for Simple Revit to Process Customer Information
          </h2>
          <p>
            Simple Revit may use anonymized data, such as navigation patterns
            and non-personally identifiable information, to analyze market
            trends, create statistics, and guide marketing strategies. By using
            our services, customers acknowledge and accept the Terms of Use and
            Privacy Policy, which include the use of anonymized information for
            these purposes.
          </p>
          <p className="mt-4">
            Personally identifiable information provided by customers, such as
            names and email addresses, is solely used to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Deliver purchased products and ensure smooth transaction
              processing.
            </li>
            <li>
              Provide updates about Simple Revit services, including
              improvements or changes to our platform.
            </li>
            <li>
              Communicate marketing materials, promotions, and news (only if the
              customer has explicitly opted in).
            </li>
            <li>
              Fulfill legal obligations or respond to requests from authorities,
              as required by applicable laws.
            </li>
          </ul>
          <p className="mt-4">Customers have the right to:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              Request updates or corrections to their personal information.
            </li>
            <li>
              Opt out of receiving marketing emails by clicking the unsubscribe
              link included in the emails.
            </li>
            <li>
              Contact Simple Revit at{" "}
              <a href={email} className={emailStyle}>
                support@simplerevit.com
              </a>{" "}
              to request the deletion of their data or to resolve concerns about
              data usage.
            </li>
          </ul>
          <p className="mt-4">
            The personal information collected by Simple Revit is necessary for
            completing purchases, delivering products, and providing the
            requested services. For other purposes, such as marketing or service
            improvement, we rely on legitimate business interests or customer
            consent.
          </p>
          <p className="mt-4">
            Simple Revit is committed to processing customer data in a
            transparent and secure manner, ensuring its use aligns with the
            expectations outlined in this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className={titleStyle}>5. Customer Obligations</h2>
          <p>
            Customers using Simple Revit must comply with the Terms of Use and
            this Privacy Policy, respecting intellectual property belonging to
            Simple Revit or any third party. Customers must not upload,
            download, or distribute material that is violent, offensive, racist,
            xenophobic, or otherwise contrary to the principles and goals of
            Simple Revit. Additionally, customers are prohibited from creating a
            parallel market for reselling or distributing the intellectual
            property of Simple Revit. Customers should also avoid sharing
            sensitive information that could harm them professionally or
            socially. When posting public comments, whether on the website or
            other communication channels, customers should consider that such
            information will be visible to the public and may be accessible to
            others.
          </p>
        </section>

        <section>
          <h2 className={titleStyle}>6. Underage Customers</h2>
          <p>
            Simple Revit’s services are not intended for individuals under the
            age of 18 without prior consent from a parent or legal guardian. It
            is strictly prohibited for minors to use the services or tools
            provided by Simple Revit without such consent. If information about
            minors is submitted to Simple Revit, it is assumed that a parent or
            legal guardian has provided consent. By using Simple Revit and
            agreeing to this Privacy Policy, the customer affirms that this
            consent has been obtained, and any information provided is their
            sole responsibility.
          </p>
        </section>

        <section>
          <h2 className={titleStyle}>7. Data Retention</h2>
          <p>
            Simple Revit retains personal information only for as long as
            necessary to fulfill the purposes outlined in this Privacy Policy,
            including legal, regulatory, and security requirements, as well as
            for defending its legitimate interests. Customers are encouraged to
            maintain backups of purchased files, as Simple Revit does not
            guarantee indefinite access to downloads. After a transaction is
            completed, customers will have a limited time to download their
            purchased models, after which Simple Revit may no longer provide
            access.
          </p>
        </section>

        <section>
          <h2 className={titleStyle}>8. Customer Support</h2>
          <p>
            If customers have questions, concerns, or suggestions about this
            Privacy Policy, they can contact Simple Revit at{" "}
            <a href={email} className={emailStyle}>
              support@simplerevit.com
            </a>
            .
          </p>
        </section>

        <section className="pb-12">
          <h2 className="text-2xl font-semibold mb-4">
            9. Right to File a Complaint
          </h2>
          <p>
            If customers believe that Simple Revit has not complied with
            applicable data protection laws in processing their personal
            information, they have the right to:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              File a complaint directly with Simple Revit by emailing{" "}
              <a href={email} className={emailStyle}>
                support@simplerevit.com
              </a>
              .
            </li>
            <li>
              Report the matter to the appropriate data protection authorities,
              in accordance with applicable laws.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
