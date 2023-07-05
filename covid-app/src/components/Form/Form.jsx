import StyledForm from './Form.styled'
import ConceptualIdea from './../../assets/images/ConceptualIdea.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProvinces } from '../../features/provincesSlice'
import { useSelector } from 'react-redux'
import { Heading, Alert } from '../styled'

export default function Form() {
  const provinces = useSelector((state) => state.provinces.provinces)

  const [formData, setFormData] = useState({
    province: '',
    status: '',
    total: '',
  })

  const dispatch = useDispatch()

  const [alert, setAlert] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const { province, status, total } = formData

    const newAlert = {
      province: !province,
      status: !status,
      total: !total || total <= 0,
    }

    setAlert(newAlert)

    if (Object.values(newAlert).every((alert) => !alert)) {
      const updatedProvinces = provinces.map((prov) => {
        if (prov.name === province) {
          return {
            ...prov,
            numbers: {
              ...prov.numbers,
              [status]: prov.numbers[status] + parseInt(total),
            },
          }
        } else {
          return prov
        }
      })

      dispatch(updateProvinces(updatedProvinces))

      setFormData({
        province: '',
        status: '',
        total: '',
      })

      setAlert({})
    }
  }

  return (
    <StyledForm>
      <section>
        <div>
          <img
            src={ConceptualIdea}
            width={536}
            height={354}
            alt={ConceptualIdea}
          />
        </div>
        <div>
          <Heading>Form Covid</Heading>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Province</label>
              <select
                name="province"
                value={formData.province}
                onChange={handleChange}
              >
                <option value="">Choose Province</option>
                {provinces.map((province, key) => {
                  return (
                    <option value={province.name} key={key}>
                      {province.name}
                    </option>
                  )
                })}
              </select>
              {alert.province && <Alert>*Province must be selected</Alert>}
            </div>
            <div>
              <label>Status</label>
              <select
                className="form__input"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Choose Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="recovered">Recovered</option>
                <option value="treatment">Treatment</option>
                <option value="death">Death</option>
              </select>
              {alert.status && <Alert>*Status must be selected</Alert>}
            </div>
            <div>
              <label>Total</label>
              <input
                className="form__input"
                type="number"
                name="total"
                value={formData.total}
                onChange={handleChange}
              />
              {alert.total && (
                <>
                  {formData.total === '' && (
                    <Alert>*Total must be filled</Alert>
                  )}
                  {formData.total !== '' && formData.total <= 0 && (
                    <Alert>*Total must be a Alertositive number</Alert>
                  )}
                </>
              )}
            </div>
            <button>Submit</button>
          </form>
        </div>
      </section>
    </StyledForm>
  )
}
