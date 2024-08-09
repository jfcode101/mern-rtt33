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
  const avg = []; // average
  const assignmentIds = [];

  // initialize a variable to store course info id, and console it
  const courseId = course.id;
  console.log("The course id is: ", courseId);

  // initialize a variable to store assignment group id, and console it
  const agId = ag.id;
  console.log("Assignment group id is: ", agId);

  // initialize a variable to store assignment group course_id, and console it
  const agCourseId = ag.course_id;
  console.log("Assignment group course_id is: ", agCourseId);

  // loop through assignments to get their IDs and store them in the array "assignmentIds"
  ag.assignments.forEach((assignment) => {
    assignmentIds.push(assignment.id);
  });
  // log out all the assignments group id
  console.log(assignmentIds);

  // verify that the course exits, if not throw an error
  if (courseId !== agCourseId) {
    throw `Invalid assignment group: the course id ${courseId} does not match assignment group course id ${agCourseId}`;
  }

  // try/catch to catch error in case they occur
  // try {

  // } catch (err) {
  //   console.error(err);
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
