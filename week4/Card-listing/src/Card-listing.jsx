import React from 'react';
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";
import img6 from "./assets/img6.jpeg";
const cards = [
  { id: 1, title: "Wonyoung", description: "IVE - Starship Entertainment", image: img1 },
  { id: 2, title: "Yunjin", description: "LESSERAFIM - Source Music", image: img2 },
  { id: 3, title: "Karina", description: "AESPA - SM Town", image: img3 },
  { id: 4, title: "Yeji", description: "ITZY - JYP Entertainment", image: img4 },
  {id:5,title:"Soyeon",description:"GIDDLE- Cube entertainment",image:img5},
  {id:6,title:"Somi",description:"The Black label",image:img6}
];

export default function CardListing() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-red-100 p-6">
        <h1 className="text-3xl font-bold">Card Listing</h1>
      <div className="grid grid-cols-2 gap-8">
        {cards.map((card) => (
        <div key={card.id} className="bg-white p-4 rounded shadow w-64">
        <img src={card.image} alt={card.title} className="w-60 h-60 object-cover rounded" />
        <h2 className="mt-2 font-bold text-lg">{card.title}</h2>
         <p className="text-sm text-gray-600">{card.description}</p>
        </div>
        ))}
      </div>
    </div>
  );
}
