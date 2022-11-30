import React, {useState} from 'react';
import HCaptcha from "@hcaptcha/react-hcaptcha";
import Link from "next/link";
import testimonials from "../../data/testimonials";

export default function Kundenmeinungen() {
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [pageNo, setPageNo] = useState(1);
    const disableSubmit = () => setEnableSubmit(false);
    const pageSize = 4;
    const numPages = Math.ceil(testimonials.length / pageSize);
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

                    testimonials.slice((pageNo - 1) * pageSize, pageNo * pageSize).map(({id, author, date, comment}, index) => (
                        <div className="comment_default" id={id} key={id}>
                            <p className="info">Kommentar von {author}{' | '}
                                <span className="date">{date}</span>
                            </p>
                            <div className="comment">{comment}</div>
                        </div>
                    ))

                }
                <div className="pagination block">
                    <button
                        className="button disabled"
                        disabled={pageNo <= 1}
                        title="zurück"
                        onClick={() => setPageNo(n => n - 1)}
                    >«</button>
                    <button className="button disabled" disabled>Seite {pageNo} von {numPages}</button>
                    <button
                        className="button disabled"
                        disabled={pageNo >= numPages}
                        title="weiter"
                        onClick={() => setPageNo(n => n + 1)}
                    >»</button>
                </div>
                <div className="form">
                    <form action="/kundenmeinungen/form-post" method="post">
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
                                <HCaptcha
                                    sitekey="51570365-47c6-4056-93d1-16cdb6c9bb46"
                                    onVerify={() => setEnableSubmit(true)}
                                    onChalExpired={disableSubmit}
                                    onClose={disableSubmit}
                                    onError={disableSubmit}
                                    onExpire={disableSubmit}
                                    onLoad={disableSubmit}
                                    onOpen={disableSubmit}
                                />
                                {enableSubmit && <input type="submit" className="submit" value="Kommentar absenden"/>}
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <p className="info">
                * Die abgesendeten Daten werden nur zum Zweck der Bearbeitung Ihres Anliegens verarbeitet.
                Weitere Informationen finden Sie in unserer {' '}
                <Link href="/datenschutz">Datenschutzerklärung</Link>.
            </p>
        </>
    );
}
