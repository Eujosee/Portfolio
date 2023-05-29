import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-[#183550] ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">José Mota</span>
            <span className="relative group text-white text-2xl font-semibold">&#60;José Mota/&#62;
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#1B98E0] transition-all group-hover:w-full"></span>
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <HiOutlineBars3 size={30} aria-hidden="true" className='text-white'/>
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-10">
          <Link to="/" className="relative group text-lg font-semibold leading-6 text-white">
            Sobre
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#1B98E0] transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/projetos" className="relative group text-lg font-semibold leading-6 text-white">
            Projetos
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#1B98E0] transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#183550] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">José Mota</span>
              <span className="relative group text-white text-2xl font-semibold">&#60;José Mota/&#62;
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#1B98E0] transition-all group-hover:w-full"></span>
              </span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Fechar menu</span>
              <HiXMark size={30} aria-hidden="true" className='text-white'/>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="relative group -mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-white hover:bg-[#13293D]"
                >
                  Sobre
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#1B98E0] transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  to="/projetos"
                  className="relative group -mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-white hover:bg-[#13293D]"
                >
                  Projetos
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#1B98E0] transition-all group-hover:w-full"></span>
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
