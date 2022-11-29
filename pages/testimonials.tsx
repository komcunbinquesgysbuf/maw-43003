import React, {FC, useState} from 'react';
import HCaptcha from "@hcaptcha/react-hcaptcha";

type TestimonialsProps = {
    value: any,
    onChange: (t: any) => void
};
const Testimonials: FC<TestimonialsProps> = ({value, onChange}) => {
    const [enableSubmit, setEnableSubmit] = useState(false);
    const disableSubmit = () => setEnableSubmit(false);
    return (
        <form action="/testimonials-post" method="post">
            <div>
                <label>
                    <span>Name</span>
                    <input type="text" name="name"/>
                </label>
            </div>
            <HCaptcha
                sitekey="51570365-47c6-4056-93d1-16cdb6c9bb46"
                onVerify={(token, ekey) => setEnableSubmit(true)}
                onChalExpired={disableSubmit}
                onClose={disableSubmit}
                onError={disableSubmit}
                onExpire={disableSubmit}
            />
            <div>
                <label>
                    <button type="submit" disabled={!enableSubmit}>Submit</button>
                </label>
            </div>
        </form>
    );
};
export default Testimonials;
