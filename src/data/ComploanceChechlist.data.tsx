import {
  CheckSquare,
  Download,
  ExternalLink,
  Shield,
  FileText,
  AlertTriangle,
  Lock,
} from "lucide-react";

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  required: boolean;
  sector?: string[];
  businessSize?: string[];
}

interface ComplianceFramework {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  externalLink?: string;
  items: ChecklistItem[];
}

const complianceFrameworksData: ComplianceFramework[] = [
  {
    id: "privacy-act",
    name: "Privacy Act 1988",
    icon: <Shield className="h-5 w-5" />,
    description:
      "Australian Privacy Principles and data protection requirements",
    externalLink:
      "https://www.oaic.gov.au/privacy/privacy-legislation/the-privacy-act",
    items: [
      // PART I – Preliminary
      {
        id: "privacy-part1-1",
        title: "We understand that the Privacy Act 1988 applies nationally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part1-2",
        title:
          "We are clear about the objectives of the act (securing privacy, handling of personal info, and authorizing OAIC to oversee power).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part1-3",
        title:
          "Do we understand the act applies to government agencies as well as private organizations?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part1-4",
        title:
          "If we operate overseas but handle data of Australians, do we check the provisions",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part1-5",
        title:
          "Do we understand that compliance is mandatory for covered entities?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part1-6",
        title:
          "For ongoing compliance, do we regularly check amendments and legislative updates",
        description: "",
        completed: false,
        required: true,
      },
      // PART II – Interpretation
      {
        id: "privacy-part2-1",
        title:
          "Do we know who qualifies for health information? (e.g., parent, Guardian, Carer, Spouse)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part2-2",
        title:
          "Do we come under a small business operator that is under $3m turnover.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part2-3",
        title:
          "Do we understand what counts as health info and a health credit under the act",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part2-4",
        title:
          "Do we understand what Breach of APPs, APP code or Credit reporting means",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part2-5",
        title:
          "Do we keep an internal reference of which definitions apply to our operations (APP, entity, organization, or credit provider)",
        description: "",
        completed: false,
        required: true,
      },
      // Part III – Protection of Personal Data - Part III A
      {
        id: "privacy-part3a-1",
        title: "Do we check if we meet the criteria of being a credit provider",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3a-2",
        title:
          "In case we use agents do we ensure they are bind by the privacy rules",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3a-3",
        title:
          "Do we know the definition of an access keeper? (a person requesting their credit)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3a-4",
        title:
          "Do we understand as what qualifies as a default information, hardship information, repayment history information?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3a-5",
        title:
          "Do we handle personal liquidation information? (eg. Bankruptcy, debt agreements)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3a-6",
        title: "Do we have definition guide to reduce confusion among staff",
        description: "",
        completed: false,
        required: true,
      },
      // DIVISION 3 – Other Matters
      {
        id: "privacy-div3-1",
        title:
          "Do we understand that acts and practices of government agencies fall under this act",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div3-2",
        title: "Do we know which practices are exempt from the act",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div3-3",
        title: "Do we know which State banks and insurances are excluded",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div3-4",
        title:
          "Do we understand obligations for TFNS?(They are to be used lawfully)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div3-5",
        title:
          "Do we keep written policies to how these definitions apply to us",
        description: "",
        completed: false,
        required: true,
      },
      // PART IIIB – PRIVACY CODES
      {
        id: "privacy-part3b-1",
        title:
          "Do we know that we are bound by the APP codes and Credit reporting rules",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3b-2",
        title:
          "Do we keep a record of all the codes that apply to us and know where to find it",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3b-3",
        title:
          "Do our policies and procedures apply to each code that reflects upon us",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3b-4",
        title: "Have we trained staff on extra codes that apply to us",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3b-5",
        title:
          "Do we update documents and training when theres a variation in the code",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3b-6",
        title: "Do we have code related complaint process which is simple",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3b-7",
        title: "Do we know when to escalate code issues to OAIC",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3b-8",
        title: "Do we keep evidence that we comply with each applicable code",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-part3b-9",
        title:
          "Do our practices get audited periodically in line with the code requirements",
        description: "",
        completed: false,
        required: true,
      },
      // APP1
      {
        id: "privacy-app1-1",
        title: "We handle personal data in an open and transparent",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app1-2",
        title:
          "Create policies and processes that assist your company in keeping to the Australian Privacy Principles",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app1-3",
        title:
          "Ensure that people can express concerns or inquiries regarding your handling of personal data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app1-4",
        title:
          "Try to provide the privacy policy in a certain format if someone requests it.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app1-5",
        title:
          "Your privacy statement needs to outline the types of personal data you gather and retain.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app1-6",
        title: "React correctly to inquiries or grievances regarding privacy.",
        description: "",
        completed: false,
        required: true,
      },
      // APP2
      {
        id: "privacy-app2-1",
        title:
          "Allow others to interact with you under a fictitious name or by choosing not to reveal their true name.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app2-2",
        title:
          "Provide the choice to remain anonymous while visiting your company",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app2-3",
        title: "A court or the law demands that you identify the individual.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app2-4",
        title:
          "If you are required by law or a court order to ascertain someone's true identity",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app2-5",
        title:
          "Dealing with someone who hasn't revealed their true name is impractical",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app2-6",
        title:
          "You don't have to offer it if dealing with someone anonymously or under a fictitious name isn't feasible.",
        description: "",
        completed: false,
        required: true,
      },
      // APP3
      {
        id: "privacy-app3-1",
        title:
          "Only gather personal data if it's required for your services or job.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app3-2",
        title:
          "Before gathering information on functions or activities, obtain the person's express agreement.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app3-3",
        title: "Gather personal data in a fair and lawful method.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app3-4",
        title: "Get the person's personal information directly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app3-5",
        title: "The individual consents to you taking it from another person.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app3-6",
        title:
          "According to the law or a court, you can get it from another person.",
        description: "",
        completed: false,
        required: true,
      },
      // APP4
      {
        id: "privacy-app4-1",
        title:
          "Gathered the data in accordance with Australian Privacy Principle.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app4-2",
        title: "Verify that the data does not belong to a Commonwealth record.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app4-3",
        title:
          "The information can only be used or shared to determine whether you are allowed to keep it.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app4-4",
        title:
          "Treat the information as though you collected it correctly if you are permitted to keep it or if it is a Commonwealth record.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app4-5",
        title:
          "The information can only be used or shared for figuring out whether you are allowed to keep it.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app4-6",
        title:
          "Consider personal information to be unwanted if you collect it without asking for it.",
        description: "",
        completed: false,
        required: true,
      },
      // APP5
      {
        id: "privacy-app5-1",
        title:
          "Inform the individual when personal information is collected, or as soon you can follow",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app5-2",
        title: "Get your identity and contact information.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app5-3",
        title:
          "The person may not be aware that you have their information or that you obtained it from someone else.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app5-4",
        title:
          "Identify the law or court order that requires or authorizes the collection.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app5-5",
        title: "Why personal data is being collected.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app5-6",
        title:
          "Inform them of the primary risks if you fail to collect their information.",
        description: "",
        completed: false,
        required: true,
      },
      // APP 6
      {
        id: "privacy-app6-1",
        title:
          "The main reason for obtaining personal data has become evident to all parties involved.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-2",
        title:
          "All new information sharing activities must verify their status as secondary purposes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-3",
        title:
          "We verify that the new purpose aligns with what a person would expect based on their reasonable understanding.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-4",
        title:
          "We must get explicit consent from users before using their personal information for new purposes while ensuring they understand the changes and agree to them willingly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-5",
        title:
          "We maintain proper documentation of all consent processes which it stores according to established protocols.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-6",
        title:
          "The disclosure of sensitive information requires a direct connection between the main purpose and the secondary objective.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-7",
        title:
          "The handling of non-sensitive information requires a connection between the main purpose and the secondary purpose.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-8",
        title:
          "We must disclose information because of legal requirements or court orders or regulatory demands.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-9",
        title:
          "We can disclose information under a permitted general situation which includes situations that endanger public safety or threaten lives.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-10",
        title:
          "We must follow permitted health situation protocols when handling health data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-11",
        title:
          "The disclosure of information serves a necessary purpose for enforcement activities.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-12",
        title:
          "The disclosure of biometric information follows the Commissioner's guidelines when sent to enforcement bodies.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-13",
        title:
          "We follow proper procedures to remove personal details from information before sharing it with others.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-14",
        title:
          "We maintain written documentation for all personal information disclosures which serve enforcement needs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-15",
        title:
          "The disclosure of personal information to related body corporate entities uses the same primary purpose that existed during the original data collection process.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-16",
        title:
          "We handle personal information disclosure for direct marketing activities through a different process.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app6-17",
        title:
          "We maintain a separate system to handle government-related identifier disclosures.",
        description: "",
        completed: false,
        required: true,
      },
      // APP 7
      {
        id: "privacy-app7-1",
        title:
          "We use personal information only for direct marketing purposes when specific exceptions apply.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-2",
        title:
          "We use collected personal data for direct marketing only when the individual would expect such use based on their circumstances.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-3",
        title:
          "Every direct marketing campaign includes an easy way for customers to prevent future promotional messages.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-4",
        title:
          "We refrain from performing direct marketing activities when people have expressed their desire to avoid receiving such communications.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-5",
        title:
          "We need consent to perform direct marketing when personal information comes from unexpected sources or when obtaining consent proves difficult.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-6",
        title:
          "Every direct marketing message includes an obvious opt-out option or clearly indicates the right to opt out.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-7",
        title:
          "We refrain from sending direct marketing materials to people who have chosen to opt out.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-8",
        title:
          "We need explicit consent from individuals before using or sharing sensitive information for direct marketing purposes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-9",
        title:
          "People who want to avoid receiving marketing communications from us can submit their request to the organization.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-10",
        title:
          "People who want to prevent their personal data from being shared with third parties for marketing purposes can make such requests to the organization.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-11",
        title:
          "People have the right to obtain information about where their personal data originated from.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-12",
        title:
          "We provide free services for all requests made by individuals and for completing these requests.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-13",
        title:
          "We processes all opt-out requests within a timeframe that people consider acceptable.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app7-14",
        title:
          "We need a reasonable amount of time to fulfill requests about information sources but will extend this period when necessary.",
        description: "",
        completed: false,
        required: true,
      },
      // APP 8
      {
        id: "privacy-app8-1",
        title:
          "We implement proper procedures to verify overseas recipients will maintain Australian Privacy Principles compliance before sharing personal data with them.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app8-2",
        title:
          "We accept responsibility for any APP violations that occur through the overseas recipient's actions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app8-3",
        title:
          "The overseas recipient operates under a legal framework which offers privacy protections equivalent to the Australian Privacy Principles.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app8-4",
        title:
          "People can use established procedures to protect their rights which exist under that law or binding scheme.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app8-5",
        title:
          "The disclosure process requires users to confirm their consent through explicit statements before the disclosure takes place.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app8-6",
        title:
          "The disclosure process occurs because of Australian legal requirements or court/tribunal orders.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app8-7",
        title:
          "The entity operates as an agency while disclosing information under international agreements which Australia has signed for information sharing purposes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app8-8",
        title:
          "The disclosure process targets recipients who operate in countries which regulations have designated as having sufficient privacy protection standards.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app8-9",
        title:
          "The disclosure process targets recipients who join prescribed binding schemes while meeting all applicable requirements.",
        description: "",
        completed: false,
        required: true,
      },
      // APP 9
      {
        id: "privacy-app9-1",
        title:
          "We do not use Tax File Numbers, Medicare Numbers, Centrelink Customer Reference Numbers or driver licence numbers as its own identifiers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app9-2",
        title:
          "We use government-related identifiers only when Australian law or court/tribunal orders demand their adoption.",
        description: "",
        completed: false,
        required: true,
      },
      // App 10
      {
        id: "privacy-app10-1",
        title:
          "Before using personal information, steps are taken to confirm that the information is accurate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app10-2",
        title:
          "Before using personal information, steps are taken to confirm that the information is up to date.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app10-3",
        title:
          "Before using personal information, steps are taken to confirm that the information is complete.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app10-4",
        title:
          "Before disclosing personal information, steps are taken to confirm that the information is relevant to the purpose of the disclosure.",
        description: "",
        completed: false,
        required: true,
      },
      // APP 11
      {
        id: "privacy-app11-1",
        title:
          "Reasonable steps are taken to protect personal information from misuse, interference, loss, unauthorised access, modification or unauthorised disclosure.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app11-2",
        title:
          "Reasonable steps are taken to destroy or de-identify personal information when it is no longer needed for any purpose.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app11-3",
        title:
          "Destruction of personal information is carried out unless retention is required by an Australian law or courtorder",
        description: "",
        completed: false,
        required: true,
      },
      // APP 12
      {
        id: "privacy-app12-1",
        title:
          "Do We have a straightforward process for people to request their information?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app12-2",
        title:
          "Prior to providing access, do we verify the individual's identity?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app12-3",
        title: "Are access requests replied to within 30 days?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app12-4",
        title: "Do we make clear any possible delays?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app12-5",
        title: "Do we only charge a small, fair fee (if any) to cover costs?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app12-6",
        title:
          "Do we format information in such a way that a person is able to use it (e.g., copy, print out, email)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app12-7",
        title:
          "Do we keep a record of who asked for their data and when we responded?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app12-8",
        title: "In case we refuse access, do we provide a written explanation?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app12-9",
        title:
          "In case access is refused, is the person given options to appeal or complain?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app12-10",
        title: "Do staff know who can authorize requests to access?",
        description: "",
        completed: false,
        required: true,
      },
      // APP 13
      {
        id: "privacy-app13-1",
        title:
          "Do we have a clear way for people to request corrections? (e.g., email, Phone, form)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app13-2",
        title: "Do we identify the person prior to changing things?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app13-3",
        title:
          "Do we correct information that is incorrect or outdated as soon as possible?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app13-4",
        title:
          "Once we have updated the corrections, do we confirm them with the person?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app13-5",
        title:
          "Do we implement corrections across all systems that store the data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app13-6",
        title:
          "Do we inform other organizations that we've provided them with the wrong information?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app13-7",
        title:
          "Do we keep a record of all the corrections made? (e.g., email, phone, forms)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app13-8",
        title:
          "If we decline to make a correction, do we explain our refusal in writing?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-app13-9",
        title:
          "Are staff aware of the proper procedure for managing requests for correction?",
        description: "",
        completed: false,
        required: true,
      },
      // Division 2 – Permitted General
      {
        id: "privacy-div2-gen-1",
        title: "Do we know that in some situations, APP limits don't apply?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div2-gen-2",
        title:
          "Do we allow use/disclosure of personal info if it's needed to prevent or reduce a serious threat to someone's life, health, or safety?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div2-gen-3",
        title:
          "Do we allow use/disclosure if it's required to take action for public health or public safety?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div2-gen-4",
        title:
          "Do we use/disclose personal info if it's reasonably necessary to investigate or report an unlawful activity or serious misconduct?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div2-gen-5",
        title:
          "Do we disclose information if it's required for law enforcement purposes (e.g., to police, courts, or regulators)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div2-gen-6",
        title:
          "Do we disclose information if it's needed for diplomatic or consular functions carried out by the government?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div2-gen-7",
        title:
          "Do we disclose information as part of a confidential alternative dispute resolution process (e.g., mediation)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div2-gen-8",
        title:
          "Do we keep records each time we rely on one of these permitted general situations so we can prove it was justified?",
        description: "",
        completed: false,
        required: true,
      },
      // Division 3 – Permitted Health Servives
      {
        id: "privacy-div3-health-1",
        title:
          "Do we collect or use health information where it is needed to provide a health service to the person?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div3-health-2",
        title:
          "Do we handle health info for research, statistics, or public health purposes when approved under OAIC/NHMRC guidelines?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div3-health-3",
        title:
          "Do we disclose health information if it is necessary for public health or public safety management (e.g., pandemic tracking)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div3-health-4",
        title:
          "Do we disclose genetic information to a person's genetic relative if it's needed to prevent or reduce a serious threat to their life, health, or safety?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div3-health-5",
        title:
          "Do we handle health info for the operation of health insurance or health-related benefit schemes run by the Commonwealth or a Territory?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div3-health-6",
        title:
          "Do we train staff to recognise when a permitted health situation applies and when it does not?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-div3-health-7",
        title:
          "Do we log and review every time a permitted health situation is relied upon, so there is transparency and accountability?",
        description: "",
        completed: false,
        required: true,
      },
      // PART III C - NDB SCHEME
      {
        id: "privacy-ndb-1",
        title: "Do we have in writing a Data Breach Response Plan?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-2",
        title: "Are staff trained to identify a possible data breach?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-3",
        title:
          "Are the staff aware of whom to report to in case of a possible or suspected data breach?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-4",
        title: "Do we suspect a possible data breach within 30 days?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-5",
        title:
          "Do we have a clear process to decide if harm is likely (e.g., identity theft, fraud, reputational harm)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-6",
        title:
          "Do we notify the OAIC (privacy regulator) when harm is indeed probable?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-7",
        title: "Do we notify the people whose information is likely at risk?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-8",
        title:
          "Are template letters or emails ready and prepared so that we can notify people if there is a breach?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-9",
        title: "Have we kept a record of all breaches, even the minor ones?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-10",
        title: "Do we have practice drills with staff in case of a breach?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-11",
        title:
          "Do we improve our processes after assessing previous breaches to prevent recurrences?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-12",
        title:
          "Do we have IT safeguards like monitoring logs to detect unusual access quickly?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-13",
        title:
          "Do we have clear rules on what staff can and cannot do with customer data in order to reduce accidental breaches?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-ndb-14",
        title:
          "Is the breach plan reviewed yearly at a minimum so it remains up-to-date?",
        description: "",
        completed: false,
        required: true,
      },
      // PART III A- CREDIT REPORTING - DIVISION 1
      {
        id: "privacy-credit-div1-1",
        title:
          "Do we have a written credit reporting policy that explains clearly how we handle people's credit information?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div1-2",
        title:
          "Do we the policy written or stored in the event of someone asking for it.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div1-3",
        title:
          "Do we update and review the policy regularly to keep upto date with the law",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div1-4",
        title:
          "Are the staff well trained to handle credit information and know what it is",
        description: "",
        completed: false,
        required: true,
      },
      // DIVISION 2 Credit Reporting Body
      {
        id: "privacy-credit-div2-1",
        title:
          "Do we make sure we only collect Credit information that is legal and required? (e.g., repayment history, defaults)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div2-2",
        title:
          "Do we make sure that we take the credit information from the individual instead of using third-party services?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div2-3",
        title:
          "Do we make sure the credit information we have obtained is accurate and current?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div2-4",
        title:
          "Do we make sure the credit information is only shared with business that can legally obtain it?(e.g., banks, lenders or insurance)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div2-5",
        title:
          "Do we allow individuals to see their credit files if they ask>?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div2-6",
        title:
          "Do we have simple ways for people to ask us to fix errors in their credit report?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div2-7",
        title:
          "When corrections are updated, do we inform the person and update it over all our systems?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div2-8",
        title:
          "Do we delete Credit information of an infdivual when the law says we must no longer hold it?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div2-9",
        title:
          "Do we keep a record on who and when the credit information was Viewed or shared",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div2-10",
        title:
          "Do we hve proper security protections? (encryption passwords, authenticators) to stop credit information being stolen or misused?",
        description: "",
        completed: false,
        required: true,
      },
      // DIVISION 3- Credit Providers
      {
        id: "privacy-credit-div3-1",
        title:
          "Have we checked if we are officially classed as a credit provider? (e.g., bank, utility company, insurance)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div3-2",
        title:
          "Do we have a clear consent of an individual before looking at their credit history?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div3-3",
        title:
          "If we refuse to give someone credit? Do we give them an explanation on why we did so",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div3-4",
        title:
          "Have our staff been trained to when they can and can't share credit information (e.g., With insurance companies or banks)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div3-5",
        title:
          "Do we ensure that we give out the minimum information rather than too much?",
        description: "",
        completed: false,
        required: true,
      },
      // Division 4 – Affected Information Recipients (Third Parties)
      {
        id: "privacy-credit-div4-1",
        title:
          "Do we make sure that any agents or third parties (like mortgage brokers or dealerships) who handle credit information follow the law?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div4-2",
        title:
          "Do we have contracts and agreements in place that clearly say third parties can only use credit information to follow the law?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div4-3",
        title:
          "Do we check or audit these third parties to make sure theyre complying?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div4-4",
        title:
          "If a third party breaks the law, do we immediately stop their access to credit information?",
        description: "",
        completed: false,
        required: true,
      },
      // Division 5 – Complaints
      {
        id: "privacy-credit-div5-1",
        title:
          "Do we have a simple process for complaints, for clients who are not satisfied with how we handle their credit information",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div5-2",
        title: "Do we acknowledge complaints early? (e.g., within a week)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div5-3",
        title:
          "Do we investigate and provide a written response within an acceptable timeframe? (e.g., within 30-45 days)",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div5-4",
        title:
          "Are the individuals informed that they can escalate their complaint to OAIC if they're not satisfied?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div5-5",
        title:
          "Do we keep a record of the complaints from when we received them until they are resolved?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div5-6",
        title:
          "Do we keep an eye on complaint trends and fix them if it's a systematic error?",
        description: "",
        completed: false,
        required: true,
      },
      // Division 6 – Unauthorized Access/Offenses
      {
        id: "privacy-credit-div6-1",
        title:
          "Have we trained the staff that illegally holding, using, or selling credit information is a criminal offense?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div6-2",
        title:
          "Do we restrict access to credit information so that only authorised staff can see it",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div6-3",
        title: "Do we keep a record of who accesses the credit information?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div6-4",
        title:
          "Do we regularly monitor the logs for any unusual or suspicious activities?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div6-5",
        title:
          "Do we have a clear process for staff to report suspected misuse immediately?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div6-6",
        title:
          "Do we cooperate with the OAIC or police if we suspect a criminal offense?",
        description: "",
        completed: false,
        required: true,
      },
      // Division 7 – Court Orders
      {
        id: "privacy-credit-div7-1",
        title:
          "Do we comply with all court orders or tribunal orders that tell us to disclose or change credit information?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div7-2",
        title:
          "Do we double-check the authenticity of the order before releasing it",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div7-3",
        title:
          "Do we keep records of any disclosures mae under a court or tribunal order",
        description: "",
        completed: false,
        required: true,
      },
      // Division 8 – Review
      {
        id: "privacy-credit-div8-1",
        title:
          "Do we carry out regular reviews (at least once every year) on how we handle credit information?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div8-2",
        title:
          "Do we Update our trainings for staff in case the or OAIC guidelines change",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div8-3",
        title:
          "Do we compare our practices to Industry best practices for credit reporting",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-credit-div8-4",
        title: "Do we document weak areas after reviews and make amendments?",
        description: "",
        completed: false,
        required: true,
      },
      // Part VIB – Compliance & Enforcement
      {
        id: "privacy-compliance-1",
        title:
          "The company maintains documented procedures to deliver information and documents when section 26WU(3) and s 33C(3) and s 44(1) require it.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-2",
        title:
          "The organization maintains evidence logs together with audit trails which support Part 2 of the Regulatory Powers Act monitoring activities.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-3",
        title:
          "Our organization verifies the complete accuracy of all information we distribute for compliance with legislative requests.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-4",
        title:
          "The organization selects a responsible officer to handle communication with authorized applicants and authorized persons.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-5",
        title:
          "Staff members receive training about monitoring warrant responses which includes learning proper site entry procedures and secure escort methods.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-6",
        title:
          "The organization takes steps to protect relevant records and systems through tamper-evident preservation after receiving monitoring or investigation notifications.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-7",
        title:
          "Our organization uses a legal hold system which stops employees from deleting or modifying evidence-based materials.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-8",
        title:
          "The organization has established procedures to provide secure assistance for entry and inspection and search and seizure operations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-9",
        title:
          "The organization uses an incident log system to document all regulatory site visits by recording their start time and extent and personnel involvement.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-10",
        title:
          "The organization uses a quick assessment system to determine if any offense or civil penalty risk exists.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-11",
        title:
          "Our organization conducts root-cause analysis of alleged contraventions by comparing them to our internal controls and documents the results.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-12",
        title:
          "Our organization follows a structured process to determine how to handle compliance notices through contestation or compliance or review requests.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-13",
        title:
          "Our team tracks all compliance notice requirements including deadlines and necessary actions and evidence completion status.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-14",
        title:
          "Our organization responds to compliance notices through documented procedures that maintain proportionality and speed while ensuring complete documentation.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-15",
        title:
          "The organization checks for existing infringement notices or enforceable undertakings that target the same conduct before establishing new pathways.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-16",
        title:
          "The organization determines potential penalty amounts through listed-company multipliers when needed for making informed decisions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-17",
        title:
          "The organization keeps templates for undertakings which include performance milestones and verification steps and publication authorization.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-18",
        title:
          "The organization assigns specific owners to each undertaking obligation while tracking their progress until completion.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-19",
        title:
          "The organization develops plans for injunctive relief which include immediate steps to stop non-compliant activities and enforce compliant actions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-20",
        title:
          "The organization trains executives about available court options and operational and communication effects of regulatory orders.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-21",
        title:
          "The organization maintains a communication strategy which addresses both regulators and affected people and stakeholders during order publication requirements and statement releases.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-22",
        title:
          "Our systems possess the ability to generate required records at speed while producing them in standard formats which support review activities.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-23",
        title:
          "The organization conducts periodic readiness tests through simulated exercises that mimic monitoring activities and investigations and court orders.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-24",
        title:
          "Authorized personnel must follow documented delegation and authority lines to perform commitments and record management tasks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-compliance-25",
        title:
          "The organization conducts procedure assessments following all regulatory contacts and major changes in regulatory guidelines or laws.",
        description: "",
        completed: false,
        required: true,
      },
      // Part VII – Privacy Advisory Committee
      {
        id: "privacy-advisory-1",
        title:
          "The Privacy Advisory Committee operates under legal authority because it contains both the Commissioner and Privacy Commissioner as official members.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-2",
        title:
          "The Governor-General selects no more than eight part-time members for the Committee who serve in appointed positions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-3",
        title:
          "The appointed members who make up the majority come from outside both the Commonwealth public service and its authorities.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-4",
        title:
          "The Committee consists of members who bring expertise from industry and public administration and health privacy and trade unions and ICT and community welfare and civil liberties.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-5",
        title:
          "The appointment duration for members reaches up to five years before they become eligible for reappointment.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-6",
        title:
          "The Commissioner serves as the convenor who leads the Committee through meetings as its presiding officer.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-7",
        title:
          "The convenor has authority to approve member absences through fair leave arrangements when needed.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-8",
        title:
          "Members must disclose their financial and conflicting interests at meetings according to disclosure obligations which get recorded in the meeting minutes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-9",
        title:
          "The Committee requires at least three members to form a quorum for decision-making while the presiding officer maintains both voting rights and decision-making authority.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-10",
        title:
          "The organization maintains complete records of all Committee meetings for future reference.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-11",
        title:
          "The Governor-General has the authority to end appointments when members demonstrate misbehavior or become incapacitated or file for bankruptcy or miss meetings repeatedly or fail to reveal their interests.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-12",
        title:
          "The Governor-General accepts resignation notices from appointed members through their signature on official documents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-13",
        title:
          "The Committee performs its duties by providing privacy advice to the Commissioner and developing guideline recommendations and supporting public outreach activities.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-14",
        title:
          "The absence of members does not affect the validity of any work conducted by the Committee.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-advisory-15",
        title:
          "The appointed members can claim travel expenses according to established regulations when they participate in meetings or conduct official business.",
        description: "",
        completed: false,
        required: true,
      },
      // Schedule 2 – Statutory Tort for Serious Invasions of Privacy
      {
        id: "privacy-tort-1",
        title:
          "The statutory tort provides legal protection for serious privacy violations according to our organization.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-2",
        title:
          "The tort protects both the right to privacy from intrusion and the misuse of personal information.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-3",
        title:
          "Our organization maintains practices which strike an appropriate equilibrium between privacy protection and the public interests that include freedom of expression and national security and public health.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-4",
        title:
          "All personal information handled by us receives automatic confidentiality protection unless authorized by law or consent from the individual.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-5",
        title:
          "Our organization determines privacy expectations of individuals through an assessment of their information handling needs in each situation.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-6",
        title:
          "The evaluation of privacy invasion severity depends on the extent of offense and distress and the degree of dignity damage that may occur.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-7",
        title:
          "The organization bans any purposeful or careless actions which could lead to severe privacy violations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-8",
        title:
          "The organization accepts that privacy violations will result in legal responsibility even when no actual harm occurs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-9",
        title:
          "The organization maintains documentation that explains the methods and reasons behind personal information collection and handling activities.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-10",
        title:
          "Our organization checks surveillance and recording technologies for compliance with privacy laws through continuous monitoring and assessment.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-11",
        title:
          "Our organization maintains specific consent procedures which include documentation of consent before handling personal information.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-12",
        title:
          "Our organization bases its privacy-intruding actions on three valid grounds which include lawful authority and necessity and proportionate defence.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-13",
        title:
          "Our organization follows defamation law defences through absolute privilege and public documents and fair reports when handling publications.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-14",
        title:
          "The organization respects specific privacy exemptions which apply to journalists and law enforcement agencies and intelligence agencies under particular circumstances.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-15",
        title:
          "Our organization develops internal procedures which protect information received from law enforcement and intelligence agencies from improper use.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-16",
        title:
          "The Schedule excludes minors younger than 18 years from its liability provisions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-17",
        title:
          "Our organization maintains systems to handle privacy invasion prevention injunctions that may be issued by courts.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-18",
        title:
          "We stay alert to legal proceedings because we need to take immediate action when summary judgments or dismissals become available against us.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-19",
        title:
          "The organization tracks down all applicable time limits for potential claims because they range from one year to three years or six years.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-20",
        title:
          "The court has the authority to order remedies extending past monetary compensation which may include statements of regret and material destruction and declaration orders.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-21",
        title:
          "An apology serves as a non-liability statement which affects how courts determine compensation amounts.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-22",
        title:
          "The organization sets damage limits according to both statutory restrictions and defamation compensation standards.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-23",
        title:
          "Our organization uses mediation and settlement procedures to decrease the chances of legal disputes and resulting financial exposure.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-24",
        title:
          "Our organization implements Australia's international privacy standards from the ICCPR through its privacy policies.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-tort-25",
        title:
          "The organization conducts periodic assessments of this checklist to stay current with fresh court decisions and new privacy invasion laws and guidelines.",
        description: "",
        completed: false,
        required: true,
      },
      // Part IV – Healthcare Identifiers & Health Records
      {
        id: "privacy-health-1",
        title:
          "Our privacy program operates in full alignment with all Commissioner-related functions and all supporting measures that help achieve these functions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-2",
        title:
          "Our organization maintains the ability to execute instructions from the Commissioner which includes all applicable legislative instruments under APP 6.3.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-3",
        title:
          "Our organization works to educate staff members about the Australian Privacy Principles (APPs) and registered APP/CR codes and Part IIIA obligations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-4",
        title:
          "Our organization conducts internal privacy education programs to enhance staff privacy knowledge, and we can use external training programs which the Commissioner has authorized.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-5",
        title:
          "We guarantee that Part IIIA personal information remains both accurate and secure while preventing unauthorized disclosure or use.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-6",
        title:
          "Our organization maintains auditable records which allow us to verify our Part IIIA information management and our protection against unlawful disclosure.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-7",
        title:
          "We handle tax file number (TFN) information by maintaining its accuracy and security while following all TFN rules that section 17 has established.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-8",
        title:
          "We evaluate all proposed laws and data-matching/linkage activities which we use for operations to determine their privacy risks and establish appropriate protection measures.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-9",
        title:
          "We maintain the ability to deliver all required information and documents to the Commissioner within a minimum timeframe of 14 days when legally obligated to do so.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-10",
        title:
          "Our organization maintains operational systems to detect suspected eligible data breaches and to fulfill notification requirements for the Commissioner and affected parties.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-11",
        title:
          "Our organization works with the Commissioner to evaluate our compliance with APP regulations and Part IIIA requirements and CR codes and TFN rules and digital ID standards and data-matching protocols.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-12",
        title:
          "Our organization stands ready to create a Privacy Impact Assessment (PIA) within the timeframe set by the Commissioner when directed to do so.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-13",
        title:
          "Our organization takes immediate action against Commissioner reports and recommendations to stop any ongoing non-compliant practices or activities.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-14",
        title:
          "Our organization safeguards sensitive information including national security data and law enforcement information and Cabinet/Executive materials and confidential sources and personal affairs and commercial-in-confidence data when creating reports or disclosures.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-15",
        title:
          "The organization understands that the Commissioner can share information with authorized entities when protection standards are adequate and we will protect the shared materials properly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-16",
        title:
          "The organization understands that the Commissioner can disclose information for public interest purposes while we work to minimize risks through restricted disclosure of personal and confidential information in our operations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-17",
        title:
          "Our organization stands prepared to take part in public inquiries and submit documents and answer relevant recommendations that affect our APP entity status.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-18",
        title:
          "Our organization follows FOI-exempt document restrictions and refrains from requesting disclosure when the Act establishes such prohibition.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-health-19",
        title:
          "Our organization maintains readiness to work with recognized external dispute resolution bodies while fulfilling all requirements for accessibility and independence and fairness and accountability and efficiency and effectiveness.",
        description: "",
        completed: false,
        required: true,
      },
      // Part VIII – Obligations of Confidence
      {
        id: "privacy-confidence-1",
        title:
          "The organization follows obligations of confidence based on laws that exist under Commonwealth, ACT(Australian Capital Territory) and external Territory jurisdictions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-2",
        title:
          "Our organization maintains confidentiality obligations for all personal information regardless of its origin.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-3",
        title:
          "The organization maintains confidentiality obligations for all information regardless of whether it belongs to the confider or another person.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-4",
        title:
          "Our organization maintains confidentiality obligations for information that becomes legally enforceable even when criminal penalties are not applied.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-5",
        title:
          "The organization acknowledges that confidentiality obligations do not apply when the law provides only criminal sanctions for violations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-6",
        title:
          "Our organization maintains confidentiality obligations which do not interfere with any existing laws or rules of equity or common law.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-7",
        title:
          "The organization respects how obligations of confidence operate alongside other legal restrictions which law imposes on individuals.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-8",
        title:
          "The information recipient becomes subject to the same confidentiality duty when they understand or should understand the information remains confidential.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-9",
        title:
          "Our organization maintains confidentiality obligations for all information acquired from outside the ACT region.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-10",
        title:
          "Our organization implements internal systems to stop unauthorized disclosure of confidential information which we receive through lawful means.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-11",
        title:
          "The documentation system includes specific entries to show when particular information received confidential status.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-12",
        title:
          "The confider has the right to obtain compensation from us when we fail to uphold our obligation of confidence.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-13",
        title:
          "The confider maintains their right to seek different types of legal remedies even though they can claim damages from us.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-14",
        title:
          "The legal rights which apply to the confider also apply to all third parties whose personal information we store under confidence.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-15",
        title:
          "Our organization implements systems which protect both actual and potential violations of confidentiality obligations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-16",
        title:
          "Our organization checks all contracts and agreements to verify their protection of confidential personal information according to legal requirements.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-17",
        title:
          "The ACT courts possess authority to handle all cases related to confidence obligations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-18",
        title:
          "The State and Territory courts maintain their jurisdictional authority while ACT courts also exercise their jurisdiction.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-19",
        title:
          "Our organization trains staff members about the universal application of confidentiality obligations regardless of their workplace location.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-confidence-20",
        title:
          "Our organization conducts periodic assessments of policies to guarantee proper adherence to confidentiality obligations.",
        description: "",
        completed: false,
        required: true,
      },
      // Part IX – Miscellaneous
      {
        id: "privacy-misc-1",
        title:
          "The Act includes Schedule 2 as an effective provision which we must disregard when reading other sections of the document.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-2",
        title:
          "Our organization follows the privacy guidelines for medical research which the National Health and Medical Research Council established, and the Commissioner approved.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-3",
        title:
          "The Commissioner grants approval for guidelines only when research benefits the public more than following the APPs exactly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-4",
        title:
          "The organization considers medical research activities performed under approved guidelines as compliant with the APPs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-5",
        title:
          "Our organization follows the health information guidelines which the Commissioner has authorized for research and statistical and public health and safety needs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-6",
        title:
          "The Commissioner needs to conduct a public interest assessment before issuing approvals because research and public safety must demonstrate greater importance than privacy limitations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-7",
        title:
          "The organization follows the guidelines which the Commissioner has authorized for health information collection in research and statistical work and health service administration.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-8",
        title:
          "The Commissioner holds the authority to withdraw previously authorized guidelines when public interest no longer supports their continuation.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-9",
        title:
          "The organization follows guidelines which protect genetic relatives from serious threats through approved procedures for genetic information disclosure and use.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-10",
        title:
          "Our organization includes specific provisions in Commonwealth contracts which stop service providers from violating APPs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-11",
        title:
          "The Commonwealth contract terms must prevent any subcontractor from using their authority to break APPs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-12",
        title:
          "We issue written disclosure statements when Commonwealth contracts contain provisions which violate APPs or registered APP codes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-13",
        title:
          "The Administrative Review Tribunal has authority to review particular decisions made by the Commissioner.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-14",
        title:
          "The relevant developer or affected entity holds exclusive rights to request review for matters involving APP or CR codes and declarations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-15",
        title:
          "Our organization follows the rules which determine partnership responsibilities and liabilities so each partner can fulfill their obligations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-16",
        title:
          "The organization follows rules which distribute responsibilities to unincorporated associations so each committee member can fulfill their duties.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-17",
        title:
          "The organization follows rules which assign trust obligations to trustees so each trustee can fulfill their duties.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-18",
        title:
          "The organization accepts that directors and employees and agents can have their conduct and state of mind attributed to the organization unless proper precautions were taken.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-19",
        title:
          "The Governor-General has the authority to create binding schemes and identifiers and conditions through regulations which follow the requirements of APPs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "privacy-misc-20",
        title:
          "The regulations under APPs 8.3 and 9.3 need prior consultation with the Commissioner and executive agreement from relevant agencies before implementation.",
        description: "",
        completed: false,
        required: true,
      },
    ],
  },
  {
    id: "cybersecurity-act",
    name: "Cybersecurity Act 2024",
    icon: <Lock className="h-5 w-5" />,
    description:
      "Compliance checklist for connectable products and ransomware reporting",
    externalLink: "https://www.cisc.gov.au/",
    items: [
      // Section 13: Application of This Part
      {
        id: "cyber-s13-1",
        title: "Does your product connect to the internet or a network?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s13-2",
        title:
          "Is your product manufactured or supplied on or after the commencement of this Part?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s13-3",
        title:
          "Is your product exempted from the rules (as defined by the legislation)?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 14: Security Standards for Relevant Connectable Products
      {
        id: "cyber-s14-1",
        title:
          "Is your product classified under the security standards defined for relevant connectable products?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s14-2",
        title:
          "Is your product subject to any specific security standard for Australian acquisition?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 15: Compliance with Security Standard for a Relevant Connectable Product
      {
        id: "cyber-s15-1",
        title:
          "Has your product been manufactured in compliance with the required security standard for Australian acquisition?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s15-2",
        title:
          "Are you aware that your product will be acquired in Australia and must comply with the security standards?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s15-3",
        title:
          "Are you supplying your product in Australia in compliance with the required security standards?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s15-4",
        title:
          "Are you exempt from complying with any of the requirements due to specific entity exceptions (e.g., corporation type, activities under the Constitution)?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 16: Obligation to Provide and Supply Products with a Statement of Compliance
      {
        id: "cyber-s16-1",
        title:
          "Do you provide a statement of compliance with the security standard when supplying your product in Australia?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s16-2",
        title:
          "Do you retain a copy of the statement of compliance for the required duration?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s16-3",
        title:
          "Is your statement of compliance aligned with the rules specified for your product and security standard?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 17: Compliance Notice
      {
        id: "cyber-s17-1",
        title:
          "Has your entity been given a compliance notice because you're not complying with the security standards under Section 15 or 16?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s17-2",
        title:
          "Did the compliance notice specify details about your non-compliance or potential non-compliance?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s17-3",
        title:
          "Was the compliance notice clear about the actions you must take to address the non-compliance?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s17-4",
        title:
          "Was a reasonable period specified within which you must take action to fix the non-compliance?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s17-5",
        title:
          "Did the compliance notice explain what could happen if you don't comply?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s17-6",
        title:
          "Were you informed about how to seek a review of the decision to issue the compliance notice?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s17-7",
        title:
          "Did the Secretary give you a chance to respond to the notice before it was issued (at least 10 days)?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 18: Stop Notice
      {
        id: "cyber-s18-1",
        title:
          "Have you received a stop notice because you didn't comply with the compliance notice or your actions were insufficient to fix the non-compliance?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s18-2",
        title:
          "Did the stop notice explain what action you must take (or refrain from) to address the non-compliance?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s18-3",
        title:
          "Did the stop notice set a reasonable deadline for taking the specified action?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s18-4",
        title:
          "Was there a requirement to provide evidence of compliance with the stop notice?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s18-5",
        title:
          "Did the stop notice explain what might happen if you don't comply?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s18-6",
        title:
          "Did the stop notice provide you with an opportunity to make representations before it was issued (at least 10 days)?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 19: Recall Notice
      {
        id: "cyber-s19-1",
        title:
          "Has your entity received a recall notice because you didn't comply with the stop notice or your actions were inadequate to fix the non-compliance?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s19-2",
        title:
          "Does the recall notice require you to take action to prevent the product from being acquired or supplied in Australia?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s19-3",
        title:
          "Does the recall notice require you to arrange for the return of the product within a reasonable period?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s19-4",
        title:
          "Was a reasonable deadline specified for you to take the required action?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s19-5",
        title:
          "Was there a requirement to provide evidence of compliance with the recall notice?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s19-6",
        title:
          "Does the recall notice explain what might happen if you don't comply?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s19-7",
        title:
          "Were you given an opportunity to make representations before the recall notice was issued (at least 10 days)?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 20: Public Notification of Failure to Comply with Recall Notice
      {
        id: "cyber-s20-1",
        title:
          "Has the Minister publicly announced your non-compliance because you failed to comply with a recall notice?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s20-2",
        title:
          "Does the public notification include your entity's name, details of the product, and information about the non-compliance?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s20-3",
        title:
          "Has the public notification identified the risks posed by the product related to the non-compliance?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 21: Revocation and Variation of Notices
      {
        id: "cyber-s21-1",
        title:
          "Has the Secretary issued a notice to vary a compliance, stop, or recall notice because of an error or to better address the non-compliance?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s21-2",
        title:
          "Did the Secretary notify you in advance that they intended to vary the notice?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s21-3",
        title:
          "Were you given at least 10 days to make representations before the variation notice was issued?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s21-4",
        title:
          "Has the Secretary revoked a compliance, stop, or recall notice issued to you because they were no longer satisfied the grounds for issuing the notice were met?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s21-5",
        title:
          "If the notice was revoked, were no further notices issued regarding the same non-compliance?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 22: Internal Review of Decision to Give Notice
      {
        id: "cyber-s22-1",
        title:
          "Do you want to apply for an internal review of the decision to issue a compliance, stop, or recall notice?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s22-2",
        title:
          "Did you submit your application for internal review within 30 days of receiving the notice?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s22-3",
        title:
          "Do you know who will review the decision (Secretary or delegated official)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s22-4",
        title:
          "Has the internal review decision been made within 30 days of receiving your application?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s22-5",
        title:
          "Did the decision maker provide written reasons for their decision after reviewing your application?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 23: Examination to Assess Compliance with Security Standard
      {
        id: "cyber-s23-1",
        title:
          "Has the Secretary engaged an expert to examine your product to assess if it complies with the security standard?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s23-2",
        title: "Were you notified in writing about the examination request?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s23-3",
        title:
          "Did the notice specify the product to be examined and the requirements of the security standard for testing?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s23-4",
        title:
          "Did you receive the notice at least 10 days before providing the product for testing?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s23-5",
        title:
          "Were you informed about the kind of testing or analysis that would be conducted on the product?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s23-6",
        title:
          "Have you complied with the notice to provide the product for testing or the statement of compliance?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s23-7",
        title:
          "Were you informed about what might happen if you don't comply with the notice or security obligations?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s23-8",
        title:
          "Have you been told that you may be entitled to reasonable compensation for complying with the notice?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 24: Acquisition of Property
      {
        id: "cyber-s24-1",
        title:
          "Has any action under this Part resulted in an acquisition of property that might not be on just terms?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 25: Simplified Outline of the Part
      {
        id: "cyber-s25-1",
        title:
          "Are you required to report a ransomware payment made due to a cyber security incident?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s25-2",
        title:
          "Is the payment related to a demand made by an extorting entity (e.g., hackers)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s25-3",
        title:
          "Do you understand that failure to report the ransomware payment may result in a civil penalty?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 26: Application of this Part
      {
        id: "cyber-s26-1",
        title:
          "Did the incident have, is having, or could have a direct or indirect impact on your business?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s26-2",
        title:
          "Did an extorting entity make a demand for a ransomware payment to you or another entity on your behalf?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s26-3",
        title:
          "Is your business required to report the ransomware payment based on turnover and other criteria?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s26-4",
        title:
          'Does your entity meet the criteria for being a "reporting business entity" (e.g., annual turnover over the threshold, not a Commonwealth or State body)?',
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s26-5",
        title:
          "Was the incident caused or expected to be caused by a telegraphic, telephonic, or other service (e.g., internet)?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 27: Obligation to Report Following a Ransomware Payment
      {
        id: "cyber-s27-1",
        title:
          "Did your business make a ransomware payment, or are you aware that a payment has been made on your behalf?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s27-2",
        title:
          "Was the ransomware payment report submitted to the designated Commonwealth body within 72 hours of making or becoming aware of the payment?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s27-3",
        title:
          "Did your report include the required information (e.g., details of your business, the extorting entity, the cyber security incident, the payment, and communications)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s27-4",
        title:
          "Was the report submitted in the required form and manner as specified by the rules?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s27-5",
        title:
          "Did you include any other relevant information that could assist in understanding the incident and payment?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s27-6",
        title:
          "Did you make the report within 72 hours to avoid a civil penalty (60 penalty units)?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 28: Liability Protection
      {
        id: "cyber-s28-1",
        title:
          "Do you understand that entities are protected from liability for damages if they act in good faith when complying with the ransomware reporting obligations?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s28-2",
        title:
          "Are you aware that officers, employees, or agents of your entity are also protected from liability if they act in good faith when following these obligations?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s28-3",
        title:
          "Do you know that if your entity relies on this protection, it must provide evidence that it acted in good faith?",
        description: "",
        completed: false,
        required: true,
      },
      // Section 29: Permitted Use and Disclosure of Information
      {
        id: "cyber-s29-1",
        title:
          "Check if the information is used for permitted purposes only: Assisting in the response or mitigation of the cyber security incident, Performing functions under this Part or related parts of the Act, Supporting legal proceedings related to false/misleading information or obstruction of officials, Assisting intelligence agencies or Commonwealth/State bodies involved in cyber security",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s29-2",
        title:
          "Ensure information is not used for non-permitted purposes: Avoid using the information to investigate or enforce violations of general laws, unless related to this Part or criminal offences",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s29-3",
        title:
          "Compliance with the Privacy Act 1988: Ensure that the information is not disclosed in ways that violate the Privacy Act 1988",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s29-4",
        title:
          "Verify exclusions to the restrictions: Information required by other Acts (e.g., Security of Critical Infrastructure Act, Telecommunications Act), Publicly available information",
        description: "",
        completed: false,
        required: true,
      },
      // Additional sections continue...
      {
        id: "cyber-s30-1",
        title:
          "Ensure secondary use of information is restricted: Only used for assisting with the cyber security incident or related functions, Supporting legal proceedings under the Criminal Code, Assisting Commonwealth or State bodies with cyber security tasks",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-s30-2",
        title:
          "Prevent misuse of information for civil or regulatory investigations: Do not use the information to investigate or enforce civil or regulatory violations unrelated to this Part or criminal laws",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "cyber-annual-turnover",
        title:
          "Annual Turnover Assessment: Does your business have an annual turnover of more than $3 million? If Yes: You are required to comply with ransomware payment reporting rules under the Cyber Security Act 2024. If No: You are exempt from ransomware reporting but should still follow other cybersecurity practices.",
        description: "",
        completed: false,
        required: true,
      },
    ],
  },
  {
    id: "essential-eight-ml1",
    name: "ACSC Essential Eight - Maturity Level 1",
    icon: <FileText className="h-5 w-5" />,
    description:
      "Essential Eight - Comprehensive Checklist (All Maturity Levels Combined)",
    externalLink:
      "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
    items: [
      // ML1 Original Items - 1. Patch Applications
      {
        id: "ml1-patch-apps-1",
        title:
          "Do you automatically scan your computers to find apps at least every 2 weeks?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-apps-2",
        title: "Do you use a vulnerability scanner that is kept up to date?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-apps-3",
        title:
          "Do you scan daily for missing patches in public-facing online services?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-apps-4",
        title:
          "Do you scan weekly for missing patches in: Office apps (e.g. Word, Excel), Web browsers and their plugins, Email clients (e.g. Outlook), PDF readers (e.g. Adobe Reader), Security software?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-apps-5",
        title:
          "Do you apply critical patches within 48 hours for online services?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-apps-6",
        title:
          "Do you apply non-critical patches within 2 weeks if no known exploit exists?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-apps-7",
        title:
          "Do you apply all patches within 2 weeks for business apps, browsers, email clients, and security software?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-apps-8",
        title:
          "Have you removed any online services no longer supported by the vendor?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-apps-9",
        title:
          "Have you removed unsupported software like old browsers, Flash, PDF readers?",
        description: "",
        completed: false,
        required: true,
      },
      // ML1 Original Items - 2. Patch Operating Systems
      {
        id: "ml1-patch-os-1",
        title: "Do you automatically discover and log systems every 2 weeks?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-os-2",
        title: "Do you scan for OS vulnerabilities using an up-to-date tool?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-os-3",
        title:
          "Do you scan daily for missing OS patches on internet-facing servers/devices?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-os-4",
        title:
          "Do you scan every 2 weeks for missing patches on internal servers and devices?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-os-5",
        title:
          "Do you apply critical patches within 48 hours on internet-facing servers/devices?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-os-6",
        title:
          "Do you apply non-critical patches within 2 weeks on those systems?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-os-7",
        title:
          "Do you apply all patches within 1 month on internal systems and workstations?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-patch-os-8",
        title:
          "Have you replaced or upgraded any unsupported operating systems?",
        description: "",
        completed: false,
        required: true,
      },
      // ML1 Original Items - 3. Multi-Factor Authentication (MFA)
      {
        id: "ml1-mfa-1",
        title:
          "Do your staff use MFA to access your business's online systems with sensitive data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-mfa-2",
        title:
          "Do your staff use MFA for third-party services with sensitive data (e.g. cloud tools)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-mfa-3",
        title:
          "(If possible) Do your staff use MFA for third-party services with non-sensitive data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-mfa-4",
        title:
          "Do staff use MFA to access customer-facing systems with sensitive customer data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-mfa-5",
        title:
          "Do you require MFA for third-party services that store customer data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-mfa-6",
        title:
          "Do your customers use MFA to access your services with sensitive customer data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-mfa-7",
        title:
          "Is your MFA method based on either: Something you have and something you know, or Something you have that's unlocked by something you know or are?",
        description: "",
        completed: false,
        required: true,
      },
      // ML1 Original Items - 4. Restrict Administrative Privileges
      {
        id: "ml1-admin-1",
        title: "Are all requests for admin access checked and approved?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-admin-2",
        title:
          "Do admin users have separate admin accounts for admin work only?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-admin-3",
        title:
          "Are admin accounts blocked from accessing the internet, email, and web (unless required)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-admin-4",
        title:
          "If admin access to online services is needed, is it limited to the minimum necessary?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-admin-5",
        title: "Do admin users have separate logins for admin and normal work?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-admin-6",
        title:
          "Are normal user accounts blocked from accessing admin environments?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-admin-7",
        title:
          "Are admin accounts blocked from logging in to non-admin environments?",
        description: "",
        completed: false,
        required: true,
      },
      // ML1 Original Items - 5. Application Control
      {
        id: "ml1-app-control-1",
        title: "Do you restrict what software can run on your staff computers?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-app-control-2",
        title:
          "Do you block unknown software from running in: User folders, Temporary folders used by browsers and email?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-app-control-3",
        title:
          "Do you only allow approved software (like apps, scripts, installers, etc.) to run?",
        description: "",
        completed: false,
        required: true,
      },
      // ML1 Original Items - 6. Restrict Microsoft Office Macros
      {
        id: "ml1-macros-1",
        title: "Are macros turned off for users who don't need them?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-macros-2",
        title: "Are macros from the internet automatically blocked?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-macros-3",
        title: "Is antivirus scanning for macro files turned on?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-macros-4",
        title: "Are users blocked from changing macro security settings?",
        description: "",
        completed: false,
        required: true,
      },
      // ML1 Original Items - 7. User Application Hardening
      {
        id: "ml1-hardening-1",
        title: "Is Internet Explorer 11 disabled or removed?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-hardening-2",
        title: "Are web browsers blocked from running Java from websites?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-hardening-3",
        title: "Are web browsers blocked from loading ads from the internet?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-hardening-4",
        title: "Are users blocked from changing browser security settings?",
        description: "",
        completed: false,
        required: true,
      },
      // ML1 Original Items - 8. Regular Backups
      {
        id: "ml1-backups-1",
        title:
          "Do you back up data, apps, and settings based on how critical they are?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-backups-2",
        title:
          "Are backups synchronised so you can restore to a specific point in time?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-backups-3",
        title: "Are backups stored in a secure, reliable location?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-backups-4",
        title:
          "Have you tested restoring from backups as part of a disaster recovery plan?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-backups-5",
        title:
          "Are normal users blocked from accessing other people's backups?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml1-backups-6",
        title: "Are normal users blocked from changing or deleting backups?",
        description: "",
        completed: false,
        required: true,
      },

      // ML2 Items - 1. Patch Applications
      {
        id: "ml2-patch-apps-1",
        title:
          "Do you automatically scan all your devices at least every 2 weeks to find apps and services?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-2",
        title: "Do you use a vulnerability scanner that is kept up to date?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-3",
        title:
          "Do you scan daily for missing patches in online/public-facing services?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-4",
        title:
          "Do you scan weekly for missing patches in: Office tools (Word, Excel, etc.), Web browsers and plugins, Email apps (e.g. Outlook), PDF readers (e.g. Adobe Reader), Security software (e.g. antivirus)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-5",
        title:
          "Do you scan every 2 weeks for missing patches in other apps (besides the above)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-6",
        title:
          "Do you install critical patches within 48 hours for online services (if vendor says it's critical or a known exploit exists)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-7",
        title:
          "Do you install non-critical patches within 2 weeks for online services?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-8",
        title:
          "Do you patch office, browser, email, PDF, and security apps within 2 weeks?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-9",
        title: "Do you patch all other apps within 1 month?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-10",
        title:
          "Have you removed any online services no longer supported by the vendor?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-11",
        title:
          "Have you removed unsupported software (office tools, browsers, PDF readers, Flash, etc.)?",
        description: "",
        completed: false,
        required: true,
      },
      // ML2 Items - 2. Patch Operating Systems
      {
        id: "ml2-patch-os-1",
        title:
          "Do you scan devices every 2 weeks to detect systems for scanning?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-2",
        title:
          "Do you use a vulnerability scanner with an up-to-date database?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-3",
        title:
          "Do you scan daily for missing patches on internet-facing servers/devices?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-4",
        title:
          "Do you scan every 2 weeks for missing patches on internal servers/workstations?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-5",
        title:
          "Do you apply critical patches within 48 hours on internet-facing systems?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-6",
        title:
          "Do you apply non-critical patches within 2 weeks on those systems?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-7",
        title: "Do you patch internal workstations and servers within 1 month?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-8",
        title:
          "Have you replaced or removed any unsupported operating systems?",
        description: "",
        completed: false,
        required: true,
      },
      // ML2 Items - 3. Multi-Factor Authentication (MFA)
      {
        id: "ml2-mfa-1",
        title:
          "Do staff use MFA to access your business's online systems with sensitive data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-2",
        title:
          "Do staff use MFA to access third-party systems that handle sensitive data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-3",
        title:
          "Where available, is MFA used for third-party services with non-sensitive data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-4",
        title:
          "Do staff use MFA for your customer-facing services with sensitive customer data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-5",
        title:
          "Do staff use MFA for third-party customer services with sensitive customer data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-6",
        title:
          "Do customers use MFA to access online services with their sensitive data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-7",
        title: "Is MFA required for admin/privileged users of your systems?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-8",
        title: "Is MFA required for normal (unprivileged) users?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-9",
        title:
          "Is your MFA based on: Something you have and something you know, or Something you have that is unlocked by something you know or are?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-10",
        title:
          "Is MFA for staff and system users designed to be phishing-resistant?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-11",
        title:
          "Is MFA for customers designed to offer a phishing-resistant option?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-12",
        title:
          "Are all MFA events (success & failure) logged in a central location?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-13",
        title: "Are event logs protected from being changed or deleted?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-14",
        title:
          "Are logs from internet-facing systems reviewed quickly to detect issues?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-15",
        title:
          "Are cybersecurity events reviewed quickly to detect real threats?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-16",
        title:
          "Are incidents reported to the CISO (or delegate) as soon as discovered?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-17",
        title: "Are incidents reported to ASD as soon as discovered?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-18",
        title:
          "Is your incident response plan activated immediately when an incident is found?",
        description: "",
        completed: false,
        required: true,
      },
      // ML2 Items - 4. Restrict Administrative Privileges
      {
        id: "ml2-admin-1",
        title: "Are all requests for admin access reviewed and approved?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-2",
        title:
          "Is admin access automatically disabled after 12 months if not reapproved?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-3",
        title: "Is admin access disabled after 45 days of inactivity?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-4",
        title: "Do admins have separate admin accounts for admin work only?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-5",
        title:
          "Are admin accounts (unless required) blocked from using internet, email, and web?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-6",
        title:
          "Are admin accounts for online services limited to the minimum access needed?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-7",
        title: "Do admins use separate environments for admin and normal work?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-8",
        title:
          "Are admin environments not virtualised within user environments?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-9",
        title:
          "Are unprivileged users blocked from logging into admin environments?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-10",
        title:
          "Are admin accounts (except local admins) blocked from logging into normal environments?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-11",
        title: "Are admin tasks done through jump servers?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-12",
        title:
          "Are emergency, local admin, and service account passwords: Long, unique, unpredictable, Managed securely?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-13",
        title: "Are all admin access events logged in a central system?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-14",
        title: "Are admin account and security group changes logged centrally?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-15",
        title: "Are logs protected from tampering or deletion?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-16",
        title: "Are internet-facing server logs analysed promptly?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-17",
        title: "Are security events reviewed quickly to identify incidents?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-18",
        title: "Are incidents reported to the CISO or delegate immediately?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-19",
        title: "Are incidents reported to the ASD as soon as possible?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-20",
        title: "Is the incident response plan followed right after discovery?",
        description: "",
        completed: false,
        required: true,
      },
      // ML2 Items - 5. Application Control
      {
        id: "ml2-app-control-1",
        title: "Do you apply application control on workstations?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-2",
        title: "Do you apply application control on internet-facing servers?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-3",
        title:
          "Do you restrict apps in: User folders, Temporary folders used by browsers and email?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-4",
        title: "Do you restrict apps in all other locations too?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-5",
        title:
          "Do you only allow approved software (apps, scripts, etc.) to run?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-6",
        title: "Have you implemented Microsoft's recommended blocklist?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-7",
        title: "Are your application rulesets reviewed at least once a year?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-8",
        title: "Are all allowed and blocked software events logged centrally?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-9",
        title: "Are logs protected from modification or deletion?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-10",
        title: "Are logs from internet-facing systems analysed quickly?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-11",
        title: "Are cyber events analysed to detect real incidents?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-12",
        title: "Are incidents reported to CISO or delegate quickly?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-13",
        title: "Are incidents reported to ASD?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-14",
        title:
          "Is the incident response plan used as soon as incidents are found?",
        description: "",
        completed: false,
        required: true,
      },
      // ML2 Items - 6. Restrict Microsoft Office Macros
      {
        id: "ml2-macros-1",
        title: "Are macros turned off for users without a valid business need?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-macros-2",
        title: "Are macros from internet-sourced files blocked?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-macros-3",
        title: "Is antivirus scanning of macro files enabled?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-macros-4",
        title: "Are macros blocked from using Win32 API calls?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-macros-5",
        title: "Are users blocked from changing macro settings?",
        description: "",
        completed: false,
        required: true,
      },
      // ML2 Items - 7. User Application Hardening
      {
        id: "ml2-hardening-1",
        title: "Is Internet Explorer 11 disabled or removed?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-2",
        title: "Are web browsers blocked from running Java from the internet?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-3",
        title: "Are browsers blocked from showing online ads?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-4",
        title:
          "Are web browsers hardened using ASD/vendor guides (whichever is stricter)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-5",
        title: "Are browser settings locked so users can't change them?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-6",
        title: "Is Microsoft Office blocked from creating child processes?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-7",
        title: "Is Office blocked from making executables?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-8",
        title: "Is Office blocked from injecting code into other apps?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-9",
        title: "Is Office stopped from activating embedded objects (OLE)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-10",
        title:
          "Are Office products hardened with ASD/vendor guides (strictest applied)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-11",
        title: "Are Office settings locked so users can't change them?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-12",
        title: "Is PDF software blocked from creating child processes?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-13",
        title:
          "Is PDF software hardened using ASD/vendor guidance (most restrictive)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-14",
        title: "Are PDF settings locked from user changes?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-15",
        title:
          "Are the following centrally logged: PowerShell script logs, Script block and transcription logs, Command-line process creation events?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-16",
        title: "Are event logs protected from tampering or deletion?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-17",
        title: "Are logs from internet-facing servers analysed promptly?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-18",
        title: "Are cyber events analysed to detect actual incidents?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-19",
        title: "Are incidents reported immediately to the CISO (or delegate)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-20",
        title: "Are incidents reported to ASD?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-21",
        title: "Is the incident response plan activated immediately?",
        description: "",
        completed: false,
        required: true,
      },
      // ML2 Items - 8. Regular Backups
      {
        id: "ml2-backups-1",
        title:
          "Are backups of data, apps, and settings made based on business risk?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-2",
        title: "Are backups synchronised to restore to a single point in time?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-3",
        title: "Are backups stored in a secure, resilient way?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-4",
        title:
          "Do you test restoring from backups during disaster recovery drills?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-5",
        title: "Can normal users only access their own backups?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-6",
        title:
          "Can admin users (except backup admins) access other people's backups?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-7",
        title: "Are normal users prevented from deleting/changing backups?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-8",
        title:
          "Are admin users (except backup admins) blocked from modifying or deleting backups?",
        description: "",
        completed: false,
        required: true,
      },

      // ML3 Items - Patch Applications
      {
        id: "ml3-patch-apps-1",
        title: "Check for new devices automatically every two weeks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-2",
        title: "Use a tool to scan for software weaknesses regularly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-3",
        title: "Scan daily for missing updates on online services.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-4",
        title:
          "Scan weekly for missing updates on office software, web browsers, email, PDF readers, and security tools.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-5",
        title:
          "Scan every two weeks for missing updates on all other applications.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-6",
        title:
          "Apply urgent updates for online services within 2 days if critical or actively exploited.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-7",
        title:
          "Apply less urgent updates for online services within 2 weeks if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-8",
        title:
          "Apply urgent updates for office software and similar tools within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-9",
        title:
          "Apply less urgent updates for office software and similar tools within 2 weeks if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-10",
        title: "Apply updates for other applications within 1 month.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-11",
        title: "Remove unsupported online services.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-12",
        title:
          "Remove unsupported office software, browsers, email clients, PDF software, Flash Player, and security tools.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-13",
        title: "Remove unsupported other applications.",
        description: "",
        completed: false,
        required: true,
      },
      // ML3 Items - Patch Operating Systems
      {
        id: "ml3-patch-os-1",
        title: "Check for new devices automatically every two weeks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-2",
        title:
          "Use a tool to scan for weaknesses in operating systems regularly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-3",
        title:
          "Scan daily for missing updates on internet-facing servers and devices.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-4",
        title:
          "Scan every two weeks for missing updates on workstations, internal servers, and devices.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-5",
        title: "Scan every two weeks for missing updates on drivers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-6",
        title: "Scan every two weeks for missing updates on firmware.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-7",
        title:
          "Apply urgent updates for internet-facing systems within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-8",
        title:
          "Apply less urgent updates for internet-facing systems within 2 weeks if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-9",
        title:
          "Apply urgent updates for workstations and internal systems within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-10",
        title:
          "Apply less urgent updates for workstations and internal systems within 1 month if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-11",
        title: "Apply urgent updates for drivers within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-12",
        title:
          "Apply less urgent updates for drivers within 1 month if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-13",
        title: "Apply urgent updates for firmware within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-14",
        title:
          "Apply less urgent updates for firmware within 1 month if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-15",
        title: "Use the latest or previous version of operating systems.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-16",
        title: "Replace operating systems that are no longer supported.",
        description: "",
        completed: false,
        required: true,
      },
      // ML3 Items - Multi-Factor Authentication (MFA)
      {
        id: "ml3-mfa-1",
        title:
          "Use MFA for users accessing your own online services with sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-2",
        title:
          "Use MFA for users accessing third-party services with sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-3",
        title:
          "Use MFA (if available) for third-party services with non-sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-4",
        title:
          "Use MFA for users accessing your customer services with sensitive customer data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-5",
        title:
          "Use MFA for users accessing third-party customer services with sensitive customer data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-6",
        title:
          "Use MFA for customers accessing online services with sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-7",
        title:
          "Use MFA for privileged users (those with special system access).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-8",
        title: "Use MFA for regular users.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-9",
        title: "Use MFA for users accessing data storage systems.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-10",
        title:
          "MFA must require either something the user has plus something they know, or something they have unlocked by something they know or are.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-11",
        title: "MFA for online users must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-12",
        title: "MFA for customers must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-13",
        title: "MFA for system users must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-14",
        title: "MFA for data users must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-15",
        title: "Log all successful and unsuccessful MFA attempts centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-16",
        title:
          "Protect event logs from being changed or deleted without permission.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-17",
        title:
          "Regularly check event logs from internet-facing servers for security issues.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-18",
        title:
          "Regularly check event logs from internal servers for security issues.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-19",
        title:
          "Regularly check event logs from workstations for security issues.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-20",
        title: "Analyze security events quickly to find incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-21",
        title:
          "Report security incidents immediately to the chief information security officer (CISO) or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-22",
        title:
          "Report security incidents immediately to Australian Signals Directorate (ASD).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-23",
        title:
          "Follow your incident response plan after discovering a security incident.",
        description: "",
        completed: false,
        required: true,
      },
      // ML3 Items - Restrict Administrative Privileges
      {
        id: "ml3-admin-1",
        title: "Validate requests for special access when first made.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-2",
        title: "Remove special access if not revalidated after 12 months.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-3",
        title: "Remove special access if user inactive for 45 days.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-4",
        title:
          "Give privileged users a separate account just for privileged tasks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-5",
        title: "Limit privileged access only to what is necessary.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-6",
        title:
          "Prevent privileged accounts from accessing the internet, email, and web services unless explicitly allowed.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-7",
        title:
          "Strictly limit what privileged accounts can do if allowed online access.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-8",
        title: "Use secure, dedicated computers for administrative tasks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-9",
        title:
          "Privileged users should have separate environments for privileged and normal tasks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-10",
        title:
          "Do not run privileged environments inside regular user environments.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-11",
        title: "Regular users cannot log in to privileged environments.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-12",
        title:
          "Privileged users (except local admins) cannot log in to regular user environments.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-13",
        title:
          'Use "just-in-time" access for admin tasks (access granted only when needed).',
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-14",
        title:
          "Conduct admin tasks through jump servers (controlled access points).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-15",
        title:
          "Use long, unique, and hard-to-guess passwords for emergency and service accounts.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-16",
        title: "Enable memory protection features.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-17",
        title: "Enable protection for the Local Security Authority.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-18",
        title: "Enable Credential Guard (security feature).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-19",
        title: "Enable Remote Credential Guard.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-20",
        title: "Log all privileged access events centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-21",
        title: "Log privileged account and security group management actions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-22",
        title: "Protect logs from unauthorized changes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-23",
        title: "Monitor event logs from internet-facing servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-24",
        title: "Monitor event logs from internal servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-25",
        title: "Monitor event logs from workstations promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-26",
        title: "Analyze security events quickly to detect incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-27",
        title: "Report incidents immediately to CISO or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-28",
        title: "Report incidents immediately to ASD.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-29",
        title: "Follow incident response plans after incident discovery.",
        description: "",
        completed: false,
        required: true,
      },
      // ML3 Items - Application Control
      {
        id: "ml3-app-control-1",
        title: "Implement application control on workstations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-2",
        title: "Implement application control on internet-facing servers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-3",
        title: "Implement application control on internal servers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-4",
        title:
          "Control applications running in user profiles and temporary folders for OS, browsers, and email clients.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-5",
        title: "Control applications in all other locations too.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-6",
        title:
          "Only allow approved executables, libraries, scripts, installers, HTML apps, and control panels.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-7",
        title: "Only allow approved drivers to run.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-8",
        title:
          "Use Microsoft's recommended blocklists for applications and vulnerable drivers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-9",
        title: "Check application control rules at least once a year.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-10",
        title: "Log allowed and blocked application events centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-11",
        title: "Protect logs from unauthorized changes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-12",
        title: "Monitor event logs from internet-facing servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-13",
        title: "Monitor event logs from internal servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-14",
        title: "Monitor event logs from workstations promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-15",
        title: "Analyze security events quickly to detect incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-16",
        title: "Report incidents immediately to CISO or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-17",
        title: "Report incidents immediately to ASD.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-18",
        title: "Follow incident response plans after incident discovery.",
        description: "",
        completed: false,
        required: true,
      },
      // ML3 Items - Restrict Microsoft Office Macros
      {
        id: "ml3-macros-1",
        title: "Disable macros for users unless they really need them.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-2",
        title:
          "Only allow macros running inside safe environments, trusted locations, or those signed by trusted publishers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-3",
        title: "Check macros for malicious code before signing or trusting.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-4",
        title: "Only privileged users can modify trusted macro locations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-5",
        title: "Block macros signed by untrusted publishers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-6",
        title: "Block macros signed with old or unapproved signature versions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-7",
        title: "Review the list of trusted publishers yearly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-8",
        title: "Block macros in files from the internet.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-9",
        title: "Enable antivirus scanning for Office macros.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-10",
        title: "Block macros from calling risky system functions (Win32 API).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-11",
        title: "Prevent users from changing macro security settings.",
        description: "",
        completed: false,
        required: true,
      },
      // ML3 Items - User Application Hardening
      {
        id: "ml3-hardening-1",
        title: "Remove or disable Internet Explorer 11.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-2",
        title: "Prevent browsers from running Java from the internet.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-3",
        title: "Prevent browsers from displaying internet ads.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-4",
        title:
          "Harden browsers using the strictest official security guidelines.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-5",
        title: "Prevent users from changing browser security settings.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-6",
        title:
          "Block Office from creating child processes or executable content.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-7",
        title: "Block Office from injecting code into other programs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-8",
        title:
          "Configure Office to block Object Linking and Embedding packages.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-9",
        title:
          "Harden Office software using the strictest official guidelines.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-10",
        title: "Prevent users from changing Office security settings.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-11",
        title: "Block PDF software from creating child processes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-12",
        title: "Harden PDF software using the strictest official guidelines.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-13",
        title: "Prevent users from changing PDF security settings.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-14",
        title: "Remove or disable old .NET Framework 3.5 versions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-15",
        title: "Remove or disable PowerShell 2.0.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-16",
        title: "Set PowerShell to a restricted language mode.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-17",
        title:
          "Log PowerShell module activities, script executions, and transcription centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-18",
        title: "Log command-line program starts centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-19",
        title: "Protect logs from unauthorized changes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-20",
        title: "Monitor event logs from internet-facing servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-21",
        title: "Monitor event logs from internal servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-22",
        title: "Monitor event logs from workstations promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-23",
        title: "Analyze security events quickly to detect incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-24",
        title: "Report incidents immediately to CISO or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-25",
        title: "Report incidents immediately to ASD.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-26",
        title: "Follow incident response plans after incident discovery.",
        description: "",
        completed: false,
        required: true,
      },
      // ML3 Items - Regular Backups
      {
        id: "ml3-backups-1",
        title:
          "Backup data, applications, and settings according to business importance and continuity needs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-2",
        title:
          "Sync backups so everything can be restored to the same point in time.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-3",
        title: "Keep backups safe and resilient.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-4",
        title:
          "Test restoring backups regularly during disaster recovery drills.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-5",
        title: "Prevent regular users from accessing other users' backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-6",
        title: "Prevent regular users from accessing their own backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-7",
        title:
          "Prevent privileged users (except backup admins) from accessing other users' backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-8",
        title:
          "Prevent privileged users (except backup admins) from accessing their own backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-9",
        title: "Prevent regular users from changing or deleting backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-10",
        title:
          "Prevent privileged users (except backup admins) from changing or deleting backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-11",
        title:
          "Backup admins cannot change or delete backups during the retention period.",
        description: "",
        completed: false,
        required: true,
      },
    ],
  },
  {
    id: "essential-eight-ml2",
    name: "ACSC Essential Eight - Maturity Level 2",
    icon: <FileText className="h-5 w-5" />,
    description:
      "Essential Eight – Maturity Level Two Checklist (Appendix B – Plain English for non-technical SMEs)",
    externalLink:
      "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
    items: [
      // 1. Patch Applications
      {
        id: "ml2-patch-apps-scan-devices",
        title:
          "Do you automatically scan all your devices at least every 2 weeks to find apps and services?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-vulnerability-scanner",
        title: "Do you use a vulnerability scanner that is kept up to date?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-scan-daily-online",
        title:
          "Do you scan daily for missing patches in online/public-facing services?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-scan-weekly-office",
        title:
          "Do you scan weekly for missing patches in: Office tools (Word, Excel, etc.), Web browsers and plugins, Email apps (e.g. Outlook), PDF readers (e.g. Adobe Reader), Security software (e.g. antivirus)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-scan-biweekly-other",
        title:
          "Do you scan every 2 weeks for missing patches in other apps (besides the above)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-critical-48hrs",
        title:
          "Do you install critical patches within 48 hours for online services (if vendor says it's critical or a known exploit exists)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-non-critical-2weeks",
        title:
          "Do you install non-critical patches within 2 weeks for online services?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-office-2weeks",
        title:
          "Do you patch office, browser, email, PDF, and security apps within 2 weeks?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-other-1month",
        title: "Do you patch all other apps within 1 month?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-remove-unsupported-online",
        title:
          "Have you removed any online services no longer supported by the vendor?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-apps-remove-unsupported-software",
        title:
          "Have you removed unsupported software (office tools, browsers, PDF readers, Flash, etc.)?",
        description: "",
        completed: false,
        required: true,
      },
      // 2. Patch Operating Systems
      {
        id: "ml2-patch-os-scan-devices",
        title:
          "Do you scan devices every 2 weeks to detect systems for scanning?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-vulnerability-scanner",
        title:
          "Do you use a vulnerability scanner with an up-to-date database?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-scan-daily-internet",
        title:
          "Do you scan daily for missing patches on internet-facing servers/devices?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-scan-biweekly-internal",
        title:
          "Do you scan every 2 weeks for missing patches on internal servers/workstations?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-critical-48hrs",
        title:
          "Do you apply critical patches within 48 hours on internet-facing systems?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-non-critical-2weeks",
        title:
          "Do you apply non-critical patches within 2 weeks on those systems?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-internal-1month",
        title: "Do you patch internal workstations and servers within 1 month?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-patch-os-remove-unsupported",
        title:
          "Have you replaced or removed any unsupported operating systems?",
        description: "",
        completed: false,
        required: true,
      },
      // 3. Multi-Factor Authentication (MFA)
      {
        id: "ml2-mfa-business-sensitive",
        title:
          "Do staff use MFA to access your business's online systems with sensitive data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-third-party-sensitive",
        title:
          "Do staff use MFA to access third-party systems that handle sensitive data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-third-party-non-sensitive",
        title:
          "Where available, is MFA used for third-party services with non-sensitive data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-customer-facing-sensitive",
        title:
          "Do staff use MFA for your customer-facing services with sensitive customer data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-third-party-customer",
        title:
          "Do staff use MFA for third-party customer services with sensitive customer data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-customers",
        title:
          "Do customers use MFA to access online services with their sensitive data?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-admin-users",
        title: "Is MFA required for admin/privileged users of your systems?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-normal-users",
        title: "Is MFA required for normal (unprivileged) users?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-method-based",
        title:
          "Is your MFA based on: Something you have and something you know, or Something you have that is unlocked by something you know or are?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-phishing-resistant-staff",
        title:
          "Is MFA for staff and system users designed to be phishing-resistant?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-phishing-resistant-customers",
        title:
          "Is MFA for customers designed to offer a phishing-resistant option?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-events-logged",
        title:
          "Are all MFA events (success & failure) logged in a central location?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-logs-protected",
        title: "Are event logs protected from being changed or deleted?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-internet-logs-reviewed",
        title:
          "Are logs from internet-facing systems reviewed quickly to detect issues?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-cyber-events-reviewed",
        title:
          "Are cybersecurity events reviewed quickly to detect real threats?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-incidents-reported-ciso",
        title:
          "Are incidents reported to the CISO (or delegate) as soon as discovered?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-incidents-reported-asd",
        title: "Are incidents reported to ASD as soon as discovered?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-mfa-incident-response-plan",
        title:
          "Is your incident response plan activated immediately when an incident is found?",
        description: "",
        completed: false,
        required: true,
      },
      // 4. Restrict Administrative Privileges
      {
        id: "ml2-admin-access-reviewed",
        title: "Are all requests for admin access reviewed and approved?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-access-disabled-12months",
        title:
          "Is admin access automatically disabled after 12 months if not reapproved?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-access-disabled-45days",
        title: "Is admin access disabled after 45 days of inactivity?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-separate-accounts",
        title: "Do admins have separate admin accounts for admin work only?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-accounts-blocked-internet",
        title:
          "Are admin accounts (unless required) blocked from using internet, email, and web?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-online-services-limited",
        title:
          "Are admin accounts for online services limited to the minimum access needed?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-separate-environments",
        title: "Do admins use separate environments for admin and normal work?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-environments-not-virtualised",
        title:
          "Are admin environments not virtualised within user environments?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-unprivileged-blocked",
        title:
          "Are unprivileged users blocked from logging into admin environments?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-accounts-blocked-normal",
        title:
          "Are admin accounts (except local admins) blocked from logging into normal environments?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-jump-servers",
        title: "Are admin tasks done through jump servers?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-passwords-secure",
        title:
          "Are emergency, local admin, and service account passwords: Long, unique, unpredictable and Managed securely?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-access-events-logged",
        title: "Are all admin access events logged in a central system?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-account-changes-logged",
        title: "Are admin account and security group changes logged centrally?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-logs-protected",
        title: "Are logs protected from tampering or deletion?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-internet-logs-analysed",
        title: "Are internet-facing server logs analysed promptly?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-security-events-reviewed",
        title: "Are security events reviewed quickly to identify incidents?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-incidents-reported-ciso",
        title: "Are incidents reported to the CISO or delegate immediately?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-incidents-reported-asd",
        title: "Are incidents reported to the ASD as soon as possible?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-admin-incident-response-plan",
        title: "Is the incident response plan followed right after discovery?",
        description: "",
        completed: false,
        required: true,
      },
      // 5. Application Control
      {
        id: "ml2-app-control-workstations",
        title: "Do you apply application control on workstations?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-internet-servers",
        title: "Do you apply application control on internet-facing servers?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-restrict-user-folders",
        title:
          "Do you restrict apps in: User folders, Temporary folders used by browsers and email?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-restrict-all-locations",
        title: "Do you restrict apps in all other locations too?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-approved-software",
        title:
          "Do you only allow approved software (apps, scripts, etc.) to run?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-microsoft-blocklist",
        title: "Have you implemented Microsoft's recommended blocklist?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-rulesets-reviewed",
        title: "Are your application rulesets reviewed at least once a year?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-events-logged",
        title: "Are all allowed and blocked software events logged centrally?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-logs-protected",
        title: "Are logs protected from modification or deletion?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-internet-logs-analysed",
        title: "Are logs from internet-facing systems analysed quickly?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-cyber-events-analysed",
        title: "Are cyber events analysed to detect real incidents?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-incidents-reported-ciso",
        title: "Are incidents reported to CISO or delegate quickly?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-incidents-reported-asd",
        title: "Are incidents reported to ASD?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-app-control-incident-response-plan",
        title:
          "Is the incident response plan used as soon as incidents are found?",
        description: "",
        completed: false,
        required: true,
      },
      // 6. Restrict Microsoft Office Macros
      {
        id: "ml2-macros-turned-off",
        title: "Are macros turned off for users without a valid business need?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-macros-internet-blocked",
        title: "Are macros from internet-sourced files blocked?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-macros-antivirus-scanning",
        title: "Is antivirus scanning of macro files enabled?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-macros-win32-api-blocked",
        title: "Are macros blocked from using Win32 API calls?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-macros-settings-locked",
        title: "Are users blocked from changing macro settings?",
        description: "",
        completed: false,
        required: true,
      },
      // 7. User Application Hardening
      {
        id: "ml2-hardening-ie11-disabled",
        title: "Is Internet Explorer 11 disabled or removed?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-java-blocked",
        title: "Are web browsers blocked from running Java from the internet?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-ads-blocked",
        title: "Are browsers blocked from showing online ads?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-browsers-hardened",
        title:
          "Are web browsers hardened using ASD/vendor guides (whichever is stricter)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-browser-settings-locked",
        title: "Are browser settings locked so users can't change them?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-office-child-processes",
        title: "Is Microsoft Office blocked from creating child processes?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-office-executables",
        title: "Is Office blocked from making executables?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-office-code-injection",
        title: "Is Office blocked from injecting code into other apps?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-office-ole-blocked",
        title: "Is Office stopped from activating embedded objects (OLE)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-office-hardened",
        title:
          "Are Office products hardened with ASD/vendor guides (strictest applied)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-office-settings-locked",
        title: "Are Office settings locked so users can't change them?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-pdf-child-processes",
        title: "Is PDF software blocked from creating child processes?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-pdf-hardened",
        title:
          "Is PDF software hardened using ASD/vendor guidance (most restrictive)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-pdf-settings-locked",
        title: "Are PDF settings locked from user changes?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-powershell-logged",
        title:
          "Are the following centrally logged: PowerShell script logs, Script block and transcription logs, Command-line process creation events?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-logs-protected",
        title: "Are event logs protected from tampering or deletion?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-internet-logs-analysed",
        title: "Are logs from internet-facing servers analysed promptly?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-cyber-events-analysed",
        title: "Are cyber events analysed to detect actual incidents?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-incidents-reported-ciso",
        title: "Are incidents reported immediately to the CISO (or delegate)?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-incidents-reported-asd",
        title: "Are incidents reported to ASD?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-hardening-incident-response-plan",
        title: "Is the incident response plan activated immediately?",
        description: "",
        completed: false,
        required: true,
      },
      // 8. Regular Backups
      {
        id: "ml2-backups-business-risk",
        title:
          "Are backups of data, apps, and settings made based on business risk?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-synchronised",
        title: "Are backups synchronised to restore to a single point in time?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-stored-securely",
        title: "Are backups stored in a secure, resilient way?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-tested-restoration",
        title:
          "Do you test restoring from backups during disaster recovery drills?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-users-own-access",
        title: "Can normal users only access their own backups?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-admin-access-limited",
        title:
          "Can admin users (except backup admins) access other people's backups?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-users-prevented-deletion",
        title: "Are normal users prevented from deleting/changing backups?",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml2-backups-admin-blocked-modification",
        title:
          "Are admin users (except backup admins) blocked from modifying or deleting backups?",
        description: "",
        completed: false,
        required: true,
      },
    ],
  },
  {
    id: "essential-eight-ml3",
    name: "ACSC Essential Eight - Maturity Level 3",
    icon: <FileText className="h-5 w-5" />,
    description: "Maturity Level Three Cybersecurity Checklist for SMEs",
    externalLink:
      "https://www.cyber.gov.au/resources-business-and-government/essential-cyber-security/essential-eight",
    items: [
      // Patch Applications
      {
        id: "ml3-patch-apps-check-devices",
        title: "Check for new devices automatically every two weeks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-scan-tool",
        title: "Use a tool to scan for software weaknesses regularly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-scan-daily-online",
        title: "Scan daily for missing updates on online services.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-scan-weekly-office",
        title:
          "Scan weekly for missing updates on office software, web browsers, email, PDF readers, and security tools.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-scan-biweekly-all",
        title:
          "Scan every two weeks for missing updates on all other applications.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-urgent-online-2days",
        title:
          "Apply urgent updates for online services within 2 days if critical or actively exploited.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-less-urgent-online-2weeks",
        title:
          "Apply less urgent updates for online services within 2 weeks if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-urgent-office-2days",
        title:
          "Apply urgent updates for office software and similar tools within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-less-urgent-office-2weeks",
        title:
          "Apply less urgent updates for office software and similar tools within 2 weeks if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-other-1month",
        title: "Apply updates for other applications within 1 month.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-remove-unsupported-online",
        title: "Remove unsupported online services.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-remove-unsupported-office",
        title:
          "Remove unsupported office software, browsers, email clients, PDF software, Flash Player, and security tools.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-remove-unsupported-other",
        title: "Remove unsupported other applications.",
        description: "",
        completed: false,
        required: true,
      },
      // Patch Operating Systems
      {
        id: "ml3-patch-os-check-devices",
        title: "Check for new devices automatically every two weeks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-scan-tool",
        title:
          "Use a tool to scan for weaknesses in operating systems regularly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-scan-daily-internet",
        title:
          "Scan daily for missing updates on internet-facing servers and devices.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-scan-biweekly-internal",
        title:
          "Scan every two weeks for missing updates on workstations, internal servers, and devices.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-scan-biweekly-drivers",
        title: "Scan every two weeks for missing updates on drivers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-scan-biweekly-firmware",
        title: "Scan every two weeks for missing updates on firmware.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-urgent-internet-2days",
        title:
          "Apply urgent updates for internet-facing systems within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-less-urgent-internet-2weeks",
        title:
          "Apply less urgent updates for internet-facing systems within 2 weeks if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-urgent-internal-2days",
        title:
          "Apply urgent updates for workstations and internal systems within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-less-urgent-internal-1month",
        title:
          "Apply less urgent updates for workstations and internal systems within 1 month if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-urgent-drivers-2days",
        title: "Apply urgent updates for drivers within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-less-urgent-drivers-1month",
        title:
          "Apply less urgent updates for drivers within 1 month if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-urgent-firmware-2days",
        title: "Apply urgent updates for firmware within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-less-urgent-firmware-1month",
        title:
          "Apply less urgent updates for firmware within 1 month if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-latest-version",
        title: "Use the latest or previous version of operating systems.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-replace-unsupported",
        title: "Replace operating systems that are no longer supported.",
        description: "",
        completed: false,
        required: true,
      },
      // Multi-Factor Authentication (MFA)
      {
        id: "ml3-mfa-own-services-sensitive",
        title:
          "Use MFA for users accessing your own online services with sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-third-party-sensitive",
        title:
          "Use MFA for users accessing third-party services with sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-third-party-non-sensitive",
        title:
          "Use MFA (if available) for third-party services with non-sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-customer-services-sensitive",
        title:
          "Use MFA for users accessing your customer services with sensitive customer data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-third-party-customer-sensitive",
        title:
          "Use MFA for users accessing third-party customer services with sensitive customer data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-customers-sensitive",
        title:
          "Use MFA for customers accessing online services with sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-privileged-users",
        title:
          "Use MFA for privileged users (those with special system access).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-regular-users",
        title: "Use MFA for regular users.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-data-storage-users",
        title: "Use MFA for users accessing data storage systems.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-method-requirements",
        title:
          "MFA must require either something the user has plus something they know, or something they have unlocked by something they know or are.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-online-phishing-resistant",
        title: "MFA for online users must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-customers-phishing-resistant",
        title: "MFA for customers must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-system-users-phishing-resistant",
        title: "MFA for system users must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-data-users-phishing-resistant",
        title: "MFA for data users must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-log-attempts",
        title: "Log all successful and unsuccessful MFA attempts centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-protect-logs",
        title:
          "Protect event logs from being changed or deleted without permission.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-check-internet-logs",
        title:
          "Regularly check event logs from internet-facing servers for security issues.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-check-internal-logs",
        title:
          "Regularly check event logs from internal servers for security issues.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-check-workstation-logs",
        title:
          "Regularly check event logs from workstations for security issues.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-analyze-security-events",
        title: "Analyze security events quickly to find incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-report-incidents-ciso",
        title:
          "Report security incidents immediately to the chief information security officer (CISO) or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-report-incidents-asd",
        title:
          "Report security incidents immediately to Australian Signals Directorate (ASD).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-follow-incident-response",
        title:
          "Follow your incident response plan after discovering a security incident.",
        description: "",
        completed: false,
        required: true,
      },
      // Restrict Administrative Privileges
      {
        id: "ml3-admin-validate-requests",
        title: "Validate requests for special access when first made.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-remove-12months",
        title: "Remove special access if not revalidated after 12 months.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-remove-45days",
        title: "Remove special access if user inactive for 45 days.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-separate-account",
        title:
          "Give privileged users a separate account just for privileged tasks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-limit-access",
        title: "Limit privileged access only to what is necessary.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-prevent-internet-access",
        title:
          "Prevent privileged accounts from accessing the internet, email, and web services unless explicitly allowed.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-strict-online-limits",
        title:
          "Strictly limit what privileged accounts can do if allowed online access.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-dedicated-computers",
        title: "Use secure, dedicated computers for administrative tasks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-separate-environments",
        title:
          "Privileged users should have separate environments for privileged and normal tasks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-no-virtualization",
        title:
          "Do not run privileged environments inside regular user environments.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-regular-users-blocked",
        title: "Regular users cannot log in to privileged environments.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-privileged-blocked-regular",
        title:
          "Privileged users (except local admins) cannot log in to regular user environments.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-just-in-time",
        title:
          'Use "just-in-time" access for admin tasks (access granted only when needed).',
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-jump-servers",
        title:
          "Conduct admin tasks through jump servers (controlled access points).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-secure-passwords",
        title:
          "Use long, unique, and hard-to-guess passwords for emergency and service accounts.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-memory-protection",
        title: "Enable memory protection features.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-lsa-protection",
        title: "Enable protection for the Local Security Authority.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-credential-guard",
        title: "Enable Credential Guard (security feature).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-remote-credential-guard",
        title: "Enable Remote Credential Guard.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-log-access-events",
        title: "Log all privileged access events centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-log-account-management",
        title: "Log privileged account and security group management actions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-protect-logs",
        title: "Protect logs from unauthorized changes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-monitor-internet-logs",
        title: "Monitor event logs from internet-facing servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-monitor-internal-logs",
        title: "Monitor event logs from internal servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-monitor-workstation-logs",
        title: "Monitor event logs from workstations promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-analyze-security-events",
        title: "Analyze security events quickly to detect incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-report-incidents-ciso",
        title: "Report incidents immediately to CISO or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-report-incidents-asd",
        title: "Report incidents immediately to ASD.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-follow-incident-response",
        title: "Follow incident response plans after incident discovery.",
        description: "",
        completed: false,
        required: true,
      },
      // Application Control
      {
        id: "ml3-app-control-workstations",
        title: "Implement application control on workstations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-internet-servers",
        title: "Implement application control on internet-facing servers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-internal-servers",
        title: "Implement application control on internal servers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-user-temp-folders",
        title:
          "Control applications running in user profiles and temporary folders for OS, browsers, and email clients.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-all-locations",
        title: "Control applications in all other locations too.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-approved-executables",
        title:
          "Only allow approved executables, libraries, scripts, installers, HTML apps, and control panels.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-approved-drivers",
        title: "Only allow approved drivers to run.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-microsoft-blocklists",
        title:
          "Use Microsoft's recommended blocklists for applications and vulnerable drivers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-check-rules",
        title: "Check application control rules at least once a year.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-log-events",
        title: "Log allowed and blocked application events centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-protect-logs",
        title: "Protect logs from unauthorized changes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-monitor-internet",
        title: "Monitor event logs from internet-facing servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-monitor-internal",
        title: "Monitor event logs from internal servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-monitor-workstations",
        title: "Monitor event logs from workstations promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-analyze-events",
        title: "Analyze security events quickly to detect incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-report-ciso",
        title: "Report incidents immediately to CISO or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-report-asd",
        title: "Report incidents immediately to ASD.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-follow-response",
        title: "Follow incident response plans after incident discovery.",
        description: "",
        completed: false,
        required: true,
      },
      // Restrict Microsoft Office Macros
      {
        id: "ml3-macros-disable-unless-needed",
        title: "Disable macros for users unless they really need them.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-safe-environments",
        title:
          "Only allow macros running inside safe environments, trusted locations, or those signed by trusted publishers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-check-malicious",
        title: "Check macros for malicious code before signing or trusting.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-privileged-modify",
        title: "Only privileged users can modify trusted macro locations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-block-untrusted",
        title: "Block macros signed by untrusted publishers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-block-old-signatures",
        title: "Block macros signed with old or unapproved signature versions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-review-publishers",
        title: "Review the list of trusted publishers yearly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-block-internet",
        title: "Block macros in files from the internet.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-antivirus-scanning",
        title: "Enable antivirus scanning for Office macros.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-block-win32-api",
        title: "Block macros from calling risky system functions (Win32 API).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-prevent-settings-changes",
        title: "Prevent users from changing macro security settings.",
        description: "",
        completed: false,
        required: true,
      },
      // User Application Hardening
      {
        id: "ml3-hardening-remove-ie11",
        title: "Remove or disable Internet Explorer 11.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-prevent-java",
        title: "Prevent browsers from running Java from the internet.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-prevent-ads",
        title: "Prevent browsers from displaying internet ads.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-harden-browsers",
        title:
          "Harden browsers using the strictest official security guidelines.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-prevent-browser-changes",
        title: "Prevent users from changing browser security settings.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-block-office-processes",
        title:
          "Block Office from creating child processes or executable content.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-block-office-injection",
        title: "Block Office from injecting code into other programs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-configure-ole",
        title:
          "Configure Office to block Object Linking and Embedding packages.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-harden-office",
        title:
          "Harden Office software using the strictest official guidelines.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-prevent-office-changes",
        title: "Prevent users from changing Office security settings.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-block-pdf-processes",
        title: "Block PDF software from creating child processes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-harden-pdf",
        title: "Harden PDF software using the strictest official guidelines.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-prevent-pdf-changes",
        title: "Prevent users from changing PDF security settings.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-remove-net-35",
        title: "Remove or disable old .NET Framework 3.5 versions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-remove-powershell-2",
        title: "Remove or disable PowerShell 2.0.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-powershell-restricted",
        title: "Set PowerShell to a restricted language mode.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-log-powershell",
        title:
          "Log PowerShell module activities, script executions, and transcription centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-log-command-line",
        title: "Log command-line program starts centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-protect-logs",
        title: "Protect logs from unauthorized changes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-monitor-internet",
        title: "Monitor event logs from internet-facing servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-monitor-internal",
        title: "Monitor event logs from internal servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-monitor-workstations",
        title: "Monitor event logs from workstations promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-analyze-events",
        title: "Analyze security events quickly to detect incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-report-ciso",
        title: "Report incidents immediately to CISO or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-report-asd",
        title: "Report incidents immediately to ASD.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-follow-response",
        title: "Follow incident response plans after incident discovery.",
        description: "",
        completed: false,
        required: true,
      },
      // Regular Backups
      {
        id: "ml3-backups-business-importance",
        title:
          "Backup data, applications, and settings according to business importance and continuity needs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-sync-restore",
        title:
          "Sync backups so everything can be restored to the same point in time.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-keep-safe",
        title: "Keep backups safe and resilient.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-test-restore",
        title:
          "Test restoring backups regularly during disaster recovery drills.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-prevent-user-access-others",
        title: "Prevent regular users from accessing other users' backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-prevent-user-access-own",
        title: "Prevent regular users from accessing their own backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-prevent-admin-access-others",
        title:
          "Prevent privileged users (except backup admins) from accessing other users' backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-prevent-admin-access-own",
        title:
          "Prevent privileged users (except backup admins) from accessing their own backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-prevent-user-modify",
        title: "Prevent regular users from changing or deleting backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-prevent-admin-modify",
        title:
          "Prevent privileged users (except backup admins) from changing or deleting backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-admin-retention-control",
        title:
          "Backup admins cannot change or delete backups during the retention period.",
        description: "",
        completed: false,
        required: true,
      },
    ],
  },
  {
    id: "ransomware-reporting",
    name: "Ransomware Reporting Rules 2025",
    icon: <AlertTriangle className="h-5 w-5" />,
    description: "CyberWise Compliance Checklist for Australian SMEs",
    externalLink: "https://www.cyber.gov.au/",
    items: [
      // 1. Business Overview
      {
        id: "annual-turnover",
        title: "Annual Turnover Assessment",
        description:
          "Does your business have an annual turnover of more than $3 million?\n○ If Yes: You are required to comply with ransomware payment reporting rules under the Cyber Security Act 2024.\n○ If No: You are exempt from ransomware reporting but should still follow other cybersecurity practices.",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-10",
        title: "Apply updates for other applications within 1 month.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-11",
        title: "Remove unsupported online services.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-12",
        title:
          "Remove unsupported office software, browsers, email clients, PDF software, Flash Player, and security tools.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-apps-13",
        title: "Remove unsupported other applications.",
        description: "",
        completed: false,
        required: true,
      },
      // Patch Operating Systems
      {
        id: "ml3-patch-os-1",
        title: "Check for new devices automatically every two weeks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-2",
        title:
          "Use a tool to scan for weaknesses in operating systems regularly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-3",
        title:
          "Scan daily for missing updates on internet-facing servers and devices.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-4",
        title:
          "Scan every two weeks for missing updates on workstations, internal servers, and devices.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-5",
        title: "Scan every two weeks for missing updates on drivers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-6",
        title: "Scan every two weeks for missing updates on firmware.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-7",
        title:
          "Apply urgent updates for internet-facing systems within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-8",
        title:
          "Apply less urgent updates for internet-facing systems within 2 weeks if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-9",
        title:
          "Apply urgent updates for workstations and internal systems within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-10",
        title:
          "Apply less urgent updates for workstations and internal systems within 1 month if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-11",
        title: "Apply urgent updates for drivers within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-12",
        title:
          "Apply less urgent updates for drivers within 1 month if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-13",
        title: "Apply urgent updates for firmware within 2 days if critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-14",
        title:
          "Apply less urgent updates for firmware within 1 month if not critical.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-15",
        title: "Use the latest or previous version of operating systems.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-patch-os-16",
        title: "Replace operating systems that are no longer supported.",
        description: "",
        completed: false,
        required: true,
      },
      // Multi-Factor Authentication (MFA)
      {
        id: "ml3-mfa-1",
        title:
          "Use MFA for users accessing your own online services with sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-2",
        title:
          "Use MFA for users accessing third-party services with sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-3",
        title:
          "Use MFA (if available) for third-party services with non-sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-4",
        title:
          "Use MFA for users accessing your customer services with sensitive customer data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-5",
        title:
          "Use MFA for users accessing third-party customer services with sensitive customer data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-6",
        title:
          "Use MFA for customers accessing online services with sensitive data.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-7",
        title:
          "Use MFA for privileged users (those with special system access).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-8",
        title: "Use MFA for regular users.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-9",
        title: "Use MFA for users accessing data storage systems.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-10",
        title:
          "MFA must require either something the user has plus something they know, or something they have unlocked by something they know or are.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-11",
        title: "MFA for online users must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-12",
        title: "MFA for customers must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-13",
        title: "MFA for system users must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-14",
        title: "MFA for data users must resist phishing attacks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-15",
        title: "Log all successful and unsuccessful MFA attempts centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-16",
        title:
          "Protect event logs from being changed or deleted without permission.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-17",
        title:
          "Regularly check event logs from internet-facing servers for security issues.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-18",
        title:
          "Regularly check event logs from internal servers for security issues.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-19",
        title:
          "Regularly check event logs from workstations for security issues.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-20",
        title: "Analyze security events quickly to find incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-21",
        title:
          "Report security incidents immediately to the chief information security officer (CISO) or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-22",
        title:
          "Report security incidents immediately to Australian Signals Directorate (ASD).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-mfa-23",
        title:
          "Follow your incident response plan after discovering a security incident.",
        description: "",
        completed: false,
        required: true,
      },
      // Restrict Administrative Privileges
      {
        id: "ml3-admin-1",
        title: "Validate requests for special access when first made.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-2",
        title: "Remove special access if not revalidated after 12 months.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-3",
        title: "Remove special access if user inactive for 45 days.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-4",
        title:
          "Give privileged users a separate account just for privileged tasks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-5",
        title: "Limit privileged access only to what is necessary.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-6",
        title:
          "Prevent privileged accounts from accessing the internet, email, and web services unless explicitly allowed.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-7",
        title:
          "Strictly limit what privileged accounts can do if allowed online access.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-8",
        title: "Use secure, dedicated computers for administrative tasks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-9",
        title:
          "Privileged users should have separate environments for privileged and normal tasks.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-10",
        title:
          "Do not run privileged environments inside regular user environments.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-11",
        title: "Regular users cannot log in to privileged environments.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-12",
        title:
          "Privileged users (except local admins) cannot log in to regular user environments.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-13",
        title:
          'Use "just-in-time" access for admin tasks (access granted only when needed).',
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-14",
        title:
          "Conduct admin tasks through jump servers (controlled access points).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-15",
        title:
          "Use long, unique, and hard-to-guess passwords for emergency and service accounts.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-16",
        title: "Enable memory protection features.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-17",
        title: "Enable protection for the Local Security Authority.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-18",
        title: "Enable Credential Guard (security feature).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-19",
        title: "Enable Remote Credential Guard.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-20",
        title: "Log all privileged access events centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-21",
        title: "Log privileged account and security group management actions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-22",
        title: "Protect logs from unauthorized changes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-23",
        title: "Monitor event logs from internet-facing servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-24",
        title: "Monitor event logs from internal servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-25",
        title: "Monitor event logs from workstations promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-26",
        title: "Analyze security events quickly to detect incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-27",
        title: "Report incidents immediately to CISO or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-28",
        title: "Report incidents immediately to ASD.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-admin-29",
        title: "Follow incident response plans after incident discovery.",
        description: "",
        completed: false,
        required: true,
      },
      // Application Control
      {
        id: "ml3-app-control-1",
        title: "Implement application control on workstations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-2",
        title: "Implement application control on internet-facing servers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-3",
        title: "Implement application control on internal servers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-4",
        title:
          "Control applications running in user profiles and temporary folders for OS, browsers, and email clients.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-5",
        title: "Control applications in all other locations too.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-6",
        title:
          "Only allow approved executables, libraries, scripts, installers, HTML apps, and control panels.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-7",
        title: "Only allow approved drivers to run.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-8",
        title:
          "Use Microsoft's recommended blocklists for applications and vulnerable drivers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-9",
        title: "Check application control rules at least once a year.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-10",
        title: "Log allowed and blocked application events centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-11",
        title: "Protect logs from unauthorized changes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-12",
        title: "Monitor event logs from internet-facing servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-13",
        title: "Monitor event logs from internal servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-14",
        title: "Monitor event logs from workstations promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-15",
        title: "Analyze security events quickly to detect incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-16",
        title: "Report incidents immediately to CISO or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-17",
        title: "Report incidents immediately to ASD.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-app-control-18",
        title: "Follow incident response plans after incident discovery.",
        description: "",
        completed: false,
        required: true,
      },
      // Restrict Microsoft Office Macros
      {
        id: "ml3-macros-1",
        title: "Disable macros for users unless they really need them.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-2",
        title:
          "Only allow macros running inside safe environments, trusted locations, or those signed by trusted publishers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-3",
        title: "Check macros for malicious code before signing or trusting.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-4",
        title: "Only privileged users can modify trusted macro locations.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-5",
        title: "Block macros signed by untrusted publishers.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-6",
        title: "Block macros signed with old or unapproved signature versions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-7",
        title: "Review the list of trusted publishers yearly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-8",
        title: "Block macros in files from the internet.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-9",
        title: "Enable antivirus scanning for Office macros.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-10",
        title: "Block macros from calling risky system functions (Win32 API).",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-macros-11",
        title: "Prevent users from changing macro security settings.",
        description: "",
        completed: false,
        required: true,
      },
      // User Application Hardening
      {
        id: "ml3-hardening-1",
        title: "Remove or disable Internet Explorer 11.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-2",
        title: "Prevent browsers from running Java from the internet.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-3",
        title: "Prevent browsers from displaying internet ads.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-4",
        title:
          "Harden browsers using the strictest official security guidelines.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-5",
        title: "Prevent users from changing browser security settings.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-6",
        title:
          "Block Office from creating child processes or executable content.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-7",
        title: "Block Office from injecting code into other programs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-8",
        title:
          "Configure Office to block Object Linking and Embedding packages.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-9",
        title:
          "Harden Office software using the strictest official guidelines.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-10",
        title: "Prevent users from changing Office security settings.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-11",
        title: "Block PDF software from creating child processes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-12",
        title: "Harden PDF software using the strictest official guidelines.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-13",
        title: "Prevent users from changing PDF security settings.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-14",
        title: "Remove or disable old .NET Framework 3.5 versions.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-15",
        title: "Remove or disable PowerShell 2.0.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-16",
        title: "Set PowerShell to a restricted language mode.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-17",
        title:
          "Log PowerShell module activities, script executions, and transcription centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-18",
        title: "Log command-line program starts centrally.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-19",
        title: "Protect logs from unauthorized changes.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-20",
        title: "Monitor event logs from internet-facing servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-21",
        title: "Monitor event logs from internal servers promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-22",
        title: "Monitor event logs from workstations promptly.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-23",
        title: "Analyze security events quickly to detect incidents.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-24",
        title: "Report incidents immediately to CISO or delegate.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-25",
        title: "Report incidents immediately to ASD.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-hardening-26",
        title: "Follow incident response plans after incident discovery.",
        description: "",
        completed: false,
        required: true,
      },
      // Regular Backups
      {
        id: "ml3-backups-1",
        title:
          "Backup data, applications, and settings according to business importance and continuity needs.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-2",
        title:
          "Sync backups so everything can be restored to the same point in time.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-3",
        title: "Keep backups safe and resilient.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-4",
        title:
          "Test restoring backups regularly during disaster recovery drills.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-5",
        title: "Prevent regular users from accessing other users' backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-6",
        title: "Prevent regular users from accessing their own backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-7",
        title:
          "Prevent privileged users (except backup admins) from accessing other users' backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-8",
        title:
          "Prevent privileged users (except backup admins) from accessing their own backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-9",
        title: "Prevent regular users from changing or deleting backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-10",
        title:
          "Prevent privileged users (except backup admins) from changing or deleting backups.",
        description: "",
        completed: false,
        required: true,
      },
      {
        id: "ml3-backups-11",
        title:
          "Backup admins cannot change or delete backups during the retention period.",
        description: "",
        completed: false,
        required: true,
      },
      // 1. Business Overview
      {
        id: "annual-turnover",
        title: "Annual Turnover Assessment",
        description:
          "Does your business have an annual turnover of more than $3 million?\n○ If Yes: You are required to comply with ransomware payment reporting rules under the Cyber Security Act 2024.\n○ If No: You are exempt from ransomware reporting but should still follow other cybersecurity practices.",
        completed: false,
        required: true,
      },

      // 2. Ransomware Reporting Obligations
      {
        id: "ransomware-incident-occurrence",
        title: "Ransomware Incident Occurrence Assessment",
        description:
          "Have you experienced or been affected by a ransomware incident in the last 12 months?\n○ If Yes: You must report any ransomware payment made to the Department of Home Affairs and Australian Signals Directorate (ASD).",
        completed: false,
        required: true,
      },
      {
        id: "ransomware-payment-amount",
        title: "Ransomware Payment Amount Reporting",
        description:
          "If a payment was made due to a ransomware attack: Have you reported the amount and method of payment (e.g., cryptocurrency)?",
        completed: false,
        required: true,
      },
      {
        id: "extorting-entity-info",
        title: "Extorting Entity Information",
        description:
          "If a payment was made due to a ransomware attack: Have you provided information about the extorting entity (e.g., communications, negotiation details)?",
        completed: false,
        required: true,
      },
      {
        id: "ransomware-variant-disclosure",
        title: "Ransomware Variant Disclosure",
        description:
          "If a payment was made due to a ransomware attack: Have you disclosed the specific ransomware variant or malware involved?",
        completed: false,
        required: true,
      },
      {
        id: "business-impact-infrastructure",
        title: "Business Impact on Infrastructure",
        description:
          "Have you reported the impact of the incident on your infrastructure?",
        completed: false,
        required: true,
      },
      {
        id: "business-impact-customers",
        title: "Business Impact on Customers",
        description:
          "Have you reported the impact of the incident on your customers?",
        completed: false,
        required: true,
      },
      {
        id: "incident-timeline",
        title: "Incident Timeline Reporting",
        description:
          "Have you reported when the incident occurred and when you became aware of it?",
        completed: false,
        required: true,
      },

      // 3. Cybersecurity Risk Assessment
      {
        id: "security-risk-assessment",
        title: "Security Risk Assessment",
        description:
          "Have you conducted a cybersecurity risk assessment for your business?\n○ If Yes: Have you reviewed your risk management and mitigation strategies based on the assessment?\n○ If No: You need to perform a risk assessment (refer to ICTCYS608 – Perform Cyber Security Risk Assessments guidelines).",
        completed: false,
        required: true,
      },

      // 4. Data Protection and Privacy
      {
        id: "personal-data-protection",
        title: "Personal Data Protection Compliance",
        description:
          "Are you following the Privacy Act 1988 requirements to protect customer data?\n○ Are you encrypting sensitive data?\n○ Are you regularly reviewing and updating privacy policies?",
        completed: false,
        required: true,
      },
      {
        id: "access-control",
        title: "Data Access Control",
        description:
          "Do you have controls in place to restrict access to sensitive data only to authorized personnel?\n○ Are your employees trained on data protection and privacy practices?",
        completed: false,
        required: true,
      },

      // 5. Incident Response and Recovery
      {
        id: "incident-response-plan",
        title: "Incident Response Plan",
        description:
          "Do you have a formal, written incident response plan?\n○ Does it cover ransomware and other cyber threats?\n○ Are your employees trained to execute this plan?",
        completed: false,
        required: true,
      },
      {
        id: "incident-reporting-procedures",
        title: "Incident Reporting Procedures",
        description:
          "Are your employees aware of how to report a cybersecurity incident internally?",
        completed: false,
        required: true,
      },
      {
        id: "backup-procedures",
        title: "Backup Procedures",
        description:
          "Are your critical systems and data regularly backed up to prevent loss during an attack?",
        completed: false,
        required: true,
      },

      // 6. Employee Awareness and Training
      {
        id: "cybersecurity-training",
        title: "Cybersecurity Training",
        description:
          "Do you provide regular cybersecurity training to your employees?\n○ Is it updated based on emerging threats, including ransomware?",
        completed: false,
        required: true,
      },
      {
        id: "phishing-awareness",
        title: "Phishing Awareness Training",
        description:
          "Have you trained employees to identify phishing emails and other social engineering tactics?",
        completed: false,
        required: true,
      },

      // 7. Compliance with ACSC Essential Eight
      {
        id: "application-whitelisting",
        title: "Application Whitelisting",
        description:
          "Have you implemented application whitelisting as part of the ACSC Essential Eight cybersecurity controls?",
        completed: false,
        required: true,
      },
      {
        id: "patching-applications-os",
        title: "Patching Applications and Operating Systems",
        description:
          "Have you implemented patching of applications and operating systems as part of the ACSC Essential Eight cybersecurity controls?",
        completed: false,
        required: true,
      },
      {
        id: "restricting-admin-privileges",
        title: "Restricting Administrative Privileges",
        description:
          "Have you implemented restricting administrative privileges as part of the ACSC Essential Eight cybersecurity controls?",
        completed: false,
        required: true,
      },
      {
        id: "multi-factor-authentication",
        title: "Multi-factor Authentication",
        description:
          "Have you implemented multi-factor authentication as part of the ACSC Essential Eight cybersecurity controls?",
        completed: false,
        required: true,
      },
      {
        id: "user-application-hardening",
        title: "User Application Hardening",
        description:
          "Have you implemented user application hardening as part of the ACSC Essential Eight cybersecurity controls?",
        completed: false,
        required: true,
      },
      {
        id: "daily-backup-business-data",
        title: "Daily Backup of Important Business Data",
        description:
          "Have you implemented daily backup of important business data as part of the ACSC Essential Eight cybersecurity controls?",
        completed: false,
        required: true,
      },
      {
        id: "monitoring-logging-systems",
        title: "Monitoring and Logging of Systems",
        description:
          "Have you implemented monitoring and logging of systems as part of the ACSC Essential Eight cybersecurity controls?",
        completed: false,
        required: true,
      },
      {
        id: "strong-malware-defenses",
        title: "Implementing Strong Malware Defenses",
        description:
          "Have you implemented strong malware defenses as part of the ACSC Essential Eight cybersecurity controls?",
        completed: false,
        required: true,
      },
    ],
  },
];

const complianceFrameworks = (): ComplianceFramework[] => {
  const sectors = ["healthcare", "finance", "retail", "education"];
  const businessSizes = ["small", "medium", "large"];

  complianceFrameworksData.forEach((framework) => {
    framework.items.forEach((item) => {
      // Pick a random sector and business size
      const randomSector = sectors[Math.floor(Math.random() * sectors.length)];
      const randomBusinessSize =
        businessSizes[Math.floor(Math.random() * businessSizes.length)];

      // Assign as arrays (since interface expects string[])
      item.sector = [randomSector];
      item.businessSize = [randomBusinessSize];
    });
  });

  return complianceFrameworksData;
};

export default complianceFrameworks();
