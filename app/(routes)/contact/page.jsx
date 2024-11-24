export const dynamic = 'force-dynamic'

import ContactForm from '@/app/components/Contact/ContactForm'
import ContactFormContainer from '@/app/components/Contact/ContactFormContainer'

export default function ContactPage() {
  return (
    <>
      <ContactFormContainer title="Contact us">
        <ContactForm />
      </ContactFormContainer>
    </>
  )
}
