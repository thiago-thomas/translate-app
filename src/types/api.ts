export interface TranslationResponse {
  responseData: {
    translatedText: string;
    match: number;
  };
  quotaFinished: boolean;
  responseStatus: number;
  matches: Array<{
    translation: string;
    source: string;
    target: string;
  }>;
}