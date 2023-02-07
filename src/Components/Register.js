import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup';
function Register() {
    const formik=useFormik({
        initialValues:
        {
            username:'',
            password:'',
            email:'',
            select: '',
        },
        validationSchema:yup.object({
            username:yup.string('must be string').min(5,'min length is 5 chars').max(10,'max chars is 10').required('this field is req'),
            password:yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,'your password must be strong'),
            email:yup.string().email(' email must be valid'),
            select:yup.string().required(),
        }),
        onSubmit:(values)=>
        {
            console.log(values); // replace post req to backend server
        }
    })
  return (
    <div className='container'>
        <form onSubmit={formik.handleSubmit}>
        <input className='form-control mb-3 mt-3' type={'text'} style={formik.errors.username?{border:'red 1px solid'}:{border:''}} placeholder="username" name="username" onChange={formik.handleChange}/>
        <small className='mb-5' style={{color:'red'}}>{formik.errors.username}</small>

        <input className='form-control mb-3' type={'email'} placeholder="email" name="email" onChange={formik.handleChange} style={formik.errors.email?{border:'red 1px solid'}:{border:''}}/>
        <small className='mb-5' style={{color:'red'}}>{formik.errors.email}</small>

    <select onChange={formik.handleChange} className="form-select form-select-sm mb-3 mt-3" aria-label=".form-select-sm example" name='select'>
       <option selected>Open this select menu</option>
       <option value="Zagazig">Zagazig</option>
       <option value="Cairo">Cairo</option>
      <option value="Aswan">Aswan</option>
   </select>
           <input className='form-control mb-3' type={'password'} placeholder="password" name="password" onChange={formik.handleChange} style={formik.errors.password?{border:'red 1px solid'}:{border:''}} />
           <small className='mb-5' style={{color:'red'}} >{formik.errors.password}</small>
            <br/>
        <button className='btn btn-info'>Register</button>
        </form>
    </div>
  )
}

export default Register