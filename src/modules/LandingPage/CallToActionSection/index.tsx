import LoginModal from '@/components/LoginModal';
import { useAuthStore } from '@/stores/auth/useAuthStore';
import { useState } from 'react';

export default function CallToActionSection() {
  const { auth } = useAuthStore();
  const [openModal, setOpenModal] = useState<boolean>(false);

  if (auth) return <></>;

  return (
    <section className='bg-indigo-600 px-6 py-16 text-center text-white'>
      <h2 className='mb-4 text-3xl font-bold'>Ready to Get Started?</h2>
      <p className='mb-6'>Register now to receive tuition discounts today</p>
      <button
        onClick={() => setOpenModal(true)}
        className='rounded-full px-8 py-3 font-semibold bg-white text-blue-600 transition hover:scale-105 cursor-pointer'
      >
        Register Now
      </button>

      <LoginModal
        screenView='register'
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
}
