//////////////////////////////
// Common
//////////////////////////////

// Single Article
export type ArticleSchema = {
  id: number;
  title: string;
  slug: string;
  content: string;
  description: string;
  created_at: string;
  updated_at: string;
  image1: string | null;
  image2: string | null;
  is_featured: boolean;
  is_trending: boolean;
  category: number;
  author: number;
};

// Single Title & Slug
export type TitleSlugSchema = {
  title: string;
  slug: string;
};

//////////////////////////////
// GetAllArticlesResponse
//////////////////////////////
export type GetAllArticlesResponse = {
  success: boolean;
  totalHits: number;
  data: ArticleSchema[];
};

//////////////////////////////
// GetHomepageResponseSchema
//////////////////////////////
export type GetHomepageResponseSchema = {
  success: boolean;
  data:
    | [
        {
          navbar_category_totalHits: number;
          navbar_category: TitleSlugSchema[];
        },
        {
          featured_articles_totalHits: number;
          featured_articles: ArticleSchema[];
        },
        {
          trending_articles_totalHits: number;
          trending_articles: ArticleSchema[];
        },
        {
          latest_articles_totalHits: number;
          latest_articles: ArticleSchema[];
        },
        {
          articles_categorized_totalHits: number;
          articles_categorized: {
            category_article_data: {
              category_title: string;
              articles: ArticleSchema[];
            }[];
          };
        }
      ]
    | [];
};
