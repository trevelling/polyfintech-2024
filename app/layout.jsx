'use client';

import React from "react";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Insurance Tech</title>  
      </head>
      <body>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}