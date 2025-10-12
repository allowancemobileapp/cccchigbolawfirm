'use server';

import { generateLegalCommentary } from '@/ai/flows/generate-legal-commentary';
import { commentarySchema, contactFormSchema } from '@/lib/schemas';
import { revalidatePath } from 'next/cache';

// AI Commentary Generator Action
type CommentaryState = {
  message: string;
  errors?: {
    topic?: string[];
    style?: string[];
  };
};

export async function generateCommentaryAction(
  prevState: CommentaryState,
  formData: FormData
): Promise<CommentaryState> {
  const validatedFields = commentarySchema.safeParse({
    topic: formData.get('topic'),
    style: formData.get('style'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid form data.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { commentary } = await generateLegalCommentary({
      topic: validatedFields.data.topic,
      style: validatedFields.data.style,
    });
    revalidatePath('/');
    return { message: commentary };
  } catch (error) {
    return { message: 'Error: Failed to generate commentary. Please try again.' };
  }
}


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
