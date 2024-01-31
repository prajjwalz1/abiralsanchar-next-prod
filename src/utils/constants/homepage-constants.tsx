// assets
import * as colors from "@/assets/colors";
import * as images from "@/assets/images";

import {
  DescriptionCardSchema,
  MediaCardSchema,
} from "@/utils/schemas/ComponentsSchema";

export const banners = {
  hero_section: {
    src: images.banner_bank_gif,
    alt: "banner_bank_gif",
    divCss: "h-[100px]",
    width: 100,
    height: 100,
  },
  highlight_section: {
    src: images.banner_bank_gif,
    alt: "banner_bank_gif",
    divCss: "h-[100px]",
    width: 100,
    height: 100,
  },
  samachar_section: {
    src: images.banner_bhatbhateni_jpeg.src,
    alt: "banner_bhatbhateni_jpeg",
    divCss: "h-[100px]",
    width: 100,
    height: 100,
  },
  business_section: [
    {
      src: images.banner_hotel_yak_gif,
      alt: "banner_hotel_yak_gif",
      divCss: "h-[100px]",
      width: 80,
      height: 80,
    },
    {
      src: images.banner_nmb_visa_gif,
      alt: "banner_nmb_visa_gif",
      divCss: "h-[80px]",
      width: 80,
      height: 80,
    },
    {
      src: images.banner_nt_fiber_gif,
      alt: "banner_nt_fiber_gif",
      divCss: "h-[80px]",
      width: 80,
      height: 80,
    },
  ],
};

export const ads_section = {
  highlights: [
    {
      src: images.ad_kbc_gif,
      alt: "ad_kbc_gif",
      width: 100,
      height: 100,
    },
    {
      src: images.ad_kmc_gif,
      alt: "ad_kmc_gif",
      width: 100,
      height: 100,
    },
    {
      src: images.ad_tata_jpg,
      alt: "ad_tata_jpg",
      width: 100,
      height: 100,
    },
  ],
  news: [
    {
      src: images.ad_krishi_gif,
      alt: "ad_krishi_gif",
      width: 100,
      height: 100,
    },
    {
      src: images.ad_muktinath_gif,
      alt: "ad_muktinath_gif",
      width: 100,
      height: 100,
    },
    {
      src: images.ad_nepal_airlines_gif,
      alt: "ad_nepal_airlines_gif",
      width: 100,
      height: 100,
    },
    {
      src: images.ad_shangrila_gif,
      alt: "ad_shangrila_gif",
      width: 100,
      height: 100,
    },
    {
      src: images.ad_krishi_gif,
      alt: "ad_krishi_gif",
      width: 100,
      height: 100,
    },
    {
      src: images.ad_muktinath_gif,
      alt: "ad_muktinath_gif",
      width: 100,
      height: 100,
    },
    {
      src: images.ad_nepal_airlines_gif,
      alt: "ad_nepal_airlines_gif",
      width: 100,
      height: 100,
    },
    {
      src: images.ad_shangrila_gif,
      alt: "ad_shangrila_gif",
      width: 100,
      height: 100,
    },
  ],
};

//////////////////////////////
// Samachar section
//////////////////////////////

export const samachar_desc: DescriptionCardSchema = {
  title: "अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्न ध्यानाकर्षण",
  description:
    "१७ माघ, काठमाडौं । अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्नका लागि नेपाल स्वास्थ्य सेवा व्यवस्थापक संघले सातै प्रदेशका सम्बन्धित मन्त्रालयमा ध्यानाकर्षण गराएको छ । संघका अध्यक्ष महेन्द्र भुसालसहित पदाधिकारीले अस्पतालको.१७ माघ, काठमाडौं । अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्नका लागि नेपाल स्वास्थ्य सेवा व्यवस्थापक संघले सातै प्रदेशका सम्बन्धित मन्त्रालयमा ध्यानाकर्षण गराएको छ । संघका अध्यक्ष महेन्द्र भुसालसहित पदाधिकारीले अस्पतालको.१७ माघ, काठमाडौं । अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्नका लागि नेपाल स्वास्थ्य सेवा व्यवस्थापक संघले सातै प्रदेशका सम्बन्धित मन्त्रालयमा ध्यानाकर्षण गराएको छ । संघका अध्यक्ष महेन्द्र भुसालसहित पदाधिकारीले अस्पतालको.१७ माघ, काठमाडौं । अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्नका लागि नेपाल स्वास्थ्य सेवा व्यवस्थापक संघले सातै प्रदेशका सम्बन्धित मन्त्रालयमा ध्यानाकर्षण गराएको छ । संघका अध्यक्ष महेन्द्र भुसालसहित पदाधिकारीले अस्पतालको.१७ माघ, काठमाडौं । अस्पताल व्यवस्थापनको दरबन्दी सिर्जना गर्नका लागि नेपाल स्वास्थ्य सेवा व्यवस्थापक संघले सातै प्रदेशका सम्बन्धित मन्त्रालयमा ध्यानाकर्षण गराएको छ । संघका अध्यक्ष महेन्द्र भुसालसहित पदाधिकारीले अस्पतालको.",
  slug: "/ठमेलको होटल",
  image1:
    "https://www.onlinekhabar.com/wp-content/uploads/2024/01/Hospital-Managment-768x468.jpg",
};

export const samachar_children: MediaCardSchema[] = [
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2023/12/arrested-teacher.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
];

//////////////////////////////
// Business section
//////////////////////////////
export const business_desc: DescriptionCardSchema = {
  title:
    "राष्ट्र बैंकले सबैको मनोबल उच्च हुने नीति तर्जुमा गर्छ : डेपुटी गभर्नर मिश्र",
  description:
    "१७ पुस, काठमाडौं । नेपाल राष्ट्र बैंकका डेपुटी गभर्नर बमबहादुर मिश्रले देशका उद्योगी–व्यवसायी, बैंक लगायत सबैको मनोबल उच्च भएमात्र मुलुकको आर्थिक विकासमा सकारात्मक प्रभाव पर्ने बताएका छन् । १७ पुस, काठमाडौं । नेपाल राष्ट्र बैंकका डेपुटी गभर्नर बमबहादुर मिश्रले देशका उद्योगी–व्यवसायी, बैंक लगायत सबैको मनोबल उच्च भएमात्र मुलुकको आर्थिक विकासमा सकारात्मक प्रभाव पर्ने बताएका छन् । १७ पुस, काठमाडौं । नेपाल राष्ट्र बैंकका डेपुटी गभर्नर बमबहादुर मिश्रले देशका उद्योगी–व्यवसायी, बैंक लगायत सबैको मनोबल उच्च भएमात्र मुलुकको आर्थिक विकासमा सकारात्मक प्रभाव पर्ने बताएका छन् । १७ पुस, काठमाडौं । नेपाल राष्ट्र बैंकका डेपुटी गभर्नर बमबहादुर मिश्रले देशका उद्योगी–व्यवसायी, बैंक लगायत सबैको मनोबल उच्च भएमात्र मुलुकको आर्थिक विकासमा सकारात्मक प्रभाव पर्ने बताएका छन् । नेपाल१७ पुस, काठमाडौं । नेपाल राष्ट्र बैंकका डेपुटी गभर्नर बमबहादुर मिश्रले देशका उद्योगी–व्यवसायी, बैंक लगायत सबैको मनोबल उच्च भएमात्र मुलुकको आर्थिक विकासमा सकारात्मक प्रभाव पर्ने बताएका छन् ।",
  slug: "/ठमेलको होटल",
  image1:
    "https://www.onlinekhabar.com/wp-content/uploads/2024/01/bombahadur-mishra-768x428.jpg",
  color: colors.info_bg,
};

export const business_children_1: MediaCardSchema[] = [
  {
    title:
      "विकास बैंकको ५ लाख कित्ता संस्थापक सेयर लिलामी बिक्रीमा कामना सेवा विकास बैंकको ५ लाख कित्ता संस्थापक सेयर लिलामी बिक्रीमा वान प्लसले भित्र्यायो तीनवटा नयाँ मोडल वान प्लसले भित्र्यायो तीनवटा नयाँ मोडल सेनालाई ठेकेदारपछि उद्योगपति बनाउने सरकारको तयारी सेनालाई ठेकेदारपछि उद्योगपति बनाउने सरकारको तयारी कर्पोरेट माछापुच्छ्रे बैंकद्वारा ३१० विद्यार्थीलाई स्विटर वितरण बोल्टका इयर बड र स्मार्ट वाच नेपाली बजारमा चाँडै डीएभी प्लस टु अन्तर कलेज फुटसलको उपाधि विनायक सिद्ध कलेजलाई",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2024/01/hotel-sintamani-1024x615.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "आईएमई पे ‘एच आरएम नेपाल कर्पोरेट एक्सिलेन्स अवार्ड’ बाट सम्मानित ‘होन्डा छ साथ साथ’ योजना सार्वजनिक माछापुच्छ्रे बैंक र सेन्ट जेभिर्यस कलेजबीच साझेदारी ‘अनर एक्स९बी ५जी’ नेपालमा सार्वजनिक, कति पर्छ मूल्य ? ",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2024/01/sudan-kirati-and-yubraj-adhikari.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "लाख खर्च नेपाल वेयरहाउजिङ कम्पनी : ६६ लाख आम्दानी गर्दा ९ करोड ८७ लाख खर्च कामना सेवा",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2019/11/Basanta-lamsal22.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "वैदेशिक रोजगारमा रहेकालाई सर्वोत्तमको आईपीओ बाँडफाँट नेपाल वेयरहाउजिङ कम्पनी : ६६ लाख आम्दानी गर्दा ९ करोड ८७",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2024/01/himalayan-re-and-nepal-re-insurance.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title: "चोकोफन बिगफन अब नयाँ प्याकमा सबै mahalaxmi Bank प्रदेश समाचार",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2024/01/himalayan-re-and-nepal-re-insurance.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
  {
    title:
      "ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ ठमेलको होटल भियनाबाट १३ लाख ६२ हजारसहित ११ जना पक्राउ",
    slug: "/ठमेलको होटल",
    image1:
      "https://www.onlinekhabar.com/wp-content/uploads/2024/01/Hetauda-kapada-udhyog.jpg",
    titleLineClamp: 2,
    info_placing: "justify-center",
  },
];

export const business_children_2: MediaCardSchema[] = [...business_children_1];
