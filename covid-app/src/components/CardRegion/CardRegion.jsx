import StyledCardRegion from './CardRegion.styled'
import ProtectionMask from '../../assets/images/ProtectionMask.png'
import Smilling from '../../assets/images/Smilling.png'
import Skull from '../../assets/images/Skull.png'

export default function CardRegion({ item }) {
  return (
    <StyledCardRegion>
      <h2>{item.name}</h2>
      <div>
        <h3>Confirmed</h3>
        <span>
          <p>{item.numbers.confirmed.toLocaleString('id-ID')}</p>
          <img src={ProtectionMask} alt="Protection Mask" />
        </span>
      </div>
      <div>
        <h3>Recovered</h3>
        <span>
          <p>{item.numbers.recovered.toLocaleString('id-ID')}</p>
          <img src={Smilling} alt="Smilling" />
        </span>
      </div>
      <div>
        <h3>Death</h3>
        <span>
          <p>{item.numbers.death.toLocaleString('id-ID')}</p>
          <img src={Skull} alt="Skull" />
        </span>
      </div>
    </StyledCardRegion>
  )
}
