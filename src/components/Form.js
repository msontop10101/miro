import React, { useState, useEffect } from "react";
import { useAuthContext } from '../context/auth/auth';
// import { user } from '../context/auth/auth'
import { useSignupContext } from '../context/auth/signup';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Navigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import SuccessModal from "./SuccessModal";
import axios from "axios";
import UpdateSuccessModal from "./UpdateSuccessModal";




const CreateAccountSchema = Yup.object().shape({
  username: Yup.string()
    .required('Obbligatorio'),
  email: Yup.string().email('indirizzo email non valido').required('Obbligatorio'),
  password: Yup
    .string()
    .required('Obbligatorio')
    .min(5, 'La tua password è troppo breve.'),
  confirmpassword: Yup
    .string()
    .required('Obbligatorio')
    .oneOf([Yup.ref('password'), null], 'Le password devono essere identiche')
});


const CreateAccountForm = () => {
  const { signup, success, loading } = useSignupContext()




  return (
    <div className='w-full'>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmpassword: '',
        }}
        validationSchema={CreateAccountSchema}
        onSubmit={values => {
          signup(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='w-full flex flex-col gap-5'>
            <div className="w-[60%] flex flex-col gap-5 z-50">
              <div class='flex flex-col w-[100%]'>
                <label class='font-bold mb-1 text-lg text-white' htmlFor="username">nome e cognome*</label>
                <Field name="username" type="username" placeholder='Inserisci qui il testo'
                  style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'white' }} />
                {errors.username && touched.username ? <div className='text-[red]'>{errors.username}</div> : null}
              </div>
              <div class='flex flex-col w-[100%]'>
                <label class='font-bold mb-1 text-lg text-white' htmlFor="email">e-mail*</label>
                <Field name="email" type="email" placeholder='Inserisci qui il testo'
                  style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'white' }} />
                {errors.email && touched.email ? <div className='text-[red]'>{errors.email}</div> : null}
              </div>
              <div class='flex flex-col w-[100%]'>
                <label class='font-bold mb-1 text-lg text-white' htmlFor="password">password*</label>
                <Field name="password" type="password" placeholder='Inserisci qui il testo'
                  style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'white' }} />
                {errors.password && touched.password ? <div className='text-[red]'>{errors.password}</div> : null}
              </div>
              <div class='flex flex-col w-[100%]'>
                <label class='font-bold mb-1 text-lg text-white' htmlFor="confirmpassword">conferma password*</label>
                <Field name="confirmpassword" type="password" placeholder='Inserisci qui il testo'
                  style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'white' }} />
                {errors.confirmpassword && touched.confirmpassword ? <div className='text-[red]'>{errors.confirmpassword}</div> : null}
              </div>
            </div>

            <div class='relative w-[60%]'>
              <div class='flex justify-center py-5 '>
                <button type="submit" style={{ backgroundColor: 'black', borderRadius: '10px', border: 'none', padding: '10px', width: '100%' }} class='z-40 font-semibold uppercase text-white '>{loading ? <div className='flex justify-center items-center'>
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="20"
                    visible={true}
                  />
                  <p className='text-[gray]'>loading...</p>
                </div> : <p>ISCRIVITI</p>}</button>

              </div>
              {/* <div>
                <div class='absolute md:hidden bottom-[-90%]'><img src={bgbtn} alt='bgbtn' /></div>
                <div class='absolute md:hidden bottom-[-170%] left-[-60%]'><img src={bgbtn} alt='bgbtn' /></div>
                <div class='absolute md:hidden bottom-[-160%] right-[-50%]'><img src={bgbtn} alt='bgbtn' /></div>
              </div> */}
            </div>
          </Form>
        )}
      </Formik>
      {success && <SuccessModal />}
    </div>
  )
}

export default CreateAccountForm;




const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Obbligatorio'),
  password: Yup.string().required('Obbligatorio'),
});


export const LoginForm = () => {
  const { login, isAuth, loading } = useAuthContext()


  return (
    <div className='w-full'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          login(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='w-full flex flex-col justify-center items-center gap-5'>
            {isAuth && <Navigate to={'/chat'} />}
            <div className="w-[60%] flex flex-col gap-5 z-50">
              <div class='flex flex-col w-[100%]'>
                <label class='font-bold mb-1 text-lg text-center text-white' htmlFor="email">e-mail*</label>
                <Field name="email" type="email" placeholder='Inserisci qui il testo'
                  style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'white' }} />
                {errors.email && touched.email ? <div className='text-[red]'>{errors.email}</div> : null}
              </div>
              <div class='flex flex-col w-[100%]'>
                <label class='font-bold mb-1 text-lg text-center text-white' htmlFor="password">password*</label>
                <Field name="password" type="password" placeholder='Inserisci qui il testo'
                  style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'white' }} />
                {errors.password && touched.password ? <div className='text-[red]'>{errors.password}</div> : null}
              </div>
            </div>

            <div class='relative w-[60%]'>
              <div class='flex justify-center py-5 '>
                <button type="submit" style={{ backgroundColor: 'black', borderRadius: '10px', border: "none", padding: '10px', width: '100%' }} class='z-40 font-semibold uppercase border-2 border-gray-300 text-white '>{loading ? <div className='flex justify-center items-center'>
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="20"
                    visible={true}
                  />
                  <p className='text-[gray]'>loading...</p>
                </div> : <p>Accedi</p>}</button>

              </div>
              {/* <div>
                <div class='absolute md:hidden bottom-[-90%]'><img src={bgbtn} alt='bgbtn' /></div>
                <div class='absolute md:hidden bottom-[-170%] left-[-60%]'><img src={bgbtn} alt='bgbtn' /></div>
                <div class='absolute md:hidden bottom-[-160%] right-[-50%]'><img src={bgbtn} alt='bgbtn' /></div>
              </div> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}


const AccountSettingsSchema = Yup.object().shape({
  username: Yup.string()
    .required('Obbligatorio'),
  email: Yup.string().email('indirizzo email non valido').required('Obbligatorio'),
  password: Yup
    .string()
    .required('Obbligatorio')
    .min(5, 'La tua password è troppo breve.')
});


export const AccountSettingsForm = () => {
  const { userId, logout } = useAuthContext()
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  // console.log(userId)
  // console.log(useAuthContext)
  // console.log(user)

  useEffect(() => {
    // console.log(success)
    setTimeout(() => {
      setSuccess(false)
    }, 5000);
    console.log(success)
  }, [success])

  return (
    <div className='w-full'>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        validationSchema={AccountSettingsSchema}
        onSubmit={values => {
          // signup(values);
          // console.log(values)
          setLoading(true)
          const url = `https://miro-app.herokuapp.com/api/auth/${userId}`
          axios.put(url, values)
            .then(response => {
              setLoading(false)
              setSuccess(true)
              console.log('User details updated successfully', response);
              console.log('Updated!');
              logout()
              // Optionally show a success message to the user
            })
            .catch(error => {
              console.log('Error: ', error.message)
              setLoading(false)
            })
            .finally(() => {
              setLoading(false)
            })
        }}
      >
        {({ errors, touched }) => (
          <Form className='w-full flex flex-col gap-5'>
            {success && <Navigate to={'/accedi'} />}
            <div className="w-[60%] flex flex-col gap-5 z-50">
              <div class='flex flex-col w-[100%]'>
                <label class='font-bold mb-1 text-lg text-white' htmlFor="username">nome e cognome*</label>
                <Field name="username" type="username" placeholder='Inserisci qui il testo'
                  style={{ height: '50px', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'white' }} />
                {errors.username && touched.username ? <div className='text-[red]'>{errors.username}</div> : null}
              </div>
              <div class='flex flex-col w-[100%]'>
                <label class='font-bold mb-1 text-lg text-white' htmlFor="email">e-mail*</label>
                <Field name="email" type="email" placeholder='Inserisci qui il testo'
                  style={{ height: '50px', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'white' }} />
                {errors.email && touched.email ? <div className='text-[red]'>{errors.email}</div> : null}
              </div>
              <div class='flex flex-col w-[100%]'>
                <label class='font-bold mb-1 text-lg text-white' htmlFor="password">password*</label>
                <Field name="password" type="password" placeholder='Inserisci qui il testo'
                  style={{ height: '50px', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color: 'white' }} />
                {errors.password && touched.password ? <div className='text-[red]'>{errors.password}</div> : null}
              </div>
            </div>

            <div class='relative w-[60%]'>
              <div class='flex justify-center py-5 '>
                <button type="submit" style={{ backgroundColor: 'black', borderRadius: '10px', border: 'none', padding: '10px', width: '100%' }} class='z-40 font-semibold uppercase text-white '>{loading ? <div className='flex justify-center items-center'>
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="20"
                    visible={true}
                  />
                  <p className='text-[gray]'>updating...</p>
                </div> : <p>SALVA</p>}</button>
                {/* <button type="submit" style={{ backgroundColor: 'black', borderRadius: '10px', border: 'none', padding: '10px', width: '100%' }} class='z-40 font-semibold uppercase text-white' >SALVA</button> */}

              </div>
              {/* <div>
                <div class='absolute md:hidden bottom-[-90%]'><img src={bgbtn} alt='bgbtn' /></div>
                <div class='absolute md:hidden bottom-[-170%] left-[-60%]'><img src={bgbtn} alt='bgbtn' /></div>
                <div class='absolute md:hidden bottom-[-160%] right-[-50%]'><img src={bgbtn} alt='bgbtn' /></div>
              </div> */}
            </div>
          </Form>
        )}
      </Formik>
      {success && <UpdateSuccessModal />}
    </div>
  )
}



