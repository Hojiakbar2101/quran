import React, { useState, useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import "./App.css";
const App = () => {
  const name = [
    {
      url: "http://server8.mp3quran.net/afs/001.mp3",
      id: 1,
      uz: "Al-Fatiha",
      arabic: "ٱلْفَاتِحَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/002.mp3",
      id: 2,
      uz: "Al-Baqarah",
      arabic: "ٱلْبَقَرَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/003.mp3",
      id: 3,
      uz: "Al Imran",
      arabic: "آلِ عِمْرَان",
    },
    {
      url: "http://server8.mp3quran.net/afs/004.mp3",
      id: 4,
      uz: "An-Nisa",
      arabic: "ٱلنِّسَاء",
    },
    {
      url: "http://server8.mp3quran.net/afs/005.mp3",
      id: 5,
      uz: `Al-Ma'idah`,
      arabic: "ٱلْمَائِدَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/006.mp3",
      id: 6,
      uz: `Al-An'am`,
      arabic: "ٱلْأَنْعَام",
    },
    {
      url: "http://server8.mp3quran.net/afs/007.mp3",
      id: 7,
      uz: `Al-A'raf`,
      arabic: "ٱلْأَعْرَاف",
    },
    {
      url: "http://server8.mp3quran.net/afs/008.mp3",
      id: 8,
      uz: "Al-Anfal",
      arabic: "ٱلْأَنْفَال",
    },
    {
      url: "http://server8.mp3quran.net/afs/009.mp3",
      id: 9,
      uz: "	At-Tawbah",
      arabic: "ٱلتَّوْبَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/010.mp3",
      id: 10,
      uz: "Yunus",
      arabic: "يُونُس",
    },
    {
      url: "http://server8.mp3quran.net/afs/011.mp3",
      id: 11,
      uz: "	Hud",
      arabic: "هُود",
    },
    {
      url: "http://server8.mp3quran.net/afs/012.mp3",
      id: 12,
      uz: "Yusuf",
      arabic: "	يُوسُف",
    },
    {
      url: "http://server8.mp3quran.net/afs/013.mp3",
      id: 13,
      uz: `Ar-Ra'd`,
      arabic: "ٱلرَّعْد",
    },
    {
      url: "http://server8.mp3quran.net/afs/014.mp3",
      id: 14,
      uz: "Ibrahim",
      arabic: "إِبْرَاهِيم",
    },
    {
      url: "http://server8.mp3quran.net/afs/015.mp3",
      id: 15,
      uz: "Al-Hijr",
      arabic: "	ٱلْحِجْر",
    },
    {
      url: "http://server8.mp3quran.net/afs/016.mp3",
      id: 16,
      uz: "	An-Nahl",
      arabic: "ٱلنَّحْل",
    },
    {
      url: "http://server8.mp3quran.net/afs/017.mp3",
      id: 17,
      uz: "Al-Isra",
      arabic: "ٱلْإِسْرَاء",
    },
    {
      url: "http://server8.mp3quran.net/afs/018.mp3",
      id: 18,
      uz: "Al-Kahf",
      arabic: "ٱلْكَهْف",
    },
    {
      url: "http://server8.mp3quran.net/afs/019.mp3",
      id: 19,
      uz: "Maryam",
      arabic: "	مَرْيَم",
    },
    {
      url: "http://server8.mp3quran.net/afs/020.mp3",
      id: 20,
      uz: "	Ta-Ha",
      arabic: "طه",
    },
    {
      url: "http://server8.mp3quran.net/afs/021.mp3",
      id: 21,
      uz: "	Al-Anbiya",
      arabic: "ٱلْأَنْبِيَاء",
    },
    {
      url: "http://server8.mp3quran.net/afs/022.mp3",
      id: 22,
      uz: "	Al-Hajj",
      arabic: "ٱلْحَجّ",
    },
    {
      url: "http://server8.mp3quran.net/afs/023.mp3",
      id: 23,
      uz: "Al-Mu'minun",
      arabic: "	ٱلْمُؤْمِنُون",
    },
    {
      url: "http://server8.mp3quran.net/afs/024.mp3",
      id: 24,
      uz: "An-Nur",
      arabic: "ٱلنُّور",
    },
    {
      url: "http://server8.mp3quran.net/afs/025.mp3",
      id: 25,
      uz: "	Al-Furqan",
      arabic: "ٱلْفُرْقَان",
    },
    {
      url: "http://server8.mp3quran.net/afs/026.mp3",
      id: 26,
      uz: "Ash-Shu'ara",
      arabic: "ٱلشُّعَرَاء",
    },
    {
      url: "http://server8.mp3quran.net/afs/027.mp3",
      id: 27,
      uz: "An-Naml",
      arabic: "ٱلنَّمْل",
    },
    {
      url: "http://server8.mp3quran.net/afs/028.mp3",
      id: 28,
      uz: "	Al-Qasas",
      arabic: "ٱلْقَصَص ",
    },
    {
      url: "http://server8.mp3quran.net/afs/029.mp3",
      id: 29,
      uz: "Al-Ankabut",
      arabic: "ٱلْعَنْكَبُوت",
    },
    {
      url: "http://server8.mp3quran.net/afs/030.mp3",
      id: 30,
      uz: "Ar-Rum",
      arabic: "ٱلرُّوم",
    },
    {
      url: "http://server8.mp3quran.net/afs/031.mp3",
      id: 31,
      uz: "Luqmaan",
      arabic: "	لُقْمَان",
    },
    {
      url: "http://server8.mp3quran.net/afs/032.mp3",
      id: 32,
      uz: "As-Sajda",
      arabic: "ٱلسَّجْدَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/033.mp3",
      id: 33,
      uz: "Al-Ahzaab",
      arabic: "ٱلْأَحْزَاب",
    },
    {
      url: "http://server8.mp3quran.net/afs/034.mp3",
      id: 34,
      uz: "Saba",
      arabic: "سَبَأ",
    },
    {
      url: "http://server8.mp3quran.net/afs/035.mp3",
      id: 35,
      uz: "Faatir",
      arabic: "فَاطِر",
    },
    {
      url: "http://server8.mp3quran.net/afs/036.mp3",
      id: 36,
      uz: "Ya Sin",
      arabic: "يس",
    },
    {
      url: "http://server8.mp3quran.net/afs/037.mp3",
      id: 37,
      uz: "	As-Saaffaat",
      arabic: "ٱلصَّافَّات",
    },
    {
      url: "http://server8.mp3quran.net/afs/038.mp3",
      id: 38,
      uz: "Saad",
      arabic: "ص",
    },
    {
      url: "http://server8.mp3quran.net/afs/039.mp3",
      id: 39,
      uz: "Az-Zumar",
      arabic: "ٱلزُّمَر",
    },
    {
      url: "http://server8.mp3quran.net/afs/040.mp3",
      id: 40,
      uz: "	Ghafir",
      arabic: "غَافِر",
    },
    {
      url: "http://server8.mp3quran.net/afs/041.mp3",
      id: 41,
      uz: "Fussilat",
      arabic: "فُصِّلَت",
    },
    {
      url: "http://server8.mp3quran.net/afs/042.mp3",
      id: 42,
      uz: "Ash_Shooraa",
      arabic: "ٱلشُّورىٰ",
    },
    {
      url: "http://server8.mp3quran.net/afs/043.mp3",
      id: 43,
      uz: "Az-Zukhruf",
      arabic: "ٱلْزُّخْرُف",
    },
    {
      url: "http://server8.mp3quran.net/afs/044.mp3",
      id: 44,
      uz: "Ad-Dukhaan",
      arabic: "ٱلدُّخَان",
    },
    {
      url: "http://server8.mp3quran.net/afs/045.mp3",
      id: 45,
      uz: "	Al-Jaathiyah",
      arabic: "ٱلْجَاثِيَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/046.mp3",
      id: 46,
      uz: "	Al-Ahqaaf",
      arabic: "ٱلْأَحْقَاف",
    },
    {
      url: "http://server8.mp3quran.net/afs/047.mp3",
      id: 47,
      uz: "Muhammad",
      arabic: "مُحَمَّد",
    },
    {
      url: "http://server8.mp3quran.net/afs/048.mp3",
      id: 48,
      uz: "	Al-Fath",
      arabic: "ٱلْفَتْح",
    },
    {
      url: "http://server8.mp3quran.net/afs/049.mp3",
      id: 49,
      uz: "Al-Hujuraat",
      arabic: "ٱلْحُجُرَات",
    },
    {
      url: "http://server8.mp3quran.net/afs/050.mp3",
      id: 50,
      uz: "Qaaf",
      arabic: "ق",
    },
    {
      url: "http://server8.mp3quran.net/afs/051.mp3",
      id: 51,
      uz: "Adh-Dhaariyaat",
      arabic: "ٱلذَّارِيَات",
    },
    {
      url: "http://server8.mp3quran.net/afs/052.mp3",
      id: 52,
      uz: "At-Toor",
      arabic: "ٱلطُّور",
    },
    {
      url: "http://server8.mp3quran.net/afs/053.mp3",
      id: 53,
      uz: "An-Najm",
      arabic: "ٱلنَّجْم",
    },
    {
      url: "http://server8.mp3quran.net/afs/054.mp3",
      id: 54,
      uz: "Al-Qamar",
      arabic: "ٱلْقَمَر",
    },
    {
      url: "http://server8.mp3quran.net/afs/055.mp3",
      id: 55,
      uz: "Ar-Rahman",
      arabic: "ٱلرَّحْمَٰن",
    },
    {
      url: "http://server8.mp3quran.net/afs/056.mp3",
      id: 56,
      uz: "	Al-Waqi'a",
      arabic: "ٱلْوَاقِعَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/057.mp3",
      id: 57,
      uz: "	Al-Hadeed",
      arabic: "ٱلْحَدِيد",
    },
    {
      url: "http://server8.mp3quran.net/afs/058.mp3",
      id: 58,
      uz: "	Al-Mujadila",
      arabic: "ٱلْمُجَادِلَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/059.mp3",
      id: 59,
      uz: "Al-Hashr",
      arabic: "ٱلْحَشْر",
    },
    {
      url: "http://server8.mp3quran.net/afs/060.mp3",
      id: 60,
      uz: "Al-Mumtahanah",
      arabic: "ٱلْمُمْتَحَنَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/061.mp3",
      id: 61,
      uz: "As-Saff",
      arabic: "ٱلصَّفّ",
    },
    {
      url: "http://server8.mp3quran.net/afs/062.mp3",
      id: 62,
      uz: "Al-Jumu'ah",
      arabic: "ٱلْجُمُعَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/063.mp3",
      id: 63,
      uz: "Al-Munafiqoon",
      arabic: "ٱلْمُنَافِقُون",
    },
    {
      url: "http://server8.mp3quran.net/afs/064.mp3",
      id: 64,
      uz: "At-Taghabun",
      arabic: "ٱلتَّغَابُن",
    },
    {
      url: "http://server8.mp3quran.net/afs/065.mp3",
      id: 65,
      uz: "At-Talaq",
      arabic: "ٱلطَّلَاق",
    },
    {
      url: "http://server8.mp3quran.net/afs/066.mp3",
      id: 66,
      uz: "At-Tahreem",
      arabic: "ٱلتَّحْرِيم",
    },
    {
      url: "http://server8.mp3quran.net/afs/067.mp3",
      id: 67,
      uz: "	Al-Mulk",
      arabic: "ٱلْمُلْك",
    },
    {
      url: "http://server8.mp3quran.net/afs/068.mp3",
      id: 68,
      uz: "	Al-Qalam",
      arabic: "ٱلْقَلَم",
    },
    {
      url: "http://server8.mp3quran.net/afs/069.mp3",
      id: 69,
      uz: "Al-Haaqqa",
      arabic: "ٱلْحَاقَّة",
    },
    {
      url: "http://server8.mp3quran.net/afs/070.mp3",
      id: 70,
      uz: "Al-Ma'aarij",
      arabic: "ٱلْمَعَارِج",
    },
    {
      url: "http://server8.mp3quran.net/afs/071.mp3",
      id: 71,
      uz: "	Nuh",
      arabic: "نُوح",
    },
    {
      url: "http://server8.mp3quran.net/afs/072.mp3",
      id: 72,
      uz: "	Al-Jinn",
      arabic: "ٱلْجِنّ",
    },
    {
      url: "http://server8.mp3quran.net/afs/073.mp3",
      id: 73,
      uz: "	Al-Muzzammil",
      arabic: "ٱلْمُزَّمِّل",
    },
    {
      url: "http://server8.mp3quran.net/afs/074.mp3",
      id: 74,
      uz: "Al-Muddaththir",
      arabic: "ٱلْمُدَّثِّر",
    },
    {
      url: "http://server8.mp3quran.net/afs/075.mp3",
      id: 75,
      uz: "Al-Qiyamah",
      arabic: "ٱلْقِيَامَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/076.mp3",
      id: 76,
      uz: "Al-Insaan",
      arabic: "ٱلْإِنْسَان",
    },
    {
      url: "http://server8.mp3quran.net/afs/077.mp3",
      id: 77,
      uz: "Al-Mursalaat",
      arabic: "",
    },
    {
      url: "http://server8.mp3quran.net/afs/078.mp3",
      id: 78,
      uz: `An-Naba'`,
      arabic: "ٱلنَّبَأ",
    },
    {
      url: "http://server8.mp3quran.net/afs/079.mp3",
      id: 79,
      uz: "	An-Naazi'aat",
      arabic: "ٱلنَّازِعَات",
    },
    {
      url: "http://server8.mp3quran.net/afs/080.mp3",
      id: 80,
      uz: "Abasa",
      arabic: "عَبَسَ",
    },
    {
      url: "http://server8.mp3quran.net/afs/081.mp3",
      id: 81,
      uz: "At-Takvir",
      arabic: "ٱلتَّكْوِير",
    },
    {
      url: "http://server8.mp3quran.net/afs/082.mp3",
      id: 82,
      uz: "Al-Infitar",
      arabic: "ٱلْإِنْفِطَار",
    },
    {
      url: "http://server8.mp3quran.net/afs/083.mp3",
      id: 83,
      uz: "Al-Mutaffifeen",
      arabic: "ٱلْمُطَفِّفِين",
    },
    {
      url: "http://server8.mp3quran.net/afs/084.mp3",
      id: 84,
      uz: "Al-Inshiqaaq",
      arabic: "ٱلْإِنْشِقَاق",
    },
    {
      url: "http://server8.mp3quran.net/afs/085.mp3",
      id: 85,
      uz: "Al-Burooj",
      arabic: "ٱلْبُرُوج",
    },
    {
      url: "http://server8.mp3quran.net/afs/086.mp3",
      id: 86,
      uz: "At-Taariq",
      arabic: "ٱلطَّارِق",
    },
    {
      url: "http://server8.mp3quran.net/afs/087.mp3",
      id: 87,
      uz: "Al-A'laa",
      arabic: "ٱلْأَعْلَىٰ",
    },
    {
      url: "http://server8.mp3quran.net/afs/088.mp3",
      id: 88,
      uz: "Al-Ghaashiyah",
      arabic: "ٱلْغَاشِيَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/089.mp3",
      id: 89,
      uz: "Al-Fajr",
      arabic: "ٱلْفَجْر",
    },
    {
      url: "http://server8.mp3quran.net/afs/090.mp3",
      id: 90,
      uz: "Al-Balad",
      arabic: "ٱلْبَلَد",
    },
    {
      url: "http://server8.mp3quran.net/afs/091.mp3",
      id: 91,
      uz: "Ash-Shams",
      arabic: "ٱلشَّمْس",
    },
    {
      url: "http://server8.mp3quran.net/afs/092.mp3",
      id: 92,
      uz: "Al-Layl",
      arabic: "ٱللَّيْل",
    },
    {
      url: "http://server8.mp3quran.net/afs/093.mp3",
      id: 93,
      uz: "Ad-Dhuha",
      arabic: "ٱلضُّحَىٰ",
    },
    {
      url: "http://server8.mp3quran.net/afs/094.mp3",
      id: 94,
      uz: "Ash-Sharh",
      arabic: "ٱلشَّرْح",
    },
    {
      url: "http://server8.mp3quran.net/afs/095.mp3",
      id: 95,
      uz: "At-Tiyn",
      arabic: "ٱلْعَلَق",
    },
    {
      url: "http://server8.mp3quran.net/afs/096.mp3",
      id: 96,
      uz: "Al-Alaq",
      arabic: "ٱلْعَلَق",
    },
    {
      url: "http://server8.mp3quran.net/afs/097.mp3",
      id: 97,
      uz: "Al-Qadr",
      arabic: "ٱلْقَدْر",
    },
    {
      url: "http://server8.mp3quran.net/afs/098.mp3",
      id: 98,
      uz: "Al-Bayyinahh",
      arabic: "ٱلْبَيِّنَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/099.mp3",
      id: 99,
      uz: "	Az-Zalzalah",
      arabic: "ٱلزَّلْزَلَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/100.mp3",
      id: 100,
      uz: "Al-'Aadiyaat",
      arabic: "ٱلْعَادِيَات",
    },
    {
      url: "http://server8.mp3quran.net/afs/101.mp3",
      id: 101,
      uz: "Al-Qaari'ah",
      arabic: "ٱلْقَارِعَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/102.mp3",
      id: 102,
      uz: "At-Takaathur",
      arabic: "ٱلتَّكَاثُر",
    },
    {
      url: "http://server8.mp3quran.net/afs/103.mp3",
      id: 103,
      uz: "Al-'Asr",
      arabic: "ٱلْعَصْر",
    },
    {
      url: "http://server8.mp3quran.net/afs/104.mp3",
      id: 104,
      uz: "Al-Humazah",
      arabic: "ٱلْهُمَزَة",
    },
    {
      url: "http://server8.mp3quran.net/afs/105.mp3",
      id: 105,
      uz: "Al-Fiyl",
      arabic: "ٱلْفِيل",
    },
    {
      url: "http://server8.mp3quran.net/afs/106.mp3",
      id: 106,
      uz: "	Quraysh",
      arabic: "قُرَيْش",
    },
    {
      url: "http://server8.mp3quran.net/afs/107.mp3",
      id: 107,
      uz: "Al-Maa'oon",
      arabic: "ٱلْمَاعُون",
    },
    {
      url: "http://server8.mp3quran.net/afs/108.mp3",
      id: 108,
      uz: "Al-Kawthar",
      arabic: "ٱلْكَوْثَر",
    },
    {
      url: "http://server8.mp3quran.net/afs/109.mp3",
      id: 109,
      uz: "Al-Kaafiroon",
      arabic: "ٱلْكَافِرُون",
    },
    {
      url: "http://server8.mp3quran.net/afs/110.mp3",
      id: 110,
      uz: "An-Nasr",
      arabic: "ٱلنَّصْر",
    },
    {
      url: "http://server8.mp3quran.net/afs/111.mp3",
      id: 111,
      uz: "Al-Masad",
      arabic: "ٱلْمَسَد",
    },
    {
      url: "http://server8.mp3quran.net/afs/112.mp3",
      id: 112,
      uz: "Al-Ikhlaas",
      arabic: "ٱلْإِخْلَاص",
    },
    {
      url: "http://server8.mp3quran.net/afs/113.mp3",
      id: 113,
      uz: "	Al-Falaq",
      arabic: "ٱلْفَلَق",
    },
    {
      url: "http://server8.mp3quran.net/afs/114.mp3",
      id: 114,
      uz: "Al-Naas",
      arabic: "ٱلنَّاس",
    },
  ];
  function foo(i){
    let audios = document.querySelectorAll('.audio');
    audios.forEach(item => {
      item.pause();
    });
    if(i.tagName == 'DIV'){
      i.children[3].play();
    }
  }
  function foo1(i){
    foo(i);
  }
  return (
    <>
      <div className="navbar">
        <h2>Mishary Rashid Alafasy</h2>
      </div>
      <div className="container">
        {name.map((item, i) => (
          <div
            className="box"
            key={i}
            style={{ backgroundImage: 'url("img7.jpg")' }}
            onClick={(i) => foo(i.target)}
          >
            <span onClick={(e) => foo1(e.target.parentElement)}>{i+1}</span>
            <p onClick={(e) => foo1(e.target)} className="p arabic">{item.arabic}</p>
            <p onClick={(e) => foo1(e.target)} className="p uz">{item.uz}</p>
            <ReactAudioPlayer title=" " className="audio" src={item.url} controls />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
// https://quron.netlify.app/
{
  /* <ReactAudioPlayer src={item.url} controls /> */
}
