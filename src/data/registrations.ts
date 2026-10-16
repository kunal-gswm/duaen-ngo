// Structured registry for Duaen Foundation NGO Registrations & Recognitions.
// In accordance with project instructions:
// - Never invent registration numbers or display unverified credentials.
// - All items must track issuing authority, legal entity, verification status, and audit notes.
// - Only credentials with verificationStatus === 'verified' are displayed on public-facing pages.
// - Items with 'pending_verification' or 'in_review' remain in the internal audit registry.

export type VerificationStatus = 'verified' | 'pending_verification' | 'in_review'

export interface RegistrationCredential {
  id: string
  name: string
  issuingAuthority: string
  legalEntity: string
  description: string
  logo?: string
  verificationStatus: VerificationStatus
  registrationReference?: string
  certificateUrl?: string
  validityDate?: string
  verificationNotes: string
}

export const REGISTRATIONS_REGISTRY: RegistrationCredential[] = [
  {
    id: 'niti-aayog',
    name: 'NITI Aayog NGO Darpan',
    issuingAuthority: 'NITI Aayog, Government of India',
    legalEntity: 'Duaen Foundation NGO',
    description:
      'Official portal registration for voluntary organizations and social welfare societies, facilitating partnership and recognition with government ministries.',
    verificationStatus: 'pending_verification',
    registrationReference: undefined,
    certificateUrl: undefined,
    validityDate: undefined,
    verificationNotes:
      'Referenced in source document Page 4. Status: "Registration number and supporting document: To Be Obtained." Awaiting official certificate and unique Darpan ID before publication.',
  },
  {
    id: '12ab-registration',
    name: '12AB Tax Registration',
    issuingAuthority: 'Income Tax Department, Ministry of Finance, Government of India',
    legalEntity: 'Duaen Foundation NGO',
    description:
      'Statutory non-profit registration under Section 12AB of the Income-tax Act, 1961, affirming the entity\'s charitable non-profit character.',
    verificationStatus: 'pending_verification',
    registrationReference: undefined,
    certificateUrl: undefined,
    validityDate: undefined,
    verificationNotes:
      'Source document Page 4 notes: "Previously shared as available; latest valid copy to be provided." Awaiting valid certificate copy from the organization.',
  },
  {
    id: '80g-approval',
    name: '80G Tax Exemption Approval',
    issuingAuthority: 'Income Tax Department, Ministry of Finance, Government of India',
    legalEntity: 'Duaen Foundation NGO',
    description:
      'Approval granting tax exemption benefits to donors under Section 80G of the Income-tax Act, 1961.',
    verificationStatus: 'pending_verification',
    registrationReference: undefined,
    certificateUrl: undefined,
    validityDate: undefined,
    verificationNotes:
      'Source document Page 4 notes: "Previously shared as available; latest valid copy to be provided." Tax exemption claims must not be published until certificate is verified.',
  },
  {
    id: 'entity-incorporation',
    name: 'Non-Profit Legal Incorporation',
    issuingAuthority: 'Ministry of Corporate Affairs / Registrar of Societies',
    legalEntity: 'Duaen Foundation NGO',
    description:
      'Official statutory certificate of incorporation or registration establishing the organization as a legally recognized social welfare entity.',
    verificationStatus: 'pending_verification',
    registrationReference: undefined,
    certificateUrl: undefined,
    validityDate: undefined,
    verificationNotes:
      'Source document Page 4 notes: "NGO registration certificate: To Be Obtained." Section 8 incorporation or society registration certificate is awaiting submission.',
  },
  {
    id: 'udyam-registration',
    name: 'Udyam MSME Registration',
    issuingAuthority: 'Ministry of Micro, Small and Medium Enterprises, Government of India',
    legalEntity: 'To be verified',
    description:
      'Official registration under the MSME framework of the Government of India.',
    verificationStatus: 'pending_verification',
    registrationReference: undefined,
    certificateUrl: undefined,
    validityDate: undefined,
    verificationNotes:
      'Investigated verification target. To be included only if a valid registration exists for the relevant legal entity and the organization confirms display.',
  },
  {
    id: 'startup-india',
    name: 'DPIIT Startup India Recognition',
    issuingAuthority: 'Department for Promotion of Industry and Internal Trade (DPIIT)',
    legalEntity: 'To be verified',
    description:
      'Recognition under the Government of India’s Startup India initiative.',
    verificationStatus: 'pending_verification',
    registrationReference: undefined,
    certificateUrl: undefined,
    validityDate: undefined,
    verificationNotes:
      'Investigated verification target. To be included only if an authentic recognition has been issued to the same organization or relevant legal entity.',
  },
]

/**
 * Returns only the credentials that have been authentic, verified, and approved
 * for public display on the website.
 */
export function getVerifiedRegistrations(): RegistrationCredential[] {
  return REGISTRATIONS_REGISTRY.filter((reg) => reg.verificationStatus === 'verified')
}

/**
 * Returns all tracked registration entries for internal auditing, checklist reports,
 * or administrative review.
 */
export function getAllRegistrations(): RegistrationCredential[] {
  return REGISTRATIONS_REGISTRY
}
