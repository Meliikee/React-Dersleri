import './App.css'

function App() {
  let a = 15;
  const firstName = "Melike";

  let vize1 = 80;
  let vize2 = 90;
  // Javascript kodları yazılır.
  let sonuc = false;

  let isimler = [
    "Melike",
    "Zeynep",
    "Sariye",
    "Kübra"
  ]

  return (
    // HTML kodları yazılır.
    <>
      <p>a değişkeninin değeri: {a} </p>
      <p>Müşterinin adı: {firstName}</p>
      <p>Ortalama: {(vize1+vize2)/2}</p>
      {sonuc ? <p>Ehliyeti alabilirsin.</p> : <p>Ehliyeti alamazsın.</p>}
      {(vize1+vize2)/2 >= 50 ? <p>"Dersten geçtiniz, tebrikler."</p> : <p>"Dersten kaldınız, geçmiş olsun."</p>}

      {
        isimler.map((isim,index) => (
          <div style={{backgroundColor: "purple", border:'1px solid white'}} key={index}>{isim}</div>
        ))
      }
    </>
  )
}

export default App