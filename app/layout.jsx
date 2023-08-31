import 'styles/globals.css';

export const metadata = {
  title: 'NPC Village',
  description: 'The village of NPCs for your next tabletop game',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className='gradient' />
        </div>

        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
