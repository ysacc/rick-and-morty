import SearchAppBar from '@/components/SearchBar/SearchAppBar'
import {Comic_Neue }from 'next/font/google'
export const metadata = {
  title: 'Rick and Morty - Filter',
  description: 'Filter',
}
const Comic = Comic_Neue({
  weight: ["300","400","700"],
  styles:["italic","normal"],
  subsets:["latin"],
})
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={Comic.className}>
        <SearchAppBar/>
        {children}
        </body>
    </html>
  )
}
