import Image from "next/image";

export default function Kontakt() {
    return (
        <>
            <h2 className="ce_headline">Kontakt</h2>
            <div className="ce_text block"><p>Sie haben Interesse oder Wünsche, nehmen Sie Kontakt zu uns auf.</p></div>
            <div className="ce_text block">
                <div className="address">
                    <p>Malermeister André Wild</p>
                    <p>Waldteichstraße 18</p>
                    <p>01471 Radeburg/OT Volkersdorf</p>
                </div>
                <div className="contact_details">
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
                </div>
            </div>
        </>
    );
}
