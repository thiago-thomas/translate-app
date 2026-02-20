import "./App.css";
import logo from "./assets/logo.svg";
import listenIcon from "./assets/listen.svg";
import copyIcon from "./assets/copy.svg";
import alfaIcon from "./assets/alfa.svg";
import leftRightIcon from "./assets/left_right_arrows.svg";
import { useState } from "react";
import { fetchTranslation } from "./services/api";
import type { TranslationResponse } from "./types/api";
import { Loading } from "./components/Loading";
import { Slide, ToastContainer, toast } from "react-toastify";

function App() {
  const [translatingText, setTranslatingText] = useState("");
  const [translatingLanguage, setTranslatingLanguage] = useState("en-US");
  const [translatedText, setTranslatedText] = useState("");
  const [translatedLanguage, setTranslatedLanguage] = useState("es-ES");
  const [loading, setLoading] = useState(false);

  async function handleTranslate() {
    if (translatingText) {
      try {
        setLoading(true);
        const translatedData: TranslationResponse = await fetchTranslation(
          translatingText,
          translatingLanguage,
          translatedLanguage,
        );
        setTranslatedText(translatedData.matches[0].translation);
      } catch (err) {
        alert("An error occurred while fetching translation. Error: " + err);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please enter text to translate.");
    }
  }

  const copyTranslatingText = async () => {
    if (translatingText) {
      await navigator.clipboard.writeText(translatingText);
      toast.success("Translating text copied!");
    }
  };

  const copyTranslatedText = async () => {
    if (translatedText) {
      await navigator.clipboard.writeText(translatedText);
      toast.success("Translated text copied!");
    }
  };

  return (
    <>
      <main>
        {loading && <Loading text="Translating..." />}
        <img src={logo} alt="translate logo" className="logo" />
        <div className="translator">
          <div className="translator__source">
            <div className="translator__source-language">
              <button
                type="button"
                className={`translator__source-language-button ${translatingLanguage === "autodetect" ? "active" : ""}`}
                onClick={() => setTranslatingLanguage("autodetect")}
              >
                Detect Language
              </button>
              <button
                type="button"
                className={`translator__source-language-button ${translatingLanguage === "en-US" ? "active" : ""}`}
                onClick={() => setTranslatingLanguage("en-US")}
              >
                English
              </button>
              <button
                type="button"
                className={`translator__source-language-button ${translatingLanguage === "fr-FR" ? "active" : ""}`}
                onClick={() => setTranslatingLanguage("fr-FR")}
              >
                French
              </button>
              <button
                type="button"
                className={`translator__source-language-button ${translatingLanguage === "es-ES" ? "active" : ""}`}
                onClick={() => setTranslatingLanguage("es-ES")}
              >
                Spanish
              </button>
            </div>
            <textarea
              className="translator__source-textarea"
              placeholder="Type or paste text here..."
              onChange={(e) => setTranslatingText(e.target.value)}
              value={translatingText}
              maxLength={500}
            ></textarea>
            <div className="translator__source-options">
              <div className="translator__source-options-left">
                <button type="button">
                  <img src={listenIcon} alt="Listen" />
                </button>
                <button
                  type="button"
                  onClick={copyTranslatingText}
                  disabled={!translatingText}
                >
                  <img src={copyIcon} alt="Copy" />
                </button>
              </div>
              <div className="translator__source-options-translate">
                <button type="button" onClick={handleTranslate} disabled={!translatingText}>
                  <img src={alfaIcon} alt="Translate" />
                  Translate
                </button>
              </div>
            </div>
          </div>
          <div className="translator__target">
            <div className="translator__target-language">
              <div className="translator__target-language-left">
                <button
                  type="button"
                  className={`translator__target-language-button ${translatedLanguage === "en-US" ? "active" : ""}`}
                  onClick={() => setTranslatedLanguage("en-US")}
                >
                  English
                </button>
                <button
                  type="button"
                  className={`translator__target-language-button ${translatedLanguage === "fr-FR" ? "active" : ""}`}
                  onClick={() => setTranslatedLanguage("fr-FR")}
                >
                  French
                </button>
                <button
                  type="button"
                  className={`translator__target-language-button ${translatedLanguage === "es-ES" ? "active" : ""}`}
                  onClick={() => setTranslatedLanguage("es-ES")}
                >
                  Spanish
                </button>
              </div>
              <div className="translator__target-language-right">
                <button type="button">
                  <img src={leftRightIcon} alt="Swap languages" />
                </button>
              </div>
            </div>
            <textarea
              className="translator__target-textarea"
              placeholder="Translation will appear here..."
              value={translatedText}
              readOnly
            ></textarea>
            <div className="translator__target-options">
              <div className="translator__target-options-left">
                <button type="button">
                  <img src={listenIcon} alt="Listen" />
                </button>
                <button
                  type="button"
                  onClick={copyTranslatedText}
                  disabled={!translatedText}
                >
                  <img src={copyIcon} alt="Copy" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
      </main>
    </>
  );
}

export default App;
