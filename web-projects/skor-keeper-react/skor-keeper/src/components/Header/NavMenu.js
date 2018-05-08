import React from 'react';
import Logo from '../../assets/img/Skor_Keeper_header_logo.png';

export default function NavMenu() {
        return (
            <nav>
                <div>
                    <a href="#home">
                        <img src={Logo} alt="pict-upper"/>
                    </a>
                    <ul>
                        <li>
                            <a href="/about">O NAS</a>
                        </li>
                        <li>
                            <a  href="/price">CENNIK</a>
                        </li>
                        <li>
                            <a href="/work">JAK PRACUJEMY</a>
                        </li>
                        <li>
                            <a href="/gallery">GALERIA</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }