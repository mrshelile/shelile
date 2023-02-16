import { Footer } from 'flowbite-react'
import React from 'react'

export default function FooterPage() {
  return (
    <div className='fixed bottom-5 left-0 w-screen h-12'>
      <Footer container={true}>
  <Footer.Copyright
    href="#"
    by="Malefetsane Shelile"
    year={2023}
  />
</Footer>
    </div>
  )
}
