import Link from "next/link";

export default function FormSuccess() {
    return (
        <>
            <h2 className="ce_headline">Vielen Dank!</h2>
            <div className="ce_text block">
                <p>Ihre Bewertung ist eingegangen und wird nach manueller Prüfung freigeschaltet.</p>
                <p className="info">
                    Die abgesendeten Daten werden nur zum Zweck der Bearbeitung Ihres Anliegens verarbeitet.
                    Weitere Informationen finden Sie in unserer {' '}
                    <Link href="/datenschutz/index.html">Datenschutzerklärung</Link>.
                </p>
            </div>
        </>
    );
}
