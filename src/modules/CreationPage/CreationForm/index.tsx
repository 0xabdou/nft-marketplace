import { useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import FormikInput from "../../../components/Input";
import SubmitButton from "./SubmitButton";
import TextArea from "./TextArea";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

export type CreationValues = {
  name: string;
  description: string;
  generatedImage?: String;
};

type CreationFormProps = {
  onSubmit: (values: CreationValues) => Promise<void>;
};

export const creationValidationSchema = Yup.object().shape({
  name: Yup.string().required("Must enter a name"),
  description: Yup.string().required("Must enter a description"),
  generatedImage: Yup.string().url("Invalid image URL"), // Validate if the value is a valid URL
});

const CreationForm = ({ onSubmit }: CreationFormProps) => {
  const [generatedImage, setGeneratedImage] = useState<string | undefined>(undefined); // State to store the generated image URL

  const initialValues: CreationValues = {
    name: "",
    description: "",
    generatedImage: undefined, // Initialize the generatedImage field to undefined
  };

  const handleGeneratePicture = async (
    description: string,
    formikProps: FormikProps<CreationValues> // Pass formikProps as a parameter
  ) => {
    // Make the API call to Dall-E 2 with the provided description and get the generated image
    try {
      // const generatedImage = await callDallE2API(description)
      const generatedImage = 'https://miro.medium.com/v2/resize:fit:1400/1*o0d9QxDcnVgeuQCJPZE2qA.png';
      // Set the generated image URL in the component's state
      setGeneratedImage(generatedImage);

      // You can also set the generated image URL in the formik form state
      formikProps.setFieldValue("generatedImage", generatedImage);
    } catch (error) {
      // Handle errors if any
      console.error("Error generating picture:", error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={creationValidationSchema}
      onSubmit={onSubmit}
    >
      {formikProps => ( // Wrap the form content in a function that receives formikProps
        <Form className="flex">
          <div className="flex w-64 flex-col space-y-1">
            {/* Other form fields (name, etc.) */}
            <FormikInput name="name" placeholder="name" />

            {/* The "TextArea" component for the description */}
            <TextArea name="description" placeholder="description..." />

            {/* Button to generate the picture */}
            <button
              type="button"
              onClick={() => handleGeneratePicture(formikProps.values.description, formikProps)} // Pass formikProps here
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Generate Picture
            </button>

            {/* Show the generated image if available */}
            {generatedImage && (
              <img src={generatedImage} alt="Generated" className="w-72 h-72 object-cover mt-2" />
            )}

            {/* The "SubmitButton" component will now handle form submission */}
            <SubmitButton generatedImage={generatedImage} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreationForm;
