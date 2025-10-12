'use server';

import { contactFormSchema } from '@/lib/schemas';

// Contact Form Action
type ContactFormState = {
  message: string;
  success: boolean;
};

export async function submitContactFormAction(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid data provided. Please check the form and try again.',
      success: false,
    };
  }

  // Placeholder for actual submission logic (e.g., to Supabase or SendGrid)
  console.log('Contact form submitted:', validatedFields.data);
  
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return success message
  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    success: true,
  };
}
