import {useState} from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";

export default function Home() {
    const [showGallery, setShowGallery] = useState(false);
    const images = [{src: '/files/malermeister-wild/zertifikat.png', width: 320, height: 447}];
    return (
        <div className="ce_text block">
            <div className="image_container float_right" style={{padding: "25px 15px 15px 35px", width: "200px", float: "right"}}>
                <PhotoAlbum
                    layout="columns"
                    photos={images}
                    onClick={() => setShowGallery(true)}
                />
                <Lightbox
                    open={showGallery}
                    close={() => setShowGallery(false)}
                    slides={images}
                    render={{
                        buttonPrev: () => null,
                        buttonNext: () => null
                    }}
                />
            </div>
            <h2>Herzlich willkommen und vielen Dank für Ihren Besuch auf meiner Homepage.</h2>
            <p>Liebevoll gestaltete Räume laden zum Wohlfühlen ein. Kahle weiße Wände gehören zur
                Vergangenheit. Geben Sie Ihrem Zuhause eine individuelle Note. Egal welcher Wohnbereich,
                durch die verschiedensten Gestaltungsmöglichkeiten, Farbtöne und Materialien bietet sich
                eine große Auswahl von Möglichkeiten jedem Bereich seine spezielle Note zu
                verleihen.</p>
            <p>Bei der Umsetzung Ihrer Ideen möchte ich gern Ihr zuverlässiger Partner sein und meine
                Erfahrungen mit einbringen. Nach einer individuellen Beratung vor Ort finden wir sicher
                die richtige Gestaltung für Ihre Räume.</p>
            <p>Mit freundlichen Grüßen Ihr Malermeister André Wild</p>
        </div>
    );
}
