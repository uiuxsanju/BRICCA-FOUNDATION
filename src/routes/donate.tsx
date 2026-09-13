import { createFileRoute } from "@tanstack/react-router";
import { Landmark, QrCode, ShieldCheck } from "lucide-react";

import { CtaLink } from "@/components/site/Bits";
import { Reveal } from "@/components/site/Reveal";
import { contact } from "@/content/bricca";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Together We Can Create Lasting Change | BRICCA Foundation" },
      {
        name: "description",
        content:
          "Support BRICCA Foundation's education, livelihood, health and relief programmes in Andhra Pradesh. 80G registered; bank transfer details on request.",
      },
      { property: "og:title", content: "Donate to BRICCA Foundation" },
      {
        property: "og:description",
        content:
          "Together We Can Create Lasting Change — fund classrooms, skill training, health camps and relief.",
      },
    ],
  }),
  component: Donate,
});

function Donate() {
  return (
    <>
      <section className="bg-primary-deep pt-[4.5rem] text-on-dark">
        <div className="container-page py-24 lg:py-32">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Donate</p>
            <h1 className="display-xl mt-6 text-on-dark">
              Together We Can Create Lasting Change
            </h1>
            <p lang="te" className="mt-3 font-display text-lg font-semibold text-accent lg:text-xl">
              కలిసి మనం శాశ్వత మార్పు తీసుకురాగలం
            </p>
            <p className="lede mt-7 text-on-dark-muted">
              Contributions fund classroom support, vocational training, community health camps and
              emergency relief for families across Andhra Pradesh.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaLink to="/contact">DONATE NOW</CtaLink>
              <CtaLink to="/get-involved" variant="outlineLight">
                PARTNER WITH US
              </CtaLink>
            </div>
            <p className="mt-8 flex items-center gap-3 text-xs tracking-wide text-on-dark-muted">
              <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
              Donations to BRICCA Foundation are covered by its 80G registration.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-4">
          <Reveal>
            <Landmark className="size-7 text-primary" aria-hidden="true" />
            <h2 className="display-md mt-6 text-primary">Bank transfer details</h2>
            <p lang="te" className="mt-1 font-display text-base font-semibold text-accent">బ్యాంక్ బదిలీ వివరాలు</p>
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              For direct bank transfers and CSR disbursements. Both accounts are held in the
              name of BRICCA Foundation's registered legal entity.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-px bg-border sm:grid-cols-2">
          {contact.bankAccounts.map((b, i) => (
            <Reveal as="div" key={b.bank} delay={i * 90} className="bg-card p-8 lg:p-10">
              <h3 className="font-display text-lg font-bold text-primary">{b.bank}</h3>
              <dl className="mt-6 grid gap-4">
                <BankRow label="Account name" value={b.accountName} />
                <BankRow label="Account number" value={b.accountNumber} mono />
                <BankRow label="IFSC code" value={b.ifsc} mono />
                <BankRow label="MICR code" value={b.micr} mono />
                {b.branch ? (
                  <BankRow label="Branch address" value={b.branch} />
                ) : (
                  <BankRow label="Branch address" value="To be confirmed" muted />
                )}
              </dl>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="border border-dashed border-border-strong bg-surface p-8">
            <QrCode className="size-7 text-border-strong" aria-hidden="true" />
            <h2 className="mt-6 font-display text-xl font-bold text-primary">Scan to pay</h2>
            <p lang="te" className="mt-1 text-sm font-semibold text-accent">స్కాన్ చేసి చెల్లించండి</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A UPI QR code will be published here as soon as BRICCA Foundation's official
              payment QR is confirmed. Until then, please use the bank transfer details above.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function BankRow({
  label,
  value,
  mono,
  muted,
}: {
  label: string;
  value: string;
  mono?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="grid gap-1 border-b border-border pb-4">
      <dt className="text-[0.65rem] font-bold tracking-[0.18em] text-muted-foreground">
        {label.toUpperCase()}
      </dt>
      <dd
        className={
          muted
            ? "text-sm text-muted-foreground"
            : `text-base font-semibold text-foreground ${mono ? "font-mono tracking-wide" : "font-display"}`
        }
      >
        {value}
      </dd>
    </div>
  );
}
