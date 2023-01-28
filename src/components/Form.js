import React from "react";
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import bgbtn from '../assets/6.png'

const CreateAccountForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div class='w-[100%] text-white'>
      <form onSubmit={formik.handleSubmit} class='flex flex-col gap-10 px-3 py-2'>
        <div class='flex flex-col w-[60%]'>
          <label class='font-bold mb-1 text-lg' htmlFor="name">nome e cognome*</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            placeholder='Inserisci qui il testo'
            value={formik.values.name}
            style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px' }}
          />
        </div>


        <div class='flex flex-col w-[60%]'>
          <label class='font-bold mb-1 text-lg' htmlFor="email">e-mail*</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            placeholder='Inserisci qui il testo'
            value={formik.values.email}
            style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px' }}
          />
        </div>
        <div class='flex flex-col w-[60%]'>
          <label class='font-bold mb-1 text-lg' htmlFor="name">password*</label>
          <input
            id="password"
            name="password"
            type="text"
            onChange={formik.handleChange}
            placeholder='Inserisci qui il testo'
            value={formik.values.phone}
            style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px' }}
          />
        </div>

        <div class='flex flex-col w-[60%]'>
          <label class='font-bold mb-1 text-lg' htmlFor="name">conferma password*</label>
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="text"
            onChange={formik.handleChange}
            placeholder='Inserisci qui il testo'
            value={formik.values.phone}
            style={{ height: '50px', border: '2px solid white', borderRadius: '10px', backgroundColor: 'transparent', padding: '0px 15px 0px 15px' }}
          />
        </div>

        <div class='relative'>
          <div class='flex justify-center py-5'>
            <Link to='/' class='w-[80%] z-40'>
              <button style={{ backgroundColor: 'black', borderRadius: '10px', padding: '20px', width: '80%' }} class='z-40 font-semibold'>ISCRIVITI</button>
            </Link>
          </div>
          <div class='absolute bottom-[-120%]'><img src={bgbtn} alt='bgbtn' /></div>
        </div>
      </form>
    </div>
  );
};

export default CreateAccountForm;