import {
  LinkSchema,
  NestedLinkSchema,
  OptionSchema,
} from "../schemas/CommonSchema";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navbar_menu_items: LinkSchema[] = [
  { label: "होमपेज", href: "/" },
  { label: "समाचार", href: "/news" },
  { label: "विजनेस", href: "/business" },
  { label: "जीवनशैली", href: "/jeebansil" },
  { label: "मनोरन्जन", href: "/enjoyment" },
  { label: "विचार", href: "/thoughts" },
  { label: "खेलकुद", href: "/sports" },
  { label: "अन्य", href: "/others" },
];

export const footer_menu_items: NestedLinkSchema[] = [
  {
    label: "समाचार",
    child: [
      { label: "समाज", href: "/society" },
      { label: "विचार/ब्लग", href: "/thoughts-blog" },
      { label: "साहित्य", href: "/literature" },
      { label: "अन्तर्वार्ता", href: "/talks" },
      { label: "प्रवास", href: "/prawas" },
      { label: "अन्तर्वार्ता", href: "/international" },
    ],
  },
  {
    label: "विजनेस",
    child: [
      { label: "बजार", href: "/market" },
      { label: "पर्यटन", href: "/thoughts-blog" },
      { label: "साहित्य", href: "/literature" },
      { label: "रोजगार", href: "/talks" },
      { label: "बैँक / वित्त", href: "/prawas" },
      { label: "अटो", href: "/international" },
      { label: "सूचना-प्रविधि", href: "/international" },
    ],
  },
  {
    label: "मनोरञ्जन",
    child: [
      { label: "ब्लोअप", href: "/market" },
      { label: "गसिप", href: "/thoughts-blog" },
      { label: "साहित्य", href: "/literature" },
      { label: "रोजगार", href: "/talks" },
      { label: "बैँक / वित्त", href: "/prawas" },
      { label: "अटो", href: "/international" },
      { label: "सूचना-प्रविधि", href: "/international" },
    ],
  },

  {
    label: "विशेष श्रृंखला",
    child: [
      { label: "सहकारी संकट विशेष", href: "/market" },
      { label: "लगुबित्त संकट विशेष", href: "/thoughts-blog" },
      { label: "संसद विघटन विशेष", href: "/literature" },
      { label: "फ्रन्टलाइन हिरोज्", href: "/talks" },
      { label: "निर्वाचन २०७४", href: "/market" },
      { label: "मेरो कथा", href: "/market" },
      { label: "स्थानीय चुनाव २०७९", href: "/market" },
      { label: "निर्वाचन २०७९", href: "/market" },
      { label: "एमाले महाधिवेशन", href: "/market" },
      { label: "विश्वकप २०२२", href: "/market" },
    ],
  },

  {
    label: "अनलाइनखबर",
    child: [
      { label: "हाम्रो टीम", href: "/market" },
      { label: "प्रयोगका सर्त", href: "/thoughts-blog" },
      { label: "विज्ञापन", href: "/literature" },
      { label: "प्राइभेसी पोलिसी", href: "/talks" },
      { label: "सम्पर्क", href: "/prawas" },
    ],
  },
];

export const footer_end_items: OptionSchema[] = [
  { label: "अध्यक्ष तथा प्रबन्ध निर्देशक", value: "धर्मराज भुसाल" },
  { label: "प्रधान सम्पादकः", value: "शिव गाउँले" },
  { label: "सूचना विभाग दर्ता नं.", value: "२१४ / ०७३–७४" },
  { label: "+977-1-4790176, +977-1-4796489", value: "info@gmail.com" },
  {
    label: "copyright",
    icon: (
      <div className="flex items-center gap-3">
        <FaFacebookSquare />
        <FaXTwitter />
        <FaYoutube />
      </div>
    ),
    value: "© २००६-२०२४ udip.com सर्वाधिकार सुरक्षित",
  },
];
