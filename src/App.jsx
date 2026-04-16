import "./App.css";

export default function App() {
  const playMusic = () => {
    document.getElementById("music").play();
  };

  return (
    <div className="main">
      <div className="image-container">
        <img src="/poster.png" className="bg-image" />

        <div className="overlay"></div>

        <div className="content">
          <h1>❤️ יום נישואין שמח ❤️</h1>

          <p className="message">
            ,אמא ואבא היקרים
            <br /><br />
            בכל שנה, בכל אתגר, בכל רגע של צחוק ושל אהבה 
            <br />
            הראיתם לי מהי משפחה אמיתית, ומהו חום שלא נגמר.
            <br /><br />
            דרך כל מה שעברתם יחד, לימדתם אותי מהי מחויבות,
            <br />
            איך נראה קשר שנבנה בסבלנות, בכבוד, ובהמון לב.
            <br /><br />
            המילים האלו הן רק תזכורת קטנה למשהו גדול הרבה יותר
            <br />
            למסע היפה שבניתם זה לצד זו,
            <br />
            למסע שממשיך להאיר גם את הדרך שלי.
          </p>


          <button onClick={playMusic}>
            ▶ Play Your Song
          </button>

          <audio id="music" src="/song.mp3"></audio>
        </div>
      </div>
    </div>
  );
}