import React, { useState } from 'react';
import Step1 from './MultiStep1';
import Step2 from './MultiStep2';
import Step3 from './MultiStep3';
import Submit from './MultiStepSubmit';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    telephone: '',
    gender: '',
    day: '',
    month: '',
    year: '',
    comments: '',
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const next = () => {
    setCurrentStep(currentStep + 1);
  };
  const back = () => {
    setCurrentStep(currentStep - 1);
  };

  // return (
  //   <>
  //     <Step1
  //       title='Step 1: Your details'
  //       data={formData}
  //       handleChange={handleChange}
  //       next={next}
  //     />
  //     <Step2
  //       title='Step 2: More details'
  //       data={formData}
  //       handleChange={handleChange}
  //       next={next}
  //       back={back}
  //     />
  //     <Step3
  //       title='Step 3: More comments'
  //       data={formData}
  //       handleChange={handleChange}
  //       next={next}
  //       back={back}
  //     />
  //     <Submit data={formData} back={back} title={'Confirm your details:'} />
  //   </>
  // );

  switch (currentStep) {
    case 1:
      return (
        <Step1
          title='Step 1: Your details'
          data={formData}
          handleChange={handleChange}
          next={next}
        />
      );
    case 2:
      return (
        <Step2
          title='Step 2: More details'
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    case 3:
      return (
        <Step3
          title='Step 3: More comments'
          data={formData}
          handleChange={handleChange}
          next={next}
          back={back}
        />
      );
    default:
      return (
        <Submit data={formData} back={back} title={'Confirm your details:'} />
      );
  }
};
export default MultiStepForm;
