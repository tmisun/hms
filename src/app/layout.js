
import "./styles/css/globals.scss";
import "./styles/css/mobile.scss";

import { Gotham,DungGeun }  from "./styles/fonts/fonts"
export const metadata = {
  title: "Portfolio",
  description: "FrontEnd Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Gotham.variable} ${DungGeun.variable}`}>
      <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css" rel="stylesheet"></link>
      <link href="https://hangeul.pstatic.net/hangeul_static/css/nanum-square-neo.css" rel="stylesheet"></link>
        {children}
      </body>
    </html>
  );
}
