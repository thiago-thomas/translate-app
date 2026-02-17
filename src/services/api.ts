const API_URL = 'https://api.mymemory.translated.net/get'

export async function fetchTranslation(text: string, langFrom: string, langTo: string) {
  try {
    const url = `${API_URL}?q=${encodeURIComponent(text)}&langpair=${langFrom}|${langTo}`;
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error(`Error on requesting data: ${res.status}`);
    }

    const data = await res.json();
    return data

  } catch (error) {
    throw new Error(`An error occurred: ${error}`);
  }

}