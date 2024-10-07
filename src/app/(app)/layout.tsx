interface AppLayoutProps {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>Portfolio</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

export default AppLayout
