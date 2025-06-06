import headerLogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import close from '../assets/icons/close.png'
import { navLinks } from '../utils'
import useHamStore from '../store/store'

const Nav = () => {

  const {hamburgerOpen, actionChange} = useHamStore()
  console.log(hamburgerOpen)

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo}
            alt='Logo'
            width={130}
            height={29}
            />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {link.label}
                </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          { !hamburgerOpen ?
          <img
            src={hamburger}
            alt="Hamburger"
            width={25}
            height={25}
            onClick={actionChange}
          /> : ""
          }
        </div>

      </nav>
      {
        hamburgerOpen && 
        <div className='absolute flex flex-col right-4 -top-1  bg-white shadow-lg rounded-md px-6 py-4 w-30 lg:hidden z-50'>
          <img
            src={close}
            alt='close hamburger'
            width={25}
            height={25}
            onClick={actionChange}
            className='self-end cursor-pointer'
            />
          <ul className="mt-2">
            {
              navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className='font-montserrat text-slate-gray text-lg cursor-pointer'
                  >
                    {link.label}
                  </a>
                </li>
              )) 
            }
          </ul>
        </div>

      }
    </header>
  )
}

export default Nav