import Styles from './index.module.css'
import Link from 'next/link'

const sendMessage = (number, text) => {
  const uri = `https://api.whatsapp.com/send?phone=${number}&text=${text}`
  return uri
}

export default function Home() {
  const profile = sendMessage(5567991629233, "Leite, ta funcionando")
  
  return (
  <>
    <head>
      <title> Viktor Leite | Blog</title>
    </head>
    <div className={Styles.container}>
     <div class="info">
        <h3 className={Styles.title}>Viktor Leite</h3>
        
        <div className={Styles.backToHome}>
          <Link href={profile}>
            <a>
              <span>Entrar em contato</span>
            </a>
          </Link>
        </div>
     </div>
    </div>
  </>
  )
}
