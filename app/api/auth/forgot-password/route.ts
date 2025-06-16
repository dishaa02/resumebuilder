import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'
import { Resend } from 'resend'

// Initialize Resend with API key
const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.error('RESEND_API_KEY is not set in environment variables')
}

const resend = new Resend(resendApiKey)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    console.log('Processing forgot password request for email:', email)

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      console.log('No user found with email:', email)
      return NextResponse.json(
        { message: 'If an account exists with this email, you will receive a password reset link.' },
        { status: 200 }
      )
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString('hex')
    const resetTokenExpiry = new Date(Date.now() + 3600000) // 1 hour from now

    // Save reset token to database
    await prisma.user.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    })

    // Send email with reset link
    const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`
    console.log('Sending reset email to:', email)
    console.log('Reset URL:', resetUrl)
    console.log('Using Resend API Key:', resendApiKey ? 'Present' : 'Missing')
    
    try {
      // First, verify the API key is working
      const { data: verifyData, error: verifyError } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'delivered@resend.dev',
        subject: 'Test Email',
        html: '<p>Test email</p>',
      })

      if (verifyError) {
        console.error('Resend API Verification Error:', verifyError)
        return NextResponse.json(
          { message: 'Email service is currently unavailable. Please try again later.' },
          { status: 500 }
        )
      }

      console.log('Resend API verification successful')

      // Now send the actual reset email
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Reset your password',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Password Reset Request</h2>
            <p>You requested a password reset for your ResumeBuilder account.</p>
            <p>Click the button below to reset your password:</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${resetUrl}" 
                 style="background-color: #4F46E5; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
                Reset Password
              </a>
            </div>
            <p>This link will expire in 1 hour.</p>
            <p>If you didn't request this password reset, please ignore this email.</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">
              If the button above doesn't work, copy and paste this link into your browser:<br>
              ${resetUrl}
            </p>
          </div>
        `,
      })

      if (error) {
        console.error('Resend API Error:', error)
        return NextResponse.json(
          { message: 'Failed to send reset email. Please try again.' },
          { status: 500 }
        )
      }

      console.log('Email sent successfully:', data)
    } catch (emailError) {
      console.error('Exception while sending email:', emailError)
      return NextResponse.json(
        { message: 'Failed to send reset email. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'If an account exists with this email, you will receive a password reset link.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error in forgot password:', error)
    return NextResponse.json(
      { message: 'An error occurred. Please try again.' },
      { status: 500 }
    )
  }
} 