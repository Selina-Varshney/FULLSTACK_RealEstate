// import React, { useContext, useState } from "react";
// import { Modal, Button } from "@mantine/core";
// import { DatePicker } from "@mantine/dates";
// import { useMutation } from "react-query";
// import UserDetailContext from "../../context/UserDetailContext.js";
// import { bookVisit } from "../../utils/api.js";
// import { toast } from "react-toastify";
// import dayjs from "dayjs";
// const BookingModal = ({ opened, setOpened, email, propertyId }) => {
//   const [value, setValue] = useState(null);
//   const {
//     userDetails: { token },
//     setUserDetails,
//   } = useContext(UserDetailContext);

//   const handleBookingSuccess = () => {
//     toast.success("You have booked your visit", {
//       position: "bottom-right",
//     });
//     setUserDetails((prev) => ({
//       ...prev,
//       bookings: [
//         ...prev.bookings,
//         {
//           id: propertyId,
//           date: dayjs(value).format("DD/MM/YYYY"),
//         },
//       ],
//     }));
//   };

//   const { mutate, isLoading } = useMutation({
//     mutationFn: () => bookVisit(value, propertyId, email, token),
//     onSuccess: () => handleBookingSuccess(),
//     onError: ({ response }) => toast.error(response.data.message),
//     onSettled: () => setOpened(false),
//   });

//   return (
//     <Modal
//       opened={opened}
//       onClose={() => setOpened(false)}
//       title="Select your date of visit"
//       centered
//     >
//       <div className="flexColCenter" style={{gap: "1rem"}}>
//         <DatePicker value={value} onChange={setValue} minDate={new Date()} />
//         <Button disabled={!value || isLoading} onClick={() => mutate()}>
//           Book visit
//         </Button>
//       </div>
//     </Modal>
//   );
// };

// export default BookingModal;

// import React, { useContext, useState } from "react";
// import { Modal, Button } from "@mantine/core";
// import { DatePicker } from "@mantine/dates";
// import { useMutation } from "react-query";
// import UserDetailContext from "../../context/UserDetailContext.js";
// import { bookVisit } from "../../utils/api.js";
// import { toast } from "react-toastify";
// import dayjs from "dayjs";

// const BookingModal = ({ opened, setOpened, email, propertyId }) => {
//   const [value, setValue] = useState(null);
//   const {
//     userDetails: { token, bookings },
//     setUserDetails,
//   } = useContext(UserDetailContext);

//   const handleBookingSuccess = () => {
//     toast.success("You have booked your visit", {
//       position: "bottom-right",
//     });

//     setUserDetails((prev) => ({
//       ...prev,
//       bookings: Array.isArray(prev.bookings)
//         ? [
//             ...prev.bookings,
//             {
//               id: propertyId,
//               date: dayjs(value).format("DD/MM/YYYY"),
//             },
//           ]
//         : [
//             {
//               id: propertyId,
//               date: dayjs(value).format("DD/MM/YYYY"),
//             },
//           ],
//     }));
//   };

//   const { mutate, isLoading } = useMutation({
//     mutationFn: () => bookVisit(value, propertyId, email, token),
//     onSuccess: () => handleBookingSuccess(),
//     onError: ({ response }) => toast.error(response?.data?.message || "Something went wrong"),
//     onSettled: () => setOpened(false),
//   });

//   return (
//     <Modal
//       opened={opened}
//       onClose={() => setOpened(false)}
//       title="Select your date of visit"
//       centered
//     >
//       <div className="flexColCenter" style={{ gap: "1rem" }}>
//         <DatePicker value={value} onChange={setValue} minDate={new Date()} />
//         <Button disabled={!value || isLoading} onClick={() => mutate()}>
//           Book visit
//         </Button>
//       </div>
//     </Modal>
//   );
// };

// export default BookingModal;

import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useMutation } from "react-query";
import UserDetailContext from "../../context/UserDetailContext.js";
import { bookVisit } from "../../utils/api.js";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const BookingModal = ({ opened, setOpened, email, propertyId }) => {
  const [value, setValue] = useState(null);
  const {
    userDetails: { token },
    setUserDetails,
  } = useContext(UserDetailContext);

  const handleBookingSuccess = () => {
    toast.success("You have booked your visit", {
      position: "bottom-right",
    });
    setUserDetails((prev) => ({
      ...prev,
      bookings: [
        ...prev.bookings,
        {
          id: propertyId,
          date: dayjs(value).format("DD/MM/YYYY"),
        },
      ],
    }));
  };

  // const { mutate, isLoading } = useMutation({
  //   mutationFn: () => bookVisit(value, propertyId, email, token),
  //   onSuccess: () => handleBookingSuccess(),
  //   onError: (error) => {
  //     console.error('Error response:', error?.response);
  //     toast.error(error?.response?.data?.message || "Something went wrong");
  //   },
  //   onSettled: () => setOpened(false),
  // });

  // const { mutate, isLoading } = useMutation({
  //   mutationFn: async () => {
  //     try {
  //       const response = await bookVisit(value, propertyId, email, token);
  //       return response.data; // Assuming the successful response contains data property
  //     } catch (error) {
  //       throw error.response.data; // Throw the error response data for better handling
  //     }
  //   },
  //   onSuccess: () => handleBookingSuccess(),
  //   onError: (error) => toast.error(error.message),
  //   onSettled: () => setOpened(false),
  // });
  
// Assuming this is your frontend code

// BookingModal.jsx

// const { mutate, isLoading } = useMutation({
//   mutationFn: () => bookVisit(value, propertyId, email, token),
//   onSuccess: ({ data }) => {
//     if (data) {
//       toast.success(data.message, {
//         position: 'bottom-right',
//       });
//     } else {
//       toast.success('Your visit is booked successfully', {
//         position: 'bottom-right',
//       });
//     }

//     // Assuming this is how you handle the booked visits in your user details
//     setUserDetails((prev) => ({
//       ...prev,
//       bookings: [
//         ...prev.bookings,
//         {
//           id: propertyId,
//           date: dayjs(value).format('DD/MM/YYYY'),
//         },
//       ],
//     }));
//   },
//   onError: ({ response }) => toast.error(response?.data?.message || 'Something went wrong'),
//   onSettled: () => setOpened(false),
// });

// Assuming this is your frontend code

// BookingModal.jsx

const { mutate, isLoading } = useMutation({
  mutationFn: () => bookVisit(value, propertyId, email, token),
  onSuccess: (response) => {
    if (response && response.data) {
      toast.success(response.data.message, {
        position: 'bottom-right',
      });
    } else {
      toast.success('Your visit is booked successfully', {
        position: 'bottom-right',
      });
    }

    // Ensure that prev.bookings is an array
    setUserDetails((prev) => ({
      ...prev,
      bookings: Array.isArray(prev.bookings) ? [...prev.bookings, { id: propertyId, date: dayjs(value).format('DD/MM/YYYY') }] : [{ id: propertyId, date: dayjs(value).format('DD/MM/YYYY') }],
    }));
  },
  onError: ({ response }) => toast.error(response?.data?.message || 'Something went wrong'),
  onSettled: () => setOpened(false),
});


  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      centered
    >
      <div className="flexColCenter" style={{ gap: "1rem" }}>
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value || isLoading} onClick={() => mutate()}>
          Book visit
        </Button>
      </div>
    </Modal>
  );
};

export default BookingModal;
