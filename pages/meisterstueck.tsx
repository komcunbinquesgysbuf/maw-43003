import {Photo, PhotoAlbum} from "react-photo-album";
import Lightbox, {Slide} from "yet-another-react-lightbox";
import {Captions} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css"
import sizeOf from "image-size";
import {GetStaticProps,} from "next";
import {useState} from "react";

type MeisterstueckProps = { photos: Photo[], slides: Slide[] };
export const getStaticProps: GetStaticProps<MeisterstueckProps, {}, {}> = async () => {
    const images = [
        {href: "/files/malermeister-wild/reference/image049.jpg", src: "/assets/images/3/image049.JPG-620d8a93.jpg", alt: "Steinoptiktapete"},
        {href: "/files/malermeister-wild/reference/image050.jpg", src: "/assets/images/6/image050.JPG-b4162f76.jpg", alt: "Nachbildung einer Brettschalung mit Capadecor Multistruktur fein, Amphibolin, Deco Lasur matt"},
        {href: "/files/malermeister-wild/reference/image051.jpg", src: "/assets/images/2/image051.JPG-746c2722.jpg", alt: "Nachbildung einer Brettschalung mit Capadecor Multistruktur fein, Amphibolin, Deco Lasur matt"},
        {href: "/files/malermeister-wild/reference/image052.jpg", src: "/assets/images/5/image052.JPG-378ef455.jpg", alt: "Meisterstückkabine"},
        {href: "/files/malermeister-wild/reference/image054.jpg", src: "/assets/images/4/image054.JPG-20fe72a4.jpg", alt: "Meisterstückkabine"},
        {href: "/files/malermeister-wild/reference/image055.jpg", src: "/assets/images/7/image055.JPG-30798717.jpg", alt: "Meisterstückkabine"},
        {href: "/files/malermeister-wild/reference/image056.jpg", src: "/assets/images/2/image056-4795d662.jpg", alt: "Schleiflacktechnik"},
        {href: "/files/malermeister-wild/reference/image057.jpg", src: "/assets/images/8/image057.JPG-940f4778.jpg", alt: "Schleiflacktechnik"},
        {href: "/files/malermeister-wild/reference/image058.jpg", src: "/assets/images/e/image058.JPG-416ae84e.jpg", alt: "Nachbildung einer Brettschalung mit Capadecor Multistruktur fein, Amphibolin, Deco Lasur matt"},
        {href: "/files/malermeister-wild/reference/image059.jpg", src: "/assets/images/7/image059.JPG-69913dc7.jpg", alt: "Steinoptiktapete, Fantastic Fleece Caparol"},
        {href: "/files/malermeister-wild/reference/image060.jpg", src: "/assets/images/0/image060.JPG-5b013a60.jpg", alt: "Ölvergoldung des Logoentwurfes"},
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
const Meisterstueck = ({photos, slides}: MeisterstueckProps) => {
    const [index, setIndex] = useState(-1);
    return (
        <>
            <h2 className="ce_headline">Meisterstück</h2>
            <div className="ce_text">
                <h3>Thema: Beauty-Spa-Wellnesshotel 5 Sterne</h3>
                <p><strong>Zu gestalten waren im Objekt der Schwimmbadbereich und der Ruheraumbereich. Im
                    Vorfeld der Prüfung wurden zwei unterschiedliche Entwurfskonzepte für den Kundenauftrag
                    erstellt und vorgelegt. Die besondere Herausforderung lag in der zu erzielenden ruhigen,
                    entspannenden Wohlfühlatmosphäre der zu bearbeitenden Räume. Es war zu überlegen welche
                    Möglichkeiten der Gestaltung im Objekt Anwendung finden, unter Berücksichtigung von
                    Objektbereich und Materialien sowie den gegebenen Untergründen. Zu berücksichtigen bei
                    der Darstellung der Gestaltungen war das von den verschiedenen Techniken, Werkproben in
                    Form von Raumausschnitten dargestellt werden mussten. Ein Logoentwurf für das Objekt,
                    Zeit und Materialbedarfsplanung, sowie ein Kundenfachgespräch gehörten neben der
                    praktischen Ausführung der Arbeiten mit zum Bestandteil der Prüfung.</strong></p>
                <h3>Verwendete Materialien:</h3>
                <p>Schwimmbad:</p>
                <p>Fungitex W von Caparol ist eine spezielle Latexfarbe mit fungizider und bakterizider
                    Ausstattung, sie eignet sich speziell für gewerbliche Feuchträume und ist dafür
                    zugelassen. Sie ist hoch reinigungsfähig und entspricht der Nassabriebklasse 1 nach DIN
                    53778. Magic Touch Pearl ist eine Spachtelmasse die auf Basis von 100% Reinacrylat mit
                    speziellen Zusatzstoffen basiert. Da diese Masse innen wie außen anwendbar ist und auch
                    in Feuchträumen zugelassen, kommt diese zur Anwendung. Erfurt Variovlies V 200 S bietet
                    die Möglichkeit sehr glatte und edle Oberflächen zu erreichen, die in diesem gehobenen
                    Ambiente der Wellnessklasse gefordert werden. Bei der Vergoldung war darauf zu achten
                    das es sich um 24 Karat Gold handelt das es im Feuchtraum Anwendung findet.</p>
                <p>Ruheraum:</p>
                <p>Fungitex W von Caparol ist eine spezielle Latexfarbe mit fungizider und bakterizider
                    Ausstattung, sie eignet sich speziell für gewerbliche Feuchträume und ist dafür
                    zugelassen. Sie ist hoch reinigungsfähig und entspricht der Nassabriebklasse 1nach DIN
                    53778. Erfurt Variovlies V 200 S bietet die Möglichkeit sehr glatte und edle Oberflächen
                    zu erreichen, die in diesem gehobenen Ambiente der Wellnessklasse gefordert werden. Mit
                    der Verwendung von Caparol Multi Struktur Style können die unterschiedlichsten
                    Oberflächen hergestellt werden, deswegen viel die Entscheidung auf dieses Produkt um die
                    plastische Holzbrettschalungsoptik zu erreichen die außerdem sehr robust ist. Mit der
                    Verwendung einer Tapete in Natursteinoptik als Sockel soll eine klare Gliederung der
                    Wandfläche erreicht werden, zu der die Stuckkante als erhabene Note beitragen soll. Die
                    obere Wandtapete ,, Fantastic Fleece“ lässt sich durch ihre freien
                    Gestaltungsmöglichkeiten in der Farbgebung sehr gut bearbeiten, da dies in Lasurtechnik
                    geschieht entstehen keine drückenden Beschichtungen die im Ruheraum fehl am Platze sind.
                    Es entsteht eine sehr nuancenreiche Optik. Mit der Anwendung der Deco Lasur lassen sich
                    unterschiedliche Lasureffekt erreichen, siehe Fantastic Fleece und Brettschalung. Mit
                    der Anwendung einer traditionellen Schleiflacktechnik wird ein nicht zu aufdringlicher
                    Effekt erzielt der vielleicht erst beim Liegen im Ruheraum richtig entdeckt wird.</p>
                <h3>Verwendete Farben:</h3>
                <p>Schwimmbad:</p>
                <p>Blau wirkt kühl, ruhig, meditativ, beständig und sauber. Blautöne schaffen eine ruhige,
                    entspannende und friedvolle Atmosphäre, die Nervosität und Stress reduziert. Blau
                    verbreitet ein Gefühl von Klarheit und Frische. In Räumen mit viel Sonneneinstrahlung
                    kann Blau gut verwendet werden, das ist im Wellnessbereich durch die große Glasfront zur
                    Parkanlage gegeben. Blau harmoniert mit den beiden anderen Primärfarben rot und gelb. Da
                    Gelb zu den warmen Farben gehört gleicht es das Blau etwas aus und bringt etwas
                    Anregendes ins Raumgefühl mit ein. Gelb regt im mittleren Maß an und sorgt für gute
                    Stimmung.</p>
                <p>Ruheraum:</p>
                <p>Grün im Raum schenkt Kreativität und Regeneration, es hat eine beruhigende Wirkung sorgt
                    für Ausgleich Ruhe und Sicherheit im Raum. Ein grüner Raum wirkt erholsam und
                    vitalisierend und hat einen regenerierenden Einfluss auf den Organismus. Grün ist weder
                    warm noch kalt oft wird es als Ausgleich zweier Pole empfunden. Braun als Raumfarbe gibt
                    diesem einen natürlichen, rustikalen Charakter und strahlt Gemütlichkeit aus. Erdtöne
                    wärmen und dämpfen zugleich.</p>
            </div>
            <div className="ce_text" style={{marginTop: 40}}>
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
export default Meisterstueck;
