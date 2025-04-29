'use client'

import { Rate, Feedback } from '@/components/feedback'

// NEXT_PUBLIC_FEEDBACK_WORKER_URL is inlined at build-time into the bundle
const WORKER_URL = process.env.NEXT_PUBLIC_FEEDBACK_WORKER_URL!

export default function FeedbackClient() {
  async function handleRate(url: string, feedback: Feedback) {
    await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, opinion: feedback.opinion, message: feedback.message }),
    })
  }

  return <Rate onRateAction={handleRate} />
}
