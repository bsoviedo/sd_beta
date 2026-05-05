import { Container, Card } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "components/Layout";

export default function TermsOfService() {
  const { t } = useTranslation("common");

  return (
    <Layout title={t("meta.termsTitle")} description={t("meta.termsDescription")}>
      <section className="sd-section" style={{ paddingTop: "6rem" }}>
        <Container className="px-4 px-lg-5 pb-5">
          <Card className="sd-card border-0">
            <Card.Body className="py-5 px-4 px-lg-5" style={{ fontSize: "15px", lineHeight: "1.7" }}>

              <h2 className="mb-1" style={{ color: "var(--sd-primary)" }}>Terms of Service</h2>
              <p className="text-muted mb-4" style={{ fontSize: "13px" }}>Last updated: October 1, 2018</p>

              <p><strong>PLEASE READ THESE TERMS CAREFULLY AS THEY ESTABLISH A LEGAL AGREEMENT BETWEEN YOU AND MANDATUM, A SUBSIDIARY OF ESTRATRA LLC.</strong></p>
              <p>Please Note: Section 8 of these Terms of Service contains the link to the Term's <strong>DISPUTE RESOLUTION, ARBITRATION CLAUSE and CLASS ACTION WAIVER</strong> that applies to all Mandatum Users. It affects and dictates how disputes with Mandatum are resolved. By accepting these Terms of Service, <u>you agree to be bound by this Arbitration Clause and Class Action Waiver</u>.</p>
              <p><em>Please review these Terms of Service periodically, as they are subject to alterations by and at the sole discretion of Mandatum at anytime for any reason. So long as you continue to use Mandatum, any such modifications will <strong>AUTOMATICALLY</strong> apply to you.</em></p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>1. Legal Relationship</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                1.1. This document provides all information regarding the Terms of Use (hereafter, "Terms") that control the use of the website address Mandatum.co.<br />
                1.2. These Terms govern the access and use of the Services provided through Mandatum by Estratra LLC within the entire United States, its territories, and possessions.<br />
                1.3. By accessing or using Mandatum, you agree to be bound by all of these Terms.<br />
                1.4. These terms supersede any prior agreements or arrangements between you and Estratra, any of its Owners, Investors or Employees.<br />
                1.5. Estratra reserves the right to immediately terminate these Terms with respect to you, cease offering or deny access to Services or any portion thereof for any reason Estrara may see fit.<br />
                1.6. Estratra also reserves the right to, in its sole discretion, modify, revise or edit in anyway, these Terms and any of its Policies.<br />
                1.7. All amendments made by Estratra in its sole discretion, to these Terms, will be effective immediately upon the posting of such Terms.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>2. Usage of Your Account</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                2.1. By agreeing to these terms, you confirm to never utilize another User's account without their express allowance, to never solicit the login information of another User's account, to never make public the information of other Users' private information, that all the information you provided while creating your account is accurate and complete, and that you will keep your account password secure at all times.<br />
                2.2. By agreeing to these Terms, you take full responsibility for any and all activity on your Account. Estratra <strong>will not be liable</strong> for any losses you or others using your account may have incurred.<br />
                2.3. Any breach to the security of your Account must immediately be reported to Estratra.<br />
                2.4. You will in no way upload or use viruses including "bugs," "spiders," "robots," or any other virulent code, or any other means of altering Mandatum's Technological Dignity.<br />
                2.5. By agreeing to these Terms, you agree to in no way use Mandatum for illegal or mischievous purposes.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>3. Payment</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                3.1. You are fully aware that by purchasing a product or by selecting a product to save through Mandatum Services, you as the User, are fully and solely responsible for all charges that apply to the product(s), including all taxes.<br />
                3.2. You will be responsible for all the Charges and Fees incurred by your Account.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>4. WARRANTY DISCLAIMER</h5>
              <p style={{ marginLeft: "1.2rem", fontWeight: "bold" }}>
                4.1. YOU ACKNOWLEDGE THAT YOUR USE OF MANDATUM IS AT YOUR OWN RISK.<br />
                4.2. YOU ACKNOWLEDGE THAT ESTRATRA, ITS OWNERS, DIRECTORS, EMPLOYEES, SUBSIDIARIES AND AGENTS DISCLAIM ALL WARRANTIES, EXPRESS AND IMPLIED AND PROVIDES NO GUARANTEES IN CONNECTION WITH THE SERVICES OFFERED.<br />
                4.3. YOU UNDERSTAND AND ACKNOWLEDGE THAT ALL FUTURE PROJECTIONS OF PRODUCT PRICING ARE BASED ON ALGORITHMS OWNED SOLELY BY ESTRATRA LLC AND ARE TRADE SECRETS.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>5. Limitation of Liability</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                5.1. You acknowledge that in <strong>NO EVENT</strong>, shall Mandatum, Estratra, its Owners, Directors, Employees or Agents, be liable to you for any Damages whether they be Direct, Indirect, Incidental, Special, Punitive, or Consequential; as the result of Personal Injury, Property Damage, or any losses of any kind including monetary losses.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>6. Indemnity</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                6.1. You agree to hold harmless Estratra, and all of its affiliates and subsidiaries, including its Owners, Directors, Employees and agents, from and against any and all claims including Damages, obligations, losses, liabilities, expenses, and costs of any kind.<br />
                6.2. This Indemnification obligation survives these Terms as well as your usage of Mandatum and the services it provides.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>7. Acceptance of these Terms</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                7.1. You are fully competent to enter into and to comply at all times with all of these Terms.<br />
                7.2. All the information you have provided while creating your account is truthful and accurate and it is your sole responsibility to maintain the accuracy of such information.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>8. Dispute Resolution</h5>
              <p style={{ marginLeft: "1.2rem", fontWeight: "bold" }}>
                This is a Dispute Resolution Agreement that you MUST read carefully. It is part of the Terms of the Contract you are making with Mandatum and affects your rights. It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>9. General Severability</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                9.1. In the event that any portion of these Terms is deemed unenforceable or illegal, said portion will be severed and the remainder of the Terms will remain intact and in Full Force and Effect.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>10. Definitions</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                <em>Account</em> — The portal through which Users access the Services of Mandatum.<br />
                <em>Acceptance</em> — Fully downloading and any use of Mandatum is an acceptance of all of these Terms.<br />
                <em>Amendments</em> — Any modifications made to these Terms, solely at the discretion of Mandatum.<br />
                <em>Employee</em> — Any individual working for, and directly under the control of Mandatum management.<br />
                <em>Services</em> — All of the accommodations Mandatum offers to consumers.<br />
                <em>Terms</em> — Every Condition and Policy listed in this entire document.<br />
                <em>User</em> — Anyone utilizing the Services of Mandatum.
              </p>

              <h5 className="mt-4 mb-2" style={{ color: "var(--sd-primary)" }}>Customer Service</h5>
              <p style={{ marginLeft: "1.2rem" }}>
                For any questions or concerns regarding these terms or any aspects of Mandatum, please contact us at{" "}
                <a href="mailto:support@mandatum.co" style={{ color: "var(--sd-primary)" }}>support@mandatum.co</a>.
              </p>

              <p className="text-center fw-bold mt-4">
                Mandatum is a Florida Limited Liability Company with a current Certificate of Good Standing.
              </p>

            </Card.Body>
          </Card>
        </Container>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
