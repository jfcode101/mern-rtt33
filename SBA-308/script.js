// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  // declare and initialize local function scope variables
  const result = [];
  const avg = [];

  console.log("The course id is: ", course.id);
  console.log("The assignment group for course id is: ", ag.course_id);

  // get to know where my assignments group id are located
  console.log("Assignment group assignments id at index 0: ", ag.assignments[0].id);
  console.log("Assignment group assignments id at index 0: ", ag.assignments[1].id);
  console.log("Assignment group assignments id at index 0: ", ag.assignments[2].id);

  // get to know where my learner submissions assidnment id are located
  console.log("Learner submissions assignments id at index 0: ", submissions[0].assignment_id);
  console.log("Learner submissions assignments id at index 1: ", submissions[1].assignment_id);
  console.log("Learner submissions assignments id at index 2: ", submissions[2].assignment_id);




  // verify that the course exits, if not throw an error
  if (course.id !== ag.course_id) {
    throw `Invalid assignment group: the course id ${course.id} does not match assignment group course id ${ag.course_id}`;
  }

  // try/catch to catch error in case they occur 
  // try {
    
  // } catch (err) {
  //   console.error(err)
  // }

  return result;
}

// here, we would process this data to achieve the desired result.
//  const result = [
//   {
//     id: 125,
//     avg: 0.985, // (47 + 150) / (50 + 150)
//     1: 0.94, // 47 / 50
//     2: 1.0, // 150 / 150
//   },
//   {
//     id: 132,
//     avg: 0.82, // (39 + 125) / (50 + 150)
//     1: 0.78, // 39 / 50
//     2: 0.833, // late: (140 - 15) / 150
//   },
// ];

// return result;

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
