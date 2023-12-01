// import { Container, Modal, Stepper } from "@mantine/core";
// import React, { useState } from "react";
// import AddLocation from "../AddLocation/AddLocation";
// import { useAuth0 } from "@auth0/auth0-react";
// import UploadImage from "../UploadImage/UploadImage";
// import BasicDetails from "../BasicDetails/BasicDetails";
// import Facilities from "../Facilities/Facilities";

// const AddPropertyModal = ({ opened, setOpened }) => {
//   const [active, setActive] = useState(0);
//   const { user } = useAuth0();

//   const [propertyDetails, setPropertyDetails] = useState({
//     title: "",
//     description: "",
//     price: 0,
//     country: "",
//     city: "",
//     address: "",
//     image: null,
//     facilities: {
//       bedrooms: 0,
//       parkings: 0,
//       bathrooms: 0,
//     },
//     userEmail: user?.email,
//   });

//   const nextStep = () => {
//     setActive((current) => (current < 4 ? current + 1 : current));
//   };

//   const prevStep = () => {
//     setActive((current) => (current > 0 ? current - 1 : current));
//   };

//   return (
//     <Modal
//       opened={opened}
//       onClose={() => setOpened(false)}
//       closeOnClickOutside
//       size={"90rem"}
//     >
//       <Container h={"40rem"} w={"100%"}>
//         <Stepper
//           active={active}
//           onStepClick={setActive}
//           breakpoint="sm"
//           allowNextStepsSelect={false}
//         >
//           <Stepper.Step label="Location" description="Address">
//             <AddLocation
//               nextStep={nextStep}
//               propertyDetails={propertyDetails}
//               setPropertyDetails={setPropertyDetails}
//             />
//           </Stepper.Step>
//           <Stepper.Step label="Images" description="Upload ">
//             <UploadImage
//               prevStep={prevStep}
//               nextStep={nextStep}
//               propertyDetails={propertyDetails}
//               setPropertyDetails={setPropertyDetails}
//             />
//           </Stepper.Step>
//           <Stepper.Step label="Basics" description="Details">
//             <BasicDetails
//               prevStep={prevStep}
//               nextStep={nextStep}
//               propertyDetails={propertyDetails}
//               setPropertyDetails={setPropertyDetails}
//             />
//           </Stepper.Step>

//           <Stepper.Step>
//             <Facilities
//               prevStep={prevStep}
//               propertyDetails={propertyDetails}
//               setPropertyDetails={setPropertyDetails}
//               setOpened={setOpened}
//               setActiveStep={setActive}
//             />
//           </Stepper.Step>
//           <Stepper.Completed>
//             Completed, click back button to get to previous step
//           </Stepper.Completed>
//         </Stepper>
//       </Container>
//     </Modal>
//   );
// };

// export default AddPropertyModal;

// import { Container, Modal, Stepper } from "@mantine/core";
// import React, { useState } from "react";
// import AddLocation from "../AddLocation/AddLocation";
// import { useAuth0 } from "@auth0/auth0-react";
// import UploadImage from "../UploadImage/UploadImage";
// import BasicDetails from "../BasicDetails/BasicDetails";
// import Facilities from "../Facilities/Facilities";
// import { createUser, createResidency } from "../../utils/api"; // Adjust the path based on your project structure
// import { toast } from "react-toastify";

// const AddPropertyModal = ({ opened, setOpened }) => {
//   const [active, setActive] = useState(0);
//   const { user } = useAuth0();

//   const [propertyDetails, setPropertyDetails] = useState({
//     title: "",
//     description: "",
//     price: 0,
//     country: "",
//     city: "",
//     address: "",
//     image: null,
//     facilities: {
//       bedrooms: 0,
//       parkings: 0,
//       bathrooms: 0,
//     },
//     userEmail: user?.email,
//   });

//   const nextStep = () => {
//     setActive((current) => (current < 4 ? current + 1 : current));
//   };

//   const prevStep = () => {
//     setActive((current) => (current > 0 ? current - 1 : current));
//   };

//   const submitProperty = async () => {
//     try {
//       // Assuming you have a way to get the authentication token
//       const token = getAuthToken(); // Implement this function

//       // Call the API function to create a residency
//       const responseData = await createResidency(propertyDetails, token);

//       // Optionally, you can call the createUser API if needed
//       await createUser(user?.email);

//       // Close the modal or do any other actions after successful submission
//       setOpened(false);

//       // Optionally, use responseData for further actions
//       console.log(responseData);
//     } catch (error) {
//       console.error("Error creating residency:", error);
//       // Handle error if needed
//       toast.error("Failed to create residency");
//     }
//   };

//   return (
//     <Modal
//       opened={opened}
//       onClose={() => setOpened(false)}
//       closeOnClickOutside
//       size={"90rem"}
//     >
//       <Container h={"40rem"} w={"100%"}>
//         <Stepper
//           active={active}
//           onStepClick={setActive}
//           breakpoint="sm"
//           allowNextStepsSelect={false}
//         >
//           <Stepper.Step label="Location" description="Address">
//             <AddLocation
//               nextStep={nextStep}
//               propertyDetails={propertyDetails}
//               setPropertyDetails={setPropertyDetails}
//             />
//           </Stepper.Step>
//           <Stepper.Step label="Images" description="Upload ">
//             <UploadImage
//               prevStep={prevStep}
//               nextStep={nextStep}
//               propertyDetails={propertyDetails}
//               setPropertyDetails={setPropertyDetails}
//             />
//           </Stepper.Step>
//           <Stepper.Step label="Basics" description="Details">
//             <BasicDetails
//               prevStep={prevStep}
//               nextStep={nextStep}
//               propertyDetails={propertyDetails}
//               setPropertyDetails={setPropertyDetails}
//             />
//           </Stepper.Step>
//           <Stepper.Step>
//             <Facilities
//               prevStep={prevStep}
//               propertyDetails={propertyDetails}
//               setPropertyDetails={setPropertyDetails}
//               setOpened={setOpened}
//               setActiveStep={setActive}
//             />
//           </Stepper.Step>
//           <Stepper.Completed>
//             <button onClick={submitProperty}>Submit Property</button>
//           </Stepper.Completed>
//         </Stepper>
//       </Container>
//     </Modal>
//   );
// };

// export default AddPropertyModal;


import { Container, Modal, Stepper } from "@mantine/core";
import React, { useState } from "react";
import AddLocation from "../AddLocation/AddLocation";
import { useAuth0 } from "@auth0/auth0-react";
import UploadImage from "../UploadImage/UploadImage";
import BasicDetails from "../BasicDetails/BasicDetails";
import Facilities from "../Facilities/Facilities";
import { createUser, createResidency } from "../../utils/api"; // Adjust the path based on your project structure
import { toast } from "react-toastify";

const AddPropertyModal = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);
  const { user } = useAuth0();

  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: 0,
    country: "",
    city: "",
    address: "",
    image: null,
    facilities: {
      bedrooms: 0,
      parkings: 0,
      bathrooms: 0,
    },
    userEmail: user?.email,
  });

  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };

  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  const submitProperty = async () => {
    try {
      // Assuming you have a way to get the authentication token
      const token = getAuthToken(); // Implement this function

      // Ensure that user is defined and has an email property
      if (user && user.email) {
        // Update userEmail in propertyDetails
        setPropertyDetails((prevDetails) => ({
          ...prevDetails,
          userEmail: user.email,
        }));

        // Call the API function to create a residency
        const responseData = await createResidency(propertyDetails, token);

        // Call the createUser API with the user's email
        await createUser(user.email);

        // Close the modal or do any other actions after successful submission
        setOpened(false);

        // Optionally, use responseData for further actions
        console.log(responseData);
      } else {
        // Handle the case where user or user.email is undefined
        console.error("User or user email is undefined");
        toast.error("Failed to get user information");
      }
    } catch (error) {
      console.error("Error creating residency:", error);
      // Handle error if needed
      toast.error("Failed to create residency");
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      size={"90rem"}
    >
      <Container h={"40rem"} w={"100%"}>
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="sm"
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="Location" description="Address">
            <AddLocation
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Images" description="Upload ">
            <UploadImage
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Basics" description="Details">
            <BasicDetails
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step>
            <Facilities
              prevStep={prevStep}
              propertyDetails={propertyDetails}
              setPropertyDetails={setPropertyDetails}
              setOpened={setOpened}
              setActiveStep={setActive}
            />
          </Stepper.Step>
          <Stepper.Completed>
            <button onClick={submitProperty}>Submit Property</button>
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddPropertyModal;
