import localFont from "next/font/local";

const Gotham = localFont({
    src: [
      {
        path: "/gotham-medium.woff2",
        weight: "500",
        style: 'normal',
      },
      {
        path: "/gotham-book.woff2",
        weight: "300",
        style: 'normal',
      },
    ],
    variable: "--font-gotham",
});

const DungGeun = localFont({
  src: [
    {
      path: "/DungGeunMo.woff",
      style: 'normal',
    },
  ],
  variable: "--font-dunggeun",
});

export { Gotham, DungGeun };