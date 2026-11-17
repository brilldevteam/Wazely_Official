import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";


// Centred hero (iqonic.tech layout): label, two-line headline, copy, buttons.
export function HomeHero() {
  return (
    <section className="cl-hero cl-hero-centered" aria-labelledby="home-heading">
      <div className="page-shell cl-hero-frame">

        <div className="cl-hero-center">
          <p className="cl-badge">
            <span aria-hidden="true" /> AI built into our products
          </p>
          <h1 id="home-heading">
            Smarter business software, with AI built in where it counts
          </h1>
          <p className="cl-hero-sub">
            Wazely builds focused, easy-to-use products for the work businesses
            do every day, starting with Wazely CRM, Wazely ERP and the free
            Wazely Color, with more on the way.
          </p>
          <div className="cl-hero-actions">
            <Link className="cl-btn cl-btn-dark" href="#products">
              Explore our products <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
            <Link className="cl-btn cl-btn-light" href="#contact">
              Talk to our team <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
