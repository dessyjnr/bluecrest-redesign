import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
   const formData = await request.formData();

const applicationReference = `BC-${new Date().getFullYear()}-${Math.floor(
  1000 + Math.random() * 9000
)}`;

    const studentName = formData.get("studentName")?.toString();
    const dob = formData.get("dob")?.toString();
    const gender = formData.get("gender")?.toString();
    const studentClass = formData.get("class")?.toString();

    const parentName = formData.get("parentName")?.toString();
    const phone = formData.get("phone")?.toString();
    const email = formData.get("email")?.toString();
    const relationship = formData.get("relationship")?.toString();

    const previousSchool =
      formData.get("previousSchool")?.toString() || "Not provided";

    const message =
      formData.get("message")?.toString() ||
      "No additional information.";
    if (
      !studentName ||
      !dob ||
      !gender ||
      !studentClass ||
      !parentName ||
      !phone ||
      !email ||
      !relationship
    ) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing.");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    /*
     * =====================================================
     * 1. EMAIL TO BLUECREST ADMISSIONS
     * =====================================================
     */

    const { error: admissionsError } = await resend.emails.send({
      from: "Bluecrest Admissions <onboarding@resend.dev>",
      to: ["ajayi08143719358@gmail.com"],
      subject: `New Admission Application — ${studentName}`,
      replyTo: email,

      html: `
        <div style="
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #10251d;
          max-width: 700px;
          margin: auto;
        ">

          <div style="
  background:#e9eee8;
  border-radius:12px;
  padding:15px 20px;
  margin:20px 0;
">
  <strong>Application Reference:</strong>
  ${applicationReference}
</div>

          <p>
            A new application has been submitted through the
            Bluecrest International School website.
          </p>

          <hr />

          <h2>Student Information</h2>

          <p>
            <strong>Student Name:</strong> ${studentName}
          </p>

          <p>
            <strong>Date of Birth:</strong> ${dob}
          </p>

          <p>
            <strong>Gender:</strong> ${gender}
          </p>

          <p>
            <strong>Class Applying For:</strong> ${studentClass}
          </p>

          <p>
            <strong>Previous School:</strong> ${previousSchool}
          </p>

          <h2>Parent / Guardian Information</h2>

          <p>
            <strong>Name:</strong> ${parentName}
          </p>

          <p>
            <strong>Relationship:</strong> ${relationship}
          </p>

          <p>
            <strong>Phone:</strong> ${phone}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <h2>Additional Information</h2>

          <p>
            ${message}
          </p>

          <hr />

          <p style="color:#68756e;font-size:13px;">
            This application was submitted through the
            Bluecrest International School website.
          </p>

        </div>
      `,
    });

    if (admissionsError) {
      console.error("Admissions email error:", admissionsError);

      return NextResponse.json(
        {
          error: "Unable to send application.",
        },
        { status: 500 }
      );
    }

    /*
     * =====================================================
     * 2. CONFIRMATION EMAIL TO PARENT / GUARDIAN
     * =====================================================
     */

    const { error: parentEmailError } = await resend.emails.send({
      from: "Bluecrest International School <onboarding@resend.dev>",
      to: [email],
      subject: "Application Received — Bluecrest International School",

      html: `
        <div style="
          font-family: Arial, sans-serif;
          line-height: 1.7;
          color: #10251d;
          max-width: 650px;
          margin: auto;
        ">

          <div style="
            background:#10251d;
            padding:30px;
            border-radius:18px 18px 0 0;
            color:white;
          ">

            <p style="
              margin:0;
              color:#d8e8a8;
              font-size:12px;
              font-weight:bold;
              letter-spacing:3px;
            ">
              BLUECREST INTERNATIONAL SCHOOL
            </p>

            <h1 style="
              margin-top:15px;
              margin-bottom:0;
            ">
              Application Received ✓
            </h1>

          </div>

          <div style="
            background:#f7f8f6;
            padding:35px;
            border-radius:0 0 18px 18px;
          ">

            <p>
              Dear ${parentName},
            </p>

            <p>
              Thank you for applying to
              <strong>Bluecrest International School</strong>.
            </p>

            <div style="
  background:white;
  border:1px solid #10251d15;
  border-radius:15px;
  padding:20px;
  margin:25px 0;
">
  <p style="margin:0;">
    <strong>Application Reference:</strong>
    ${applicationReference}
  </p>

  <p style="margin:8px 0 0;">
    <strong>Student:</strong>
    ${studentName}
  </p>

  <p style="margin:8px 0 0;">
    <strong>Class:</strong>
    ${studentClass}
  </p>

  <p style="margin:8px 0 0;">
    <strong>Status:</strong>
    Application Received
  </p>
</div>

            <div style="
              background:white;
              border:1px solid #10251d15;
              border-radius:15px;
              padding:20px;
              margin:25px 0;
            ">

              <p style="margin:0;">
                <strong>Student:</strong> ${studentName}
              </p>

              <p style="margin:8px 0 0;">
                <strong>Class:</strong> ${studentClass}
              </p>

              <p style="margin:8px 0 0;">
                <strong>Application Status:</strong>
                Application Received
              </p>

            </div>

            <p>
              Our admissions team will review the information provided
              and contact you regarding the next steps.
            </p>

            <p>
              If you have any questions, please contact our admissions
              team.
            </p>

            <p style="margin-top:30px;">
              Kind regards,<br />
              <strong>Bluecrest International School</strong>
            </p>

          </div>

        </div>
      `,
    });

    if (parentEmailError) {
      /*
       * The school's application email was already sent successfully.
       * Therefore we don't fail the entire application if the
       * parent's confirmation email has a problem.
       */

      console.error(
        "Parent confirmation email error:",
        parentEmailError
      );
    }

    /*
     * =====================================================
     * SUCCESS
     * =====================================================
     */

    return NextResponse.json({
  success: true,
  message: "Application submitted successfully.",
  reference: applicationReference,
});
  } catch (error) {
    console.error("Admissions API error:", error);

    return NextResponse.json(
      {
        error: "Unable to process application.",
      },
      { status: 500 }
    );
  }
}