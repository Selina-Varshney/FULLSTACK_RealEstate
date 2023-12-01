import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresd", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/residency/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

// export const createUser = async (email, token) => {
//   try {
//     await api.post(
//       "/user/register",
//       { email }
//       // {
//       //   headers: {
//       //     Authorization: `Bearer ${token}`,
//       //   },
//       // }
//     );
//   } catch (error) {
//     toast.error("Something went wrong, Please try again");
//     throw error;
//   }
// };

export const createUser = async (email) => {
  try {
    await api.post(`/user/register`, { email });
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

// export const bookVisit = async (date, propertyId, email, token) => {
//   try {
//     await api.post(
//       "/user/bookVisit/${propertyId}",
//       {
//         email,
//         id: propertyId,
//         date: dayjs(date).format("DD/MM/YYYY"),
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//   } catch (error) {
//     toast.error("Something went wrong, Please try again");
//     throw error;
//   }
// };

// Assuming this is your backend code

// function to book a visit to resd
// export const bookVisit = asyncHandler(async (req, res) => {
//   const { email, date } = req.body;
//   const { id } = req.params;

//   try {
//     const alreadyBooked = await prisma.user.findUnique({
//       where: { email },
//       select: { bookedVisits: true },
//     });

//     if (alreadyBooked.bookedVisits.some((visit) => visit.id === id)) {
//       res
//         .status(400)
//         .json({ message: "This residency is already booked by you" });
//     } else {
//       // Assuming 'id' is the propertyId and you want to store it
//       await prisma.user.update({
//         where: { email: email },
//         data: {
//           bookedVisits: { push: { id, date } },
//         },
//       });

//       res.json({ message: "Your visit is booked successfully", id }); // Include the id in the response
//     }
//   } catch (err) {
//     throw new Error(err.message);
//   }
// });
// Assuming this is your frontend code

// api.js
export const bookVisit = async (date, propertyId, email, token) => {
  try {
    await api.post(
      `/user/bookVisit/${propertyId}`, // Use propertyId instead of id
      {
        email,
        date: dayjs(date).format("DD/MM/YYYY"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");
    throw error;
  }
};

export const removeBooking = async (id, email, token) => {
  try {
    await api.post(
      `/user/removeBooking/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    toast.error("Something went wrong, Please try again");

    throw error;
  }
};

export const toFav = async (id, email, token) => {
  try {
    await api.post(
      `/user/toFav/${id}`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (e) {
    throw e;
  }
};

export const getAllFav = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/allFav`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data["favResidenciesID"];
  } catch (e) {
    toast.error("Something went wrong while fetching favs");
    throw e;
  }
};

export const getAllBookings = async (email, token) => {
  if (!token) return;
  try {
    const res = await api.post(
      `/user/allBookings`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data["bookedVisits"];
  } catch (error) {
    toast.error("Something went wrong while fetching bookings");
    throw error;
  }
};

export const createResidency = async (data, token) => {
  console.log(data);
  try {
    const res = await api.post(
      `/residency/create`,
      {
        data,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (error) {
    throw error;
  }
};
