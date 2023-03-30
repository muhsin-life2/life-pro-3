import Navbar from "../components/navbar"
import AuthContext from "../components/AuthContext"
import Layout from "../components/layout"
import getBrandsData from "../lib/getBrandsData"
import getCategoryData from "../lib/getCategoryData"
import Footer from "../components/footer"
import './styles/global.css'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const pageData = getCategoryData()
  const data = await pageData

  const brandsData = getBrandsData()
  const brands_data = await brandsData

  const sessionData = {
    data: {
      addresses: []
    }
  }


  return (
    <html lang="en">
      <body>
        <Layout data={data} brands_data={brands_data} sessionServ={sessionData} >
        {children}
      </Layout>
    </body>
    </html >
  )
}