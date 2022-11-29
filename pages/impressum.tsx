import Image from "next/image";
import Link from "next/link";

export default function Impressum() {
    return (
        <>
            <h2 className="ce_headline">Impressum</h2>
            <div className="ce_text block">
                <div className="address">
                    <p><strong>André Wild – Maler-/Lackierermeister</strong></p>
                    <p>Waldteichstraße 18</p>
                    <p>01471 Radeburg/OT Volkersdorf</p>
                </div>
                <div className="contact_details">
                    <p><strong>Kontaktdaten</strong></p>
                    <p><span>Tel.:</span> 0172 9957201</p>
                    <p>
                        <span>E-Mail:</span>
                        <Image
                            alt="kontakt AT (Domainname dieser Seite)"
                            src="/files/malermeister-wild/email.png"
                            width={191}
                            height={16}
                        />
                    </p>
                    <p><span>Internet:</span> <Link href="/">https://malermeister-wild.de</Link>
                    </p>
                </div>
            </div>
            <h3 className="ce_headline">Realisierung</h3>
            <div className="ce_image block">
                <div className="image_container">
                    <a href="https://sedna-soft.de/">
                        <Image
                            alt="SednaSoft logo"
                            src="/assets/images/d/sednasoft-14710dad.png"
                            width={170}
                            height={40}
                        />
                    </a>
                </div>
            </div>
            <div className="ce_text block">
                <div className="address">
                    <p><strong>SednaSoft GbR</strong></p>
                    <p>Görlitz</p>
                </div>
            </div>
        </>
    );
}
