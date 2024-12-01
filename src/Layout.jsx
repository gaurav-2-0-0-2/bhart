// import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col  min-h-screen">
      <Navbar/>
      <main className='flex-grow'>{children}</main>
    </div>
  )
}