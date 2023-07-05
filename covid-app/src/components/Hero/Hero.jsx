import StyledHero from './Hero.styled'
import MedicalCare from '../../assets/images/MedicalCare.svg'
import { Heading, SubHeading } from '../styled'

export default function Hero() {
  return (
    <StyledHero>
      <section>
        <div>
          <Heading align="left" sm="center">
            Covid App
          </Heading>
          <SubHeading align="left" sm="center">
            Covid-19 Monitoring
          </SubHeading>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since.
          </p>
          <button>Vaccine</button>
        </div>
        <div>
          <img src={MedicalCare} alt={MedicalCare} />
        </div>
      </section>
    </StyledHero>
  )
}
