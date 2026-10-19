import * as z from 'zod'

const schema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
})

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null))
  if (!parsed.success) return new Response('Invalid data', { status: 400 })

  const { name, email, message } = parsed.data
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL,
      reply_to: email,
      subject: `New message from ${name}`,
      text: `${name} <${email}>\n\n${message}`,
    }),
  })

  if (!res.ok) console.error('Resend error:', await res.text())
  return new Response(null, { status: res.ok ? 200 : 502 })
}
