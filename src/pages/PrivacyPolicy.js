import React from 'react'
import Navigations from '../components/Navigations'
import Sitefooter from '../components/SiteFooter'

const PrivacyPolicy = () => {
  return (
    <>
      <Navigations />
      <div className='bg-[#1c2022] py-4'>
        <div className='flex h-full text-white w-full justify-center'>
          <div className='w-[80%]'>
            <p className='text-2xl font-bold py-2 text-center'>Privacy Policy di Miro</p>
            <p>

              Miro è un chatbot creato utilizzando le chiavi API di OpenAI. La nostra politica sulla privacy è stata creata per proteggere le informazioni personali dei nostri utenti. La presente privacy policy descrive come vengono raccolti, utilizzati e divulgati i dati personali degli utenti del nostro servizio.
              <br />
              Raccolta di informazioni personali
              Miro richiede ai suoi utenti di fornire informazioni personali come nome e cognome, indirizzo e-mail e password durante la fase di registrazione. Queste informazioni sono necessarie per fornire un servizio personalizzato e per garantire l'accesso sicuro al nostro servizio.
              <br />
              Uso delle informazioni personali
              Le informazioni personali fornite dagli utenti vengono utilizzate solo per fornire il servizio richiesto e per comunicare con gli utenti riguardo al servizio. Non vengono condivise con terze parti, a meno che non sia richiesto dalla legge.
              <br />
              Conservazione delle informazioni personali
              Le informazioni personali degli utenti vengono conservate nel nostro sistema finché l'utente non richiede la cancellazione del proprio account. In caso di cancellazione dell'account, le informazioni personali verranno cancellate dal nostro sistema.
              <br />
              Sicurezza delle informazioni personali
              Miro adotta misure di sicurezza tecniche e organizzative per proteggere le informazioni personali degli utenti da accessi non autorizzati, modifiche o divulgazioni.
              <br />
              Modifiche alla privacy policy
              Miro si riserva il diritto di modificare la presente privacy policy in qualsiasi momento. Tutte le modifiche saranno comunicate agli utenti tramite e-mail o attraverso il nostro servizio.
              <br />
              Contatti
              Per qualsiasi domanda o commento riguardo alla nostra privacy policy o alle informazioni personali degli utenti, si prega di contattare il nostro servizio clienti tramite e-mail all'indirizzo <a href='mailto:assistenza@miroapp.it'>assistenza@miroapp.it</a>.
              <br />
              Ultimo aggiornamento: Monday, 20/02/2023.</p>
          </div>
        </div>
      </div>
      <Sitefooter />
    </>
  )
}

export default PrivacyPolicy