import "./globals.css";
import Spline from "@splinetool/react-spline/next";
import Navbar from "../components/Navbar/Navbar";
import Userbar from "../components/Userbar/Userbar";
import style from "./layout.module.scss";
import { TelegramWebApp } from "@/components/TelegramWebApp/TelegramWebApp";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </head>
      <TelegramWebApp>
        <body>
          <Navbar />

          <Userbar />
          <main className={style.panel}>{children}</main>

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
