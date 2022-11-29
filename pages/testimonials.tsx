import React, {useState} from 'react';
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Link from "next/link";

export default function Testimonials() {
    const [enableSubmit, setEnableSubmit] = useState(false);
    const disableSubmit = () => setEnableSubmit(false);
    const testimonials = [
        {
            id: 'c16',
            date: '14.06.2020',
            author: 'S.Thrun',
            comment: <p>Sehr empfehlenswert!<br/> Top Preis/Leistungsverhältnis. <br/> Zuverlässig, sauber und genau
                nach unseren Vorstellungen gearbeitet.</p>
        },
        {
            id: 'c15',
            date: '31.05.2020',
            author: 'Kotulla Günther',
            comment: <p>Top Firma.<br/> Zuverlässig, sehr sauber und schnell gearbeitet.<br/> Zu unserer vollsten
                Zufriedenheit.<br/>Sehr empfehlenswert!</p>
        },
        {
            id: 'c14',
            date: '18.05.2020',
            author: 'B. Bräuer',
            comment: <p>Herr Wild hat sehr sauber, exakt und schnell gearbeitet, er war immer super pünktlich und ich
                bin sehr begeistert von dem Ergebnis seiner Arbeit. Absolut zuverlässig und empfehlenswert!</p>
        },
        {
            id: 'c12',
            date: '04.05.2017',
            author: 'Dr. Frank Tellkamp 4.5.2017',
            comment: <p>Herr Wild arbeitet zuverlässig, exakt und mit hoher Qualität. Er ist stets freundlich,
                hilfsbereit und berät fachlich kompetent. Empfehlung!</p>
        },
        {
            id: 'c11',
            date: '16.01.2016',
            author: 'A. und R. Wienke',
            comment: <p>Einen großen Dank an Herrn Wild. Bereits mehrfach konnten wir auf seine klasse Arbeit
                zurückgreifen. Neben der stets ausserordentlich hohen Qualität seiner Leistungen berät er auf Wunsch
                auch und gibt Tipps zur Umsetzung. Wir freuen uns schon heute auf das nächste Projekt ihm.</p>
        },
        {
            id: 'c10',
            date: '11.07.2014',
            author: 'E. Bohot Physiotherapie',
            comment: <p>Ich kann mich nur lobend über die Arbeit von Herrn Wild äußern.<br/> Exakt, Sauber,
                Schnell,Freundlich !!<br/>Von meinen Patienten kommen ebenfalls nur positive Reaktionen.</p>
        },
        {
            id: 'c9',
            date: '19.05.2014',
            author: 'Ellen und Dr. Günter Mildner',
            comment: <p>Die Ausführungen von Herrn Dr. Mai können wir nur unterstreichen. Herr Wild hat auch unseren 2.
                Auftrag zur vollen Zufriedenheit erledigt, die dabei aufgetretenen Besonderheiten fachmännisch
                gemeistert und ist damit unseren Ansprüchen gerecht geworden.</p>
        },
        {
            id: 'c8',
            date: '23.10.2013',
            author: 'Dr. Christoph Mai',
            comment: <p>Herrn Wild kann man wirklich uneingeschränkt weiter empfehlen! Er arbeitet qualitativ
                hervorragend, hält sich korrekt an alle getroffenen Absprachen, arbeitet schnell und ist dabei immer
                sehr freundlich. Ein Malermeister, der sein Geld wirklich wert ist!</p>
        },
    ];
    return (
        <>
            <h2 className="ce_headline">Kundenmeinungen</h2>
            <div className="ce_text block">
                <p><strong>Ihre Meinung zählt!</strong></p>
                <p>Schreiben Sie mir, wie zufrieden Sie mit der Ausführung meiner Arbeit sind. Oder lesen
                    Sie, was meine Kunden von der geleisteten Arbeit sagen.</p>
            </div>
            <div className="ce_comments block">
                {

                    testimonials.map(({id, author, date, comment}, index) => (
                        <div className="comment_default" id={id}>
                            <p className="info">Kommentar von {author}{' | '}
                                <span className="date">{date}</span>
                            </p>
                            <div className="comment">{comment}</div>
                        </div>
                    ))

                }
                {/*<div className="pagination block">*/}
                {/*    <p>Seite 1 von 2</p>*/}
                {/*    <ul>*/}
                {/*        <li><span className="current">1</span></li>*/}
                {/*        <li><a className="link" href="index8816.html" title="Gehe zu Seite 2">2</a>*/}
                {/*        </li>*/}
                {/*        <li className="next"><a className="next" href="index8816.html"*/}
                {/*                                title="Gehe zu Seite 2">Vorwärts</a></li>*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <div className="form">
                    <form action="/testimonials-post" method="post">
                        <div className="formbody">
                            <div className="widget">
                                <label htmlFor="ctrl_name" className="mandatory">
                                    <span className="invisible">Pflichtfeld</span>
                                    Name<span className="mandatory">*</span>
                                </label>
                                <input type="text" name="name" id="ctrl_name" className="text mandatory" maxLength={64}
                                       required/>
                            </div>
                            <div className="widget">
                                <label htmlFor="ctrl_email" className="mandatory">
                                    <span className="invisible">Pflichtfeld</span>
                                    E-Mail (wird nicht veröffentlicht)<span className="mandatory">*</span>
                                </label>
                                <input type="text" name="email" id="ctrl_email" className="text mandatory"
                                       maxLength={128} required/>
                            </div>
                            <div className="widget">
                                <label htmlFor="ctrl_comment" className="invisible">Kommentar</label>
                                <textarea name="comment" id="ctrl_comment" className="textarea mandatory" rows={4}
                                          cols={40} required/>
                            </div>
                            <div className="submit_container">
                                <div style={{
                                    visibility: enableSubmit ? 'hidden' : 'visible',
                                    height: enableSubmit ? 0 : "auto"
                                }}>
                                    <HCaptcha
                                        sitekey="51570365-47c6-4056-93d1-16cdb6c9bb46"
                                        onVerify={() => setEnableSubmit(true)}
                                        onChalExpired={disableSubmit}
                                        onClose={disableSubmit}
                                        onError={disableSubmit}
                                        onExpire={disableSubmit}
                                    />
                                </div>
                                {enableSubmit && <input type="submit" className="submit" value="Kommentar absenden"/>}
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <p className="info">
                * Die abgesendeten Daten werden nur zum Zweck der Bearbeitung Ihres Anliegens verarbeitet.
                Weitere Informationen finden Sie in unserer {' '}
                <Link href="/datenschutz/index.html">Datenschutzerklärung</Link>.
            </p>
        </>
    );
}
