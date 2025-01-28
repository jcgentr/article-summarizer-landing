import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Clock,
  Star,
  Check,
  Printer,
  Trophy,
  Tags,
} from "lucide-react";
import Image from "next/image";
import chromeLogo from "@/app/images/chrome_icon.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="px-4 py-20 md:py-32 mx-auto max-w-7xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">
          Get the <span className="text-[hsl(217,91%,60%)]">gist</span> of any
          web article
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-16">
          Because life's too short for long articles you're not sure about.
          Transform lengthy content into clear, concise summaries instantly.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="h-14" asChild>
            <Link
              href="https://chromewebstore.google.com/detail/gistr/ncjimfkmindojmhmempanidjnlfjhfoo"
              target="_blank"
            >
              <Image
                src={chromeLogo}
                className="mr-1 flex-shrink-0"
                alt="Chrome Logo"
                width="32"
                height="32"
              />
              Add to Chrome
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-14" asChild>
            <Link href="https://demo.getgistr.com" target="_blank">
              Try Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="px-4 py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why choose Gistr?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Sparkles />}
              title="AI-Powered Summaries"
              description="Get intelligent summaries that capture the key points of any article in seconds."
            />
            <FeatureCard
              icon={<Clock />}
              title="Save Time"
              description="Know exactly how long articles take to read with estimated read times before diving in."
            />
            <FeatureCard
              icon={<Star />}
              title="Personal Library"
              description="Build your own collection of summaries, organize with tags, and access them anywhere."
            />
            <FeatureCard
              icon={<Tags />}
              title="Smart Tagging"
              description="Find articles easily with AI-generated tags that automatically categorize your content."
            />
            <FeatureCard
              icon={<Trophy />}
              title="Community Insights"
              description="Discover trending content through most-read and highest-rated article leaderboards. (Coming soon)"
            />
            <FeatureCard
              icon={<Printer />}
              title="Print Friendly"
              description="Generate clean, printer-friendly versions of articles for offline reading. (Coming soon)"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Start with our free plan and upgrade when you need more summaries
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="rounded-xl border bg-card p-8">
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="text-muted-foreground mt-2">
                Perfect for getting started
              </p>

              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <Button className="w-full mt-6" variant="outline" asChild>
                <Link href="https://app.getgistr.com/signup">Get Started</Link>
              </Button>

              <ul className="mt-8 space-y-4">
                <PricingFeature>15 summaries per month</PricingFeature>
                <PricingFeature>Rate and track read articles</PricingFeature>
                <PricingFeature>Access to article leaderboards</PricingFeature>
                <PricingFeature>Basic article organization</PricingFeature>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="rounded-xl border bg-card p-8 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>

              <h3 className="text-2xl font-bold">Pro</h3>
              <p className="text-muted-foreground mt-2">For power readers</p>

              <div className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold">$4.99</span>
                <span className="text-muted-foreground">/month</span>
              </div>

              <Button className="w-full mt-6" asChild>
                <Link href="https://app.getgistr.com/signup?plan=pro">
                  Upgrade to Pro
                </Link>
              </Button>

              <ul className="mt-8 space-y-4">
                <PricingFeature>100 summaries per month</PricingFeature>
                <PricingFeature>Rate and track read articles</PricingFeature>
                <PricingFeature>Access to article leaderboards</PricingFeature>
                <PricingFeature>Advanced article organization</PricingFeature>
                <PricingFeature>Prioritized feature requests</PricingFeature>
                <PricingFeature>Early access to new features</PricingFeature>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 py-20 bg-muted/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Everything you need to know about Gistr
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-base md:text-lg">
                How does Gistr work?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                Gistr uses advanced AI to analyze web articles and generate
                concise, accurate summaries. Simply install our Chrome
                extension, click on it while reading an article, and get an
                instant summary. All summaries are saved to your personal
                library for future reference.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-base md:text-lg">
                What happens when I reach my monthly summary limit?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                Free users can generate up to 15 summaries per month, while Pro
                users get 100. When you reach your limit, you'll need to wait
                until your next billing cycle or upgrade to Pro for additional
                summaries. Your existing summaries remain accessible even if
                you've reached your limit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-base md:text-lg">
                Can I use Gistr on any website?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                Gistr works on most article-based websites and blogs. However,
                it may not work on sites that require login, have paywalls, or
                use certain types of content protection. We're constantly
                improving our compatibility with different websites.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-base md:text-lg">
                How accurate are the summaries?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                Our AI model is trained to maintain high accuracy while
                condensing articles. Summaries capture key points and main
                ideas, but we recommend reading the full article for nuanced
                topics or critical decisions. You can always access the original
                article from your summary library.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-base md:text-lg">
                Can I cancel my Pro subscription anytime?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                Yes, you can cancel your Pro subscription at any time. You'll
                continue to have Pro access until the end of your current
                billing period. After that, your account will revert to the Free
                plan with its features and limitations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-base md:text-lg">
                How do I organize my summaries?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                All users can organize summaries using tags, mark articles as
                read/unread, and rate them. Pro users get additional
                organization features like advanced filtering and sorting
                options. You can also search through your summaries using
                keywords or tags.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-base md:text-lg">
                Do I get charged for previously summarized articles?
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg">
                No, if another user has already generated a summary for an
                article, you can access it without using one of your monthly
                summaries. This means you can often read summaries instantly
                while saving your monthly quota for new articles.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-[hsl(217,81%,40%)]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-3">
              <h3 className="font-bold text-xl text-white">Gistr</h3>
              <p className="text-sm text-white/90">
                Get the gist of any web article instantly with AI-powered
                summaries.
              </p>
            </div>

            {/* Product Column */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://demo.getgistr.com"
                    className="text-sm text-white/90 hover:text-white"
                  >
                    Demo
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-sm text-white/90 hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <a
                    href="https://chromewebstore.google.com/detail/gistr/ncjimfkmindojmhmempanidjnlfjhfoo"
                    className="text-sm text-white/90 hover:text-white"
                  >
                    Chrome Extension
                  </a>
                </li>
              </ul>
            </div>

            {/* Sign in Column */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Account</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://app.getgistr.com/signup"
                    className="text-sm text-white/90 hover:text-white"
                  >
                    Sign up
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.getgistr.com/login"
                    className="text-sm text-white/90 hover:text-white"
                  >
                    Log in
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="font-semibold mb-3 text-white">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://app.getgistr.com/privacy-policy"
                    className="text-sm text-white/90 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:contact@getgistr.com"
                    className="text-sm text-white/90 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/30 mt-12 pt-8">
            <p className="text-center text-sm text-white/90">
              © {new Date().getFullYear()} Gistr LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-lg bg-background border">
      <div className="h-12 w-12 rounded-lg bg-[hsl(217,91%,60%)] text-white flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-x-3">
      <Check className="h-4 w-4 text-primary flex-shrink-0" />
      <span className="text-muted-foreground">{children}</span>
    </li>
  );
}
