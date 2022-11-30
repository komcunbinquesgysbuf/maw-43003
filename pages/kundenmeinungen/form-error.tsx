import Link from "next/link";

export default function FormError() {
    return (
        <>
            <h2 className="ce_headline">Das ging schief.</h2>
            <div className="ce_text block">
                <p>Beim Verarbeiten Ihrer Bewertung ist etwas schief gegangen. Vermutlich konnte das Captcha nicht verifiziert werden.</p>
                <p className="info">
                    Die abgesendeten Daten werden nur zum Zweck der Bearbeitung Ihres Anliegens verarbeitet.
                    Weitere Informationen finden Sie in unserer {' '}
                    <Link href="/datenschutz">Datenschutzerklärung</Link>.
                </p>
            </div>
        </>
    );
}
