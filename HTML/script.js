/* ===================== Icon set (inline SVG, lucide-style line icons) ===================== */
const ICONS = {
  inbox: '<path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  bell: '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'check-circle': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  'x-circle': '<circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/>',
  'edit-3': '<path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  'alert-triangle': '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/>',
  'external-link': '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
  send: '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>',
  'rotate-ccw': '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
  filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
  'more-horizontal': '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
  'message-square': '<path d="M22 17a2 2 0 0 1-2 2H6l-4 4V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>',
  paperclip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.996 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.76 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  archive: '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
  'trash-2': '<path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  forward: '<polyline points="15 17 20 12 15 7"/><path d="M4 18v-2a4 4 0 0 1 4-4h12"/>',
  'corner-up-left': '<polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  key: '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4a5 5 0 0 0-7 7L3 20l1 1 1-1v-1.5h1.5V17H8v-1.5l1.5-1.5"/><circle cx="16.5" cy="7.5" r=".5" fill="currentColor" stroke="none"/>',
  'toggle-left': '<rect width="20" height="12" x="2" y="6" rx="6" ry="6"/><circle cx="8" cy="12" r="2"/>',
  'toggle-right': '<rect width="20" height="12" x="2" y="6" rx="6" ry="6"/><circle cx="16" cy="12" r="2"/>',
  save: '<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><path d="M21 12H9"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  'user-plus': '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/>',
  'user-cog': '<circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m19.5 12.5-.4 1"/><path d="m16.9 17.5.4 1"/><path d="m21.7 13.5-1 .4"/><path d="m15.4 16.1-1 .4"/><path d="m21.7 16.5-1-.4"/><path d="m15.4 13.9-1-.4"/><path d="m19.5 17.5-.4-1"/><path d="m16.9 12.5.4-1"/>'
};
function svgIcon(name, cls) {
  const path = ICONS[name] || '';
  return `<svg class="icon ${cls||''}" viewBox="0 0 24 24">${path}</svg>`;
}

/* ===================== Data ===================== */
const EMAILS = [
  { id:"EML-001", from:"Dr. Tan Bee Leng", fromEmail:"beeleng.tan@external.edu.sg", to:"admin@ite.edu.sg", subject:"Partnership Enquiry — Joint Curriculum Development for Cybersecurity Programme",
    preview:"Dear ITE Administration, I am writing on behalf of the Institute of Systems Science to explore a potential partnership...",
    body:"Dear ITE Administration,\n\nI am writing on behalf of the Institute of Systems Science (ISS) to explore a potential partnership opportunity for joint curriculum development in the area of Cybersecurity.\n\nOur institute has identified a significant skills gap in the region and believes that a collaborative programme co-developed with ITE's School of InfoComm Technology would be mutually beneficial.\n\nWe would like to propose an initial meeting with your curriculum team to discuss the scope, potential student pathways, and industry stakeholder involvement.\n\nWould it be possible to arrange a meeting at your earliest convenience? We are available any time during the week of 28 July 2026.\n\nThank you for your time and consideration.\n\nWarm regards,\nDr. Tan Bee Leng\nSenior Director, Curriculum Innovation\nInstitute of Systems Science",
    receivedAt:"2026-07-21T07:45:00Z", read:false, starred:true, hasAttachment:false, label:"inquiry", folder:"inbox", archived:false },
  { id:"EML-002", from:"Mdm Rohani Binte Yusof", fromEmail:"rohani.yusof@parent.sg", to:"admin@ite.edu.sg", subject:"Concern Regarding My Son's Attendance Record — Fariz Yusof (DIT/FT/2B/03)",
    preview:"Good morning, I am the mother of Fariz Yusof, currently enrolled in the Diploma in IT. I am writing to express my concern...",
    body:"Good morning,\n\nI am the mother of Fariz Yusof (Student ID: S10293847A), currently enrolled in the Diploma in Information Technology (DIT/FT/2B/03).\n\nI am writing to express my concern regarding his recent attendance record. He informed me last week that he received an attendance warning letter, but he assures me that some of the absences recorded were due to a medical condition that was communicated to his form tutor.\n\nI would like to request a meeting with his course manager or year head to discuss this matter and understand what steps can be taken to resolve the discrepancy.\n\nI am available on weekday mornings before 12pm. Please let me know a suitable date and time.\n\nThank you.\nMdm Rohani Binte Yusof\n+65 9123 4567",
    receivedAt:"2026-07-21T08:30:00Z", read:false, starred:false, hasAttachment:false, label:"complaint", folder:"inbox", archived:false },
  { id:"EML-003", from:"Ms. Jennifer Koh", fromEmail:"jennifer.koh@techcorp.com.sg", to:"ia@ite.edu.sg", subject:"Industrial Attachment Host Company Registration — TechCorp Solutions Pte Ltd",
    preview:"Dear ITE Industrial Attachment Office, TechCorp Solutions would like to register as an approved host company for the upcoming IA intake...",
    body:"Dear ITE Industrial Attachment Office,\n\nTechCorp Solutions Pte Ltd would like to formally register as an approved host company for the upcoming Industrial Attachment intake (January 2027).\n\nWe are a local technology firm specialising in enterprise software development and IT infrastructure. We are keen to host 3–5 students from the Diploma in Information Technology or Diploma in Software Engineering programmes.\n\nPlease find attached our company profile, UEN registration, and a proposed IA work plan for your review.\n\nWe look forward to contributing to the development of ITE students and would appreciate guidance on the next steps for registration.\n\nBest regards,\nMs. Jennifer Koh\nHR Manager\nTechCorp Solutions Pte Ltd\nUEN: 201934567K",
    receivedAt:"2026-07-21T09:15:00Z", read:true, starred:false, hasAttachment:true, label:"request", folder:"inbox", archived:false },
  { id:"EML-004", from:"Mr. David Loh", fromEmail:"david.loh@alumni.ite.edu.sg", to:"admin@ite.edu.sg", subject:"Request for Official Academic Transcript — Class of 2022",
    preview:"Hello, I am a graduate from the Diploma in Business Operations (Class of 2022). I am currently applying for a polytechnic conversion course...",
    body:"Hello,\n\nI am a graduate from the Diploma in Business Operations programme (Graduated: May 2022, Student ID: S9987654B).\n\nI am currently applying for a polytechnic conversion course and require an official sealed academic transcript for submission to Nanyang Polytechnic by 31 July 2026.\n\nCould you please advise on the process for requesting an official transcript as an alumnus? I understand there may be a processing fee involved.\n\nI am happy to collect the document in person or have it mailed directly to the polytechnic if that is possible.\n\nThank you very much.\nDavid Loh",
    receivedAt:"2026-07-20T16:20:00Z", read:true, starred:false, hasAttachment:false, label:"request", folder:"inbox", archived:false },
  { id:"EML-005", from:"Prof. Anwar Ibrahim", fromEmail:"anwar.ibrahim@skillsfuture.gov.sg", to:"principal@ite.edu.sg", subject:"SkillsFuture Festival 2026 — Invitation to Participate as Exhibitor",
    preview:"Dear Principal, SkillsFuture Singapore cordially invites ITE to participate as an exhibitor at the SkillsFuture Festival 2026...",
    body:"Dear Principal,\n\nSkillsFuture Singapore cordially invites the Institute of Technical Education (ITE) to participate as an exhibitor at the SkillsFuture Festival 2026, to be held at Marina Bay Sands Expo and Convention Centre from 12–14 September 2026.\n\nAs one of Singapore's key partners in adult learning and skills development, ITE's participation would greatly enrich the festival's offerings and inspire members of the public to pursue lifelong learning.\n\nWe would like to allocate a 6×6m booth space for ITE to showcase your programmes, student achievements, and industry partnerships.\n\nKindly confirm your participation by 5 August 2026. Our team will follow up with the exhibition logistics guide and booth allocation details.\n\nWe look forward to your partnership.\n\nWarm regards,\nProf. Anwar Ibrahim\nDirector, Partnerships & Outreach\nSkillsFuture Singapore",
    receivedAt:"2026-07-20T11:00:00Z", read:false, starred:true, hasAttachment:true, label:"inquiry", folder:"inbox", archived:false },
  { id:"EML-006", from:"Cik Amirah Binte Hashim", fromEmail:"amirah.hashim@myite.edu.sg", to:"finance@ite.edu.sg", subject:"Fee Waiver Application — Financial Hardship",
    preview:"Dear Finance Office, I am a first-year student enrolled in the Diploma in Early Childhood Care and Education. My family is currently facing...",
    body:"Dear Finance Office,\n\nI am a first-year student enrolled in the Diploma in Early Childhood Care and Education (DECCE/FT/1A/02, Student ID: S10456789C).\n\nMy family is currently facing significant financial hardship following my father's recent retrenchment. We are having difficulty meeting the semester fee payment due on 31 July 2026.\n\nI would like to apply for a fee waiver or payment deferment, as well as any bursary schemes I may be eligible for.\n\nI have attached supporting documents including my father's retrenchment letter and our household income statement.\n\nThank you for your understanding and assistance.\n\nYours sincerely,\nAmirah Binte Hashim",
    receivedAt:"2026-07-21T10:05:00Z", read:false, starred:false, hasAttachment:true, label:"request", folder:"inbox", archived:false },
  { id:"EML-007", from:"Mr. Clarence Ng", fromEmail:"clarence.ng@feedback.sg", to:"feedback@ite.edu.sg", subject:"Feedback on Campus Canteen Food Quality — ITE College East",
    preview:"To Whom It May Concern, I am a student at ITE College East and would like to provide feedback about the declining quality of food...",
    body:"To Whom It May Concern,\n\nI am a student at ITE College East (Block D, Year 2) and would like to provide feedback regarding the declining food quality at the campus canteen.\n\nOver the past few weeks, the food portion sizes have noticeably reduced while prices have remained the same. Additionally, the cleanliness of the seating area during peak lunch hours (12pm–1pm) has been a concern, with tables often left uncleared for extended periods.\n\nI understand that the canteen vendors are external contractors, but I hope the school administration can look into this matter and work with them to improve the dining experience for students.\n\nThank you for taking the time to read this feedback.\n\nRegards,\nClarence Ng\nStudent, ITE College East",
    receivedAt:"2026-07-19T14:35:00Z", read:true, starred:false, hasAttachment:false, label:"feedback", folder:"inbox", archived:false }
];

const TICKETS = [
  { id:"TKT-2847", subject:"Application for Module Exemption — Diploma in Information Technology", sender:"Lim Wei Jian", senderRole:"Student", senderEmail:"weijian.lim@myite.edu.sg",
    channel:"portal", status:"pending", priority:"high", intent:"Module Exemption Request", receivedAt:"2026-07-21T08:14:00Z", category:"Academic Affairs",
    body:"Dear Admin,\n\nI am currently enrolled in Diploma in Information Technology (DIT/FT/2B/01). I completed a Cisco CCNA certification in May 2026 and would like to apply for an exemption from the Networking Fundamentals module (ITN1001).\n\nPlease advise on the procedure and supporting documents required. I have attached my certification transcript for reference.\n\nThank you.",
    aiDraft:"Dear Wei Jian,\n\nThank you for reaching out regarding your module exemption request for ITN1001 (Networking Fundamentals).\n\nBased on ITE's Module Exemption Policy (Academic Year 2026/27), students holding industry certifications equivalent to module learning outcomes may apply for exemption subject to the following conditions:\n\n1. The certification must have been obtained within the past 24 months from the date of application.\n2. A completed Module Exemption Form (MEF-01) must be submitted to the School of InfoComm Technology office.\n3. Supporting documents required: Original certification transcript, letter of endorsement from your course manager, and a brief self-declaration of prior learning.\n\nPlease note that exemptions are granted at the discretion of the course manager and are subject to approval. The processing time is typically 10–14 working days.\n\nTo proceed, please collect Form MEF-01 from the General Office (Block C, Level 2) or download it from the student portal under Academic Services > Forms.\n\nShould you have further questions, please do not hesitate to contact us.\n\nWarm regards,\nAcademic Affairs Office\nITE College East",
    confidence:91,
    citations:[
      { title:"ITE Module Exemption Policy AY2026/27", section:"Section 3.2 — Certification-Based Exemptions", relevance:97, source_url:"https://www.ite.edu.sg/current-full-time-students/admissions/student-services/", content:"Students holding industry certifications equivalent to module learning outcomes may apply for exemption... The certification must be obtained within 24 months." },
      { title:"Student Handbook 2026 — Academic Regulations", section:"Chapter 5, Para 5.4", relevance:88, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"Academic regulations outline standard procedures for credit transfers, module registration, exemptions, and grading criteria across all colleges." },
      { title:"InfoComm School FAQ — Forms & Procedures", section:"Q: How do I apply for a module exemption?", relevance:82, source_url:"https://www.ite.edu.sg/about-ite/our-organisation/", content:"To apply, students must obtain Form MEF-01 from the general office or portal, attach supporting transcripts, and submit to the curriculum coordinator." }
    ],
    flags:[] },
  { id:"TKT-2851", subject:"Appeal Against Course Grade — Culinary Arts Practicum Assessment", sender:"Nadia Binte Razali", senderRole:"Student", senderEmail:"nadia.razali@myite.edu.sg",
    channel:"email", status:"in_review", priority:"high", intent:"Grade Appeal", receivedAt:"2026-07-21T09:02:00Z", category:"Assessment & Grading",
    body:"To Whom It May Concern,\n\nI am writing to formally appeal my grade for the Culinary Arts Practicum II (CUL2003) assessment conducted on 15 July 2026. I received a 'D' grade which I believe does not accurately reflect my performance during the assessment.\n\nI was experiencing a medical emergency that day and had submitted an MC. I would like to request a re-assessment or grade review. I have attached the relevant medical certificate.\n\nI hope this matter can be resolved fairly. Thank you.",
    aiDraft:"Dear Nadia,\n\nThank you for your formal appeal regarding your Culinary Arts Practicum II (CUL2003) assessment grade.\n\nWe have noted your submission and the attached medical certificate. Under ITE's Assessment Appeal Procedure (Ref: AAP-2026), students who were assessed under extenuating medical circumstances may apply for a Special Consideration or Re-assessment, subject to the following:\n\n1. A valid medical certificate (MC) issued by a registered medical practitioner covering the date of assessment must be submitted within 3 working days of the assessment date.\n2. A completed Grade Appeal Form (GAF-02) is required, endorsed by your course lecturer.\n3. Re-assessment, if approved, will be scheduled within the same academic semester.\n\nAs your MC has been submitted, your appeal is eligible for review. Please submit Form GAF-02 to the School of Hospitality office (Block A, Level 1) by 25 July 2026.\n\n⚠️ Please note: The final decision rests with the Assessment Review Committee and may take up to 15 working days.\n\nWe will keep you updated on the outcome.\n\nYours sincerely,\nStudent Affairs Office\nITE College Central",
    confidence:86,
    citations:[
      { title:"ITE Assessment Appeal Procedure 2026", section:"Section 4 — Grounds for Appeal (Medical)", relevance:95, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"A grade appeal based on medical reasons requires submitting a registered medical practitioner certificate (MC) within 3 working days of the assessment." },
      { title:"Student Handbook 2026 — Assessment Policies", section:"Chapter 8, Para 8.6 — Special Consideration", relevance:90, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"Special consideration is given to students encountering unforeseen extenuating circumstances such as family bereavement or medical emergencies during exams." },
      { title:"Hospitality School — Assessment FAQ", section:"Q: What if I was unwell during an assessment?", relevance:78, source_url:"https://www.ite.edu.sg/about-ite/our-organisation/", content:"Students who are unwell during a practical assessment must immediately notify their assessor and submit an official MC to schedule a make-up assessment." }
    ],
    flags:["MC verification pending", "Deadline sensitive — 25 Jul 2026"] },
  { id:"TKT-2854", subject:"Industrial Attachment Deferment Request", sender:"Marcus Tan Kok Wei", senderRole:"Student", senderEmail:"marcus.tan@myite.edu.sg",
    channel:"portal", status:"pending", priority:"medium", intent:"IA Deferment", receivedAt:"2026-07-21T10:30:00Z", category:"Industrial Attachment",
    body:"Hi,\n\nI am currently scheduled for Industrial Attachment starting August 2026. However, my family is facing some financial difficulties and I may need to defer to the next intake (January 2027) to take on part-time work.\n\nIs deferment possible and what are the implications for my graduation timeline? Please advise.",
    aiDraft:"Dear Marcus,\n\nThank you for reaching out. We understand that personal circumstances can sometimes affect your academic journey, and we are here to support you.\n\nRegarding Industrial Attachment (IA) deferment, please note the following from the ITE IA Handbook 2026:\n\n1. Deferment requests must be submitted at least 4 weeks before the scheduled IA commencement date.\n2. Approved deferments will result in IA being rescheduled to the next available intake (January 2027 in your case).\n3. Graduation timeline will be extended by one semester accordingly.\n4. A deferment does not affect your current academic standing or GPA.\n\nFor financial assistance, you may wish to explore the following options concurrently:\n• ITE Bursary Fund — open for applications year-round for students facing financial hardship.\n• ComCare Short-to-Medium Term Assistance — for families requiring immediate financial support.\n\nPlease submit a completed IA Deferment Request Form (IAD-01) to your School's IA Coordinator. We strongly recommend scheduling a counselling session with the Student Services Centre (SSC) to discuss your options holistically.\n\nWarm regards,\nIndustrial Attachment Office\nITE College West",
    confidence:88,
    citations:[
      { title:"ITE Industrial Attachment Handbook 2026", section:"Section 6 — Deferment Procedures", relevance:93, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"Requests for IA deferment must be made in writing at least 4 weeks prior to deployment. Deferrals extend the student's graduation date by one semester." },
      { title:"ITE Financial Assistance Schemes 2026", section:"ITE Bursary Fund — Eligibility Criteria", relevance:85, source_url:"https://www.ite.edu.sg/current-full-time-students/admissions/student-services/financial-assistance/", content:"The ITE Bursary Fund offers monthly or lump-sum stipends to full-time students with a gross household income below the qualifying threshold." },
      { title:"Student Services FAQ", section:"Q: Can I defer my IA?", relevance:80, source_url:"https://www.ite.edu.sg/current-full-time-students/admissions/student-services/", content:"IA deferment is allowed under valid circumstances such as medical issues, national representation, or severe family financial hardship." }
    ],
    flags:["Possible financial hardship — refer to SSC"] },
  { id:"TKT-2856", subject:"Enquiry: Transfer Between ITE Colleges", sender:"Priya Subramaniam", senderRole:"Student", senderEmail:"priya.subramaniam@myite.edu.sg",
    channel:"email", status:"escalated", priority:"medium", intent:"Inter-College Transfer", receivedAt:"2026-07-20T15:45:00Z", category:"Transfers & Admissions",
    body:"Hello,\n\nI am enrolled at ITE College Central but my family has recently moved to Tampines. Commuting is now very difficult and I would like to transfer to ITE College East to study the same course (Diploma in Business Operations).\n\nIs this transfer possible? What documents do I need and how long will it take?",
    aiDraft:"Dear Priya,\n\nThank you for your enquiry regarding an inter-college transfer.\n\nInter-college transfers within ITE are processed on a case-by-case basis and are subject to course availability at the receiving college. The general process is as follows:\n\n1. Submit a Transfer Application Form (TAF-03) to your current college's General Office.\n2. Attach a supporting letter explaining your reason for transfer (e.g., change of residential address, supported by proof such as NRIC or utility bill).\n3. The receiving college (ITE College East) will assess the application based on available vacancies in the Diploma in Business Operations programme.\n4. Processing time is approximately 3–4 weeks. You will be notified via email.\n\nPlease note that approved transfers typically take effect at the start of the next academic semester.\n\n⚠️ This ticket has been escalated to the Admissions Office for further review as cross-college transfers require inter-departmental coordination.\n\nWarm regards,\nStudent Affairs Office",
    confidence:74,
    citations:[
      { title:"ITE Transfer Policy 2026", section:"Section 2 — Inter-College Transfers", relevance:91, source_url:"https://www.ite.edu.sg/current-full-time-students/admissions/", content:"Inter-college transfers are permitted if there is a vacancy in the matching course at the destination college and the student has a valid justification." },
      { title:"Admissions FAQ", section:"Q: Can I transfer between ITE colleges?", relevance:83, source_url:"https://www.ite.edu.sg/current-full-time-students/admissions/", content:"Submit transfer requests using Form TAF-03 along with proof of address or relevant documents. Processing takes about 3 to 4 weeks." }
    ],
    flags:["Escalated — Admissions review required", "Confidence below threshold"] },
  { id:"TKT-2859", subject:"Request for Student Verification Letter", sender:"Ahmad Firdaus", senderRole:"Student", senderEmail:"ahmad.firdaus@myite.edu.sg",
    channel:"portal", status:"approved", priority:"low", intent:"Document Request", receivedAt:"2026-07-20T11:10:00Z", category:"Student Records",
    body:"Hi, I need a student verification letter for my part-time job application at NTUC FairPrice. They need it to confirm I am a full-time student. Can I get this within 2 days?",
    aiDraft:"Dear Ahmad,\n\nThank you for your request. A student verification letter can be obtained via the following methods:\n\n1. Self-service (Immediate): Log in to the ITE Student Portal > Student Services > Request Documents > Student Verification Letter. The letter will be generated instantly in PDF format.\n2. In-person: Visit the General Office (Block C, Level 1) during operating hours (Mon–Fri, 8:30am–5:30pm). Letters are typically ready within 1 working day.\n\nYour letter will confirm your full-time enrollment status, course name, and expected graduation date.\n\nPlease note that the letter is digitally signed and verifiable via the QR code provided.\n\nWarm regards,\nStudent Records Office",
    confidence:98,
    citations:[
      { title:"Student Records FAQ", section:"Q: How do I request a student verification letter?", relevance:99, source_url:"https://www.ite.edu.sg/current-full-time-students/admissions/student-services/", content:"Active students can instantly download a digitally signed Student Verification Letter from the Student Portal under the Documents menu." }
    ],
    flags:[] }
];

const EMAIL_CITATIONS = {
  "EML-001": [
    { title:"ITE Partnership & MOU Policy 2026", section:"Section 2 — External Collaboration Framework", relevance:96, source_url:"https://www.ite.edu.sg/about-ite/our-organisation/global-partnerships/", content:"External collaborations require formal MOU sign-off from the Academic Director and curriculum matching review by school heads." },
    { title:"School of InfoComm Technology — Programme Guide", section:"Cybersecurity Diploma Overview", relevance:88, source_url:"https://www.ite.edu.sg/about-ite/our-organisation/global-partnerships/", content:"The school of InfoComm technology provides hands-on cybersecurity courses in partnership with leading global technology vendors." },
    { title:"ITE Corporate Communications SOP", section:"Chapter 4 — External Enquiry Response Protocol", relevance:81, source_url:"https://www.ite.edu.sg/about-ite/our-organisation/global-partnerships/", content:"All public/external partnership proposals must be acknowledged within 3 working days and routed to the corresponding department heads." }
  ],
  "EML-002": [
    { title:"ITE Student Attendance Policy 2026", section:"Section 5 — Medical Absence & MC Procedures", relevance:97, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"Absences are only excused with a valid MC from an officially registered clinic, submitted within 3 days of returning to school." },
    { title:"Student Handbook 2026", section:"Chapter 3, Para 3.2 — Parental Engagement", relevance:89, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"ITE encourages parent-teacher engagement. Form tutors are the first point of contact for parents regarding attendance or behavior issues." },
    { title:"Student Affairs Office SOP", section:"Parent Enquiry Response Guidelines", relevance:83, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"Enquiries from parents regarding student discipline or attendance must be resolved via in-person meetings with the Year Head." }
  ],
  "EML-003": [
    { title:"ITE Industrial Attachment Handbook 2026", section:"Section 8 — Host Company Registration", relevance:98, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"Companies wishing to host ITE interns must register on the IA Portal, provide valid UEN registration, and detail a structured learning plan." },
    { title:"IA Host Company FAQ", section:"Q: How do I register as a host company?", relevance:91, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"Visit the IA portal registration page, fill out company details, submit UEN document, and wait for school review (10 working days)." },
    { title:"ITE IA Portal User Guide", section:"Form HC-REG-01 Submission Instructions", relevance:85, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"Form HC-REG-01 captures internship roles, technical scope, mentor details, and student supervisor workspace requirements." }
  ],
  "EML-004": [
    { title:"ITE Student Records Policy", section:"Section 6 — Alumni Transcript Request", relevance:99, source_url:"https://www.ite.edu.sg/current-full-time-students/admissions/student-services/", content:"Alumni can request official transcripts online. A small fee is applicable, and files are dispatched by courier or self-collected." },
    { title:"Alumni Services FAQ", section:"Q: How do I get my official transcript after graduation?", relevance:94, source_url:"https://www.ite.edu.sg/current-full-time-students/admissions/student-services/", content:"Log in to the Alumni Portal with Singpass, submit the transcript application form, and choose delivery or collection option." }
  ],
  "EML-005": [
    { title:"ITE External Events & Exhibitions SOP", section:"Section 3 — Government Invitations Protocol", relevance:92, source_url:"https://www.ite.edu.sg/about-ite/our-organisation/", content:"Exhibition requests from state agencies require Principal approval and booth space configuration coordination by Corporate Communications." },
    { title:"Corporate Communications Guidelines 2026", section:"SkillsFuture Partnership — Response Template", relevance:87, source_url:"https://www.ite.edu.sg/about-ite/our-organisation/", content:"Official correspondence template for joint government outreach initiatives such as national roadshows or skills exhibitions." }
  ],
  "EML-006": [
    { title:"ITE Financial Assistance Schemes 2026", section:"ITE Bursary Fund — Eligibility & Application", relevance:97, source_url:"https://www.ite.edu.sg/current-full-time-students/admissions/student-services/financial-assistance/", content:"Bursary applications are assessed based on Gross Household Income (GHI) and Per Capita Income (PCI) criteria defined annually." },
    { title:"Student Services Centre SOP", section:"Fee Deferment Application Process", relevance:93, source_url:"https://www.ite.edu.sg/current-full-time-students/admissions/student-services/", content:"Students unable to meet fee deadlines due to emergency hardships can apply at SSC for a payment plan or deferral." },
    { title:"Student Handbook 2026", section:"Chapter 9 — Financial Hardship Support", relevance:86, source_url:"https://www.ite.edu.sg/current-full-time-students/", content:"A range of financial aids including emergency loans, pocket money funds, and transport subsidies are available to eligible students." }
  ],
  "EML-007": [
    { title:"ITE Campus Facilities Management Policy", section:"Section 4 — Canteen Operations & Standards", relevance:88, source_url:"https://www.ite.edu.sg/about-ite/our-organisation/", content:"Canteen stalls are audited monthly for cleanliness, food hygiene, portion sizes, and price compliance against the agreed contract." },
    { title:"Student Feedback Handling SOP", section:"Category: Facilities & Environment", relevance:82, source_url:"https://www.ite.edu.sg/about-ite/our-organisation/", content:"Feedback about campus facilities must be logged in the system, investigated by the operations team, and resolved within 5 days." }
  ]
};

const EMAIL_AI_DRAFTS = {
  "EML-001": "Dear Dr. Tan Bee Leng,\n\nThank you for reaching out to ITE regarding a potential partnership for a joint Cybersecurity curriculum.\n\nWe are pleased to hear of ISS's interest and would welcome an initial discussion with our School of InfoComm Technology. I will forward your proposal to our Curriculum Development team and revert within 5 working days to schedule a meeting at a mutually convenient time.\n\nThank you again for your interest in collaborating with ITE.\n\nWarm regards,\nAcademic Affairs Office\nInstitute of Technical Education",
  "EML-002": "Dear Mdm Rohani,\n\nThank you for writing in regarding your son Fariz Yusof (S10293847A, DIT/FT/2B/03).\n\nWe have noted your concern about his attendance record. Please be assured that we will review the matter and verify the medical certificates submitted. Our Year Head will contact you within 3 working days to arrange a meeting.\n\nThank you for bringing this to our attention.\n\nWarm regards,\nStudent Affairs Office\nITE College East",
  "EML-003": "Dear Ms. Jennifer Koh,\n\nThank you for your interest in registering TechCorp Solutions Pte Ltd as an approved IA host company for our January 2027 intake.\n\nPlease complete the Host Company Registration Form (HC-REG-01) available on our IA portal and submit it along with your company's UEN registration and job descriptions for the proposed roles. Our IA coordinator will review your application within 10 working days.\n\nWarm regards,\nIndustrial Attachment Office\nITE College East",
  "EML-004": "Dear Mr. David Loh,\n\nThank you for your enquiry. As an alumnus, you may request your official sealed transcript via the ITE Alumni Portal (alumni.ite.edu.sg) under Student Records > Transcript Request.\n\nPlease allow 5 working days for processing. The transcript will be mailed to your registered address or available for collection at the General Office.\n\nWarm regards,\nStudent Records Office\nInstitute of Technical Education",
  "EML-005": "Dear Prof. Anwar Ibrahim,\n\nThank you for the invitation to participate in the SkillsFuture Festival 2026. ITE is pleased to confirm our participation as an exhibitor from 12–14 September 2026 at Marina Bay Sands.\n\nWe will coordinate internally on booth content and revert with our official confirmation and logistics requirements by 5 August 2026.\n\nWarm regards,\nCorporate Communications Office\nInstitute of Technical Education",
  "EML-006": "Dear Amirah,\n\nThank you for writing in. We understand your family is going through a difficult period and we are here to support you.\n\nYou may be eligible for the ITE Bursary Fund and fee deferment scheme. Please visit the Student Services Centre (Block A, Level 1) with your parent's retrenchment letter and IC, and our counsellor will guide you through the application process.\n\nWarm regards,\nFinance & Student Services Office\nITE College East",
  "EML-007": "Dear Clarence,\n\nThank you for your feedback regarding the canteen at ITE College East. We take student welfare seriously and will raise your concerns — portion sizes and cleanliness — with our Facilities and Canteen Management team for follow-up.\n\nWe appreciate you taking the time to write in.\n\nWarm regards,\nStudent Affairs Office\nITE College East"
};

const STATUS_CONFIG = {
  pending: { label:"Pending", cls:"status-pending" },
  generated: { label:"Pending Review", cls:"status-pending" },
  in_review: { label:"In Review", cls:"status-in_review" },
  approved: { label:"Approved", cls:"status-approved" },
  escalated: { label:"Escalated", cls:"status-escalated" },
  rejected: { label:"Rejected", cls:"status-escalated" }
};
const PRIORITY_CONFIG = {
  high: { dot:"dot-high", label:"High" },
  medium: { dot:"dot-medium", label:"Med" },
  low: { dot:"dot-low", label:"Low" }
};
const LABEL_CONFIG = {
  inquiry: { cls:"label-inquiry", label:"Inquiry" },
  complaint: { cls:"label-complaint", label:"Complaint" },
  request: { cls:"label-request", label:"Request" },
  feedback: { cls:"label-feedback", label:"Feedback" },
  other: { cls:"label-other", label:"Other" }
};

/* ===================== State ===================== */
const state = {
  navItem: "tickets",
  theme: "dark",
  accountMenuOpen: false,

  tickets: JSON.parse(JSON.stringify(TICKETS)),
  selectedTicketId: "TKT-2847",
  activeTab: "draft",
  draftStatus: "ready",
  editMode: false,
  draftText: {},
  ticketSearch: "",
  ticketFilterStatus: "all",

  emails: JSON.parse(JSON.stringify(EMAILS)),
  selectedEmailId: null,
  emailSearch: "",
  emailFilterLabel: "all",
  replyOpen: false,
  replyText: "",
  aiDraftOpen: false,
  aiDraftLoading: false,
  aiDraftText: {},
  citationsOpen: false,

  widths: { queue: 320, message: 300, emailList: 360 },

  settings: {
    aiDraftEnabled: true, autoClassify: true, confidenceThreshold: 75,
    hitlRequired: true, escalateBelow: true,
    emailNotif: true, escalationAlert: true, dailyDigest: false,
    savedMsg: false
  }
};

/* ===================== Helpers ===================== */
function formatTime(iso) {
  const d = new Date(iso);
  const now = new Date();
  const diff = Math.floor((now.getTime() - d.getTime()) / 60000);
  if (diff < 60) return `${diff}m ago`;
  if (diff < 1440) return `${Math.floor(diff / 60)}h ago`;
  return d.toLocaleDateString("en-SG", { day: "numeric", month: "short" });
}
function formatDateTime(iso) {
  return new Date(iso).toLocaleString("en-SG", { dateStyle: "medium", timeStyle: "short" });
}
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function confidenceFillClass(value) {
  return value >= 90 ? "fill-high" : value >= 75 ? "fill-mid" : "fill-low";
}
function confidenceBarHtml(value, width) {
  return `<div class="confidence-bar-wrap" style="${width ? `width:${width}px;` : ''}">
    <div class="confidence-track"><div class="confidence-fill ${confidenceFillClass(value)}" style="width:${value}%"></div></div>
    <span class="confidence-val">${value}%</span>
  </div>`;
}
function relevanceColor(v) { return v >= 90 ? "#10b981" : v >= 80 ? "#f59e0b" : "#ef4444"; }

/* ===================== Draggable dividers ===================== */
function makeDraggable(dividerEl, panelEl, opts) {
  let dragging = false, startX = 0, startSize = 0;
  const { min, max, key, invert } = opts;
  dividerEl.addEventListener('mousedown', (e) => {
    e.preventDefault();
    dragging = true;
    startX = e.clientX;
    startSize = state.widths[key];
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
    dividerEl.classList.add('dragging');
  });
  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    const delta = invert ? (startX - e.clientX) : (e.clientX - startX);
    const newSize = Math.min(max, Math.max(min, startSize + delta));
    state.widths[key] = newSize;
    panelEl.style.width = newSize + "px";
  });
  window.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";
    dividerEl.classList.remove('dragging');
  });
}

/* ===================== Sidebar ===================== */
function renderSidebar() {
  const pendingCount = state.tickets.filter(t => t.status === "pending").length;
  const unreadCount = state.emails.filter(e => !e.read && e.folder === "inbox").length;
  const navItems = [
    { id: "tickets", icon: "inbox", label: "Ticket Queue", badge: pendingCount },
    { id: "email", icon: "mail", label: "Email Inbox", badge: unreadCount },
    { id: "settings", icon: "settings", label: "Settings", badge: null }
  ];

  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = `
    <div class="sidebar-logo-wrap">
      <div class="hoverable">
        <div class="sidebar-logo-badge">${svgIcon('zap','icon-md')}</div>
        <div class="tooltip">CoPilot <span class="sub">Admin Intelligence</span></div>
      </div>
    </div>
    <nav class="sidebar-nav" id="sidebarNav">
      ${navItems.map(item => `
        <div class="hoverable">
          <button class="nav-icon-btn ${state.navItem === item.id ? 'active' : ''}" data-nav="${item.id}">
            ${svgIcon(item.icon, 'icon-md')}
            ${item.badge != null && item.badge > 0 ? `<span class="nav-icon-badge">${item.badge}</span>` : ''}
          </button>
          <div class="tooltip">
            <span>${item.label}</span>
            ${item.badge != null && item.badge > 0 ? `<span class="tt-badge">${item.badge}</span>` : ''}
          </div>
        </div>
      `).join('')}
    </nav>
    <div class="sidebar-user-wrap" id="sidebarUserWrap">
      <div class="hoverable">
        <button class="sidebar-avatar-btn ${state.accountMenuOpen ? 'open' : ''}" id="avatarBtn">SL</button>
        <div class="tooltip"><span>Sarah Lim</span><span class="sub">Senior Admin Officer</span></div>
      </div>
      ${state.accountMenuOpen ? renderAccountMenu() : ''}
    </div>
  `;

  sidebar.querySelectorAll('[data-nav]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.navItem = btn.getAttribute('data-nav');
      renderAll();
    });
  });

  document.getElementById("avatarBtn").addEventListener('click', (e) => {
    e.stopPropagation();
    state.accountMenuOpen = !state.accountMenuOpen;
    renderSidebar();
  });
}

function renderAccountMenu() {
  const items = [
    { icon: "user-cog", label: "Edit Profile", desc: "Update your name, role & photo" },
    { icon: "lock", label: "Change Password", desc: "Update your login credentials" },
    { icon: "user-plus", label: "Manage Accounts", desc: "Switch or add admin accounts" },
    { icon: "settings", label: "Account Settings", desc: "Preferences & security options" }
  ];
  return `
    <div class="account-menu" data-account-menu>
      <div class="account-menu-head">
        <div class="account-menu-avatar">SL</div>
        <div>
          <div class="account-menu-name">Sarah Lim</div>
          <div class="account-menu-email">sarah.lim@ite.edu.sg</div>
        </div>
      </div>
      ${items.map(it => `
        <button class="account-menu-item" data-menu-action="settings">
          ${svgIcon(it.icon)}
          <div>
            <div class="account-menu-item-label">${it.label}</div>
            <div class="account-menu-item-desc">${it.desc}</div>
          </div>
        </button>
      `).join('')}
      <div class="account-menu-signout">
        <button class="account-menu-item" data-menu-action="signout">
          ${svgIcon('log-out')}
          <span class="account-menu-item-label">Sign Out</span>
        </button>
      </div>
    </div>
  `;
}

function wireAccountMenu() {
  const menu = document.querySelector('[data-account-menu]');
  if (!menu) return;
  menu.querySelectorAll('[data-menu-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-menu-action');
      state.accountMenuOpen = false;
      if (action === 'settings') state.navItem = 'settings';
      renderAll();
    });
  });
}

document.addEventListener('mousedown', (e) => {
  if (!state.accountMenuOpen) return;
  if (!e.target.closest('[data-account-menu]') && !e.target.closest('#avatarBtn')) {
    state.accountMenuOpen = false;
    renderSidebar();
  }
});

/* ===================== Ticket queue + detail ===================== */
function loadLiveTicketDraft(ticket) {
  if (ticket.session_id && ticket.citations && ticket.citations.length > 0) {
    return; // Already fully loaded with citations
  }
  
  state.draftStatus = "loading";
  renderTicketDetail();
  
  fetch("/api/v1/query/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      body: ticket.body,
      subject: ticket.subject,
      sender: `${ticket.sender} <${ticket.senderEmail}>`,
      channel: ticket.channel || "portal",
      session_id: ticket.session_id || ticket.id,
      top_k: 3
    })
  })
  .then(res => {
    if (!res.ok) throw new Error("Backend connection failed");
    return res.json();
  })
  .then(data => {
    ticket.session_id = data.session_id;
    ticket.aiDraft = data.draft_body;
    ticket.citations = data.citations.map(c => ({
      title: c.heading,
      section: c.heading,
      relevance: Math.round((1.0 - c.relevance_score) * 100),
      source_url: c.source_url,
      content: c.content
    }));
    ticket.confidence = data.confidence;
    ticket.pre_approved = data.pre_approved;
    
    state.draftText[ticket.id] = data.draft_body;
    state.draftStatus = "ready";
    renderTicketDetail();
  })
  .catch(err => {
    console.error("Failed to load live RAG draft:", err);
    state.draftStatus = "error";
    renderTicketDetail();
  });
}

function getFilteredTickets() {
  const q = state.ticketSearch.toLowerCase();
  return state.tickets.filter(t => {
    const matchSearch = q === "" || t.subject.toLowerCase().includes(q) || t.sender.toLowerCase().includes(q) || t.id.toLowerCase().includes(q);
    const matchStatus = state.ticketFilterStatus === "all" || 
                        t.status === state.ticketFilterStatus ||
                        (state.ticketFilterStatus === "pending" && t.status === "generated");
    return matchSearch && matchStatus;
  });
}

function renderTicketView() {
  const root = document.getElementById("ticketView");
  root.innerHTML = `
    <div class="ticket-queue" id="ticketQueue" style="width:${state.widths.queue}px">
      <div class="panel-header">
        <div class="panel-header-top">
          <h1 class="panel-title">Ticket Queue</h1>
          <div style="display:flex; gap:2px;">
            <button class="icon-btn" id="bellBtn">${svgIcon('bell')}</button>
            <button class="icon-btn">${svgIcon('more-horizontal')}</button>
          </div>
        </div>
        <div class="search-wrap">
          ${svgIcon('search')}
          <input class="search-input" id="ticketSearch" placeholder="Search tickets…">
        </div>
        <div class="chip-row" id="ticketFilterChips"></div>
      </div>
      <div class="list-scroll" id="ticketList"></div>
      <div class="list-footer" id="ticketFooter"></div>
    </div>
    <div class="divider" id="queueDivider"></div>
    <div class="detail-panel" id="ticketDetailPanel"></div>
  `;
  makeDraggable(document.getElementById("queueDivider"), document.getElementById("ticketQueue"), { min: 200, max: 480, key: "queue" });

  const search = document.getElementById("ticketSearch");
  search.value = state.ticketSearch;
  search.addEventListener('input', (e) => { state.ticketSearch = e.target.value; renderTicketList(); });

  renderTicketFilterChips();
  renderTicketList();

  const selected = state.tickets.find(t => t.id === state.selectedTicketId);
  if (selected && !selected.session_id) {
    loadLiveTicketDraft(selected);
  } else {
    if (selected) {
      state.draftStatus = selected.status === "approved" ? "approved" : selected.status === "rejected" ? "rejected" : "ready";
    }
    renderTicketDetail();
  }
}

function renderTicketFilterChips() {
  const statuses = ["all", "pending", "in_review", "escalated", "approved"];
  const el = document.getElementById("ticketFilterChips");
  if (!el) return;
  el.innerHTML = statuses.map(s => `
    <button class="chip ${state.ticketFilterStatus === s ? 'active' : ''}" data-status="${s}">
      ${s === "all" ? "ALL" : s.replace("_", "-").toUpperCase()}
    </button>
  `).join('');
  el.querySelectorAll('[data-status]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.ticketFilterStatus = btn.getAttribute('data-status');
      renderTicketFilterChips();
      renderTicketList();
    });
  });
}

function renderTicketList() {
  const filtered = getFilteredTickets();
  const listEl = document.getElementById("ticketList");
  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="list-empty">${svgIcon('filter','icon-xl')}<p>No tickets match your filter</p></div>`;
  } else {
    listEl.innerHTML = filtered.map(t => {
      const sc = STATUS_CONFIG[t.status];
      const pc = PRIORITY_CONFIG[t.priority];
      const active = t.id === state.selectedTicketId;
      return `
      <button class="ticket-row ${active ? 'active' : ''}" data-ticket-id="${t.id}">
        <div class="ticket-row-top">
          <span class="priority-dot ${pc.dot}"></span>
          <div style="flex:1; min-width:0;">
            <div class="ticket-row-id-line">
              <span class="ticket-row-id">${t.id}</span>
              ${svgIcon(t.channel === 'email' ? 'mail' : 'message-square', 'icon-sm')}
            </div>
            <p class="ticket-row-subject">${escapeHtml(t.subject)}</p>
          </div>
        </div>
        <div class="ticket-row-bottom">
          <div class="ticket-row-meta">
            <span class="status-badge ${sc.cls}">${sc.label}</span>
            <span class="ticket-sender">${escapeHtml(t.sender)}</span>
          </div>
          <span class="ticket-time">${formatTime(t.receivedAt)}</span>
        </div>
      </button>`;
    }).join('');
  }
  listEl.querySelectorAll('[data-ticket-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-ticket-id');
      state.selectedTicketId = id;
      state.editMode = false;
      state.activeTab = "draft";
      
      const selected = state.tickets.find(t => t.id === id);
      renderTicketList();
      if (selected) {
        if (!selected.session_id) {
          loadLiveTicketDraft(selected);
        } else {
          state.draftStatus = selected.status === "approved" ? "approved" : selected.status === "rejected" ? "rejected" : "ready";
          renderTicketDetail();
        }
      }
    });
  });

  document.getElementById("ticketFooter").innerHTML = `
    <div class="footer-stat"><span class="num" style="color:#d97706">${state.tickets.filter(t=>t.status==='pending').length}</span><span class="lbl">Pending</span></div>
    <div class="footer-stat"><span class="num" style="color:#2563eb">${state.tickets.filter(t=>t.status==='in_review').length}</span><span class="lbl">Review</span></div>
    <div class="footer-stat"><span class="num" style="color:#dc2626">${state.tickets.filter(t=>t.status==='escalated').length}</span><span class="lbl">Escalated</span></div>
  `;
}

function renderTicketDetail() {
  const selected = state.tickets.find(t => t.id === state.selectedTicketId);
  const panel = document.getElementById("ticketDetailPanel");
  if (!selected) { panel.innerHTML = ''; return; }
  const sc = STATUS_CONFIG[selected.status];
  const currentDraft = state.draftText[selected.id] ?? selected.aiDraft;

  panel.innerHTML = `
    <div class="detail-header">
      <div class="detail-header-top">
        <div style="min-width:0;">
          <div class="detail-eyebrow">
            <span class="mono">${selected.id}</span>
            ${svgIcon('chevron-right','icon-sm')}
            <span class="cat">${escapeHtml(selected.category)}</span>
          </div>
          <div class="detail-subject-row">
            <h2 class="detail-subject">${escapeHtml(selected.subject)}</h2>
            <span class="status-badge-lg ${sc.cls}">${sc.label}</span>
          </div>
        </div>
        <div class="detail-actions">
          <button class="btn-outline">${svgIcon('rotate-ccw')}Reassign</button>
          <button class="btn-outline">${svgIcon('external-link')}Open Full</button>
        </div>
      </div>
      <div class="detail-meta-row">
        <div class="meta-item">${svgIcon('user')}<span class="strong">${escapeHtml(selected.sender)}</span><span>(${escapeHtml(selected.senderRole)})</span><span>— ${escapeHtml(selected.senderEmail)}</span></div>
        <div class="meta-item">${svgIcon('clock')}<span>${formatDateTime(selected.receivedAt)}</span></div>
        <div class="meta-item">${svgIcon('tag')}<span>${escapeHtml(selected.intent)}</span></div>
        <div class="meta-item">${svgIcon(selected.channel === 'email' ? 'mail' : 'message-square')}<span>${selected.channel === 'email' ? 'Email' : 'Portal'}</span></div>
      </div>
    </div>

    ${selected.flags.length > 0 ? `
    <div class="flags-bar">
      ${svgIcon('alert-triangle')}
      ${selected.flags.map(f => `<span class="flag-chip">${escapeHtml(f)}</span>`).join('')}
    </div>` : ''}

    <div class="content-area">
      <div class="original-msg-panel" id="originalMsgPanel" style="width:${state.widths.message}px">
        <div class="original-msg-header">${svgIcon('file-text')}<span>Incoming Message</span></div>
        <div class="original-msg-body"><p>${escapeHtml(selected.body)}</p></div>
      </div>
      <div class="divider" id="messageDivider"></div>

      <div class="copilot-panel">
        <div class="tabs-bar">
          <div class="tabs-left">
            <button class="tab-btn ${state.activeTab==='draft'?'active':''}" data-tab="draft">AI Draft Response</button>
            <button class="tab-btn ${state.activeTab==='citations'?'active':''}" data-tab="citations">Citations (${selected.citations.length})</button>
            <button class="tab-btn ${state.activeTab==='original'?'active':''}" data-tab="original">Raw Thread</button>
          </div>
          <div class="tabs-right">
            <div class="confidence-block">
              ${svgIcon('sparkles')}
              <span class="confidence-label">RAG Confidence</span>
              ${confidenceBarHtml(selected.confidence, 80)}
            </div>
            ${svgIcon('shield-check')}
            <span class="grounded">Grounded</span>
          </div>
        </div>

        <div class="tab-content" id="tabContent"></div>

        <div class="action-bar">
          <div class="action-bar-row">
            <div class="action-bar-left">
              <span class="eyebrow">Admin Review</span>
              <span class="sep">—</span>
              <span class="desc">Review draft before sending</span>
            </div>
            <div class="action-bar-right" id="actionBarRight"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  makeDraggable(document.getElementById("messageDivider"), document.getElementById("originalMsgPanel"), { min: 180, max: 500, key: "message" });

  panel.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.getAttribute('data-tab');
      renderTicketDetail();
    });
  });

  renderTabContent(selected, currentDraft);
  renderActionBar(selected);
}

function renderTabContent(selected, currentDraft) {
  const el = document.getElementById("tabContent");
  if (!el) return;

  if (state.activeTab === "draft") {
    if (state.draftStatus === "loading") {
      el.innerHTML = `
        <div class="tab-pane draft-pane">
          <div class="draft-status-row">
            <div class="status-pill ai">${svgIcon('sparkles')}<span>GENERATING...</span></div>
          </div>
          <div class="draft-body-wrap" style="display:flex; justify-content:center; align-items:center; min-height:200px;">
            <div class="ai-draft-loading">
              <div class="bounce-dots"><span></span><span></span><span></span></div>
              <span style="font-size:12px; color:var(--muted-foreground)">Retrieving context and drafting response via local Llama 3.2...</span>
            </div>
          </div>
        </div>
      `;
      return;
    }

    if (state.draftStatus === "error") {
      el.innerHTML = `
        <div class="tab-pane draft-pane">
          <div class="draft-status-row">
            <div class="status-pill rejected">${svgIcon('x-circle')}<span>CONNECTION FAILED</span></div>
          </div>
          <div class="draft-body-wrap" style="display:flex; flex-direction:column; justify-content:center; align-items:center; min-height:200px; gap:12px;">
            <p style="color:#ef4444; font-weight:bold;">Could not connect to FastAPI server or Ollama is offline.</p>
            <button class="btn btn-outline" id="btnRetryDraft" style="cursor:pointer; display:flex; align-items:center; gap:8px;">${svgIcon('rotate-ccw')}Retry Connection</button>
          </div>
        </div>
      `;
      document.getElementById("btnRetryDraft").addEventListener('click', () => {
        selected.session_id = null; // Clear to force reload
        loadLiveTicketDraft(selected);
      });
      return;
    }

    let statusPillHtml = '';
    if (state.draftStatus === "approved") {
      statusPillHtml = `<div class="status-pill approved">${svgIcon('check-circle')}<span>APPROVED & QUEUED FOR SEND</span></div>`;
    } else if (state.draftStatus === "rejected") {
      statusPillHtml = `<div class="status-pill rejected">${svgIcon('x-circle')}<span>DRAFT REJECTED</span></div>`;
    } else if (state.draftStatus === "editing") {
      statusPillHtml = `<div class="status-pill editing">${svgIcon('edit-3')}<span>EDITING</span></div>`;
    }

    el.innerHTML = `
      <div class="tab-pane draft-pane">
        <div class="draft-status-row">
          <div class="status-pill ai">${svgIcon('sparkles')}<span>AI GENERATED DRAFT</span></div>
          ${statusPillHtml}
        </div>
        <div class="draft-body-wrap">
          ${state.editMode
            ? `<textarea class="draft-textarea" id="draftTextarea">${escapeHtml(currentDraft)}</textarea>`
            : `<div class="draft-readonly">${escapeHtml(currentDraft)}</div>`}
        </div>
      </div>
    `;
    const textarea = document.getElementById("draftTextarea");
    if (textarea) {
      textarea.addEventListener('input', (e) => {
        state.draftText[selected.id] = e.target.value;
      });
    }
  } else if (state.activeTab === "citations") {
    el.innerHTML = `
      <div class="tab-pane">
        <p class="citations-intro">The draft above is grounded in the following verified institutional sources. Each citation indicates the exact section used.</p>
        ${selected.citations.map((c, i) => {
          const rel = c.relevance !== undefined ? c.relevance : Math.max(0, Math.min(100, Math.round((1.0 - c.relevance_score) * 100)));
          const targetUrl = c.source_url || '#';
          return `
            <div class="citation-card" style="cursor: pointer;" onclick="if(!event.target.closest('.citation-preview-box')) window.open('${escapeHtml(targetUrl)}', '_blank')">
              <div class="citation-top">
                <div class="citation-top-left">
                  <span class="src-tag">SRC-${String(i+1).padStart(2,'0')}</span>
                  <span class="citation-title">${escapeHtml(c.title || c.heading)}</span>
                </div>
                <span class="citation-link-icon">${svgIcon('external-link')}</span>
              </div>
              <p class="citation-section">${escapeHtml(c.section || 'Verified Grounding Chunk')}</p>
              ${c.content ? `
                <div class="citation-preview-box">
                  <div class="citation-preview-content">${escapeHtml(c.content)}</div>
                </div>
              ` : ''}
              <div class="relevance-row">
                <span class="footer-label">Relevance</span>
                ${confidenceBarHtml(rel, 96)}
              </div>
            </div>
          `;
        }).join('')}
        <div class="citations-note">
          ${svgIcon('shield-check')}
          <p>All citations are deterministically retrieved from the institutional knowledge base. No generative hallucination has occurred on cited facts.</p>
        </div>
      </div>
    `;
  } else if (state.activeTab === "original") {
    el.innerHTML = `
      <div class="tab-pane">
        <div class="original-card">
          <div class="original-card-head">
            <div class="avatar-sm">${selected.sender.charAt(0)}</div>
            <div>
              <p class="name">${escapeHtml(selected.sender)}</p>
              <p class="email">${escapeHtml(selected.senderEmail)}</p>
            </div>
            <span class="time">${formatDateTime(selected.receivedAt)}</span>
          </div>
          <p class="original-card-body">${escapeHtml(selected.body)}</p>
        </div>
      </div>
    `;
  }
}

function renderActionBar(selected) {
  const el = document.getElementById("actionBarRight");
  if (!el) return;
  if (state.draftStatus === "approved") {
    el.innerHTML = `<div class="sent-msg">${svgIcon('check-circle','icon-md')}<span>Response sent successfully</span></div>`;
    return;
  }
  el.innerHTML = `
    <button class="btn btn-reject" id="btnReject">${svgIcon('x-circle')}Reject</button>
    ${state.editMode
      ? `<button class="btn btn-edit" id="btnCancelEdit">${svgIcon('rotate-ccw')}Cancel Edit</button>`
      : `<button class="btn btn-edit" id="btnEdit">${svgIcon('edit-3')}Edit Draft</button>`}
    <button class="btn btn-approve" id="btnApprove">${svgIcon('send')}Approve &amp; Send</button>
  `;
  const btnReject = document.getElementById("btnReject");
  const btnEdit = document.getElementById("btnEdit");
  const btnCancelEdit = document.getElementById("btnCancelEdit");
  const btnApprove = document.getElementById("btnApprove");
  if (btnReject) btnReject.addEventListener('click', () => {
    const finalDraft = state.draftText[selected.id] ?? selected.aiDraft;
    selected.status = "rejected";
    state.draftStatus = "rejected";
    state.editMode = false;
    
    if (selected.session_id) {
      fetch(`/api/v1/audit/${selected.session_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          edited_response: finalDraft,
          status: "discarded",
          feedback_score: -1,
          feedback_comments: "Rejected by admin in UI"
        })
      }).catch(err => console.error("Failed to log reject to SQLite:", err));
    }
    renderTicketList();
    renderTicketDetail();
  });
  if (btnEdit) btnEdit.addEventListener('click', () => { state.editMode = true; state.draftStatus = "editing"; renderTicketDetail(); });
  if (btnCancelEdit) btnCancelEdit.addEventListener('click', () => { state.editMode = false; state.draftStatus = "ready"; renderTicketDetail(); });
  if (btnApprove) btnApprove.addEventListener('click', () => {
    const finalDraft = state.draftText[selected.id] ?? selected.aiDraft;
    selected.status = "approved";
    state.draftStatus = "approved";
    state.editMode = false;
    
    if (selected.session_id) {
      fetch(`/api/v1/audit/${selected.session_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          edited_response: finalDraft,
          status: "approved",
          feedback_score: 1,
          feedback_comments: "Approved by admin in UI"
        })
      }).catch(err => console.error("Failed to log approval to SQLite:", err));
    }
    renderTicketList();
    renderTicketDetail();
  });
}

/* ===================== Email inbox ===================== */
function getFilteredEmails() {
  const q = state.emailSearch.toLowerCase();
  return state.emails.filter(e => {
    const matchSearch = q === "" || e.subject.toLowerCase().includes(q) || e.from.toLowerCase().includes(q) || e.preview.toLowerCase().includes(q);
    if (state.emailFilterLabel === "archive") return e.archived === true && matchSearch;
    const matchLabel = state.emailFilterLabel === "all" || e.label === state.emailFilterLabel;
    return !e.archived && matchSearch && matchLabel;
  });
}

function renderEmailView() {
  const root = document.getElementById("emailView");
  root.innerHTML = `
    <div class="email-list" id="emailListPanel" style="width:${state.widths.emailList}px">
      <div class="panel-header">
        <div class="panel-header-top">
          <div style="display:flex; align-items:center; gap:8px;">
            <h1 class="panel-title">Email Inbox</h1>
            <span class="unread-badge" id="emailUnreadBadge"></span>
          </div>
          <button class="icon-btn">${svgIcon('more-horizontal')}</button>
        </div>
        <div class="search-wrap">
          ${svgIcon('search')}
          <input class="search-input" id="emailSearch" placeholder="Search emails…">
        </div>
        <div class="chip-row" id="emailFilterChips"></div>
      </div>
      <div class="list-scroll" id="emailList"></div>
      <div class="list-footer" id="emailFooter"></div>
    </div>
    <div class="divider" id="emailListDivider"></div>
    <div class="email-detail" id="emailDetailPanel"></div>
  `;
  makeDraggable(document.getElementById("emailListDivider"), document.getElementById("emailListPanel"), { min: 220, max: 560, key: "emailList" });

  const search = document.getElementById("emailSearch");
  search.value = state.emailSearch;
  search.addEventListener('input', (e) => { state.emailSearch = e.target.value; renderEmailList(); });

  renderEmailFilterChips();
  renderEmailList();
  renderEmailDetail();
}

function renderEmailFilterChips() {
  const labels = ["all", "inquiry", "complaint", "request", "feedback"];
  const el = document.getElementById("emailFilterChips");
  if (!el) return;
  el.innerHTML = labels.map(l => `<button class="chip ${state.emailFilterLabel === l ? 'active' : ''}" data-label="${l}">${l.toUpperCase()}</button>`).join('')
    + `<button class="chip archive-chip ${state.emailFilterLabel === 'archive' ? 'active' : ''}" data-label="archive">${svgIcon('archive','icon-sm')}ARCHIVE</button>`;
  el.querySelectorAll('[data-label]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.emailFilterLabel = btn.getAttribute('data-label');
      renderEmailFilterChips();
      renderEmailList();
    });
  });
}

function renderEmailList() {
  const filtered = getFilteredEmails();
  const listEl = document.getElementById("emailList");
  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="list-empty">${svgIcon('mail','icon-xl')}<p>No emails found</p></div>`;
  } else {
    listEl.innerHTML = filtered.map(email => {
      const lc = LABEL_CONFIG[email.label];
      const active = email.id === state.selectedEmailId;
      return `
      <button class="email-row ${active ? 'active' : ''}" data-email-id="${email.id}">
        <div class="email-row-inner">
          <span class="unread-dot ${email.read ? 'read' : ''}"></span>
          <div class="email-row-content">
            <div class="email-row-top">
              <span class="email-from ${email.read ? 'read' : 'unread'}">${escapeHtml(email.from)}</span>
              <span class="email-time">${formatTime(email.receivedAt)}</span>
            </div>
            <p class="email-subject ${email.read ? 'read' : 'unread'}">${escapeHtml(email.subject)}</p>
            <p class="email-preview">${escapeHtml(email.preview)}</p>
            <div class="email-row-tags">
              <span class="label-badge ${lc.cls}">${lc.label}</span>
              ${email.hasAttachment ? svgIcon('paperclip','icon-sm') : ''}
              ${email.starred ? `<svg class="icon icon-sm star-fill" viewBox="0 0 24 24">${ICONS.star}</svg>` : ''}
              ${state.emailFilterLabel === 'archive' ? `<button class="unarchive-btn" data-unarchive="${email.id}">Unarchive</button>` : ''}
            </div>
          </div>
        </div>
      </button>`;
    }).join('');
  }
  listEl.querySelectorAll('[data-email-id]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-email-id');
      state.selectedEmailId = id;
      state.replyOpen = false;
      state.replyText = "";
      state.aiDraftOpen = false;
      state.citationsOpen = false;
      const e = state.emails.find(e => e.id === id);
      if (e) e.read = true;
      renderEmailList();
      renderEmailDetail();
    });
  });
  listEl.querySelectorAll('[data-unarchive]').forEach(btn => {
    btn.addEventListener('click', (ev) => {
      ev.stopPropagation();
      const id = btn.getAttribute('data-unarchive');
      const e = state.emails.find(e => e.id === id);
      if (e) e.archived = false;
      renderEmailList();
    });
  });

  const unread = state.emails.filter(e => !e.read && e.folder === "inbox").length;
  document.getElementById("emailFooter").innerHTML = `
    <span style="font-size:10px; font-family:monospace; color:var(--muted-foreground)">${filtered.length} emails</span>
    <span style="font-size:10px; font-family:monospace; color:#60a5fa">${unread} unread</span>
  `;
  const badge = document.getElementById("emailUnreadBadge");
  badge.textContent = unread > 0 ? unread : '';
  badge.style.display = unread > 0 ? 'inline' : 'none';
}

function renderEmailDetail() {
  const selected = state.emails.find(e => e.id === state.selectedEmailId);
  const panel = document.getElementById("emailDetailPanel");
  if (!selected) {
    panel.innerHTML = `<div class="email-empty">${svgIcon('mail','icon-xxl')}<p style="font-size:14px;">Select an email to read</p></div>`;
    return;
  }
  const lc = LABEL_CONFIG[selected.label];
  panel.innerHTML = `
    <div class="email-detail-header">
      <div class="email-detail-top-row">
        <div class="email-breadcrumb">
          <span>${selected.id}</span>
          ${svgIcon('chevron-right','icon-sm')}
          <span style="text-transform:uppercase; letter-spacing:0.05em;">${lc.label}</span>
        </div>
        <div class="email-detail-actions">
          <button class="icon-btn" id="btnStar">${svgIcon('star', selected.starred ? 'star-fill' : '')}</button>
          <button class="icon-btn" id="btnArchive">${svgIcon('archive')}</button>
          <button class="icon-btn">${svgIcon('trash-2')}</button>
        </div>
      </div>
      <div class="email-detail-title-row">
        <h2 class="email-detail-subject">${escapeHtml(selected.subject)}</h2>
        <span class="label-badge-lg ${lc.cls}">${lc.label}</span>
      </div>
      <div class="email-detail-meta">
        <div class="sender-chip">
          <div class="avatar-tiny">${selected.from.charAt(0)}</div>
          <div><span class="sender-name">${escapeHtml(selected.from)}</span> <span>&lt;${escapeHtml(selected.fromEmail)}&gt;</span></div>
        </div>
        <div style="display:flex; align-items:center; gap:6px;">${svgIcon('clock')}<span>${formatDateTime(selected.receivedAt)}</span></div>
        ${selected.hasAttachment ? `<div style="display:flex; align-items:center; gap:6px;">${svgIcon('paperclip')}<span>Attachment</span></div>` : ''}
      </div>
    </div>
    <div class="email-detail-body"><p>${escapeHtml(selected.body)}</p></div>
    <div id="aiDraftPanelWrap"></div>
    <div class="reply-bar" id="replyBar"></div>
  `;
  document.getElementById("btnStar").addEventListener('click', () => {
    selected.starred = !selected.starred;
    renderEmailList();
    renderEmailDetail();
  });
  document.getElementById("btnArchive").addEventListener('click', () => {
    selected.archived = true;
    state.selectedEmailId = null;
    renderEmailList();
    renderEmailDetail();
  });
  renderAiDraftPanel(selected);
  renderReplyBar(selected);
}

function renderAiDraftPanel(selected) {
  const wrap = document.getElementById("aiDraftPanelWrap");
  if (!wrap) return;
  if (!state.aiDraftOpen) { wrap.innerHTML = ''; return; }

  let bodyHtml = '';
  if (state.aiDraftLoading) {
    bodyHtml = `
      <div class="ai-draft-loading">
        <div class="bounce-dots"><span></span><span></span><span></span></div>
        <span style="font-size:12px;">Generating draft response…</span>
      </div>
    `;
  } else if (state.citationsOpen) {
    const citations = EMAIL_CITATIONS[selected.id] || [];
    bodyHtml = `
      <div class="ai-citations-list">
        <p class="hint">Sources used to ground this AI draft response.</p>
        ${citations.map((c, i) => {
          const rel = c.relevance !== undefined ? c.relevance : Math.max(0, Math.min(100, Math.round((1.0 - c.relevance_score) * 100)));
          const targetUrl = c.source_url || '#';
          return `
            <div class="ai-citation-card" style="cursor: pointer;" onclick="if(!event.target.closest('.ai-citation-preview-box')) window.open('${escapeHtml(targetUrl)}', '_blank')">
              <span class="ai-citation-src">SRC-${String(i+1).padStart(2,'0')}</span>
              <div class="ai-citation-body">
                <p class="ai-citation-title">${escapeHtml(c.title || c.heading)} ${svgIcon('external-link', 'icon-inline')}</p>
                <p class="ai-citation-section">${escapeHtml(c.section || 'Grounded Document')}</p>
                ${c.content ? `
                  <div class="ai-citation-preview-box">
                    <div class="ai-citation-preview-content">${escapeHtml(c.content)}</div>
                  </div>
                ` : ''}
                <div class="ai-citation-relevance-row">
                  <span style="font-size:10px; color:var(--muted-foreground);">Relevance</span>
                  <div class="ai-citation-relevance-bar"><div class="ai-citation-relevance-fill" style="width:${rel}%; background:${relevanceColor(rel)}"></div></div>
                  <span style="font-size:10px; font-family:monospace; color:var(--muted-foreground);">${rel}%</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
        <div class="citations-note email-note">
          ${svgIcon('shield-check')}
          <p>All citations are retrieved from verified ITE institutional documents. No generative hallucination has occurred on cited facts.</p>
        </div>
      </div>
    `;
  } else {
    bodyHtml = `<textarea class="ai-draft-textarea" id="aiDraftTextarea" placeholder="">${escapeHtml(state.aiDraftText[selected.id] ?? "")}</textarea>`;
  }

  const citations = EMAIL_CITATIONS[selected.id] || [];
  const wrapEl = document.getElementById("aiDraftPanelWrap");
  wrapEl.innerHTML = `
    <div class="ai-draft-panel">
      <div class="ai-draft-panel-head">
        <div class="ai-draft-panel-head-left">
          ${svgIcon('sparkles')}
          <span class="title">AI Draft Response</span>
          <span class="copilot-tag">COPILOT</span>
        </div>
        <div class="ai-draft-panel-head-right">
          <button class="btn-citations-toggle ${state.citationsOpen ? 'active' : ''}" id="btnToggleCitations">
            ${svgIcon('file-text')}Citations
            ${citations.length ? `<span class="citations-count-badge">${citations.length}</span>` : ''}
          </button>
          <button class="btn-use-draft" id="btnUseDraft">${svgIcon('corner-up-left')}Use Draft</button>
          <button class="icon-btn" id="btnCloseAiDraft">${svgIcon('x-circle')}</button>
        </div>
      </div>
      <div class="tab-content" style="flex:1; overflow-y:auto;">${bodyHtml}</div>
      ${!state.aiDraftLoading ? `
      <div class="ai-draft-footer">
        ${svgIcon('shield-check')}
        <span class="note">Grounded in ITE institutional knowledge base — review before sending.</span>
        <button class="btn-regenerate" id="btnRegenerate">${svgIcon('rotate-ccw','icon-sm')}Regenerate</button>
      </div>` : ''}
    </div>
  `;

  const ta = document.getElementById("aiDraftTextarea");
  if (ta) ta.addEventListener('input', (e) => { state.aiDraftText[selected.id] = e.target.value; });

  document.getElementById("btnToggleCitations").addEventListener('click', () => {
    state.citationsOpen = !state.citationsOpen;
    renderAiDraftPanel(selected);
  });
  document.getElementById("btnUseDraft").addEventListener('click', () => {
    if (state.aiDraftText[selected.id]) {
      state.replyText = state.aiDraftText[selected.id];
      state.replyOpen = true;
      state.aiDraftOpen = false;
      renderEmailDetail();
    }
  });
  document.getElementById("btnCloseAiDraft").addEventListener('click', () => {
    state.aiDraftOpen = false;
    state.citationsOpen = false;
    renderAiDraftPanel(selected);
  });
  const btnRegen = document.getElementById("btnRegenerate");
  if (btnRegen) {
    btnRegen.addEventListener('click', () => {
      state.aiDraftText[selected.id] = "";
      state.aiDraftLoading = true;
      state.citationsOpen = false;
      renderAiDraftPanel(selected);
      
      fetch("/api/v1/query/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: selected.body,
          subject: selected.subject,
          sender: `${selected.from} <${selected.fromEmail}>`,
          channel: "email",
          session_id: selected.session_id || selected.id,
          top_k: 3
        })
      })
      .then(res => {
        if (!res.ok) throw new Error("Backend connection failed");
        return res.json();
      })
      .then(data => {
        selected.session_id = data.session_id;
        state.aiDraftText[selected.id] = data.draft_body;
        
        EMAIL_CITATIONS[selected.id] = data.citations.map(c => ({
          title: c.heading,
          section: c.heading,
          relevance: Math.round((1.0 - c.relevance_score) * 100),
          source_url: c.source_url,
          content: c.content
        }));
        
        state.aiDraftLoading = false;
        renderAiDraftPanel(selected);
      })
      .catch(err => {
        console.error("Failed to regenerate email AI draft:", err);
        state.aiDraftText[selected.id] = "Error calling RAG service. Check backend connection.";
        state.aiDraftLoading = false;
        renderAiDraftPanel(selected);
      });
    });
  }
}

function defaultDraft(selected) {
  const firstName = selected.from.split(" ")[1] || selected.from;
  return `Dear ${firstName},\n\nThank you for your email. We have received your message and will respond within 3 working days.\n\nWarm regards,\nITE Administration`;
}

function generateAiDraft(selected) {
  state.aiDraftOpen = true;
  if (state.aiDraftText[selected.id]) { renderEmailDetail(); return; }
  state.aiDraftLoading = true;
  state.citationsOpen = false;
  renderEmailDetail();

  fetch("/api/v1/query/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      body: selected.body,
      subject: selected.subject,
      sender: `${selected.from} <${selected.fromEmail}>`,
      channel: "email",
      session_id: selected.session_id || selected.id,
      top_k: 3
    })
  })
  .then(res => {
    if (!res.ok) throw new Error("Backend connection failed");
    return res.json();
  })
  .then(data => {
    selected.session_id = data.session_id;
    state.aiDraftText[selected.id] = data.draft_body;
    
    EMAIL_CITATIONS[selected.id] = data.citations.map(c => ({
      title: c.heading,
      section: c.heading,
      relevance: Math.round((1.0 - c.relevance_score) * 100),
      source_url: c.source_url,
      content: c.content
    }));
    
    state.aiDraftLoading = false;
    renderEmailDetail();
  })
  .catch(err => {
    console.error("Failed to generate email AI draft:", err);
    state.aiDraftText[selected.id] = "Error calling RAG service. Check backend connection.";
    state.aiDraftLoading = false;
    renderEmailDetail();
  });
}

function renderReplyBar(selected) {
  const el = document.getElementById("replyBar");
  if (!el) return;
  if (!state.replyOpen) {
    el.innerHTML = `
      <div class="reply-actions-row">
        <button class="btn-outline" id="btnReply">${svgIcon('corner-up-left')}Reply</button>
        <button class="btn-outline">${svgIcon('forward')}Forward</button>
        <button class="btn-send ml-auto" id="btnGenDraft">${svgIcon('sparkles')}Generate AI Draft</button>
      </div>
    `;
    document.getElementById("btnReply").addEventListener('click', () => {
      state.replyOpen = true;
      renderReplyBar(selected);
    });
    document.getElementById("btnGenDraft").addEventListener('click', () => {
      generateAiDraft(selected);
    });
  } else {
    el.innerHTML = `
      <div class="reply-to-line">Replying to: <span>${escapeHtml(selected.fromEmail)}</span></div>
      <textarea class="reply-textarea" id="replyTextarea" placeholder="Write your reply…">${escapeHtml(state.replyText)}</textarea>
      <div class="reply-bottom-row">
        <button class="btn-cancel" id="btnCancelReply">Cancel</button>
        <button class="btn-send" id="btnSendReply" style="margin-left:auto;">${svgIcon('send')}Send Reply</button>
      </div>
    `;
    const textarea = document.getElementById("replyTextarea");
    textarea.focus();
    textarea.addEventListener('input', (e) => { state.replyText = e.target.value; });
    document.getElementById("btnCancelReply").addEventListener('click', () => {
      state.replyOpen = false;
      state.replyText = "";
      renderReplyBar(selected);
    });
    document.getElementById("btnSendReply").addEventListener('click', () => {
      const finalReply = state.replyText;
      state.replyOpen = false;
      state.replyText = "";
      
      selected.read = true;
      selected.archived = true;
      selected.folder = "archive";
      state.selectedEmailId = null; // Unselect the email so it returns to empty state
      
      if (selected.session_id) {
        fetch(`/api/v1/audit/${selected.session_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            edited_response: finalReply,
            status: "approved",
            feedback_score: 1,
            feedback_comments: "Email response sent from UI"
          })
        }).catch(err => console.error("Failed to log email send to SQLite:", err));
      }
      renderEmailList();
      renderEmailDetail();
    });
  }
}

/* ===================== Settings ===================== */
function toggleHtml(id, enabled) {
  return `<button class="toggle-btn" data-toggle="${id}">${svgIcon(enabled ? 'toggle-right' : 'toggle-left', enabled ? 'toggle-on' : 'toggle-off')}</button>`;
}

function renderSettingsView() {
  const root = document.getElementById("settingsView");
  const s = state.settings;
  root.innerHTML = `
    <div class="settings-panel">
      <div class="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Configure your CoPilot Admin Intelligence workspace</p>
        </div>
        <button class="btn-save" id="btnSaveSettings">${svgIcon(s.savedMsg ? 'check-circle' : 'save')}${s.savedMsg ? 'Saved!' : 'Save Changes'}</button>
      </div>
      <div class="settings-body">

        <div class="settings-section">
          <div class="settings-section-head">${svgIcon('user','icon-md')}<h2>Admin Profile</h2></div>
          <div class="settings-card">
            <div class="settings-row"><div class="settings-row-label"><p class="label">Full Name</p></div><div class="settings-row-control"><input class="settings-input" value="Sarah Lim"></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Email Address</p></div><div class="settings-row-control"><input class="settings-input" value="sarah.lim@ite.edu.sg"></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Role</p><p class="desc">Your administrative role determines default ticket assignment routing.</p></div>
              <div class="settings-row-control"><select class="settings-select"><option>Senior Admin Officer</option><option>Admin Officer</option><option>Course Manager</option><option>School Head</option></select></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Department</p></div>
              <div class="settings-row-control"><select class="settings-select"><option>Academic Affairs</option><option>Student Services</option><option>Industrial Attachment</option><option>Finance Office</option><option>Admissions</option></select></div></div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-head">${svgIcon('settings','icon-md')}<h2>Appearance</h2></div>
          <div class="settings-card">
            <div class="settings-row">
              <div class="settings-row-label"><p class="label">Theme</p><p class="desc">Choose how the interface looks. Your preference is saved locally.</p></div>
              <div class="settings-row-control">
                <div class="theme-btn-group">
                  <button class="theme-btn ${state.theme==='dark'?'active':''}" data-theme-btn="dark">🌙 Dark</button>
                  <button class="theme-btn ${state.theme==='light'?'active':''}" data-theme-btn="light">☀️ Light</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-head">${svgIcon('sparkles','icon-md')}<h2>AI Copilot Behaviour</h2></div>
          <div class="settings-card">
            <div class="settings-row"><div class="settings-row-label"><p class="label">Enable AI Draft Generation</p><p class="desc">Automatically generate a draft response for every incoming ticket and email.</p></div>
              <div class="settings-row-control">${toggleHtml('aiDraftEnabled', s.aiDraftEnabled)}</div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Auto-classify Intent &amp; Category</p><p class="desc">Use AI to detect stakeholder intent and tag the ticket category on arrival.</p></div>
              <div class="settings-row-control">${toggleHtml('autoClassify', s.autoClassify)}</div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Confidence Threshold</p><p class="desc" id="confidenceDesc">Drafts below ${s.confidenceThreshold}% confidence will be flagged for closer review.</p></div>
              <div class="settings-row-control"><div class="range-row"><input type="range" min="50" max="99" value="${s.confidenceThreshold}" class="range-input" id="confidenceRange"><span class="range-val" id="confidenceVal">${s.confidenceThreshold}%</span></div></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Auto-escalate Low-confidence Tickets</p><p class="desc">Tickets below the confidence threshold are automatically marked as Escalated.</p></div>
              <div class="settings-row-control">${toggleHtml('escalateBelow', s.escalateBelow)}</div></div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-head">${svgIcon('shield','icon-md')}<h2>Human-in-the-Loop (HITL)</h2></div>
          <div class="settings-card">
            <div class="settings-row"><div class="settings-row-label"><p class="label">Require Admin Approval Before Sending</p><p class="desc">All AI-generated responses must be approved by an admin before being dispatched. Recommended to keep this on.</p></div>
              <div class="settings-row-control">${toggleHtml('hitlRequired', s.hitlRequired)}</div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Default Response Channel</p><p class="desc">Where approved responses are sent from.</p></div>
              <div class="settings-row-control"><select class="settings-select"><option>ITE Email (admin@ite.edu.sg)</option><option>Student Portal Messaging</option><option>Both</option></select></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Sender Display Name</p></div>
              <div class="settings-row-control"><input class="settings-input" value="ITE Academic Affairs Office"></div></div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-head">${svgIcon('bell','icon-md')}<h2>Notifications</h2></div>
          <div class="settings-card">
            <div class="settings-row"><div class="settings-row-label"><p class="label">Email Notifications</p><p class="desc">Receive an email when a new ticket or email is assigned to you.</p></div>
              <div class="settings-row-control">${toggleHtml('emailNotif', s.emailNotif)}</div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Escalation Alerts</p><p class="desc">Get notified immediately when a ticket is auto-escalated.</p></div>
              <div class="settings-row-control">${toggleHtml('escalationAlert', s.escalationAlert)}</div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Daily Digest</p><p class="desc">Receive a morning summary of pending tickets and unread emails.</p></div>
              <div class="settings-row-control">${toggleHtml('dailyDigest', s.dailyDigest)}</div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Digest Delivery Time</p></div>
              <div class="settings-row-control"><select class="settings-select"><option>7:30 AM</option><option>8:00 AM</option><option>8:30 AM</option><option>9:00 AM</option></select></div></div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-head">${svgIcon('database','icon-md')}<h2>Knowledge Base Sources</h2></div>
          <div class="settings-card">
            <div class="settings-row"><div class="settings-row-label"><p class="label">ITE Student Handbook 2026</p><p class="desc">Last indexed: 18 Jul 2026</p></div><div class="settings-row-control"><span class="kb-status-badge kb-status-active">Active</span></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Module Exemption Policy AY2026/27</p><p class="desc">Last indexed: 10 Jul 2026</p></div><div class="settings-row-control"><span class="kb-status-badge kb-status-active">Active</span></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">IA Handbook 2026</p><p class="desc">Last indexed: 5 Jul 2026</p></div><div class="settings-row-control"><span class="kb-status-badge kb-status-active">Active</span></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">School FAQs — InfoComm, Hospitality, Business</p><p class="desc">Last indexed: 20 Jul 2026</p></div><div class="settings-row-control"><span class="kb-status-badge kb-status-active">Active</span></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Financial Assistance Schemes 2026</p><p class="desc">Last indexed: 1 Jul 2026</p></div><div class="settings-row-control"><span class="kb-status-badge kb-status-warn">Needs Re-index</span></div></div>
            <div class="kb-add-row"><button class="kb-add-btn">+ Add new source document</button></div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-section-head">${svgIcon('key','icon-md')}<h2>Access &amp; Security</h2></div>
          <div class="settings-card">
            <div class="settings-row"><div class="settings-row-label"><p class="label">Two-Factor Authentication</p><p class="desc">Require 2FA for all admin logins. Strongly recommended.</p></div><div class="settings-row-control"><span class="kb-status-badge kb-status-active">Enabled</span></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Session Timeout</p><p class="desc">Automatically log out after a period of inactivity.</p></div>
              <div class="settings-row-control"><select class="settings-select"><option>30 minutes</option><option>1 hour</option><option>4 hours</option><option>8 hours</option></select></div></div>
            <div class="settings-row"><div class="settings-row-label"><p class="label">Audit Log Retention</p><p class="desc">How long admin actions are logged for compliance review.</p></div>
              <div class="settings-row-control"><select class="settings-select"><option>90 days</option><option>180 days</option><option>1 year</option><option>3 years</option></select></div></div>
          </div>
        </div>

        <div class="danger-zone">
          <p class="title">Danger Zone</p>
          <p class="desc">These actions are irreversible. Proceed with caution.</p>
          <div class="row">
            <button class="btn-danger">Clear All Ticket Data</button>
            <button class="btn-danger">Reset AI Draft History</button>
          </div>
        </div>

      </div>
    </div>
  `;

  document.getElementById("btnSaveSettings").addEventListener('click', () => {
    state.settings.savedMsg = true;
    renderSettingsView();
    setTimeout(() => { state.settings.savedMsg = false; if (state.navItem === 'settings') renderSettingsView(); }, 2500);
  });

  root.querySelectorAll('[data-theme-btn]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.theme = btn.getAttribute('data-theme-btn');
      document.documentElement.setAttribute('data-theme', state.theme);
      renderSettingsView();
    });
  });

  root.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-toggle');
      state.settings[key] = !state.settings[key];
      renderSettingsView();
    });
  });

  const rangeInput = document.getElementById("confidenceRange");
  if (rangeInput) {
    rangeInput.addEventListener('input', (e) => {
      state.settings.confidenceThreshold = Number(e.target.value);
      document.getElementById("confidenceVal").textContent = state.settings.confidenceThreshold + "%";
      document.getElementById("confidenceDesc").textContent = `Drafts below ${state.settings.confidenceThreshold}% confidence will be flagged for closer review.`;
    });
  }
}

function cleanText(str) {
  if (!str) return "";
  return String(str)
    .toLowerCase()
    .replace(/\r\n/g, "\n")
    .replace(/[\u2013\u2014\ufffd]/g, "-")
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function loadLogsFromBackend() {
  fetch("/api/v1/audit/")
    .then(res => {
      if (!res.ok) throw new Error("Failed to load audit logs");
      return res.json();
    })
    .then(logs => {
      let hasUpdates = false;

      logs.forEach(log => {
        const mappedStatus = log.status === "discarded" ? "rejected" : log.status;
        const normQuery = cleanText(log.query);
        const normSubj = cleanText(log.subject);

        // 1. Check if this log matches an existing ticket in the ticket queue
        const matchedTicket = state.tickets.find(t =>
          (log.session_id && (t.id === log.session_id || t.session_id === log.session_id)) ||
          (normSubj && cleanText(t.subject) === normSubj) ||
          (normQuery && cleanText(t.body).substring(0, 50) === normQuery.substring(0, 50))
        );

        if (matchedTicket) {
          // Strictly sync ticket status only; never add or duplicate in ticket queue
          if (!matchedTicket.session_id) matchedTicket.session_id = log.session_id;
          if (log.status && log.status !== "generated" && matchedTicket.status !== mappedStatus) {
            matchedTicket.status = mappedStatus;
            hasUpdates = true;
            if (state.selectedTicketId === matchedTicket.id || state.selectedTicketId === log.session_id) {
              state.draftStatus = mappedStatus;
            }
          }
          return; // Finished with ticket log
        }

        // 2. Check if this log matches an existing email in the email inbox
        const matchedEmail = state.emails.find(e =>
          (log.session_id && (e.id === log.session_id || e.session_id === log.session_id)) ||
          (normSubj && cleanText(e.subject) === normSubj) ||
          (normQuery && cleanText(e.body).substring(0, 50) === normQuery.substring(0, 50))
        );

        if (matchedEmail) {
          // Update existing email
          if (!matchedEmail.session_id) matchedEmail.session_id = log.session_id;
          if (log.generated_draft && !state.aiDraftText[matchedEmail.id]) {
            state.aiDraftText[matchedEmail.id] = log.generated_draft;
          }
          const emailRead = log.status !== "generated";
          const emailArchived = log.status === "discarded" || log.status === "approved";
          if (matchedEmail.read !== emailRead || matchedEmail.archived !== emailArchived) {
            matchedEmail.read = emailRead;
            matchedEmail.archived = emailArchived;
            matchedEmail.folder = emailArchived ? "archive" : "inbox";
            hasUpdates = true;
            if (emailArchived && state.selectedEmailId === matchedEmail.id) {
              state.selectedEmailId = null;
            }
          }
          return; // Finished with existing email
        }

        // 3. New incoming email from IMAP / background email worker
        // Strictly only add if it's an email channel and not already present
        if (log.channel === "email") {
          const alreadyExists = state.emails.some(e =>
            e.id === log.session_id ||
            e.session_id === log.session_id ||
            (normSubj && cleanText(e.subject) === normSubj)
          );

          if (!alreadyExists) {
            let name = "Student";
            let emailAddress = "student@gmail.com";
            if (log.sender) {
              const match = log.sender.match(/^(.*?)\s*<(.*?)>$/);
              if (match) {
                name = match[1].trim().replace(/"/g, '');
                emailAddress = match[2].trim();
              } else {
                emailAddress = log.sender.trim();
                name = emailAddress.split("@")[0];
              }
            }

            state.emails.unshift({
              id: log.session_id,
              from: name,
              fromEmail: emailAddress,
              to: "itecopilot@gmail.com",
              subject: log.subject || "Email Inquiry",
              preview: (log.query || "").substring(0, 100) + "...",
              body: log.query || "",
              receivedAt: log.created_at || new Date().toISOString(),
              read: log.status !== "generated",
              starred: false,
              hasAttachment: false,
              label: "inquiry",
              folder: (log.status === "discarded" || log.status === "approved") ? "archive" : "inbox",
              archived: log.status === "discarded" || log.status === "approved",
              session_id: log.session_id
            });
            hasUpdates = true;
          }
        }
      });

      if (hasUpdates) {
        if (state.navItem === "email") {
          renderEmailList();
        } else {
          renderTicketList();
        }
      }
    })
    .catch(err => console.error("Error loading backend logs:", err));
}

/* ===================== Root render ===================== */
function renderAll() {
  renderSidebar();
  wireAccountMenu();

  const ticketView = document.getElementById("ticketView");
  const emailView = document.getElementById("emailView");
  const settingsView = document.getElementById("settingsView");

  ticketView.classList.add("hidden");
  emailView.classList.add("hidden");
  settingsView.classList.add("hidden");

  if (state.navItem === "email") {
    emailView.classList.remove("hidden");
    renderEmailView();
  } else if (state.navItem === "settings") {
    settingsView.classList.remove("hidden");
    renderSettingsView();
  } else {
    ticketView.classList.remove("hidden");
    renderTicketView();
  }
}

document.documentElement.setAttribute('data-theme', state.theme);
renderAll();

// Start live sync with backend SQLite log changes (incoming emails)
loadLogsFromBackend();
setInterval(loadLogsFromBackend, 10000);
