// assets
import * as images from "@/assets/images";

import { LatestSchema, TrendingSchema } from "@/utils/schemas/ReduxSchema";

export const banners = {
  featured_section: {
    src: images.banner_hotel_yak_gif,
    alt: "banner_hotel_yak_gif",
    divCss: "w-full h-[100px] rounded-md rounded-md",
    width: 0,
    height: 0,
  },
  highlight_section: {
    src: images.banner_hotel_yak_gif,
    alt: "banner_hotel_yak_gif",
    divCss: "w-full h-[100px] rounded-md",
    width: 0,
    height: 0,
  },
  samachar_section: {
    src: images.banner_bhatbhateni_jpeg.src,
    alt: "banner_bhatbhateni_jpeg",
    divCss: "w-full h-[100px] rounded-md",
    width: 0,
    height: 0,
  },
  business_section: [
    {
      src: images.banner_hotel_yak_gif,
      alt: "banner_hotel_yak_gif",
      divCss: "h-[100px] rounded-md",
      width: 0,
      height: 0,
    },
    {
      src: images.banner_nmb_visa_gif,
      alt: "banner_nmb_visa_gif",
      divCss: "h-[80px] rounded-md",
      width: 0,
      height: 0,
    },
    {
      src: images.banner_nt_fiber_gif,
      alt: "banner_nt_fiber_gif",
      divCss: "h-[80px] rounded-md",
      width: 0,
      height: 0,
    },
  ],
};

export const ads_section = {
  highlights: [
    {
      src: images.ad_kbc_gif,
      alt: "ad_kbc_gif",
      width: 0,
      height: 0,
    },
    {
      src: images.ad_kmc_gif,
      alt: "ad_kmc_gif",
      width: 0,
      height: 0,
    },
    {
      src: images.ad_tata_jpg,
      alt: "ad_tata_jpg",
      width: 0,
      height: 0,
    },
  ],
  news: [
    {
      src: images.ad_krishi_gif,
      alt: "ad_krishi_gif",
      width: 0,
      height: 0,
    },
    {
      src: images.ad_muktinath_gif,
      alt: "ad_muktinath_gif",
      width: 0,
      height: 0,
    },
    {
      src: images.ad_nepal_airlines_gif,
      alt: "ad_nepal_airlines_gif",
      width: 0,
      height: 0,
    },
    {
      src: images.ad_shangrila_gif,
      alt: "ad_shangrila_gif",
      width: 0,
      height: 0,
    },
  ],
};

//////////////////////////////
// Highlights section
//////////////////////////////
export const highlight_arr = (
  latest: LatestSchema,
  trending: TrendingSchema
) => [
  {
    title: latest?.latest_title,
    bannerImg: banners.highlight_section,
    posterImg: {
      ...latest.latest_data[0],
      isTransparent: true,
      isZoomable: true,
    },
    articles: latest?.latest_data,
    imgList: ads_section.highlights.slice(0, 3),
  },
  {
    title: trending?.trending_title,
    bannerImg: banners.samachar_section,
    posterImg: {
      ...trending.trending_data[0],
      isTransparent: true,
      isZoomable: true,
    },
    articles: trending?.trending_data,
    imgList: ads_section.news.slice(0, 3),
  },
];

//////////////////////////////
// News category section
//////////////////////////////
