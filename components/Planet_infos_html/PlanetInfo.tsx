import React from 'react';
import Image from 'next/image';

interface PlanetInfoProps {
  planet: string; // Planet name
}

const planetImages: Record<string, string[]> = {
  sun: ["/sun-round.png","/sun-image.jpg"],
  mercury: ['/mercury-round.png',"/mercury.jpg"],
  venus: ['/venus-round.png',"/venus.jpg"],
  earth: ['/earth-round.png',"/earth.jpg"],
  moon : ["/moon-round.png","/moon.jpg"],
  mars: ['/mars-round.jpg',"/mars.jpg"],
  jupiter: ['/jupiter-round.png',"/jupiter.jpg"],
  saturn: ['/saturn-round.webp',"/saturn.jpg"],
  uranus: ['/uranus-round.png',"/uranus.jpg"],
  neptune: ['/neptune-round.png',"/neptune.jpg"],
  asteroid :["/asteroid-round.png","/asteroids.jpg"],
  blackhole:["/black-hole-round.png","/blackhole.jpg"]
};

const planetDescriptions: Record<string, string> = {
  sun: 'Нар бол манай Солне системийн төвд орших том хэмжээний од бөгөөд дэлхий гэх мэт хийгдэх бүх гараг, сар, комет зэргийг татах хүчтэй. Нар нь нүүрстөрөгч, устөрөгч, гелийн хольцтой 90%-ийн устөрөгчөөс бүрдэнэ. Түүний температур нь 5,500°C орчим байдаг бөгөөд дотоод хэсэг нь 15,000,000°C хүрдэг. Нар нь байгальд энерги бүтээх үндсэн эх сурвалж бөгөөд үүний үр дүнд бүх амьдрал хөгждөг. Нартай холбоотой гелиосферийн гадна эрчим хүч нь газар дээр амьдардаг амьд биетүүдийг тэтгэх чухал үүрэгтэй байдаг. Нарны энергийн урсгал нь цахилгаан соронзон долгионуудаар дамжин дэлхийд ирдэг.',
  mercury: 'Меркури (Mercury): Меркури гариг бол Нарны системийн хамгийн ойрхон гараг бөгөөд хамгийн жижиг нь юм. Түүний диаметр нь 4,880 км, гэхдээ энэ нь Нарны орбитойгоо тойрон эргэлдэхдээ цаг хугацааны хувьд хамгийн хурдан гараг юм. Меркурийн гадаргуу нь олон тооны кратеруудтай бөгөөд маш хүйтэн бөгөөд халуун температуртай байдаг — зарим үед 430°C хүрдэг бол бусад үед -180°C хүртэл хүйтэн байдаг. Меркурийн а atmosphere нь тун нимгэн бөгөөд 15% нь гелий, устөрөгч, хүчилтөрөгч зэрэг хийнүүдээс бүрдэнэ. Энэ гарагийн хурдацтай эргэлт нь Нарны орбит дээр 88 хоногийн дотор дуусдаг.',
  venus: 'Сугар (Venus): Сугар гариг бол Дэлхийтэй ижил хэмжээтэй боловч маш өндөр температуртай, зузаан нүүрстөрөгчийн давхаргатай агаар мандалтай. Энэ нь хүлэмжийн эффектээр халсан тул нарны системийн хамгийн халуун гариг юм. Гадаргуу дээр их хэмжээний галт уул, уулс, хөндийтэй. Сугар гаригийн онцлог нь урвуу чиглэлд эргэж, маш удаан өдөр шөнө солигддог.',
  earth: 'Дэлхий (Earth): Дэлхий бол амьдралыг дэмждэг цорын ганц мэдэгдэж буй гариг юм. Энэ нь асар том далай, янз бүрийн уур амьсгал, экосистемээр дүүрэн. Гадаргуугийн 70 гаруй хувийг ус эзэлдэг. Агаар мандал нь хүчилтөрөгчөөр баялаг бөгөөд дэлхийд оршдог олон төрлийн ургамал, амьтан, хүн төрөлхтнийг хамгаалдаг.',
  moon: "Сар (Moon): Сар нь дэлхийг тойрон эргэлдэж буй байгалийн цорын ганц сателлит юм. Энэ нь дэлхийгээс 384,400 км зайд байрладаг бөгөөд 3,474 км диаметртэй. Сар нь гарагтайгаа хамт эргэлдэж байх үед нэгэн жигд тойрог үүсгэдэг тул дэлхий дээрээс түүнийг нэг л тал нь харагддаг. Сар нь хүний амьдралд ихээхэн нөлөөлж, олон соёлд божин харагдахуйц шөнө, далай тэнгисийн урсацад ч нөлөөлдөг. Үүнээс гадна сар нь орчны нөхцөл байдлыг судлах, шинжлэх ухаан, сансар судлалд чухал үүрэг гүйцэтгэдэг.",
  mars: 'Ангараг (Mars): Ангараг гариг нь улаан өнгийн гадаргуугаар алдартай бөгөөд хуурай, тоосонцроор бүрхэгдсэн байдаг. Энэ гаригийг ирээдүйн судалгаа, амьдрах орчин болгон ашиглах боломжтой гэж үздэг. Ангараг нь мөсөн туйл, хуурай гол мөрөнтэй төстэй газар зүйтэй бөгөөд эрт үед ус байсан гэж таамагладаг.',
  jupiter: 'Бархасбадь (Jupiter): Бархасбадь бол нарны системийн хамгийн том гариг юм. Энэ нь ихэвчлэн хий, ялангуяа устөрөгчөөс бүрддэг. Бархасбадийн алдартай шинж чанар нь "Их Улаан Толбо" гэж нэрлэгддэг аварга хуй юм. Энэ гариг нь 80 гаруй дагуултай бөгөөд галактикийн хамгийн том соронзон оронтой.',
  saturn: 'Санчир (Saturn): Санчир гариг нь мөс, чулуунаас бүрдсэн гайхалтай цагирагтай гэдгээрээ алдартай. Энэ нь ихэвчлэн устөрөгчөөс бүрдсэн бөгөөд 60 гаруй дагуултай. Санчир бол хөнгөн нягтралтай тул усанд хөвөх боломжтой байсан.',
  uranus: 'Тэнгэрийн ван (Uranus): Тэнгэрийн ван гариг бол хүйтэн, мөсөн аварга бөгөөд онцгой талдаа хазгай эргэлттэй. Түүний агаар мандалд метан ихтэй тул хөх ногоон өнгө үүсгэдэг. Энэ гариг нь сансар судлаачдад өвөрмөц шинж чанараараа сонирхол татдаг.',
  neptune: 'Далай ван (Neptune): Далай ван бол нарнаас хамгийн хол гариг бөгөөд гүн хөх өнгөтэй. Энэ нь хүчтэй салхи, эрчтэй шуургаар алдартай. Далай вангийн олон дагуул болон цагираг нь судалгааны чухал объект болдог.',
  asteroid: 'Нарны аймгийн гаднах астероидын бүсүүд буюу "экзопланетын астероидын бүс" нь бусад оддын орчимд орших жижиг биетүүдийн бөөгнөрөл юм. Эдгээр бүс нь тухайн оддын үүсэл, хөгжлийг ойлгоход чухал ач холбогдолтой байдаг. Астрономичид эдгээр бүсийг ажиглахдаа оддын гэрлийн унтралт, тоосонцорын хөдөлгөөн зэргийг судалж илрүүлдэг.Жишээлбэл, Фомальгаут одны орчимд тоосонцор, жижиг биетүүдийн бүс илэрсэн бөгөөд энэ нь тухайн одны системд гариг үүсэж байгаагийн нотолгоо гэж үздэг. Ийм бүсүүд нь оддын системд мөс, металл, чулуулаг зэрэг биетүүдийг агуулж, шинжлэх ухааны судалгаанд чухал үүрэг гүйцэтгэдэг.',
  blackhole: 'Хар нүх нь асар их таталцлын хүчтэй орон зайд оршдог биет юм. Түүний таталцал настай однуудын хагарлаас үүсч, ойр орчмын гэрэл болон бодисыг зугтаалгах боломжгүй болгодог. Хар нүхний дотоод хэсэг нь "сингуляр цэг" бөгөөд орон зай, цаг хугацаа дуусдаг гэж үздэг.Түүний "гэрлийн хязгаар" буюу эвент хоризонт нь гэрэл ч гарах боломжгүй хил хязгаар юм. Хар нүхний орчимд бодис эргэлдэх үед асар их энерги ялгаруулж, квазарыг үүсгэдэг. Хар нүхийг астрономичид дэлхийн орбитын дурангаар тодорхойлох боломжтой бөгөөд оддын хөдөлгөөн болон гэрлийн гажилтыг судалдаг.'
};

export default function PlanetInfo({ planet }: PlanetInfoProps) {
  const imageSrc1 = planet ? planetImages[planet.toLowerCase()][0] : "";
  const imageSrc2 = planet ? planetImages[planet.toLowerCase()][1] : "";
  const description =planet ? planetDescriptions[planet.toLowerCase()] : "";

  return (
    <div className="w-full h-full p-4 flex flex-col items-center">
      <div className='flex flex-row w-full justify-evenly'>
        {imageSrc1 ? (
          <Image src={imageSrc1} width={100} height={100} alt={planet} className='rounded-full' />
        ) : (
          <p>Image not available for this planet.</p>
        )}
        {imageSrc2 ? (
          <Image src={imageSrc2} width={200} height={100} alt={planet} />
        ) : (
          <p>Image not available for this planet.</p>
        )}
      </div>

      {description ? <p>{description}</p> : <p>Planet information not available.</p>}
    </div>
  );
}
