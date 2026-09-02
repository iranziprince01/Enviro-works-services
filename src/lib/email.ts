import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site";
import type { BookingFormValues, ContactFormValues } from "@/lib/validations/forms";
import { getServiceBySlug } from "@/data/services";

const brand = {
  green: "#2d6a4f",
  greenDark: "#1b4332",
  greenLight: "#f0f7f4",
  accent: "#52b788",
  text: "#1a2e24",
  muted: "#5c6b63",
};

function getMailConfig() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.EMAIL_TO ?? "enviroworksservicesinc@gmail.com";

  if (!user || !pass) {
    throw new Error("Email is not configured. Set SMTP_USER and SMTP_PASS in .env.local");
  }

  return { user, pass, to };
}

function createTransporter() {
  const { user, pass } = getMailConfig();

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: { user, pass },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function brandedEmailHtml({
  title,
  intro,
  rows,
  footerNote,
}: {
  title: string;
  intro: string;
  rows: { label: string; value: string }[];
  footerNote?: string;
}) {
  const rowHtml = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #e8efeb;color:${brand.muted};font-size:13px;width:140px;vertical-align:top;">
            ${escapeHtml(row.label)}
          </td>
          <td style="padding:10px 0;border-bottom:1px solid #e8efeb;color:${brand.text};font-size:14px;line-height:1.5;">
            ${escapeHtml(row.value)}
          </td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f6faf8;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f6faf8;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border:1px solid #dce8e1;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:${brand.green};padding:24px 28px;">
                <p style="margin:0;color:#d8f3dc;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;">${escapeHtml(siteConfig.name)}</p>
                <h1 style="margin:8px 0 0;color:#ffffff;font-size:22px;line-height:1.3;">${escapeHtml(title)}</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <p style="margin:0 0 20px;color:${brand.text};font-size:15px;line-height:1.6;">${escapeHtml(intro)}</p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0">${rowHtml}</table>
                ${
                  footerNote
                    ? `<p style="margin:24px 0 0;padding:14px 16px;background:${brand.greenLight};border-left:4px solid ${brand.accent};color:${brand.text};font-size:13px;line-height:1.5;">${escapeHtml(footerNote)}</p>`
                    : ""
                }
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px;background:${brand.greenLight};border-top:1px solid #dce8e1;">
                <p style="margin:0;color:${brand.muted};font-size:12px;line-height:1.5;">
                  Sent from the ${escapeHtml(siteConfig.name)} website · ${escapeHtml(siteConfig.url)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendContactEmail(data: ContactFormValues) {
  const { user, to } = getMailConfig();
  const transporter = createTransporter();

  const html = brandedEmailHtml({
    title: "New Contact Message",
    intro: "A visitor submitted the contact form on your website.",
    rows: [
      { label: "Name", value: data.name },
      { label: "Email", value: data.email },
      { label: "Phone", value: data.phone || "Not provided" },
      { label: "Subject", value: data.subject },
      { label: "Message", value: data.message },
    ],
    footerNote: `Reply directly to ${data.email} to respond to this inquiry.`,
  });

  await transporter.sendMail({
    from: `"${siteConfig.name}" <${user}>`,
    to,
    replyTo: data.email,
    subject: `[Contact] ${data.subject}`,
    html,
    text: [
      `New contact message from ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "Not provided"}`,
      `Subject: ${data.subject}`,
      "",
      data.message,
    ].join("\n"),
  });
}

export async function sendBookingEmail(data: BookingFormValues) {
  const { user, to } = getMailConfig();
  const transporter = createTransporter();
  const service = getServiceBySlug(data.serviceType);
  const serviceLabel = service?.shortTitle ?? data.serviceType;

  const html = brandedEmailHtml({
    title: "New Service Booking Request",
    intro: "A customer submitted a booking request through the website.",
    rows: [
      { label: "Full name", value: data.fullName },
      { label: "Email", value: data.email },
      { label: "Phone", value: data.phone },
      { label: "Property", value: data.propertyAddress },
      { label: "Service", value: serviceLabel },
      { label: "Preferred date", value: data.preferredDate },
      { label: "Preferred time", value: data.preferredTime },
      {
        label: "Details",
        value: data.additionalDetails?.trim() || "No additional details provided",
      },
    ],
    footerNote: `Reply to ${data.email} or call ${data.phone} to confirm this booking request.`,
  });

  await transporter.sendMail({
    from: `"${siteConfig.name}" <${user}>`,
    to,
    replyTo: data.email,
    subject: `[Booking] ${serviceLabel}: ${data.fullName}`,
    html,
    text: [
      `New booking request from ${data.fullName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Property: ${data.propertyAddress}`,
      `Service: ${serviceLabel}`,
      `Preferred date: ${data.preferredDate}`,
      `Preferred time: ${data.preferredTime}`,
      "",
      data.additionalDetails?.trim() || "No additional details provided",
    ].join("\n"),
  });
}
