import React, {FC, ReactNode} from 'react';
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router';
type LayoutProps = {
    children: ReactNode
};
const Layout: FC<LayoutProps> = ({children}) => {
    const {pathname} = useRouter();
    const navMap: Record<string, string> = {
        Startseite: "/",
        Leistungsangebot: "/leistungsangebot",
        Referenzen: "/referenzen",
        Kundenmeinungen: "/kundenmeinungen",
        Meisterstück: "/meisterstueck",
        Kontakt: "/kontakt",
        Impressum: "/impressum",
        Datenschutz: "/datenschutz",
    };
    const navList = Object.keys(navMap).map(title => ({
        title,
        href: navMap[title],
        isActive: pathname === navMap[title]
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
                            <Link className="logo" href="/" title="zur Startseite">
                                <span className="logo">Malermeister André Wild</span>
                            </Link>
                        </h1>
                    </div>
                    <div className="shadow">
                        <Image
                            alt="Kopfbild"
                            src="/files/malermeister-wild/img/header-image.png"
                            width={960}
                            height={250}
                        />
                    </div>
                </div>
            </div>
            <div className="gradient">
                <div id="container">
                    <div id="main">
                        <div className="inside">
                            <div className="mod_article block" id={pathname.replace(/\//g, '') || 'startseite'}>
                                {children}
                            </div>
                        </div>
                    </div>
                    <div id="left">
                        <div className="inside">
                            <div className="mod_navigation block">
                                <a className="invisible" href="#skipNavigation3">Navigation überspringen</a>
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
                            <Image
                                alt="kontakt AT (Domainname dieser Seite)"
                                src="/files/malermeister-wild/email-footer.png"
                                width={197}
                                height={15}
                            />
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Layout;
