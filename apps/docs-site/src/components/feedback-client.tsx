'use client';

import { Rate, Feedback } from '@/components/feedback';
import { useState } from 'react';

// NEXT_PUBLIC_FEEDBACK_WORKER_URL is inlined at build-time into the bundle
const WORKER_URL = process.env.NEXT_PUBLIC_FEEDBACK_WORKER_URL!

export default function FeedbackClient() {
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);

  async function handleRate(url: string, feedback: Feedback) {
    try {
      const res = await fetch(WORKER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url,
          opinion: feedback.opinion,
          message: feedback.message,
        }),
      });

      if (res.status === 429) {
        setRateLimitExceeded(true);
      } else {
        setRateLimitExceeded(false);
      }
    } catch (err) {
      console.error('Feedback submission failed:', err);
    }
  }

  return <Rate onRateAction={handleRate} rateLimitExceeded={rateLimitExceeded} />;
}
