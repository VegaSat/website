export default function BeeSat() {
  return (
    <html lang="sl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>BeeSat</title>

        <style>{`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
            overflow: hidden;
          }

          iframe {
            width: 100vw;
            height: 100vh;
            border: none;
          }
        `}</style>
      </head>

      <body>
        <iframe
          src="https://v0-can-sat-mission-website.vercel.app/"
          title="BeeSat Website"
          allow="fullscreen"
        />
      </body>
    </html>
  );
}