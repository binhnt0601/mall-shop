export const dynamic = 'force-dynamic';

import ContactForm from '@/components/Contact/ContactForm';
import ContactFormContainer from '@/components/Contact/ContactFormContainer';

export default function ContactPage() {
    return (
        <>
            <ContactFormContainer title="Contact us">
                <ContactForm />
            </ContactFormContainer>
        </>
    );
}
