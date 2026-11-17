import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/marketing/contact-form";
import { HomeFaq } from "@/components/marketing/home-faq";
import { HomeHero } from "@/components/marketing/home-hero";
import {
  HomeAi,
  HomeAudience,
  HomeCapabilities,
  HomeFreeTool,
  HomeIntro,
  HomeProcess,
  HomeStory,
  HomeTrustStrip,
} from "@/components/marketing/home-products";
import { HomeSolutions } from "@/components/marketing/home-solutions";

// Section order follows iqonic.tech (hero, trust strip, intro, solution tabs,
// free tool, numbered capabilities, process, story, use cases, grouped FAQ,
// contact); the visual style follows the Dribbble "Clario" shot.
export default function Home() {
  return (
    <div className="video-home cl-home">
      <HomeHero />
      <HomeTrustStrip />
      <HomeIntro />
      <HomeAi />
      <HomeSolutions />
      <HomeFreeTool />
      <HomeCapabilities />
      <HomeProcess />
      <HomeStory />
      <HomeAudience />

      <HomeFaq />

      <section
        id="contact"
        className="hv-contact hv-space"
        aria-labelledby="contact-heading"
      >
        <div className="page-shell hv-contact-layout">
          <div className="hv-contact-copy">
            <p className="hv-section-kicker">Contact</p>
            <h2 id="contact-heading">Talk to our team</h2>
            <p className="hv-contact-intro">
              Tell us what your team is working through. We&rsquo;ll help you
              find a practical starting point with Wazely.
            </p>
            <div className="hv-contact-note">
              <span className="hv-contact-note-icon">
                <MessageCircle size={23} strokeWidth={1.6} aria-hidden="true" />
              </span>
              <p>A few details are enough to start the conversation.</p>
            </div>
            <Link href="#products" className="hv-contact-secondary">
              Explore our products <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="hv-contact-form-wrap">
            <div className="hv-contact-form-heading">
              <span>Get in touch</span>
              <h3>Send us a note</h3>
              <p>Share your question or idea below.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
