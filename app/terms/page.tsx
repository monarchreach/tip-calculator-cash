import { Metadata } from "next"
import { createMetadata } from "@/lib/metadata"

export const metadata: Metadata = createMetadata({
  title: "Terms and Conditions",
  description: "Read the Terms and Conditions for using TipCalculator.cash. Learn about your rights and responsibilities when using our services.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Terms and Conditions</h1>
        <p className="mt-4 text-muted-foreground">Effective Date: April 27, 2025</p>
        
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            Welcome to TipCalculator.cash ("we", "our", "us", "the Website").
          </p>
          
          <p>
            These Terms and Conditions govern your access to and use of TipCalculator.cash, including all content, services, and tools offered.
          </p>

          <p>
            By accessing or using TipCalculator.cash, you agree to comply with and be bound by these Terms.
          </p>

          <p>
            If you do not agree to these Terms, please do not use the Website.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">1. Use of the Website</h2>
            <p>You agree to use TipCalculator.cash:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Solely for personal, non-commercial purposes</li>
              <li>In compliance with all applicable laws, regulations, and these Terms</li>
              <li>Without engaging in any harmful, unlawful, or disruptive activities</li>
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate your access if you violate these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">2. Intellectual Property</h2>
            <p>
              All content and materials available on TipCalculator.cash, including calculators, educational guides, designs, text, graphics, logos, and trademarks, are the intellectual property of TipCalculator.cash, unless otherwise stated.
            </p>
            <p className="mt-4">You may not:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Reproduce, distribute, modify, create derivative works from, or publicly display any materials from this site without prior written permission</li>
              <li>Remove or alter any copyright, trademark, or proprietary notices</li>
            </ul>
            <p className="mt-4">Limited permission is granted to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>View and use the materials for personal, non-commercial purposes</li>
              <li>Share our tools or articles by linking directly to TipCalculator.cash pages (with proper attribution)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">3. Calculator Tools and Content Disclaimer</h2>
            <p>
              TipCalculator.cash provides informational tools and educational resources.
              We strive to offer accurate, updated, and culturally sensitive gratuity recommendations.
              However:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Tip amounts are provided as general guidance only</li>
              <li>Cultural customs and service industry practices can vary and change over time</li>
              <li>Users are responsible for verifying local practices if necessary</li>
            </ul>
            <p className="mt-4">We make no guarantees regarding:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>The absolute accuracy, reliability, completeness, or timeliness of any calculator results or educational materials</li>
              <li>Specific tipping outcomes or financial decisions based on our tools</li>
            </ul>
            <p className="mt-4">
              Use TipCalculator.cash at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">4. Third-Party Links</h2>
            <p>
              TipCalculator.cash may contain links to third-party websites, services, or resources.
            </p>
            <p className="mt-4">We are not responsible for:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>The content, privacy policies, or practices of third-party sites</li>
              <li>Any loss or damage arising from your use of such third-party resources</li>
            </ul>
            <p className="mt-4">
              Visiting external links is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">5. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law:
            </p>
            <p className="mt-4">
              TipCalculator.cash and its owners, affiliates, contributors, or partners shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of (or inability to use) TipCalculator.cash.
            </p>
            <p className="mt-4">
              This includes damages for financial loss, business interruption, goodwill loss, or data loss.
            </p>
            <p className="mt-4">
              Your sole remedy for dissatisfaction with TipCalculator.cash is to stop using the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">6. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless TipCalculator.cash and its affiliates, partners, contributors, and employees from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees resulting from:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Your use of the Website</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any applicable law or the rights of a third party</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">7. Changes to the Terms</h2>
            <p>
              We reserve the right to modify or update these Terms at any time.
            </p>
            <p className="mt-4">
              Changes become effective immediately upon posting.
              It is your responsibility to review these Terms periodically.
            </p>
            <p className="mt-4">
              Your continued use of TipCalculator.cash following updates constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">8. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your access to TipCalculator.cash, without notice, for conduct that we believe violates these Terms or is otherwise harmful to other users, us, or third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">9. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the jurisdiction in which TipCalculator.cash operates (e.g., United States law if applicable).
            </p>
            <p className="mt-4">
              You consent to the exclusive jurisdiction and venue of courts located in that jurisdiction for any disputes arising out of or relating to your use of the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground">10. Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please contact:</p>
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