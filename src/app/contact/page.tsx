import type { Metadata } from 'next';
import { Section } from '@/components/section';
import { Heading } from '@/components/ui/heading';
import { ContactForm } from '@/components/contact-form';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach out for consultations, speaking engagements, or academic inquiries. Contact Professor Clement C. Chigbo via WhatsApp, email, or phone.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <Section>
      <div className="text-center">
        <Heading as="h1" variant="section" className="text-primary">
          Contact
        </Heading>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          For consultations, speaking engagements, or publishing enquiries, please use the contact form or reach out directly.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3">
          <ContactForm />
        </div>
        <div className="md:col-span-2">
            <div className="space-y-6">
                <h3 className="font-headline text-2xl font-bold text-primary">Contact Information</h3>
                <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent mt-1"/>
                    <div>
                        <h4 className="font-semibold">Office Address</h4>
                        <address className="not-italic text-muted-foreground">
                            123 Law Street, Legal District<br/>
                            Lagos, Nigeria
                        </address>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent mt-1"/>
                    <div>
                        <h4 className="font-semibold">Email</h4>
                        <a href="mailto:clementchigbo@abuad.edu.ng" className="block text-muted-foreground hover:text-primary">clementchigbo@abuad.edu.ng</a>
                        <a href="mailto:clementcchigbo@gmail.com" className="block text-muted-foreground hover:text-primary">clementcchigbo@gmail.com</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent mt-1"/>
                    <div>
                        <h4 className="font-semibold">Phone</h4>
                        <a href="tel:+2348134783985" className="block text-muted-foreground hover:text-primary">+234 813 478 3985</a>
                        <a href="tel:+2348073104899" className="block text-muted-foreground hover:text-primary">+234 807 310 4899</a>
                    </div>
                </div>
            </div>
            <div className="mt-8 h-64 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground">
                Map Placeholder
            </div>
        </div>
      </div>
    </Section>
  );
}
