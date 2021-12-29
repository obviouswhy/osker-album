import './App.css'
import ButtonSocial from './components/ButtonSocial'

const App = () => {
  return (
    <div className={'App'}>
      <section className={'album-wrapper'}>
        <img
          alt={'Album Cover'}
          src="https://d1iudujjh4zmgc.cloudfront.net/uploads/image/asset/503/medium_af262904-5003-49d4-a1a1-d193c3de4c62.jpg"
        />
        <div className={'title-wrapper'}>
          <h3>BLADEE - 333</h3>
          <h4>CHOOSE MUSIC SERVICE</h4>
        </div>
        <ButtonSocial label={'spotify'} />
        <ButtonSocial label={'apple music'} type={'apple'} />
        <ButtonSocial label={'youtube'} type={'youtube-1'} />
        <ButtonSocial label={'tidal'} type={'tidal'} />
        <ButtonSocial label={'soundcloud'} type={'soundcloud-3'} />
        <ButtonSocial label={'bandcamp'} type={'bandcamp'} />
      </section>
    </div>
  )
}

export default App
