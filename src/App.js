import './App.css'
import ButtonSocial from './components/ButtonSocial'
import albumData from './albumData.json'

const App = () => {
  return (
    <div className={'App'}>
      <section className={'album-wrapper'}>
        <img alt={'Album Cover'} src={albumData.coverImg} />
        <div className={'title-wrapper'}>
          <h3>{albumData.title || 'Album Title'}</h3>
          <h4>{albumData.subtitle || 'Album Subtitle'}</h4>
        </div>
        {albumData.sns.map((item, index) => (
          <ButtonSocial
            key={`${index}_${item.type}`}
            label={item.label}
            type={item.type}
            url={item.url}
          />
        ))}
      </section>
    </div>
  )
}

export default App
