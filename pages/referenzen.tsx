import {Photo, PhotoAlbum} from "react-photo-album";
import Lightbox, {Slide} from "yet-another-react-lightbox";
import {Captions} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css"
import sizeOf from "image-size";
import {GetStaticProps,} from "next";
import {useState} from "react";

type ReferenzenProps = { photos: Photo[], slides: Slide[] };
export const getStaticProps: GetStaticProps<ReferenzenProps, {}, {}> = async () => {
    const images = [
        {href: "/files/malermeister-wild/reference/image089.jpg", src: "/assets/images/a/image089-d69f9a3a.jpg", alt: "Vliestapete in Steinoptik"},
        {href: "/files/malermeister-wild/reference/image090.jpg", src: "/assets/images/7/image090-a03fd407.jpg", alt: "Bodenbeschichtung mit 2K-Epoxi-Siegel, Dekochips und 2K PUR Mattsiegel"},
        {href: "/files/malermeister-wild/reference/image091.jpg", src: "/assets/images/4/image091-b554c8a4.jpg", alt: "Bodenbeschichtung mit 2K-Epoxi-Siegel, Dekochips und 2K PUR Mattsiegel"},
        {href: "/files/malermeister-wild/reference/image087.jpg", src: "/assets/images/9/image087-46299199.jpg", alt: "Holzfassade nach einem Hagelschaden"},
        {href: "/files/malermeister-wild/reference/image088.jpg", src: "/assets/images/3/image088-937112c3.jpg", alt: "Holzfassade nach einem Hagelschaden"},
        {href: "/files/malermeister-wild/reference/image079.jpg", src: "/assets/images/1/image079-0c5e21b1.jpg", alt: "Fenstersanierung mit anschließender Montage von Flügelabdeckprofilen"},
        {href: "/files/malermeister-wild/reference/image080.jpg", src: "/assets/images/4/image080-c2bf80e4.jpg", alt: "Fenstersanierung mit anschließender Montage von Flügelabdeckprofilen"},
        {href: "/files/malermeister-wild/reference/image081.jpg", src: "/assets/images/8/image081-0cfd72b8.jpg", alt: "Fenstersanierung mit anschließender Montage von Flügelabdeckprofilen"},
        {href: "/files/malermeister-wild/reference/image074.jpg", src: "/assets/images/7/image074-0a2ff5f7.jpg", alt: "Fototapete Kinderzimmer"},
        {href: "/files/malermeister-wild/reference/image075.jpg", src: "/assets/images/c/image075-b65d0b5c.jpg", alt: "Fototapete Kinderzimmer"},
        {href: "/files/malermeister-wild/reference/image076.jpg", src: "/assets/images/3/image076-1108d013.jpg", alt: "Fototapete Strand"},
        {href: "/files/malermeister-wild/reference/image077.jpg", src: "/assets/images/5/image077-c6fe5b45.jpg", alt: "Wandgestaltung mit Caparol Arte Lasur (1)"},
        {href: "/files/malermeister-wild/reference/image078.jpg", src: "/assets/images/9/image078-b28ef719.jpg", alt: "Wandgestaltung mit Caparol Arte Lasur (2)"},
        {href: "/files/malermeister-wild/reference/image071.jpg", src: "/assets/images/d/image071-5eb68acd.jpg", alt: "Spachteltechnik (Kellenschlag)"},
        {href: "/files/malermeister-wild/reference/image072.jpg", src: "/assets/images/3/image072-d99e76b3.jpg", alt: "Spachteltechnik (Kellenschlag)"},
        {href: "/files/malermeister-wild/reference/image066.jpg", src: "/assets/images/d/image066-38c9f6fd.jpg", alt: "Fassade Familie Mai (Bestand)"},
        {href: "/files/malermeister-wild/reference/image067.jpg", src: "/assets/images/9/image067.JPG-d3014af9.jpg", alt: "Fassade Familie Mai (Anstrich mit Allig. Miropan Fassadenfarbe)"},
        {href: "/files/malermeister-wild/reference/image068.jpg", src: "/assets/images/8/image068.JPG-e3cd3748.jpg", alt: "Fassade Familie Mai (Anstrich mit Allig. Miropan Fassadenfarbe) (2)"},
        {href: "/files/malermeister-wild/reference/image069.jpg", src: "/assets/images/0/image069-1ae09690.jpg", alt: "Fototapete Komar"},
        {href: "/files/malermeister-wild/reference/image070.jpg", src: "/assets/images/6/image070-4fd24f06.jpg", alt: "Fototapete Komar (2)"},
        {href: "/files/malermeister-wild/reference/image061.jpg", src: "/assets/images/b/image061-77d777cb.jpg", alt: "Vliestapete Pro Arte"},
        {href: "/files/malermeister-wild/reference/image062.jpg", src: "/assets/images/4/image062-3ed24cc4.jpg", alt: "Laminat 3-Stab Schiffsboden"},
        {href: "/files/malermeister-wild/reference/image064.jpg", src: "/assets/images/1/image064-254f8251.jpg", alt: "Klinkerverblendung (Schornstein)"},
        {href: "/files/malermeister-wild/reference/image065.jpg", src: "/assets/images/4/image065-b79664d4.jpg", alt: "Klinkerverblendung"},
        {href: "/files/malermeister-wild/reference/image001.jpg", src: "/assets/images/0/image001-7a0c5a30.jpg", alt: "Farbgestaltung mit Alligator Phönix"},
        {href: "/files/malermeister-wild/reference/image002.jpg", src: "/assets/images/9/image002-5cdd43e9.jpg", alt: "Farbgestaltung mit Alligator Phönix"},
        {href: "/files/malermeister-wild/reference/image014.jpg", src: "/assets/images/6/image014-cecdd156.jpg", alt: "Farbgestaltung mit Alligator Phönix"},
        {href: "/files/malermeister-wild/reference/image015.jpg", src: "/assets/images/a/image015-d188fbea.jpg", alt: "Farbgestaltung mit Alligator Phönix"},
        {href: "/files/malermeister-wild/reference/image016.jpg", src: "/assets/images/2/image016-71184752.jpg", alt: "Farbgestaltung mit Alligator Phönix"},
        {href: "/files/malermeister-wild/reference/image003.jpg", src: "/assets/images/5/image003-224b0615.jpg", alt: "Lasurtechnik: Deco Lasur matt (Caparol)"},
        {href: "/files/malermeister-wild/reference/image004.jpg", src: "/assets/images/8/image004-e258af88.jpg", alt: "Lasurtechnik: Deco Lasur matt (Caparol)"},
        {href: "/files/malermeister-wild/reference/image005.jpg", src: "/assets/images/6/image005-8dd76c56.jpg", alt: "Lasurtechnik: Deco Lasur matt (Caparol)"},
        {href: "/files/malermeister-wild/reference/image009.jpg", src: "/assets/images/b/image009-e101f2cb.jpg", alt: "Wohnzimmergestaltung mit Vliestapete"},
        {href: "/files/malermeister-wild/reference/image010.jpg", src: "/assets/images/b/image010-8a9be4eb.jpg", alt: "Farbgestaltung Essbereich"},
        {href: "/files/malermeister-wild/reference/image019.jpg", src: "/assets/images/a/image019-8a7e7f6a.jpg", alt: "Kaminnachbau aus Stuckteilen"},
        {href: "/files/malermeister-wild/reference/image020.jpg", src: "/assets/images/f/image020-f50bd65f.jpg", alt: "Entwurf einer Flächenschablone"},
        {href: "/files/malermeister-wild/reference/image021.jpg", src: "/assets/images/f/image021-3e5d918f.jpg", alt: "Natursteinnachbildung"},
        {href: "/files/malermeister-wild/reference/image024.jpg", src: "/assets/images/d/image024-39b08c3d.jpg", alt: "Schablonen (Historisches Treppenhaus)"},
        {href: "/files/malermeister-wild/reference/image025.jpg", src: "/assets/images/7/image025-a1dcd627.jpg", alt: "Darstellung eines Rahmens (Graumalerei)"},
        {href: "/files/malermeister-wild/reference/image026.jpg", src: "/assets/images/2/image026-4238a3f2.jpg", alt: "Sandsteinnachbildung"},
        {href: "/files/malermeister-wild/reference/image033.jpg", src: "/assets/images/2/image033-333b5932.jpg", alt: "Kombination verschiedener Mustertapeten"},
        {href: "/files/malermeister-wild/reference/image035.jpg", src: "/assets/images/a/image035-8a4b664a.jpg", alt: "Musterkabine: Schabloniertechnik, Marmorimitation"},
        {href: "/files/malermeister-wild/reference/image036.jpg", src: "/assets/images/f/image036-fa0e31df.jpg", alt: "Musterkabine: Schabloniertechnik, Marmorimitation"},
        {href: "/files/malermeister-wild/reference/image037.jpg", src: "/assets/images/2/image037-f5032b12.jpg", alt: "Musterkabine: Schabloniertechnik, Marmorimitation"},
        {href: "/files/malermeister-wild/reference/image038.jpg", src: "/assets/images/1/image038-109bf281.jpg", alt: "Lasurtechnik: Deco Lasur matt, Caparol"},
        {href: "/files/malermeister-wild/reference/image039.jpg", src: "/assets/images/f/image039-3c09586f.jpg", alt: "Lasurtechnik: Deco Lasur matt, Caparol"},
        {href: "/files/malermeister-wild/reference/image040.jpg", src: "/assets/images/2/image040-63f61662.jpg", alt: "Lasurtechnik: Deco Lasur matt, Caparol"},
        {href: "/files/malermeister-wild/reference/image042.jpg", src: "/assets/images/0/image042-6e2f9f10.jpg", alt: "Deko Effektfarbe mit metallischer Optik"},
        {href: "/files/malermeister-wild/reference/image043.jpg", src: "/assets/images/5/image043.JPG-c8623755.jpg", alt: "Lasurtechnik: Arte Lasur von Caparol"},
        {href: "/files/malermeister-wild/reference/image053.jpg", src: "/assets/images/7/image053.JPG-9f562eb7.jpg", alt: "Schabloniertechnik + Lasurtechnik als Sockel"}
    ].map(i => ({...i, ...sizeOf(i.href.replace(/^/, './public'))}));
    return {
        props: {
            photos: images.map(i => ({
                src: i.src,
                alt: i.alt,
                title: i.alt,
                width: 200,
                height: 200 * (i.height || 1) / (i.width || 1),
                images: [{src: i.href, width: i.width, height: i.height}]
            } as Photo)),
            slides: images.map(i => ({
                src: i.href,
                alt: i.alt,
                width: i.width,
                height: i.height,
                title: i.alt
            } as Slide))
        }
    }
};
const Referenzen = ({photos, slides}: ReferenzenProps) => {
    const [index, setIndex] = useState(-1);
    return (
        <>
            <h2 className="ce_headline">Referenzen</h2>
            <div className="ce_text">
                <PhotoAlbum
                    layout="rows"
                    defaultContainerWidth={680}
                    photos={photos}
                    spacing={40}
                    onClick={(event, photo, index) => setIndex(index)}
                />
                <Lightbox
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    slides={slides}
                    plugins={[Captions]}
                />
            </div>
        </>
    );
};
export default Referenzen;
