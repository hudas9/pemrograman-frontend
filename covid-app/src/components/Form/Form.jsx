import StyledForm from './Form.styled'
import ConceptualIdea from './../../assets/images/ConceptualIdea.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProvinces } from '../../features/provincesSlice'
import { useSelector } from 'react-redux'
import {
  Heading,
  Alert,
  Label,
  Input,
  Select,
  Button,
} from '../styled/ui-components'

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
              <Label>Province</Label>
              <Select
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
              </Select>
              {alert.province && <Alert>*Province must be selected</Alert>}
            </div>
            <div>
              <Label>Status</Label>
              <Select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Choose Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="recovered">Recovered</option>
                <option value="treatment">Treatment</option>
                <option value="death">Death</option>
              </Select>
              {alert.status && <Alert>*Status must be selected</Alert>}
            </div>
            <div>
              <Label>Total</Label>
              <Input
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
                    <Alert>*Total must be a positive number</Alert>
                  )}
                </>
              )}
            </div>
            <Button w="100%">Submit</Button>
          </form>
        </div>
      </section>
    </StyledForm>
  )
}
