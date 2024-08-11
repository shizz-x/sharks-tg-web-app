import "./globals.css";
import Spline from "@splinetool/react-spline/next";
import Navbar from "../components/Navbar/Navbar";
import Userbar from "../components/Userbar/Userbar";
import style from "./layout.module.scss";
import Panel from "../components/Panel/Panel";
import Overlay from "../components/Panel/Overlay";
import classNames from "classnames";
import { TelegramWebApp } from "@/components/TelegramWebApp/TelegramWebApp";

export default function RootLayout({ skills, children }) {
    return (
        <html lang="en">
            <head>
                <script src="https://telegram.org/js/telegram-web-app.js"></script>
            </head>
            <TelegramWebApp>
                <body>
                    <Navbar />
                    <Userbar />
                    <Panel>{children}</Panel>
                    <Spline
                        scene="https://prod.spline.design/1IbTsvj9GRHhGa6P/scene.splinecode"
                        width={"100%"}
                        height={"100%"}
                        className={style.character}
                    />
                </body>
            </TelegramWebApp>
        </html>
    );
}
