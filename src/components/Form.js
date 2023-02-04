import React from "react";
import bgbtn from '../assets/6.png'
import { useAuthContext } from '../context/auth/auth';
import { useSignupContext } from '../context/auth/signup';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import { Navigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import SuccessModal from "./SuccessModal";




const CreateAccountSchema = Yup.object().shape({
  username: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup
    .string()
    .required('Password is required')
    .min(5, 'Your password is too short.'),
  confirmpassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const CreateAccountForm = () => {
  const { signup, success, error, loading } = useSignupContext()


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
                style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color:'white' }} />
              {errors.username && touched.username ? <div className='text-[red]'>{errors.username}</div> : null}
            </div>
            <div class='flex flex-col w-[100%]'>
              <label class='font-bold mb-1 text-lg text-white' htmlFor="email">e-mail*</label>
              <Field name="email" type="email" placeholder='Inserisci qui il testo'
                style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color:'white' }} />
              {errors.email && touched.email ? <div className='text-[red]'>{errors.email}</div> : null}
            </div>
            <div class='flex flex-col w-[100%]'>
              <label class='font-bold mb-1 text-lg text-white' htmlFor="password">password*</label>
              <Field name="password" type="password" placeholder='Inserisci qui il testo'
                style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color:'white' }} />
              {errors.password && touched.password ? <div className='text-[red]'>{errors.password}</div> : null}
            </div>
            <div class='flex flex-col w-[100%]'>
              <label class='font-bold mb-1 text-lg text-white' htmlFor="confirmpassword">confrim password*</label>
              <Field name="confirmpassword" type="password" placeholder='Inserisci qui il testo'
                style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color:'white' }} />
              {errors.confirmpassword && touched.confirmpassword ? <div className='text-[red]'>{errors.confirmpassword}</div> : null}
            </div>
            </div>

            <div class='relative w-[60%]'>
              <div class='flex justify-center py-5 '>
                <button type="submit" style={{ backgroundColor: 'black', borderRadius: '10px', padding: '10px', width: '100%' }} class='z-40 font-semibold uppercase border-2 border-gray-300 text-white '>{loading ? <div className='flex justify-center items-center'>
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="20"
                  visible={true}
                />
                <p className='text-[gray]'>loading...</p>
              </div>: <p>ISCRIVITI</p>}</button>

              </div>
              <div>
                <div class='absolute md:hidden bottom-[-90%]'><img src={bgbtn} alt='bgbtn' /></div>
                <div class='absolute md:hidden bottom-[-170%] left-[-60%]'><img src={bgbtn} alt='bgbtn' /></div>
                <div class='absolute md:hidden bottom-[-160%] right-[-50%]'><img src={bgbtn} alt='bgbtn' /></div>
              </div>
              </div>
          </Form>
        )}
      </Formik>
      {success && <SuccessModal/>}
    </div>
  )
}

export default CreateAccountForm;




const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
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
                style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color:'white' }} />
              {errors.email && touched.email ? <div className='text-[red]'>{errors.email}</div> : null}
            </div>
            <div class='flex flex-col w-[100%]'>
              <label class='font-bold mb-1 text-lg text-center text-white' htmlFor="password">password*</label>
              <Field name="password" type="password" placeholder='Inserisci qui il testo'
                style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px', color:'white' }} />
              {errors.password && touched.password ? <div className='text-[red]'>{errors.password}</div> : null}
            </div>
            </div>

            <div class='relative w-[60%]'>
              <div class='flex justify-center py-5 '>
                <button type="submit" style={{ backgroundColor: 'black', borderRadius: '10px', padding: '10px', width: '100%' }} class='z-40 font-semibold uppercase border-2 border-gray-300 text-white '>{loading ? <div className='flex justify-center items-center'>
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="20"
                  visible={true}
                />
                <p className='text-[gray]'>loading...</p>
              </div>: <p>Accedi</p>}</button>

              </div>
              <div>
                <div class='absolute md:hidden bottom-[-90%]'><img src={bgbtn} alt='bgbtn' /></div>
                <div class='absolute md:hidden bottom-[-170%] left-[-60%]'><img src={bgbtn} alt='bgbtn' /></div>
                <div class='absolute md:hidden bottom-[-160%] right-[-50%]'><img src={bgbtn} alt='bgbtn' /></div>
              </div>
              </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}



