const doctorsData = [
  {
    name: "Dr. Ananya Gupta",
    specialty: "Cardiologist",
    city: "Delhi" ,
    link:"https://media.istockphoto.com/id/1292015214/photo/portrait-female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=ebKJ9M5xL2OJwpTBhIRzyFolm0oB2mRSaSeBV3zUt-I="
  },
  {
    name: "Dr. Vikram Sharma",
    specialty: "Pediatrician",
    city: "Mumbai",
    link:"https://media.istockphoto.com/id/1298800629/photo/portrait-of-confident-male-doctor-looking-at-camera.jpg?s=1024x1024&w=is&k=20&c=YZqLotGgfGkQMmLrsanq56g-z5yWFOhovcGlBz20KPQ="
  },
  {
    name: "Dr. Neha Patel",
    specialty: "Orthopedic Surgeon",
    city: "Bangalore",
    link:"https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.jpg?s=1024x1024&w=is&k=20&c=Sd2kRKsF0x0nd3i6P_j4yDTDxdwjRBt-NGNMuPxxnXY="
  },
  {
    name: "Dr. Arjun Singh",
    specialty: "Dermatologist",
    city: "Chennai",
    link:"https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=1024x1024&w=is&k=20&c=eWLlDOBpK-cQh5EAUwgmfr6FR1o3VWPXVVjVMJt9lVo="
  },
  {
    name: "Dr. Pooja Shah",
    specialty: "Gynecologist",
    city: "Hyderabad",
    link:"https://media.istockphoto.com/id/1200980392/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.jpg?s=1024x1024&w=is&k=20&c=6kfmxf_vkqSjY5Tuq1UJuwm4Bwp1RnFrvYTah2ocbLU="
  },
  {
    name: "Dr. Rahul Kumar",
    specialty: "Ophthalmologist",
    city: "Kolkata",
    link:"https://media.istockphoto.com/id/626121560/photo/young-serious-handsome-bearded-doctor-with-white-coat-and-stethoscope.jpg?s=1024x1024&w=is&k=20&c=w9XfTp98N4Jkn9llMt6SUKjzvPCSwzrd_pAdbTlZ0v4="
  },
  {
    name: "Dr. Nisha Verma",
    specialty: "ENT Specialist",
    city: "Pune",
    link:"https://media.istockphoto.com/id/1203928517/photo/medical-concept-of-asian-beautiful-female-doctor-in-white-coat-with-stethoscope-waist-up.jpg?s=1024x1024&w=is&k=20&c=pmfPc5za-yCOaDpPAIT3cc4xiO-kk1ZoQc9CzaV3Mb8="
  },
  {
    name: "Dr. Sanjay Mishra",
    specialty: "Neurologist",
    city: "Lucknow",
    link:"https://media.istockphoto.com/id/481950293/photo/portrait-of-a-doctor-smiling-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=e-mkv1XmDApc3quc9yyiZro-1BdZ1ZRnmm5aUA70vH4="
  },
  {
    name: "Dr. Ayesha Khan",
    specialty: "Dentist",
    city: "Jaipur",
    link:"https://media.istockphoto.com/id/1367507209/photo/portrait-of-indian-female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=COl_P2gaNiSJjkek2x7vly9-IjkJ_v7qwVQTI8vJE4A="
  },
  {
    name: "Dr. Sameer Desai",
    specialty: "Psychiatrist",
    city: "Ahmedabad",
    link:"https://media.istockphoto.com/id/480696647/photo/doctor.jpg?s=1024x1024&w=is&k=20&c=d8T-gqYpHl2xND-Oshx35REnmf4rtAaKRj5pLKhvMCw="
  },
  {
    name: "Dr. Meera Reddy",
    specialty: "Endocrinologist",
    city: "Nagpur",
    link:"https://media.istockphoto.com/id/1301595548/photo/female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=5TZmRIrv19xzHJG9DINZYPqxyZh6Ae-0utCXG7J0sGE="
  },
  {
    name: "Dr. Rajiv Kapoor",
    specialty: "Urologist",
    city: "Indore",
    link:"https://media.istockphoto.com/id/453092997/photo/handsome-young-doctor.jpg?s=1024x1024&w=is&k=20&c=mAYqBQ7EJQFIn5h-HHLZ4IAyAn89sZvTrjN5OTNUabQ="
  },
  {
    name: "Dr. Kavita Malhotra",
    specialty: "Pulmonologist",
    city: "Bhopal",
    link:"https://media.istockphoto.com/id/671290874/photo/portrait-of-a-female-doctor.jpg?s=1024x1024&w=is&k=20&c=iCS-mx309tZzltN6rKoCyy20F2UFLAYfDD89awBEOqE="
  },
  {
    name: "Dr. Ajay Tiwari",
    specialty: "General Surgeon",
    city: "Patna",
    link:"https://media.istockphoto.com/id/689514338/photo/studio-shot-of-young-bearded-persian-man-doctor-against-gray-background.jpg?s=1024x1024&w=is&k=20&c=vgZGxXPZ6Lgfs7RShcJ4O6CQwlh5scqWLi6radGONvY="
  },
  {
    name: "Dr. Shivani Gupta",
    specialty: "Rheumatologist",
    city: "Chandigarh",
    link:"https://media.istockphoto.com/id/1302674103/photo/doctor-and-patient-are-discussing-at-clinic-and-writting-prescription-medicine-stock-photo.jpg?s=1024x1024&w=is&k=20&c=j2jaff1UvVf3wQ0BzTK67wxbYDu9vj10vQQRDtFPnZw="
  },
  {
    name: "Dr. Sunil Joshi",
    specialty: "Gastroenterologist",
    city: "Kochi",
    link:"https://media.istockphoto.com/id/104936413/photo/young-doctor-with-glasses-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=CrjdMF_5WO4dE-UL-xAAkVhkw4s3xtEZUJee-oJ53Lw="
  },
  {
    name: "Dr. Anand Rajan",
    specialty: "Nephrologist",
    city: "Visakhapatnam",
    link:"https://media.istockphoto.com/id/1212177444/photo/happy-male-doctor-of-indian-ethnicity.jpg?s=1024x1024&w=is&k=20&c=XXBY8kyHL2LPuooU2vPBY9dUMzQ_xMHTSkqBMPiyBIk="
  },
  {
    name: "Dr. Anjali Menon",
    specialty: "Oncologist",
    city: "Thiruvananthapuram",
    link:"https://media.istockphoto.com/id/1254545430/photo/portrait-of-a-smiling-young-female-doctor-of-indian-origin.jpg?s=1024x1024&w=is&k=20&c=E_-Fnsout8e5ZMQIM11Nt69RfUXSpItYd8pFF12hmEk="
  },
  {
    name: "Dr. Siddharth Das",
    specialty: "Allergist",
    city: "Guwahati",
    link:"https://media.istockphoto.com/id/1498561606/photo/professional-young-doctor-dark-complexion-serious.jpg?s=1024x1024&w=is&k=20&c=P5D9j7VI18U13IdnnaogBD2Z7hIt5hEHhZddjXCyumk="
  },
  {
    name: "Dr. Pankaj Verma",
    specialty: "Hematologist",
    city: "Bhubaneswar",
    link:"https://media.istockphoto.com/id/697239554/photo/studio-shot-of-young-handsome-muscular-indian-man-doctor-against-gray-background.jpg?s=1024x1024&w=is&k=20&c=-qFtnRDfaVtmdsKAxnDW78UFeS4otwuuAnDVQsc-26c="
  }
];


 const city_data = [
  "Delhi",
  "Mumbai",
  "Kolkata",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Patna",
  "Chandigarh",
  "Kochi",
  "Visakhapatnam",
  "Thiruvananthapuram",
  "Guwahati"
]

export { doctorsData, city_data };