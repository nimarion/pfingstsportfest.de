import Image from "next/image";
import meineVVB from "../../public/sponsors/vvb.png";
import globus from "../../public/sponsors/globus.png";
import ikk from "../../public/sponsors/ikk.png";
import vse from "../../public/sponsors/vse.png";
import heitz from "../../public/sponsors/heitz.png";
import bitburger from "../../public/sponsors/bitburger.png";
import sparkasse from "../../public/sponsors/sparkasse.png";
import saartoto from "../../public/sponsors/saartoto.jpg";
import shs from "../../public/sponsors/shs.png";
import ntaatos from "../../public/sponsors/ntaatos.png";

import ministerPraesidentin from "../../public/sponsors/ministerpaesidentin.png";
import innenministerium from "../../public/sponsors/innenministerium.png";
import gemeinde from "../../public/sponsors/gemeinderehlingen.png";
import saarlouis from "../../public/sponsors/saarlouis.png";

export default function Sponsors() {
  return (
    <section className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 2xl:px-0" id="sponsoren">
      <h2 className="text-center font-wa-headline text-4xl tracking-tight text-gray-900">
        Unsere Partner und <span>Hauptsponsoren</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="grid grid-cols-2 md:border-r-2 border-b-2 pb-8 sm:pb-0 md:border-b-0 md:pr-8">
          <div className="flex items-center justify-center">
            <Image src={ministerPraesidentin} alt="Die Ministerpräsidentin" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={saarlouis} alt="Vereinigte Volksbank" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={gemeinde} alt="Vereinigte Volksbank" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={innenministerium} alt="Innenministerium" />
          </div>
        </div>
        <div className="grid grid-cols-2 col-span-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-8 lg:grid-cols-5 pl-4">
        <div className="flex items-center justify-center">
            <Image src={ntaatos} alt="NTA Saar und Atos Unify" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={meineVVB} alt="Vereinigte Volksbank" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={globus} alt="Globus Baumarkt" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={ikk} alt="IKK Südwuest" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={vse} alt="VSE" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={heitz} alt="Heitz & Sohn Bauunternehmung" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={bitburger} alt="Bitburger" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={sparkasse} alt="Sparkasse Saarlouis" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={saartoto} alt="Saartoto" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={shs} alt="SHS Strukturholding Saar" />
          </div>
        </div>
      </div>
    </section>
  );
}
