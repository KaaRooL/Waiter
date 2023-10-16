// import { authOptions } from 'pages/api/auth/[...nextauth]'
// import { getServerSession } from "next-auth/next"
// import { NextRequest } from 'next/server';

// export default async function handler(req:NextRequest, res) {
//   const session = await getServerSession(req, res, authOptions)

//   if (!session) {
//     res.status(401).json({ message: "You must be logged in." });
//     return;
//   }

//   return res.json({
//     message: 'Success',
//   })
// }

