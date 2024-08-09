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
  const assignmentIds = []; // array to store the assignments IDs from assignments group
  // const learnerIds = []; // array to store the learner_id
  // const submittesAssignmentIds = [];

  // initialize a variable to store course info id, and console it
  const courseId = course.id;
  console.log("The course id is: ", courseId);

  // ************************ Assignment Group information ************************

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
  console.log("\nAssignmentGroup assignments ids\n");
  console.log(assignmentIds);

  // ************************ Learner Submission information ************************

  const learnerIds = handleSubmissionsIDs(submissions, "learner_id");
  const submittesAssignmentIds = handleSubmissionsIDs(
    submissions,
    "assignment_id"
  );

  // log out the ids
  console.log("\nLearnerSubmissions learner ids\n");
  console.log(learnerIds);
  console.log("\nLearnerSubmissions assignments ids\n");
  console.log(submittesAssignmentIds);

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

// function to process learnerSubmissions
function handleSubmissionsIDs(submissions, id) {
  const elementIdsObj = {}; // object to store learnerSubmissions object ids
  // loop through the submissions
  submissions.forEach((submission) => {
    // the id will access the desired id
    const idvalue = submission[id];
    // store the id in the object to ensure its not duplicated
    elementIdsObj[idvalue] = true;
  });
  // convert the key of object back to an array
  return Object.keys(elementIdsObj).map(Number);
}

// function to calculate to calculate the average scores
function calculateAvgScores(submissions, assignmentGroup) {
  const learnerScores = {};
  const learnerPoints = {};

  // forEach loop to iterate through each submission
  submissions.forEach(({ learner_id, assignment_id, submission }) => {
    const score = submission.score;

    // initialize the learner's score and points if not already done
    if (!learnerScores[learner_id]) {
      learnerScores[learner_id] = 0;
      learnerPoints[learner_id] = 0;
    }

    // calculate the total score
    learnerScores[learner_id] += score;

    // Find the corresponding assignment to get points_possible
    // get the Points_possible using a for loop
    let pointsPossible = 0; // Initialize pointsPossible
    for (let i = 0; i < assignmentGroup.assignments.length; i++) {
      if (assignmentGroup.assignments[i].id === assignment_id) {
        pointsPossible = assignmentGroup.assignments[i].points_possible;
        break; // Exit the loop once the assignment is found
      }
    }

    // Add the points_possible to the learner's total points
    learnerPoints[learner_id] += pointsPossible;
  });

  // Calculate the average scores for each learner
  const averages = {};
  for (const learner_id in learnerScores) {
    const totalScore = learnerScores[learner_id];
    const totalPoints = learnerPoints[learner_id];

    // Calculate average if totalPoints is greater than 0 to avoid division by zero
    averages[learner_id] = totalPoints > 0 ? totalScore / totalPoints : 0;
  }

  return averages;
}
