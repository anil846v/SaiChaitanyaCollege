// Static data for the website
import heroImage from '../assets/Gallery/Campus and Classrooms/image.png';

// Hero slider data
export const heroSliderData = [
  {
    id: 1,
    title: "Welcome to Viswam School",
    subtitle: "Excellence in Education Since 1995",
    imagePath: heroImage
  }
];

// About content
export const aboutContent = "Viswam School is a premier educational institution committed to providing quality education and holistic development of students. With state-of-the-art facilities, experienced faculty, and a nurturing environment, we prepare our students to excel in academics and life. Our mission is to create responsible global citizens who contribute positively to society.";

// Vision, Mission and Motto data
export const visionMissionData = [
  {
    id: 1,
    type: "Vision",
    content: "To be a leading educational institution that nurtures creative, confident, and compassionate individuals who will make a positive impact on the world."
  },
  {
    id: 2,
    type: "Mission",
    content: "To provide excellent education through innovative teaching methods, foster critical thinking, and develop well-rounded personalities in a supportive learning environment."
  },
  {
    id: 3,
    type: "Motto",
    content: "Excellence in Education, Character in Life - Empowering minds to achieve greatness while building strong moral foundations for a better tomorrow."
  }
];

// Features data
export const featuresData = [
  {
    id: 1,
    title: "Experienced Faculty",
    description: "Our dedicated teachers bring years of experience and passion for education to help students achieve their full potential."
  },
  {
    id: 2,
    title: "Modern Infrastructure",
    description: "State-of-the-art classrooms, laboratories, and facilities equipped with the latest technology for enhanced learning."
  },
  {
    id: 3,
    title: "Holistic Development",
    description: "We focus on overall personality development through academics, sports, arts, and extracurricular activities."
  },
  {
    id: 4,
    title: "Individual Attention",
    description: "Small class sizes ensure personalized attention and support for each student's unique learning needs."
  },
  {
    id: 5,
    title: "Safe Environment",
    description: "A secure and nurturing campus environment where students can learn and grow with confidence."
  },
  {
    id: 6,
    title: "Parent Partnership",
    description: "Strong collaboration with parents to support student success and maintain open communication."
  }
];

// Gallery categories with placeholder images
export const galleryData = [
  {
    galleryId: 1,
    title: "Sports Events",
    description: "Exciting moments from our annual sports competitions and athletic achievements",
    imagePath: heroImage,
    photos: [
      { photoUrl: heroImage, caption: "Annual Sports Day Opening Ceremony" },
      { photoUrl: heroImage, caption: "Track and Field Events" },
      { photoUrl: heroImage, caption: "Basketball Championship" },
      { photoUrl: heroImage, caption: "Swimming Competition" },
      { photoUrl: heroImage, caption: "Football Tournament Finals" }
    ]
  },
  {
    galleryId: 2,
    title: "Annual Day",
    description: "Memorable moments from our grand annual day celebrations and performances",
    imagePath: heroImage,
    photos: [
      { photoUrl: heroImage, caption: "Annual Day Chief Guest Arrival" },
      { photoUrl: heroImage, caption: "Cultural Dance Performance" },
      { photoUrl: heroImage, caption: "Prize Distribution Ceremony" },
      { photoUrl: heroImage, caption: "Student Drama Performance" },
      { photoUrl: heroImage, caption: "Musical Concert" }
    ]
  },
  {
    galleryId: 3,
    title: "Cultural Events",
    description: "Vibrant cultural celebrations and traditional festivals at our school",
    imagePath: heroImage,
    photos: [
      { photoUrl: heroImage, caption: "Diwali Celebration" },
      { photoUrl: heroImage, caption: "Independence Day Flag Hoisting" },
      { photoUrl: heroImage, caption: "Traditional Dance Competition" },
      { photoUrl: heroImage, caption: "Art and Craft Exhibition" },
      { photoUrl: heroImage, caption: "Music Festival" }
    ]
  },
  {
    galleryId: 4,
    title: "Science Exhibition",
    description: "Innovative projects and experiments showcased by our brilliant students",
    imagePath: heroImage,
    photos: [
      { photoUrl: heroImage, caption: "Science Fair Opening" },
      { photoUrl: heroImage, caption: "Physics Project Display" },
      { photoUrl: heroImage, caption: "Chemistry Lab Experiments" },
      { photoUrl: heroImage, caption: "Biology Models Exhibition" },
      { photoUrl: heroImage, caption: "Robotics Competition" }
    ]
  }
];

// News data with placeholder images
export const newsData = [
  {
    newsId: 1,
    title: "New Academic Session 2026-27 Begins",
    description: "We are excited to welcome all students back for the new academic year. The session begins with renewed energy and exciting new programs.",
    content: "The new academic session 2024-25 has commenced with great enthusiasm. We have introduced new courses in computer science and environmental studies. Our faculty has been enhanced with experienced teachers who bring innovative teaching methodologies. Students will benefit from updated curriculum aligned with the latest educational standards.",
    category: "Academic",
    imagePath: heroImage,
    createdAt: "2024-04-01T00:00:00Z"
  },
  {
    newsId: 2,
    title: "Annual Sports Day Championship Results",
    description: "Congratulations to all participants and winners of our annual sports day. Outstanding performances were witnessed across all events.",
    content: "Our annual sports day was a grand success with participation from over 500 students. The Red House emerged as the overall champion, followed by Blue House and Green House. Special recognition goes to our athletes who broke previous records in track and field events. The event showcased the sporting spirit and teamwork of our students.",
    category: "Sports",
    imagePath: heroImage,
    createdAt: "2024-03-15T00:00:00Z"
  },
  {
    newsId: 3,
    title: "Science Fair 2024 - Innovation at Its Best",
    description: "Students showcased remarkable scientific projects and innovations at our annual science fair, demonstrating creativity and scientific thinking.",
    content: "The Science Fair 2024 witnessed exceptional projects from students across all grades. From renewable energy solutions to AI-based applications, our students demonstrated remarkable innovation. The winning projects will represent our school at the district level competition. We are proud of our young scientists and their dedication to learning.",
    category: "Academic",
    imagePath: heroImage,
    createdAt: "2024-02-28T00:00:00Z"
  },
  {
    newsId: 4,
    title: "Cultural Festival Celebrates Diversity",
    description: "Our annual cultural festival brought together students from different backgrounds to celebrate the rich diversity of our school community.",
    content: "The cultural festival was a beautiful celebration of diversity and unity. Students performed traditional dances, songs, and plays representing various cultures. The event promoted cultural understanding and appreciation among our school community. Food stalls featuring cuisines from different regions added to the festive atmosphere.",
    category: "Cultural",
    imagePath: heroImage,
    createdAt: "2024-01-20T00:00:00Z"
  }
];

// Announcements data
export const announcementsData = [
  {
    id: 1,
    type: 'URGENT',
    title: 'Admission Process 2025-26 Started',
    content: 'Online applications are now open for Intermediate First Year admissions. Last date for submission is March 15, 2025. Required documents: SSC marks memo, TC, caste certificate, income certificate, and passport size photos.',
    createdBy: 'Admissions Office',
    createdAt: '2025-01-15T00:00:00Z',
    priority: 'high'
  },
  {
    id: 2,
    type: 'EXAM',
    title: 'Mid-Term Examination Schedule',
    content: 'Mid-term examinations for all streams (MPC, BiPC, CEC, HEC, MEC) will commence from February 10, 2025. Time table is available on notice board and college website. Students must carry hall tickets and ID cards.',
    createdBy: 'Examination Cell',
    createdAt: '2025-01-12T00:00:00Z',
    priority: 'medium'
  },
  {
    id: 3,
    type: 'EVENT',
    title: 'Annual Science Exhibition 2025',
    content: 'Students are invited to participate in the Annual Science Exhibition. Registration deadline: January 25, 2025. Prizes worth ₹50,000 for winners. Projects should be related to Physics, Chemistry, Biology, or Mathematics.',
    createdBy: 'Science Department',
    createdAt: '2025-01-10T00:00:00Z',
    priority: 'medium'
  },
  {
    id: 4,
    type: 'ACADEMIC',
    title: 'Special Coaching Classes for NEET/JEE',
    content: 'Additional coaching sessions for NEET and JEE preparation starting from January 20, 2025. Limited seats available. Classes will be conducted on weekends. Contact office for registration and fee details.',
    createdBy: 'Academic Coordinator',
    createdAt: '2025-01-08T00:00:00Z',
    priority: 'medium'
  },
  {
    id: 5,
    type: 'HOLIDAY',
    title: 'Republic Day Celebration',
    content: 'College will remain closed on January 26, 2025 for Republic Day. Flag hoisting ceremony at 9:00 AM followed by cultural programs. All students and staff are cordially invited to attend.',
    createdBy: 'Principal',
    createdAt: '2025-01-05T00:00:00Z',
    priority: 'low'
  },
  {
    id: 6,
    type: 'FEE',
    title: 'Fee Payment Reminder - Second Installment',
    content: 'Second installment fee payment due date is January 31, 2025. Late fee of ₹500 will be charged after the due date. Payment can be made online through college portal or at college office during working hours.',
    createdBy: 'Accounts Department',
    createdAt: '2025-01-03T00:00:00Z',
    priority: 'high'
  },
  {
    id: 7,
    type: 'ACADEMIC',
    title: 'Internal Assessment Test Schedule',
    content: 'Internal Assessment Tests for all subjects will be conducted from February 1-5, 2025. Syllabus coverage: 50% of total curriculum. Students must maintain 75% attendance to be eligible.',
    createdBy: 'Academic Department',
    createdAt: '2025-01-01T00:00:00Z',
    priority: 'medium'
  },
  {
    id: 8,
    type: 'EVENT',
    title: 'Inter-College Cultural Fest Registration',
    content: 'Registration open for Inter-College Cultural Fest 2025. Events include dance, music, drama, debate, and quiz competitions. Registration deadline: February 5, 2025. Contact cultural committee for details.',
    createdBy: 'Cultural Committee',
    createdAt: '2024-12-28T00:00:00Z',
    priority: 'medium'
  },
  {
    id: 9,
    type: 'ACADEMIC',
    title: 'Library Extended Hours During Exams',
    content: 'Library will remain open till 8:00 PM during examination period (February 10-28, 2025). Students can utilize additional study hours. ID cards mandatory for entry after regular hours.',
    createdBy: 'Librarian',
    createdAt: '2024-12-25T00:00:00Z',
    priority: 'low'
  },
  {
    id: 10,
    type: 'URGENT',
    title: 'Scholarship Application Deadline Extended',
    content: 'Government scholarship application deadline extended to February 15, 2025. Eligible students must submit applications with required documents. Contact office for assistance with online applications.',
    createdBy: 'Student Welfare',
    createdAt: '2024-12-20T00:00:00Z',
    priority: 'high'
  }
];