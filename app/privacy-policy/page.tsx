import { Metadata } from "next"
import { createMetadata } from "@/lib/metadata"

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: "Learn how TipCalculator.cash collects, uses, and protects your information. Our commitment to your privacy and data security.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-muted-foreground">Effective Date: April 27, 2025</p>
        
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            Welcome to TipCalculator.cash ("we", "our", "us").
            Your privacy is important to us.
            This Privacy Policy explains how we collect, use, and protect your information when you use our website.
          </p>
          
          <p>
            By accessing TipCalculator.cash, you agree to the terms outlined in this Privacy Policy.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Information We Collect</h2>
            <p>We collect minimal information necessary to operate and improve TipCalculator.cash:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                <strong>Automatic Data:</strong> When you visit our site, our servers may automatically record standard information provided by your browser (such as your IP address, browser type, operating system, referring URLs, and page visits).
              </li>
              <li>
                <strong>Voluntary Information:</strong> If you choose to contact us or subscribe to updates, we may collect your email address or other information you voluntarily provide.
              </li>
            </ul>
            <p className="mt-4">We do not collect:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Sensitive personal information (e.g., government IDs, payment data)</li>
              <li>Location data beyond standard IP-based analytics</li>
              <li>Behavioral profiling data for advertising purposes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p>We use collected information only to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Maintain and improve website performance</li>
              <li>Monitor usage patterns and traffic trends</li>
              <li>Respond to inquiries or feedback</li>
              <li>Send optional updates if you subscribe (you may unsubscribe anytime)</li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Cookies and Tracking Technologies</h2>
            <p>TipCalculator.cash uses a minimal number of cookies, primarily for:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Website functionality</li>
              <li>Anonymous usage analytics (e.g., Google Analytics)</li>
            </ul>
            <p className="mt-4">
              You may adjust your browser settings to refuse cookies.
              Note that some features may not work properly without cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Data Retention</h2>
            <p>We retain minimal personal information only for as long as necessary to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Provide requested services (e.g., newsletter updates)</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-4">
              Anonymous analytical data may be retained for internal reporting and security auditing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Third-Party Services</h2>
            <p>We may use trusted third-party tools and services that adhere to privacy standards, such as:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Google Analytics (for anonymous traffic analysis)</li>
              <li>Email marketing providers (only if you opt into updates)</li>
            </ul>
            <p className="mt-4">
              These third parties are prohibited from using your data for their own purposes and must comply with privacy laws like GDPR and CCPA.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">6. Your Privacy Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction or deletion of your information</li>
              <li>Object to or restrict certain uses of your information</li>
              <li>File a complaint with your local data protection authority</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at support@tipcalculator.cash.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">7. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction.
              However, no internet transmission is 100% secure.
            </p>
            <p className="mt-4">
              You are responsible for safeguarding your own devices and credentials.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">8. Children's Privacy</h2>
            <p>
              TipCalculator.cash is not intended for use by children under the age of 13.
              We do not knowingly collect personal information from children.
            </p>
            <p className="mt-4">
              If you believe a child has provided personal information without parental consent, please contact us, and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time.
              We encourage you to review this page periodically.
            </p>
            <p className="mt-4">
              Changes take effect immediately upon posting.
              The "Effective Date" at the top indicates the most recent update.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your information, please contact:</p>
            <ul className="mt-4 space-y-2">
              <li>📧 Email: support@tipcalculator.cash</li>
              <li>🌐 Website: https://tipcalculator.cash/contact</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
} 