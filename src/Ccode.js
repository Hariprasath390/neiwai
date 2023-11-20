import React , {useState} from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Ccode () {
    // `value` will be the parsed phone number in E.164 format.
    // Example: "+12133734253".
    const [value, setValue] = useState()
    // If `country` property is not passed
    // then "International" format is used.
    // Otherwise, "National" format is used.
   console.log(value)
    return (
        <PhoneInput
  defaultCountry="IN" className='outline-none w-96 border border-black/10 ml-96 mt-16 hover:border-black/20 '
  value={value}
  onChange={setValue}/>

    )
  }

export default Ccode