import PropTypes from 'prop-types'
import React from 'react'
import Contact from './Contact'
import dano from '../images/persons/dano.png'
import majoh from '../images/persons/majoh.png'
import sleso2 from '../images/persons/sleso2.png'
import prokrastinol from '../images/prokrastinol.png'
import homeocukor from '../images/homeocukor_z_neba.png'
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
            Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu,
            at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent
            urna nisi, fringila lorem et vehicula lacinia quam. Integer
            sollicitudin mauris nec lorem luctus ultrices.
          </p>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
            Pellentesque condimentum sem. In efficitur ligula tate urna.
            Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Mauris aliquet magna magna sed nunc rhoncus amet feugiat
            tempus.
          </p>
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
          <p>
            Dobre nám to dziga.
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
