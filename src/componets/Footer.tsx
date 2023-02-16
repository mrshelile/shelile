import { Footer } from 'flowbite-react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function FooterPage() {
  return (
    <div className='fixed bottom-5 left-0 w-screen h-12'>
      <Footer container={true}>
  <Footer.Copyright
    href="#"
    by="Malefetsane Shelile"
    year={2023}
  />
  <Footer.LinkGroup>
    <Footer.Link href="https://github.com/mrshelile">
      <GitHubIcon></GitHubIcon>
    </Footer.Link>
    <Footer.Link href="https://www.linkedin.com/in/malefetsane-shelile-2692531ba">
      <LinkedInIcon></LinkedInIcon>
    </Footer.Link>
    <Footer.Link href="https://www.instagram.com/fatzshelile/">
      <InstagramIcon></InstagramIcon>
    </Footer.Link>
    <Footer.Link href="https://wa.me/+26669356845?text=I'm%20interested%20in%20your%20portfolio">
      <WhatsAppIcon></WhatsAppIcon>
    </Footer.Link>
  </Footer.LinkGroup>
</Footer>
    </div>
  )
}
