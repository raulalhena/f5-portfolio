import '@fontsource/roboto';
import '@fontsource/mulish';
import stackIcons from '../data/stack';

function Hero() {
  return (
    <main style={{
      background: '#222222',
      height: '100vh',
      display: 'flex',  
      alignItems: 'center',
      flexDirection: 'column',
      fontFamily: 'Roboto',
    }}>
      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
        <article style={{ color: '#eeeeee', fontFamily: 'Roboto', fontSize: '40px'}}>
         <p>My name is <span style={{ color: '#eeaa22'}}>Raúl Alhena</span></p>
         <p>I am a <span style={{ color: '#eeaa22'}}>FullStack Web Developer</span></p>
        </article>
        <article style={{ color: '#eeeeee', fontFamily: 'Roboto', fontSize: '20px'}}>
         <p>This web is <span style={{ color: '#add8e6' }}>under construction.</span> Good things take time</p>
        </article>
      </section>
      <section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h2 style={{ color: '#ccc'}}>Skills</h2>
        </div>
        <article style={{ paddingTop: '20px', paddingBottom: '20px', width: '60vw', boxShadow: '10px 5px 5px #111', borderRadius: '15px', border: '0.5px solid #111', marginBottom: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gap: '15px', columnGap: '1px', justifyItems: 'center'  }}>
            {
              stackIcons.map(item => {
                return(
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                     <img loading='lazy' src={`https://skillicons.dev/icons?i=${item.icon}`} />
                    <p style={{ fontFamily: 'Mulish', color: '#eee' }}>{item.text[0].toUpperCase() + item.text.slice(1)}</p>
                  </div>
                )
              })
            }
          </div>
        </article>
      </section>
    </main>
