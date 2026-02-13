import './App.css'
import logo from './assets/logo.svg'

function App() {
  return (
    <>
      <main >
        <img src={logo} alt="translate logo" className="logo" />
        <div className="translator">
          <div className="translator__source">
            <div className="translator__source-language">
              <button type="button" className="translator__source-language-button">Detect Language</button>
              <button type="button" className="translator__source-language-button active">English</button>
              <button type="button" className="translator__source-language-button">French</button>
              <button type="button" className="translator__source-language-button">Spanish</button>
            </div>
            <textarea className="translator__source-textarea" placeholder="Type or paste text here..."></textarea>
            <div className="translator__source-options">
              <div className="translator__source-options-left">
                <button type="button">Listen</button>
                <button type="button">Copy</button>
              </div>
              <div className="translator__source-options-translate">
                <button type="button">Translate</button>
              </div>
            </div>
          </div>
          <div className="translator__target">
            <div className="translator__target-language">
              <button type="button" className="translator__target-language-button">English</button>
              <button type="button" className="translator__target-language-button">French</button>
              <button type="button" className="translator__target-language-button">Spanish</button>
            </div>
            <textarea className="translator__target-textarea" placeholder="Translation will appear here..." readOnly></textarea>
            <div className="translator__target-options">
              <div className="translator__target-options-left">
                <button type="button">Listen</button>
                <button type="button">Copy</button>
              </div>
              <div className="translator__target-options-translate">
                <button type="button">Clear</button>
              </div>
            </div> 
          </div>
        </div>
      </main>
    </>
  )
}

export default App
