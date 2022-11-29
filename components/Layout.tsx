import React, {FC, ReactNode} from 'react';
import Head from 'next/head';
import Link from "next/link";
import {useRouter} from 'next/router';
type LayoutProps = {
    children: ReactNode
};
const Layout: FC<LayoutProps> = ({children}) => {
    const router = useRouter();
    const navMap: Record<string, string> = {
        Startseite: "/startseite/index.html",
        Leistungsangebot: "/leistungsangebot/index.html",
        Referenzen: "/referenzen/index.html",
        Kundenmeinungen: "/kundenmeinungen/index.html",
        Meisterstück: "/meisterstueck/index.html",
        Kontakt: "/kontakt/index.html",
        Impressum: "/impressum/index.html",
        Datenschutz: "/datenschutz/index.html",
        Testimonials: "/testimonials"
    };
    const navList = Object.keys(navMap).map(title => ({
        title,
        href: navMap[title],
        isActive: router.pathname === navMap[title]
    }));
    return (
        <div id="wrapper">
            <Head>
                <title>
                    {
                        [
                            ...navList.filter(item => item.isActive).map(item => item.title),
                            'Malermeister André Wild'
                        ].join(' — ')
                    }
                </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <div id="header">
                <div className="inside">
                    <div className="logo">
                        <h1>
                            <a className="logo" href="/startseite/index.html" title="zur Startseite">
                                <span className="logo">Malermeister André Wild</span>
                            </a>
                        </h1>
                    </div>
                    <div className="shadow">
                        <img alt="Kopfbild" src="/files/malermeister-wild/img/header-image.png"/>
                    </div>
                </div>
            </div>
            <div className="gradient">
                <div id="container">
                    <div id="main">
                        <div className="inside">
                            <div className="mod_article block">
                                {children}
                            </div>
                        </div>
                    </div>
                    <div id="left">
                        <div className="inside">
                            <div className="mod_navigation block">
                                <a className="invisible" href="index.html#skipNavigation3">Navigation überspringen</a>
                                <ul className="level_1">
                                    {
                                        navList
                                            .map(({href, isActive, title}, index, array) => {
                                                    const className = [
                                                        isActive ? 'active' : 'sibling',
                                                        index === 0 ? ' first' : '',
                                                        index === array.length - 1 ? ' last' : ''
                                                    ]
                                                        .join('');
                                                    return (
                                                        <li className={className} key={href}>
                                                            {isActive
                                                                ? <span className={className}>{title}</span>
                                                                : (
                                                                    <Link href={href} legacyBehavior>
                                                                        <a className={className}>{title}</a>
                                                                    </Link>
                                                                )
                                                            }
                                                        </li>
                                                    );
                                                }
                                            )
                                    }
                                </ul>
                                <a className="invisible" id="skipNavigation3">&nbsp;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="footer">
                <div className="inside">
                    <p>
                        <span>Malermeister André Wild</span>
                        <span>Tel.: 0172 9957201</span>
                        <span>
                            E-Mail:
                            <img
                                alt="kontakt AT (Domainname dieser Seite)"
                                src="/files/malermeister-wild/email-footer.png"
                            />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Layout;
