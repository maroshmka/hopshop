import PropTypes from 'prop-types'
import React from 'react'
import Contact from './Contact'
import dano from '../images/persons/dano.png'
import majoh from '../images/persons/majoh.png'
import sleso2 from '../images/persons/sleso2.png'
import prokrastinol from '../images/prokrastinol.png'
import homeocukor from '../images/homeocukor_z_neba.png'
import uvod_laboratoria from '../images/uvod_laboratoria.png'
import hopsup from '../images/logo_hop_sup.png'
import '../assets/css/iframe.css'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="prokrastinol"
          className={`${this.props.article === 'prokrastinol' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Prokrastinol</h2>
          <h3>Vaše problémy sa stanú budúcnosťou</h3>

          <p>
            HopŠup prináša zázračný liek, ktorý vás zbaví všetkých starostí. 
            Budú vám doslova ukradnuté!
          </p>

          <span className="image main">
            <img src={prokrastinol} alt="prokrastinol-logo"/>
          </span>
          <hr></hr>

          <div>
              <h5><i class="fa fa-thumbs-up"></i>Žiadne vedľajšie účinky</h5>
              <p>
                  Podľa organizácie WHO je tento liek takmer zázračný. Pri používaní pacienti neuvádzajú žiadne
                  vedľajšie účinky. Ak by sa objavili vedľajšie účinky, nemáte sa čoho obávať! Budú vám doslova
                  ukradnuté!
              </p>
          </div>

          <div>
              <h5><i class="fa fa-user-md"></i>Pokroková medicína</h5>
              <p>
                  Liek vyvjíjali naši experti s použitím najnovších technológií. Testy prebiehali na študentoch,
                  z rôznych univerzít. Sme jedni z mála, ktorí vedia zaručiť takúto kvalitu.
              </p>
          </div>
          
          <div>
              <h5><i class="fa fa-fast-forward"></i>Výsledky uvidíte okamžite!</h5>
              <p>
                  Po použití prokrastinolu sa výsledky dostavia do 20s. Začnete cítiť ako vám ubúdajú posledné
                  pozostatky pocitu viny. Prestanete sa cítiť za hocičo zodpovedný. A to priam okamžite, priatelia!
              </p>
          </div>
          
          <hr></hr>
          
          <div>
            <h4>Pozrite si video a dozviete sa viac!</h4>
            <div class="iframe-container">
                <iframe width="560" height="349" src="https://www.youtube.com/embed/alMUgDEFzmk/" title="prokrastinol youtube" allowFullScreen></iframe>
            </div>
          </div>
          <hr></hr>
          <div>
            <p>
              Neuveriteľné! Pozrite sa ako hodnotia náš produkt šťastlivci, ktorí sa odvážili ho vyskúšať!
            </p>
            <blockquote>
              <img class="img-circle" src={dano} alt="dano" style={{width: 100, height:100}}/>
              <p>Musím povedať, že táto moderná medicína je v dnešnej dobe vysoko pokroková! <small>Daniel M.</small></p>
            
            
              <img class="img-circle" src={majoh} alt="dano" style={{width: 100, height:100}}/>
              <p>Mali sme zápočty... Aj sme sa chceli učiť... Teraz už nemusíme... <small>Mário H.</small></p>
            

              <img class="img-circle" src={sleso2} alt="dano" style={{width: 100, height:100}}/>
              <p>Ako som prišiel na internát, bol som hrozne vystrašený. Až kým mi kamarát nepriniesol
                Prokrastinol. Zmenilo mi to život. Už žiadna zodpovednosť! 
                <small>Peter Š.</small>
              </p>
            </blockquote>
          </div>

          {close}
        </article>

        <article
          id="homeocukor"
          className={`${this.props.article === 'homeocukor' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Homeocukor</h2>
          <span className="image main">
            <img src={homeocukor} alt="homeocukor-logo"/>
          </span>
          <p>
            Prastarý elixír z dôb keď ešte bochník chleba sa dal vymeniť za iný bochník chleba. 
            Staré alternatívno internetové mýty a legendy tvrdia, že pôvodný prastarý gram zlatého medu zniesla magická včela. 
            Nebola len taká obyčajná včela. Opelila totiž celý vtedy známy staroveký svet, ktorý sa rozťahoval od východu až po západ. 
            Ľudia v ňom žili šťastne v mieri a zdravo. (Ak si odmyslíme tie neustále vojnové ťaženia a choroby.) 
            Túto včelu objavil bájny včelár Žihadlus. Med tej včely sa v lúčoch slnka jasal ako zlato. 
            Žihadlus sa chcel podeliť s jej medom s ostatnými, preto spravil to, čo by urobil každý tradičný krčmár. 
            Zriedil ho. Tým sa med stal ešte mocnejším. A tak sa milí vážení zrodil Homeocukor.
          </p>
          
          <span className="image main">
            <img src={uvod_laboratoria} alt="uvod_laboratoria"/>
          </span>

          <p>
            Stredoveký alchymisti ho znovu objavili počas prepuknutia morovej epidémií na začiatku 14.storočia. 
            Vďaka Homeocukru sa im ten smrtiaci mor podaril vyhnať z Európy, a to už do konca 18.storočia.
            HopŠup objavil túto pradávnu tajnú receptúru v zapatrošených spisoch Považsko-cukrárenských archívoch. 
            Tajný lístoček s pokynmi k riedeniu sa dedil z generácie na generáciu, až kým šťastnou zhodou náhod sa hlaveň nabitej zbrane dostala ku hlave súčasného držiteľa. 
            HopŠup to bral ako znamenie, že sa takto dobrovoľne a s láskou dostal k receptúre. Preto sa rozhodol konať spasiteľskú činnosť a predávať Homeocukor všetkým, ktorí ho nutne potrebujú a majú peniaze.
          </p>
          
          <div>
            <h4>Pozrite si video a dozviete sa viac!</h4>
            <div class="iframe-container">
                <iframe width="560" height="349" src="https://youtu.be/RdPrJSK1VyI" title="homeocukor youtube" allowFullScreen></iframe>
            </div>
          </div>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">HopŠup tím!</h2>
          <span className="image main">
            <img src={hopsup} alt="hopsup-logo"/>
          </span>
          <p>Vtipná skupinka vtipných chalanov vtipne vtipkujú o vtipných vtipoch za vtipnej pomoci vtipných videí.</p>

          <p>
            <i>
              Disclaimer. 
              V skutočnosti nepredávame žiadne farmaceutiká. Celý obsah slúži len na pobavenie našich sledovateľov.
            </i>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <Contact></Contact>
          {close}
        </article>
      
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
