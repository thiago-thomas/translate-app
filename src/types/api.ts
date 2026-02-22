export interface TranslationResponse {
  responseData: {
    translatedText: string;
    match: number;
    detectLanguage: string;
  };
  quotaFinished: boolean;
  responseStatus: number;
  matches: Array<{
    translation: string;
    source: string;
    target: string;
  }>;
}