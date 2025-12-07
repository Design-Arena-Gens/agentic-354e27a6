export const metadata = {
  title: 'दादी और बंदर की बर्फ का घर',
  description: 'राजस्थान में बर्फ का घर बनाने की कहानी',
}

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
