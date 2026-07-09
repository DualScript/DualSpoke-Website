import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | DualSpoke",
  description:
    "How DualScript LLC, doing business as DualSpoke, collects, uses, and protects information on dualspoke.com.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <nav
        className="sticky top-0 z-50 border-b backdrop-blur-md"
        style={{
          background: "rgba(8, 13, 20, 0.8)",
          borderColor: "var(--border)",
        }}
      >
        <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-4 md:px-8">
          <Link
            href="/"
            className="text-[15px] tracking-[0.08em] transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: "var(--text)" }}
          >
            DualSpoke
          </Link>
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: "var(--muted)" }}
          >
            Home
          </Link>
        </div>
      </nav>

      <main style={{ margin: 0, padding: 0 }}>
        <section
          style={{
            width: "100%",
            paddingTop: "4rem",
            paddingBottom: "4rem",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              maxWidth: "720px",
              width: "100%",
              margin: "0 auto",
              padding: "0 2rem",
            }}
          >
            <h1
              className="mb-3 text-[clamp(1.75rem,4vw,2.5rem)] font-medium"
              style={{ color: "var(--text)" }}
            >
              Privacy Policy
            </h1>
            <p
              className="mb-10 text-sm font-light"
              style={{ color: "var(--muted)" }}
            >
              Last updated: July 9, 2026
            </p>

            <div
              className="space-y-8 text-[15px] font-light leading-[1.85]"
              style={{ color: "var(--muted)" }}
            >
              <p style={{ color: "var(--text)" }}>
                DualSpoke, a DBA of DualScript LLC, a Wyoming limited
                liability company (&ldquo;DualSpoke,&rdquo; &ldquo;we,&rdquo;
                &ldquo;us&rdquo;), operates dualspoke.com. This policy
                explains what information we collect when you visit our
                website, how we use it, and the choices you have. We build
                vertical software products, with one live offering and more
                in development. On this site, we keep a small data footprint
                and collect only what we need to respond to you.
              </p>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  What we collect
                </h2>
                <p className="mb-3">
                  We collect information only when you choose to give it to us:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong style={{ color: "var(--text)", fontWeight: 400 }}>
                      Contact form
                    </strong>
                    : your name, email address, and message when you reach
                    out to us.
                  </li>
                </ul>
                <p className="mt-3">
                  This policy applies to dualspoke.com only. If you use one
                  of our products directly, that product&apos;s privacy
                  policy governs how your data is handled.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  How we use your information
                </h2>
                <p className="mb-3">We use the information you provide to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Respond to inquiries you send through our contact form.</li>
                </ul>
                <p className="mt-3">
                  That is the full list. We do not use your information for
                  advertising, profiling, or any purpose beyond what is
                  described here.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Third-party processors
                </h2>
                <p className="mb-3">
                  Contact form submissions are stored using{" "}
                  <strong style={{ color: "var(--text)", fontWeight: 400 }}>
                    Supabase
                  </strong>
                  , a database service hosted on{" "}
                  <strong style={{ color: "var(--text)", fontWeight: 400 }}>
                    Amazon Web Services (AWS)
                  </strong>
                  . Supabase processes this data on our behalf and only as
                  needed to operate the website.
                </p>
                <p>
                  We do not sell your information. We do not share it with
                  third parties for their marketing purposes. We may disclose
                  information if required by law, court order, or valid
                  legal process, or where necessary to protect the rights,
                  safety, or property of our users, the public, or DualSpoke.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  How long we keep your data
                </h2>
                <p>
                  We retain your information only as long as needed to
                  respond to your inquiry. When information is no longer
                  needed, we delete it or anonymize it. We do not store
                  personal data indefinitely.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Your rights
                </h2>
                <p className="mb-3">
                  You may request access to, correction of, or deletion of
                  your personal information at any time by emailing{" "}
                  <a
                    href="mailto:info@dualspoke.com"
                    className="transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ color: "var(--accent)" }}
                  >
                    info@dualspoke.com
                  </a>
                  . We will respond to reasonable requests promptly and
                  within any timeframe required by applicable law.
                </p>
                <p className="mb-3">
                  <strong style={{ color: "var(--text)", fontWeight: 400 }}>
                    California residents
                  </strong>
                  : under the California Consumer Privacy Act (CCPA/CPRA),
                  you have the right to know what personal information we
                  collect, to request access to or deletion of it, to opt
                  out of the sale or sharing of personal information (we do
                  not sell or share personal information as those terms are
                  defined by the CCPA/CPRA), and not to be discriminated
                  against for exercising your rights.
                </p>
                <p>
                  Residents of other US states with comprehensive privacy
                  laws may have similar rights, including the right to
                  appeal a decision we make about your request. To exercise
                  any right, use the contact details below.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Cookies and tracking
                </h2>
                <p className="mb-3">
                  This site may set functional cookies required for basic
                  operation. We do not currently use analytics or
                  advertising tracking tools.
                </p>
                <p>
                  We may add analytics or similar tools in the future to
                  understand how visitors use the site. If we do, we will
                  update this policy and describe what is collected and why.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Children
                </h2>
                <p>
                  dualspoke.com is not directed at children under 13, and we
                  do not knowingly collect personal information from anyone
                  under that age. If you believe we have received
                  information from a child, please contact us and we will
                  delete it.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Changes to this policy
                </h2>
                <p>
                  We may update this privacy policy from time to time. When
                  we do, we will revise the &ldquo;Last updated&rdquo; date
                  at the top of this page. Your continued use of
                  dualspoke.com after any update constitutes acceptance of
                  the revised policy.
                </p>
              </section>

              <section>
                <h2
                  className="mb-3 text-lg font-medium"
                  style={{ color: "var(--text)" }}
                >
                  Contact us
                </h2>
                <p className="mb-3">
                  Questions about this policy or how we handle your data?
                  Email{" "}
                  <a
                    href="mailto:info@dualspoke.com"
                    className="transition-colors duration-200 hover:text-[var(--accent)]"
                    style={{ color: "var(--accent)" }}
                  >
                    info@dualspoke.com
                  </a>
                  .
                </p>
                <p>
                  DualSpoke, a DBA of DualScript LLC
                  <br />
                  1621 Central Ave
                  <br />
                  Cheyenne, WY 82001
                  <br />
                  United States
                </p>
                <p className="mt-3">
                  This policy is governed by the laws of the State of
                  Wyoming, USA, without regard to its conflict of laws
                  principles.
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "1.5rem 2rem",
        }}
      >
        <div
          className="mx-auto flex max-w-[1100px] flex-col items-center gap-2 text-center text-xs md:flex-row md:items-center md:justify-between"
          style={{ color: "var(--muted)" }}
        >
          <span>© 2026 DualSpoke</span>
          <a
            href="mailto:info@dualspoke.com"
            className="transition-colors duration-200 hover:text-[var(--accent)]"
            style={{ color: "var(--muted)" }}
          >
            info@dualspoke.com
          </a>
        </div>
      </footer>
    </>
  );
}
